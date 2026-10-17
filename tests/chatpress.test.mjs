import test, { beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/lib/chatpress.js', import.meta.url), 'utf8');
const { createChatpressConversation, cleanChatpressAnswer } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
let sockets;
let authRequests;

beforeEach(() => {
  sockets = [];
  authRequests = [];
  globalThis.window = { localStorage: { getItem: () => null, setItem: () => {} } };
  globalThis.fetch = async (url, options) => {
    authRequests.push({ url, options });
    return { ok: true, json: async () => ({ session_id: 'server-session', auth_token: 'test-token' }) };
  };
  globalThis.WebSocket = class {
    static OPEN = 1;
    constructor(url) {
      this.url = url;
      this.readyState = 0;
      this.sent = [];
      sockets.push(this);
      queueMicrotask(() => { this.readyState = 1; this.onopen?.(); });
    }
    send(data) { this.sent.push(JSON.parse(data)); }
    receive(data) { this.onmessage?.({ data: JSON.stringify(data) }); }
    close() { this.readyState = 3; queueMicrotask(() => this.onclose?.()); }
  };
});

const connected = () => new Promise(resolve => setImmediate(resolve));

test('streams answers inline and keeps the authenticated session for follow-ups', async () => {
  const chat = createChatpressConversation();
  const updates = [];
  const first = chat.send('What do you build?', { onUpdate: text => updates.push(text) });
  await connected();
  assert.equal(new URL(sockets[0].url).searchParams.get('widget-auth-token'), 'test-token');
  assert.deepEqual(sockets[0].sent, [{ input: 'What do you build?' }]);
  sockets[0].receive({ type: 'stream', content: 'We build ' });
  sockets[0].receive({ type: 'stream', content: '**software**.' });
  sockets[0].receive({ type: 'complete', answer: 'We build **software**.', suggested_question: 'What about AI?' });
  assert.deepEqual(await first, { answer: 'We build **software**.', suggestedQuestion: 'What about AI?' });
  assert.equal(updates.at(-1), 'We build **software**.');
  const followup = chat.send('What about AI?');
  await connected();
  assert.equal(sockets.length, 1);
  assert.equal(authRequests.length, 1);
  sockets[0].receive({ answer: 'Yes, we build AI systems.' });
  assert.equal((await followup).answer, 'Yes, we build AI systems.');
  chat.close();
});

test('a dropped connection rejects the request and a retry authenticates again', async () => {
  const chat = createChatpressConversation();
  const first = chat.send('Hello');
  const rejected = assert.rejects(first, /interrupted/);
  await connected();
  sockets[0].close();
  await rejected;
  const second = chat.send('Hello again');
  await connected();
  assert.equal(sockets.length, 2);
  assert.equal(new URL(authRequests[1].url).searchParams.get('session-id'), 'server-session');
  sockets[1].receive({ type: 'stream', chunk: 'Hello!' });
  sockets[1].receive({ type: 'stream', done: true });
  assert.equal((await second).answer, 'Hello!');
  chat.close();
});

test('cancelling a conversation stops its request and closes the socket', async () => {
  const chat = createChatpressConversation();
  const controller = new AbortController();
  const result = chat.send('Hello', { signal: controller.signal });
  const rejected = assert.rejects(result, { name: 'AbortError' });
  await connected();
  controller.abort();
  await rejected;
  assert.equal(sockets[0].readyState, 3);
  chat.close();
});

test('rate limits are actionable and never leave the request pending', async () => {
  const chat = createChatpressConversation();
  const result = chat.send('Hello');
  const rejected = assert.rejects(result, /wait a moment/);
  await connected();
  sockets[0].receive({ type: 'rate_limit', error: 'private provider details' });
  await rejected;
  const retry = chat.send('Retry');
  await connected();
  sockets[0].receive({ type: 'complete', answer: 'Welcome back.' });
  assert.equal((await retry).answer, 'Welcome back.');
  chat.close();
});

test('control markers are hidden, including partial markers during streaming', () => {
  assert.equal(cleanChatpressAnswer('Answer [[SUGGESTED_QUESTION: Ask more?]]'), 'Answer');
  assert.equal(cleanChatpressAnswer('Answer [[PRODUCT_IMAGE: partial'), 'Answer');
});
