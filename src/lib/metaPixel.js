// Thin wrapper around the Meta pixel (initialised in components/MetaPixel.js).
// Never pass personal data (names, emails, phone numbers, chat text) as parameters.

const STANDARD_EVENTS = new Set(['Lead', 'Schedule', 'Contact', 'ViewContent']);

// A fresh eventID per call lets a future Conversions API send be de-duplicated against the pixel.
export function trackMetaEvent(name, params = {}) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  const method = STANDARD_EVENTS.has(name) ? 'track' : 'trackCustom';
  window.fbq(method, name, params, { eventID: crypto.randomUUID() });
}

// Funnel events used for retargeting:
//   BookDemoClick       clicked a "Book a demo / consultation" CTA (intent)
//   ContactFormStart    first interaction with the contact form
//   Lead                contact form / demo request submitted (superset of Schedule)
//   Schedule            explicit "Book a demo / call / appointment" request submitted
//   Contact             "Talk to an expert" link, phone or email link clicked
//   ChatStarted         first message sent in the hero chat
//   CareerApplication   careers-tab submission (kept out of Lead)
