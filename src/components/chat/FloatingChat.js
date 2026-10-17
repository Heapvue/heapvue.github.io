'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { createChatpressConversation } from '@/lib/chatpress';
import { trackMetaEvent } from '@/lib/metaPixel';
import PlumAvatar from './PlumAvatar';
import {
  FiArrowRight,
  FiCheck,
  FiCloud,
  FiCopy,
  FiCpu,
  FiMessageCircle,
  FiPlus,
  FiShoppingCart,
  FiSquare,
  FiUsers,
  FiX
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import './FloatingChat.css';

// Short labels for the chips, full questions for the assistant (bare labels retrieve poorly).
const QUICK_PROMPTS = [
  { label: 'Vuecart e-commerce', icon: FiShoppingCart, query: 'What is Vuecart and how can it power our online store?' },
  { label: 'Heapsync CRM', icon: FiUsers, query: 'What can Heapsync CRM do for our sales team?' },
  { label: 'Custom AI agents', icon: FiCpu, query: 'Can Heapvue build custom AI agents to automate our business workflows?' },
  { label: 'Cloud modernization', icon: FiCloud, query: 'How can Heapvue help us modernize and scale our cloud infrastructure?' }
];

const TEASER_KEY = 'heapvue-floating-chat-teaser-seen';

// Camera distance for the engine: smaller zooms in. The header and answer avatars share one framing
// (so a snapshot of one can stand in for the other); the launcher floats the whole character.
const AVATAR_DISTANCE = 7;
const LAUNCHER_DISTANCE = 8;

const GREETING = 'Hi there! How can I help you today?';

function safeSession(action, value) {
  try {
    if (action === 'get') return window.sessionStorage.getItem(TEASER_KEY);
    window.sessionStorage.setItem(TEASER_KEY, value);
  } catch {
    // Storage can be blocked (private mode); the teaser then simply shows once per page load.
  }
  return null;
}

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [activeAnswerId, setActiveAnswerId] = useState(null);
  const [chatError, setChatError] = useState('');
  const [suggestedQuestion, setSuggestedQuestion] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [avatarsEnabled, setAvatarsEnabled] = useState(false);
  const [plumSnapshot, setPlumSnapshot] = useState('');
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const transcriptRef = useRef(null);
  const autoScrollRef = useRef(true);
  const chatRequestRef = useRef(null);
  const conversationRef = useRef(null);
  const chatTrackedRef = useRef(false);
  const hasConversation = messages.length > 0;
  const isAnswering = activeAnswerId !== null;

  useEffect(() => () => {
    chatRequestRef.current?.abort();
    conversationRef.current?.close();
  }, []);

  // Load the 3D avatar only once the page is idle, and not for people who asked for less motion
  // or less data. Until then (and without WebGL) the sparkles icon stands in.
  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection?.saveData;
    if (reduceMotion || saveData) return undefined;
    const enable = () => setAvatarsEnabled(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enable, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(enable, 2000);
    return () => clearTimeout(id);
  }, []);

  // One still picture of Plum, so older answers do not each need their own WebGL context.
  const captureSnapshot = (avatar) => {
    setTimeout(() => {
      try { setPlumSnapshot((current) => current || avatar.snapshot('image/png')); } catch { /* keep the icon fallback */ }
    }, 900);
  };

  // Plum greets each visitor once per visit, a moment after they arrive. It never returns once it
  // has been shown, dismissed, or the chat has been opened.
  useEffect(() => {
    if (safeSession('get')) return undefined;
    const show = setTimeout(() => setShowTeaser(true), 2500);
    const hide = setTimeout(() => { setShowTeaser(false); safeSession('set', '1'); }, 30000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  // Move focus into the panel on open, and back to the launcher on close (it is hidden
  // while the panel is open on small screens, so this runs after the re-render).
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else if (wasOpenRef.current) launcherRef.current?.focus();
    wasOpenRef.current = open;
  }, [open]);

  useEffect(() => {
    if (autoScrollRef.current && transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [messages, chatError, suggestedQuestion, open]);

  const closePanel = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closePanel();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const openPanel = () => {
    setOpen(true);
    setShowTeaser(false);
    safeSession('set', '1');
  };

  const sendQuery = async (rawQuery) => {
    const query = rawQuery.trim();
    if (!query || chatRequestRef.current) return;
    if (!chatTrackedRef.current) {
      chatTrackedRef.current = true;
      trackMetaEvent('ChatStarted', { source_path: window.location.pathname, chat_surface: 'floating' });
    }
    const request = new AbortController();
    chatRequestRef.current = request;
    const answerId = crypto.randomUUID();
    setActiveAnswerId(answerId);
    setChatError('');
    setSuggestedQuestion('');
    setInputValue('');
    autoScrollRef.current = true;
    setMessages((previous) => [...previous,
      { id: crypto.randomUUID(), role: 'user', text: query },
      { id: answerId, role: 'assistant', text: '' },
    ]);

    try {
      if (!conversationRef.current) conversationRef.current = createChatpressConversation();
      const result = await conversationRef.current.send(query, {
        signal: request.signal,
        onUpdate: (text) => {
          if (!request.signal.aborted) setMessages((previous) => previous.map((message) =>
            message.id === answerId ? { ...message, text } : message));
        },
      });
      if (!request.signal.aborted) {
        setMessages((previous) => previous.map((message) =>
          message.id === answerId ? { ...message, text: result.answer } : message));
        setSuggestedQuestion(result.suggestedQuestion);
      }
    } catch (error) {
      if (!request.signal.aborted) {
        setInputValue((current) => current || query);
        setChatError(error.message || 'Chatpress is unavailable. Please try again.');
        setMessages((previous) => previous.filter((message) => message.id !== answerId || message.text));
      }
    } finally {
      if (!request.signal.aborted) {
        chatRequestRef.current = null;
        setActiveAnswerId(null);
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendQuery(inputValue);
  };

  const handleStop = () => {
    chatRequestRef.current?.abort();
    chatRequestRef.current = null;
    setMessages((previous) => previous.map((message) =>
      message.id === activeAnswerId ? { ...message, stopped: true } : message));
    setActiveAnswerId(null);
    inputRef.current?.focus();
  };

  const handleCopy = async (message) => {
    try {
      await navigator.clipboard.writeText(message.text);
      setCopiedId(message.id);
      setTimeout(() => setCopiedId((current) => (current === message.id ? null : current)), 1600);
    } catch {
      // Clipboard access can be blocked; the answer stays selectable.
    }
  };

  const handleNewConversation = () => {
    chatRequestRef.current?.abort();
    chatRequestRef.current = null;
    conversationRef.current?.close();
    conversationRef.current = null;
    setMessages([]);
    setInputValue('');
    setChatError('');
    setSuggestedQuestion('');
    setActiveAnswerId(null);
    inputRef.current?.focus();
  };

  const lastAssistantId = [...messages].reverse().find((message) => message.role === 'assistant')?.id;

  const sparkles = (iconSize) => <BsStars size={iconSize} />;

  const renderAssistantAvatar = (message) => {
    if (message.id === lastAssistantId) {
      const state = !message.text && !message.stopped ? 'thinking' : message.id === activeAnswerId ? 'talking' : 'idle';
      return (
        <PlumAvatar enabled={avatarsEnabled} size={46} state={state} distance={AVATAR_DISTANCE}
          className="fc-plum--message" fallback={<span className="fc-plum-fallback">{sparkles(14)}</span>} />
      );
    }
    return plumSnapshot
      // eslint-disable-next-line @next/next/no-img-element
      ? <img className="fc-plum fc-plum--message fc-plum-snap" src={plumSnapshot} alt="" width={46} height={46} />
      : <span className="fc-plum fc-plum--message"><span className="fc-plum-fallback">{sparkles(14)}</span></span>;
  };

  return (
    <div className="fc-root">
      {open && (
        <section
          id="floating-chat-panel"
          className="fc-panel"
          role="dialog"
          aria-label="Chat with Heapvue AI"
        >
          <header className="fc-header">
            <div className="fc-title">
              <PlumAvatar enabled={avatarsEnabled} size={60} distance={AVATAR_DISTANCE} onReady={captureSnapshot}
                className="fc-plum--header" fallback={<span className="fc-plum-fallback">{sparkles(18)}</span>} />
              <div>
                <strong>Heapvue AI</strong>
                <small><span className="fc-status-dot" aria-hidden="true" /> Powered by Chatpress</small>
              </div>
            </div>
            <div className="fc-header-actions">
              {hasConversation && (
                <button type="button" onClick={handleNewConversation} aria-label="Start a new conversation" title="New conversation">
                  <FiPlus size={17} />
                </button>
              )}
              <Link href="/contact" data-meta-event="Contact" aria-label="Talk to an expert" title="Talk to an expert" className="fc-expert">
                <FiMessageCircle size={17} />
              </Link>
              <button type="button" onClick={closePanel} aria-label="Close chat" title="Close">
                <FiX size={19} />
              </button>
            </div>
          </header>

          <div
            className="fc-transcript"
            ref={transcriptRef}
            role="region"
            aria-label="Conversation with Heapvue AI"
            tabIndex={0}
            onScroll={(event) => {
              const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
              autoScrollRef.current = scrollHeight - scrollTop - clientHeight < 80;
            }}
          >
            {!hasConversation && (
              <div className="fc-welcome">
                <PlumAvatar enabled={avatarsEnabled} size={132} state="waving" className="fc-plum--welcome"
                  fallback={<span className="fc-plum-fallback fc-plum-fallback--lg">{sparkles(26)}</span>} />
                <h2>Hi, how can we help?</h2>
                <p>Ask about our products, AI and cloud engineering, or how to get started.</p>
                <div className="fc-prompts">
                  {QUICK_PROMPTS.map(({ label, icon: Icon, query }) => (
                    <button key={label} type="button" className="fc-prompt" onClick={() => sendQuery(query)}>
                      <Icon size={15} aria-hidden="true" />
                      {label}
                      <FiArrowRight size={14} aria-hidden="true" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => message.role === 'user' ? (
              <article key={message.id} className="fc-message fc-message--user">
                <span className="visually-hidden">You asked:</span>
                <p>{message.text}</p>
              </article>
            ) : (
              <article key={message.id} className="fc-message fc-message--assistant">
                {renderAssistantAvatar(message)}
                <div className="fc-body">
                  <span className="visually-hidden">Heapvue AI answered:</span>
                  {message.text ? (
                    <div className="fc-answer">
                      <Markdown skipHtml disallowedElements={['img']} components={{
                        a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                      }}>{message.text}</Markdown>
                    </div>
                  ) : !message.stopped && (
                    <div className="fc-thinking" role="status">
                      <span className="fc-dots" aria-hidden="true"><span /><span /><span /></span>
                      Looking through Heapvue&rsquo;s knowledge base…
                    </div>
                  )}
                  {message.stopped && <p className="fc-stopped">Response stopped.</p>}
                  {message.text && message.id !== activeAnswerId && (
                    <button type="button" className="fc-copy" onClick={() => handleCopy(message)}>
                      {copiedId === message.id ? <><FiCheck size={13} /> Copied</> : <><FiCopy size={13} /> Copy</>}
                    </button>
                  )}
                </div>
              </article>
            ))}

            {suggestedQuestion && !isAnswering && (
              <div className="fc-suggested">
                <span>Suggested</span>
                <button type="button" onClick={() => sendQuery(suggestedQuestion)}>
                  {suggestedQuestion} <FiArrowRight size={14} />
                </button>
              </div>
            )}
            {chatError && <p id="floating-chat-error" className="fc-error" role="alert">{chatError}</p>}
          </div>

          <form className="fc-composer" onSubmit={handleSubmit} aria-busy={isAnswering}>
            <input
              ref={inputRef}
              type="text"
              aria-label="Ask Heapvue AI"
              aria-describedby={chatError ? 'floating-chat-error' : undefined}
              maxLength={1000}
              placeholder={hasConversation ? 'Ask a follow-up question…' : 'Ask a question…'}
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
            {isAnswering ? (
              <button key="stop" type="button" className="fc-send fc-send--stop" onClick={handleStop} aria-label="Stop answering" title="Stop answering">
                <FiSquare size={14} fill="currentColor" />
              </button>
            ) : (
              <button key="send" type="submit" className="fc-send" aria-label="Send question" disabled={!inputValue.trim()}>
                <IoSend size={17} />
              </button>
            )}
          </form>
          <p className="fc-note">
            AI answers can be incomplete. For project specifics, <Link href="/contact">talk to our team</Link>.
          </p>
        </section>
      )}

      {showTeaser && !open && (
        <div className="fc-teaser" role="status">
          <button type="button" className="fc-teaser-text" onClick={openPanel}>
            {GREETING}
          </button>
          <button
            type="button"
            className="fc-teaser-close"
            aria-label="Dismiss"
            onClick={() => { setShowTeaser(false); safeSession('set', '1'); }}
          >
            <FiX size={14} />
          </button>
        </div>
      )}

      <button
        ref={launcherRef}
        type="button"
        className={`fc-launcher${open ? ' fc-launcher--open' : ''}`}
        onClick={open ? closePanel : openPanel}
        aria-label={open ? 'Close Heapvue AI chat' : 'Open Heapvue AI chat'}
        aria-expanded={open}
        aria-controls="floating-chat-panel"
      >
        <PlumAvatar enabled={avatarsEnabled} size={140} state={showTeaser ? 'waving' : 'idle'} distance={LAUNCHER_DISTANCE}
          className="fc-plum--launcher" fallback={<span className="fc-plum-fallback">{sparkles(30)}</span>} />
      </button>
    </div>
  );
}
