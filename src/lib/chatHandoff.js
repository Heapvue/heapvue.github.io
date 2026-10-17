// Lets any part of the page start a conversation in the floating chat (components/chat/FloatingChat.js),
// which lives in the root layout and holds the one conversation for the whole site.

export const HANDOFF_EVENT = 'heapvue:open-chat';

// Opens the floating chat and, if a question is given, asks it there.
// `source` says where the visitor asked from (used only for analytics).
export function openFloatingChat(query = '', source = 'page') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(HANDOFF_EVENT, { detail: { query: String(query || '').trim(), source } }));
}
