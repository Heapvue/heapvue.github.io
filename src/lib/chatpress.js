// Public credentials supplied by the Chatpress embed configuration.
const API_URL = 'https://rag.heapvue.com';
const API_KEY = 'cp_y2x082BVoc8me6MFOqyXmWZMkQA6nTuJ';
const CHATBOT_ID = '055bec80-ae8c-4471-9994-71bc481f13e7';

function browserId() {
  const key = `heapvue-chatpress-browser:${CHATBOT_ID}`;
  try {
    const saved = window.localStorage.getItem(key);
    if (saved) return saved;
    const id = crypto.randomUUID();
    window.localStorage.setItem(key, id);
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export function cleanChatpressAnswer(value) {
  return String(value || '')
    .replace(/\[\[(?:SUGGESTED_QUESTION|SUGGESTED_ACTION|PRODUCT_IMAGE):[\s\S]*?\]\]/gi, '')
    .replace(/\[\[(?:SUGGESTED_QUESTION|SUGGESTED_ACTION|PRODUCT_IMAGE):[\s\S]*$/gi, '')
    .trim();
}

// Connect directly to the public Chatpress API, without loading widget UI.
export function createChatpressConversation() {
  const visitorId = browserId();
  let sessionId = crypto.randomUUID();
  let socket = null;
  let pending = null;

  function finish(error, result) {
    if (!pending) return;
    const request = pending;
    pending = null;
    clearTimeout(request.timeout);
    request.signal?.removeEventListener('abort', request.abort);
    if (error) request.reject(error);
    else request.resolve(result);
  }

  function receive(event) {
    let data;
    try { data = JSON.parse(event.data); } catch { return; }
    if (data.type === 'ping' || data.type === 'pong') return;
    if (data.session_id) sessionId = data.session_id;
    if (!pending) return;

    if (data.type === 'rate_limit') {
      finish(new Error('You’ve sent several questions. Please wait a moment and try again.'));
    } else if (data.type === 'plan_limit') {
      finish(new Error('The assistant is temporarily unavailable. Please try again later.'));
    } else if (data.type === 'error' || data.error || data.type === 'blocked') {
      const domainError = /domain|origin/i.test(String(data.error || ''));
      finish(new Error(domainError
        ? 'This assistant is not enabled for this website address yet.'
        : 'I couldn’t complete that answer. Please try again.'));
    } else if (data.type === 'stream' && !data.done) {
      pending.answer += data.content || data.chunk || '';
      pending.onUpdate?.(cleanChatpressAnswer(pending.answer));
    } else if (data.type === 'complete' || (data.type === 'stream' && data.done) || typeof data.answer === 'string') {
      const answer = cleanChatpressAnswer(data.answer || pending.answer);
      if (!answer) {
        finish(new Error('No answer came through. Please try your question again.'));
        return;
      }
      finish(null, { answer, suggestedQuestion: String(data.suggested_question || '').trim() });
    }
  }

  async function connect(signal) {
    if (socket?.readyState === WebSocket.OPEN) return;
    const params = new URLSearchParams({
      'chatbot-id': CHATBOT_ID,
      'browser-id': visitorId,
      'session-id': sessionId,
    });
    const response = await fetch(`${API_URL}/widget-auth?${params}`, {
      headers: { 'x-api-key': API_KEY },
      signal: AbortSignal.any([signal, AbortSignal.timeout(20000)].filter(Boolean)),
    });
    if (!response.ok) throw new Error('Unable to connect to the assistant. Please try again.');
    const auth = await response.json();
    if (!auth.session_id || !auth.auth_token) throw new Error('Unable to start a conversation. Please try again.');
    signal?.throwIfAborted();
    sessionId = auth.session_id;
    params.set('session-id', sessionId);
    params.set('widget-auth-token', auth.auth_token);
    params.set('x-api-key', API_KEY);

    await new Promise((resolve, reject) => {
      const current = new WebSocket(`${API_URL.replace(/^http/, 'ws')}/ws/chat?${params}`);
      socket = current;
      const fail = () => {
        cleanup();
        if (socket === current) {
          socket = null;
          finish(new Error('The connection was interrupted. Please try again.'));
        }
        current.close();
        reject(new Error('The connection was interrupted. Please try again.'));
      };
      const abort = () => {
        cleanup();
        if (socket === current) socket = null;
        current.close();
        reject(new DOMException('Conversation cancelled.', 'AbortError'));
      };
      const timeout = setTimeout(fail, 20000);
      const cleanup = () => {
        clearTimeout(timeout);
        signal?.removeEventListener('abort', abort);
      };
      signal?.addEventListener('abort', abort, { once: true });
      current.onopen = () => { cleanup(); resolve(); };
      current.onmessage = (event) => { if (socket === current) receive(event); };
      current.onerror = fail;
      current.onclose = () => {
        cleanup();
        reject(new Error('The connection was interrupted. Please try again.'));
        if (socket === current) {
          socket = null;
          finish(new Error('The connection was interrupted. Please try again.'));
        }
      };
    });
  }

  return {
    async send(question, { signal, onUpdate } = {}) {
      if (pending) throw new Error('Please wait for the current answer.');
      await connect(signal);
      signal?.throwIfAborted();
      return new Promise((resolve, reject) => {
        const abort = () => {
          finish(new DOMException('Conversation cancelled.', 'AbortError'));
          socket?.close();
          socket = null;
        };
        const timeout = setTimeout(() => {
          finish(new Error('The answer is taking too long. Please try again.'));
          socket?.close();
          socket = null;
        }, 90000);
        pending = { resolve, reject, answer: '', onUpdate, timeout, signal, abort };
        signal?.addEventListener('abort', abort, { once: true });
        try { socket.send(JSON.stringify({ input: question })); }
        catch { finish(new Error('Your question could not be sent. Please try again.')); }
      });
    },
    close() {
      finish(new DOMException('Conversation cancelled.', 'AbortError'));
      socket?.close();
      socket = null;
    },
  };
}
