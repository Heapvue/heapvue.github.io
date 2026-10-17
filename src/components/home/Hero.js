'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createChatpressConversation } from '@/lib/chatpress';
import { trackMetaEvent } from '@/lib/metaPixel';
import Markdown from 'react-markdown';
import {
  FiArrowRight,
  FiBox,
  FiCpu,
  FiCloud,
  FiShield,
  FiX,
  FiPlus,
  FiSquare,
  FiCopy,
  FiCheck,
  FiShoppingCart,
  FiUsers,
  FiMessageCircle
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

// Short labels for the chips, full questions for the assistant (bare labels retrieve poorly).
const QUICK_PROMPTS = [
  { label: 'Vuecart e-commerce', icon: FiShoppingCart, query: 'What is Vuecart and how can it power our online store?' },
  { label: 'Heapsync CRM', icon: FiUsers, query: 'What can Heapsync CRM do for our sales team?' },
  { label: 'Custom AI agents', icon: FiCpu, query: 'Can Heapvue build custom AI agents to automate our business workflows?' },
  { label: 'Cloud modernization', icon: FiCloud, query: 'How can Heapvue help us modernize and scale our cloud infrastructure?' }
];

const RANDOM_QUESTIONS = [
  'How can AI & LLMs automate our business workflows?',
  'What enterprise features are included in Vuecart?',
  'How do we modernize our legacy systems with Heapvue?',
  'Can you build custom autonomous AI agents for us?',
  'How does Heapsync compare to enterprise CRMs?',
  'How can we scale our cloud infrastructure with DevOps?',
  'Can Heapvue develop a modern mobile app for us?',
  'How do we schedule a technical architecture consultation?',
];

export default function Hero() {
  const [inputValue, setInputValue] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeAnswerId, setActiveAnswerId] = useState(null);
  const [chatError, setChatError] = useState('');
  const [messages, setMessages] = useState([]);
  const [suggestedQuestion, setSuggestedQuestion] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const inputRef = useRef(null);
  const chatRequestRef = useRef(null);
  const conversationRef = useRef(null);
  const transcriptRef = useRef(null);
  const autoScrollRef = useRef(true);
  const chatTrackedRef = useRef(false);
  const hasConversation = messages.length > 0;
  const isAnswering = activeAnswerId !== null;

  useEffect(() => () => {
    chatRequestRef.current?.abort();
    conversationRef.current?.close();
  }, []);

  useEffect(() => {
    if (autoScrollRef.current && transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [messages, chatError, suggestedQuestion]);

  // Typing effect animation loop
  useEffect(() => {
    // When user has typed something, pause typing animation
    if (inputValue || hasConversation) return;

    const currentFullText = RANDOM_QUESTIONS[questionIndex];
    let timeout;

    if (!isDeleting) {
      // Typing mode
      if (typedText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        }, 45);
      } else {
        // Full question completed, pause before erasing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting mode
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length - 1));
        }, 25);
      } else {
        // Erased completely, pick a different random question
        setIsDeleting(false);
        setQuestionIndex((prevIndex) => {
          let nextIndex;
          do {
            nextIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length);
          } while (nextIndex === prevIndex && RANDOM_QUESTIONS.length > 1);
          return nextIndex;
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, questionIndex, inputValue, hasConversation]);

  const sendQuery = async (rawQuery) => {
    const query = rawQuery.trim();
    if (!query || chatRequestRef.current) return;
    if (!chatTrackedRef.current) {
      chatTrackedRef.current = true;
      trackMetaEvent('ChatStarted', { source_path: window.location.pathname });
    }
    if (!hasConversation) window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // On the idle hero, an empty submit asks the question being typed out in the placeholder.
    sendQuery(inputValue.trim() || (hasConversation ? '' : RANDOM_QUESTIONS[questionIndex]));
  };

  const handleStop = () => {
    chatRequestRef.current?.abort();
    chatRequestRef.current = null;
    setMessages((previous) => previous.map((message) =>
      message.id === activeAnswerId ? { ...message, stopped: true } : message));
    setActiveAnswerId(null);
    inputRef.current?.focus();
  };

  const handleClear = () => {
    setInputValue('');
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

  return (
    <div className={`hero-content${hasConversation ? ' hero-content--chatting' : ''}`}>
      {/* Top Section: Headline (kept for screen readers while chatting) */}
      <div className="hero-top-block">
        <h1 className="hero-main-title single-line">Intelligent Technology Solutions</h1>
        <p className="hero-subtitle">
          Ask anything about our products, AI and cloud engineering, and get an instant answer.
        </p>
      </div>

      {/* Center Section: ChatPress Console */}
      <div className="hero-center-block">
        <div className="hero-ai-console-wrapper">
          {hasConversation && (
            <>
              <div className="hero-conversation-header">
                <div className="hero-conversation-title">
                  <span className="hero-chat-avatar" aria-hidden="true"><BsStars size={17} /></span>
                  <div>
                    <strong>Heapvue AI</strong>
                    <small><span className="hero-status-dot" aria-hidden="true" /> Powered by Chatpress</small>
                  </div>
                </div>
                <div className="hero-conversation-actions">
                  <Link href="/contact" className="hero-conversation-expert" data-meta-event="Contact">
                    <FiMessageCircle size={15} /> <span className="hero-action-label">Talk to an expert</span>
                  </Link>
                  <button type="button" onClick={handleNewConversation} aria-label="Start a new conversation" title="New conversation">
                    <FiPlus size={16} /> <span className="hero-action-label">New chat</span>
                  </button>
                </div>
              </div>
              <div
                className="hero-conversation-transcript"
                ref={transcriptRef}
                role="region"
                aria-label="Conversation with Heapvue AI"
                tabIndex={0}
                onScroll={(event) => {
                  const { scrollHeight, scrollTop, clientHeight } = event.currentTarget;
                  autoScrollRef.current = scrollHeight - scrollTop - clientHeight < 80;
                }}
              >
                {messages.map((message) => message.role === 'user' ? (
                  <article key={message.id} className="hero-chat-message hero-chat-message--user">
                    <span className="visually-hidden">You asked:</span>
                    <p>{message.text}</p>
                  </article>
                ) : (
                  <article key={message.id} className="hero-chat-message hero-chat-message--assistant">
                    <span className="hero-chat-avatar" aria-hidden="true"><BsStars size={14} /></span>
                    <div className="hero-chat-body">
                      <span className="visually-hidden">Heapvue AI answered:</span>
                      {message.text ? (
                        <div className="hero-chat-answer">
                          <Markdown skipHtml disallowedElements={['img']} components={{
                            a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
                          }}>{message.text}</Markdown>
                        </div>
                      ) : !message.stopped && (
                        <div className="hero-chat-thinking" role="status">
                          <span className="hero-chat-dots" aria-hidden="true"><span /><span /><span /></span>
                          Looking through Heapvue&rsquo;s knowledge base…
                        </div>
                      )}
                      {message.stopped && <p className="hero-chat-stopped">Response stopped.</p>}
                      {message.text && message.id !== activeAnswerId && (
                        <div className="hero-chat-actions">
                          <button type="button" onClick={() => handleCopy(message)}>
                            {copiedId === message.id ? <><FiCheck size={13} /> Copied</> : <><FiCopy size={13} /> Copy</>}
                          </button>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
                {suggestedQuestion && !isAnswering && (
                  <div className="hero-chat-suggestions">
                    <span className="hero-chat-suggestions-label">Suggested</span>
                    <button type="button" className="hero-chat-followup" onClick={() => sendQuery(suggestedQuestion)}>
                      {suggestedQuestion} <FiArrowRight size={14} />
                    </button>
                  </div>
                )}
                {chatError && <p id="hero-chat-error" className="hero-chat-status" role="alert">{chatError}</p>}
              </div>
            </>
          )}
          <form onSubmit={handleFormSubmit} className="hero-ai-form-row" aria-busy={isAnswering}>
            {/* Pill container with animated moving light beam */}
            <div className="hero-ai-pill-light-box">
              <div className="hero-ai-light-beam" aria-hidden="true"></div>
              <div className="hero-ai-input-rounded">
                <BsStars className="hero-ai-star-icon" size={24} />
                <div className="hero-ai-field-container">
                  <input
                    ref={inputRef}
                    type="text"
                    aria-label="Ask Heapvue AI"
                    aria-describedby={chatError ? 'hero-chat-error' : undefined}
                    maxLength={1000}
                    placeholder={hasConversation ? 'Ask a follow-up question…' : undefined}
                    className="hero-ai-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  {/* Animated typing question: remains visible on focus until user actually types */}
                  {!inputValue && !hasConversation && (
                    <div
                      className="hero-ai-typing-placeholder"
                      onClick={() => inputRef.current?.focus()}
                      aria-hidden="true"
                    >
                      <span className="typing-text">{typedText}</span>
                      <span className="typing-cursor">|</span>
                    </div>
                  )}
                </div>
                {inputValue && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="hero-ai-clear-btn"
                    aria-label="Clear input"
                  >
                    <FiX size={18} />
                  </button>
                )}
                {isAnswering ? (
                  <button
                    key="stop"
                    type="button"
                    className="hero-ai-send-btn hero-ai-send-btn--stop"
                    onClick={handleStop}
                    aria-label="Stop answering"
                    title="Stop answering"
                  >
                    <FiSquare size={15} fill="currentColor" />
                  </button>
                ) : (
                  <button
                    key="send"
                    type="submit"
                    className="hero-ai-send-btn"
                    aria-label="Send question"
                    disabled={hasConversation && !inputValue.trim()}
                  >
                    <IoSend size={20} />
                  </button>
                )}
              </div>
            </div>
          </form>
          {hasConversation && (
            <p className="hero-conversation-note">
              AI answers can be incomplete. For project specifics, <Link href="/contact">talk to our team</Link>.
            </p>
          )}

          {/* Suggestions related to products & services: one click asks the question */}
          {!hasConversation && (
            <div className="hero-ai-chips-container">
              <span className="hero-ai-chips-label">Try asking about</span>
              {QUICK_PROMPTS.map(({ label, icon: Icon, query }) => (
                <button
                  key={label}
                  type="button"
                  className="hero-ai-chip"
                  onClick={() => sendQuery(query)}
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section: 4 Business Offering Cards */}
      <div className="hero-bottom-block">
        <div className="hero-quad-cards-grid">
          {/* Card 1: SaaS Products */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiBox size={20} />
            </div>
            <h3 className="hero-quad-title">
              Vuecart &amp; Heapsync Enterprise Suite
            </h3>
            <p className="hero-quad-desc">
              Deploy specialized business SaaS platforms including headless e-commerce, CRM, and automated LMS.
            </p>
            <Link href="/products" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 2: AI Engineering */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiCpu size={20} />
            </div>
            <h3 className="hero-quad-title">
              Enterprise AI &amp; Autonomous LLM Systems
            </h3>
            <p className="hero-quad-desc">
              Engineer bespoke domain models, multi-agent workflows, and intelligent semantic automation.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 3: Cloud Modernization */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiCloud size={20} />
            </div>
            <h3 className="hero-quad-title">
              Cloud Modernization &amp; DevOps at Scale
            </h3>
            <p className="hero-quad-desc">
              Architect resilient multi-cloud microservices, Kubernetes clusters, and automated CI/CD pipelines.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Card 4: Security & Compliance */}
          <div className="hero-quad-card">
            <div className="hero-quad-icon">
              <FiShield size={20} />
            </div>
            <h3 className="hero-quad-title">
              Zero-Trust Architecture &amp; Data Compliance
            </h3>
            <p className="hero-quad-desc">
              Implement enterprise identity governance, encrypted audit logs, and regulatory compliance protocols.
            </p>
            <Link href="/solutions" className="hero-quad-link">
              <span>Know More</span>
              <FiArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
