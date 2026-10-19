// Utilities for capturing, persisting, and retrieving UTM parameters.
// Supports standard and extended UTM tracking parameters:
// utm_source, utm_medium, utm_campaign, utm_content, utm_term,
// utm_id, utm_source_platform, utm_creative_format, utm_marketing_tactic

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'utm_source_platform',
  'utm_creative_format',
  'utm_marketing_tactic',
];

const STORAGE_SESSION_KEY = 'heapvue_utm_session';
const STORAGE_LAST_TOUCH_KEY = 'heapvue_utm_last_touch';
const STORAGE_FIRST_TOUCH_KEY = 'heapvue_utm_first_touch';
const COOKIE_NAME = 'heapvue_utm';

/**
 * Extracts UTM parameters from a URLSearchParams object, query string, or current window location.
 */
export function extractUtmParams(searchParamsOrQuery) {
  if (typeof window === 'undefined' && !searchParamsOrQuery) return {};

  let params;
  if (!searchParamsOrQuery) {
    params = new URLSearchParams(window.location.search);
  } else if (typeof searchParamsOrQuery === 'string') {
    params = new URLSearchParams(searchParamsOrQuery.startsWith('?') ? searchParamsOrQuery.slice(1) : searchParamsOrQuery);
  } else if (typeof searchParamsOrQuery.get === 'function') {
    params = searchParamsOrQuery;
  } else {
    return {};
  }

  const utmData = {};
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val && typeof val === 'string' && val.trim()) {
      utmData[key] = val.trim();
    }
  }

  return utmData;
}

/**
 * Sets a client-side cookie with fallback.
 */
function setCookie(name, value, days = 30) {
  if (typeof document === 'undefined') return;
  try {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/; SameSite=Lax${isSecure ? '; Secure' : ''}`;
  } catch (e) {
    // Cookie writing failed (e.g. sandboxed iframe or storage disabled)
  }
}

/**
 * Reads a JSON cookie value.
 */
function getCookie(name) {
  if (typeof document === 'undefined') return null;
  try {
    const match = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)'));
    if (!match) return null;
    return JSON.parse(decodeURIComponent(match[1]));
  } catch (e) {
    return null;
  }
}

/**
 * Persists detected UTM parameters into sessionStorage, localStorage, and cookie.
 * Also preserves first-touch attribution, landing page, and referrer.
 */
export function persistUtmParams(incomingParams) {
  if (typeof window === 'undefined' || !incomingParams) return;

  const validEntries = Object.entries(incomingParams).filter(
    ([key, val]) => UTM_KEYS.includes(key) && typeof val === 'string' && val.trim()
  );

  if (validEntries.length === 0) return;

  const utmData = Object.fromEntries(validEntries);
  const metadata = {
    ...utmData,
    landing_page: window.location.pathname + window.location.search,
    referrer: document.referrer || '',
    timestamp: new Date().toISOString(),
  };

  try {
    // 1. Session storage (for the current visit / browser session)
    window.sessionStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(metadata));

    // 2. Local storage: Last-Touch
    window.localStorage.setItem(STORAGE_LAST_TOUCH_KEY, JSON.stringify(metadata));

    // 3. Local storage: First-Touch (only if not already set)
    if (!window.localStorage.getItem(STORAGE_FIRST_TOUCH_KEY)) {
      window.localStorage.setItem(STORAGE_FIRST_TOUCH_KEY, JSON.stringify(metadata));
    }

    // 4. Cookie (useful for cross-subdomain or server reads)
    setCookie(COOKIE_NAME, utmData, 30);

    // 5. Expose on window for client scripts & debugging
    window.__HEAPVUE_UTM__ = metadata;

    // 6. Dispatch event for any active listeners
    window.dispatchEvent(new CustomEvent('heapvue:utm-updated', { detail: metadata }));
  } catch (err) {
    // Storage access may throw in private mode / strict browser restrictions
  }
}

/**
 * Retrieves the currently active UTM parameters as a key-value object.
 * Checks sessionStorage first, then fallback to last-touch localStorage and cookie.
 */
export function getStoredUtm() {
  if (typeof window === 'undefined') return {};

  try {
    // Try sessionStorage first
    const sessionData = window.sessionStorage.getItem(STORAGE_SESSION_KEY);
    if (sessionData) {
      const parsed = JSON.parse(sessionData);
      return filterUtmKeys(parsed);
    }

    // Fallback to localStorage last touch
    const lastTouchData = window.localStorage.getItem(STORAGE_LAST_TOUCH_KEY);
    if (lastTouchData) {
      const parsed = JSON.parse(lastTouchData);
      return filterUtmKeys(parsed);
    }

    // Fallback to cookie
    const cookieData = getCookie(COOKIE_NAME);
    if (cookieData && typeof cookieData === 'object') {
      return filterUtmKeys(cookieData);
    }
  } catch (e) {
    // fallback to empty
  }

  return {};
}

/**
 * Returns full attribution payload including UTM fields, landing page, referrer, and timestamp.
 */
export function getStoredAttribution() {
  if (typeof window === 'undefined') return {};

  try {
    const sessionData = window.sessionStorage.getItem(STORAGE_SESSION_KEY);
    if (sessionData) return JSON.parse(sessionData);

    const lastTouchData = window.localStorage.getItem(STORAGE_LAST_TOUCH_KEY);
    if (lastTouchData) return JSON.parse(lastTouchData);
  } catch (e) {}

  return getStoredUtm();
}

/**
 * Helper to extract only the 9 UTM keys from an object.
 */
function filterUtmKeys(obj) {
  if (!obj || typeof obj !== 'object') return {};
  const result = {};
  for (const key of UTM_KEYS) {
    if (obj[key]) {
      result[key] = String(obj[key]);
    }
  }
  return result;
}

/**
 * Enriches any object (form data or analytics payload) with the active UTM parameters.
 */
export function enrichWithUtm(payload = {}) {
  const utm = getStoredUtm();
  return {
    ...utm,
    ...payload,
  };
}

/**
 * Appends active UTM parameters to an outbound URL (e.g. to subdomain or external link).
 */
export function appendUtmToUrl(url) {
  if (!url) return url;
  const utm = getStoredUtm();
  const keys = Object.keys(utm);
  if (keys.length === 0) return url;

  try {
    const parsed = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://heapvue.com');
    for (const [k, v] of Object.entries(utm)) {
      if (!parsed.searchParams.has(k)) {
        parsed.searchParams.set(k, v);
      }
    }
    return parsed.toString();
  } catch (e) {
    return url;
  }
}
