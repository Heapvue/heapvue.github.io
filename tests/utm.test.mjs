import test, { beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/lib/utm.js', import.meta.url), 'utf8');
const {
  UTM_KEYS,
  extractUtmParams,
  persistUtmParams,
  getStoredUtm,
  getStoredAttribution,
  enrichWithUtm,
  appendUtmToUrl,
} = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);

const mockStorage = () => {
  const store = new Map();
  return {
    getItem: (key) => store.get(key) || null,
    setItem: (key, val) => store.set(key, String(val)),
    removeItem: (key) => store.delete(key),
    clear: () => store.clear(),
  };
};

let sessionStorageMock;
let localStorageMock;

beforeEach(() => {
  sessionStorageMock = mockStorage();
  localStorageMock = mockStorage();

  globalThis.window = {
    sessionStorage: sessionStorageMock,
    localStorage: localStorageMock,
    location: {
      search: '',
      pathname: '/solutions',
      origin: 'https://heapvue.com',
    },
    dispatchEvent: () => true,
  };
  globalThis.document = {
    referrer: 'https://google.com',
    cookie: '',
  };
  globalThis.CustomEvent = class {
    constructor(type, detail) {
      this.type = type;
      this.detail = detail;
    }
  };
});

test('defines all 9 requested UTM parameter keys correctly', () => {
  const expectedKeys = [
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
  assert.deepEqual(UTM_KEYS, expectedKeys);
});

test('extracts all 9 UTM parameters from query string', () => {
  const query =
    '?utm_source=linkedin&utm_medium=cpc&utm_campaign=enterprise_modernization&utm_content=carousel_v2&utm_term=cloud_migration&utm_id=camp_789&utm_source_platform=linkedin_ads&utm_creative_format=sponsored_content&utm_marketing_tactic=retargeting&unrelated_param=123';

  const extracted = extractUtmParams(query);

  assert.equal(extracted.utm_source, 'linkedin');
  assert.equal(extracted.utm_medium, 'cpc');
  assert.equal(extracted.utm_campaign, 'enterprise_modernization');
  assert.equal(extracted.utm_content, 'carousel_v2');
  assert.equal(extracted.utm_term, 'cloud_migration');
  assert.equal(extracted.utm_id, 'camp_789');
  assert.equal(extracted.utm_source_platform, 'linkedin_ads');
  assert.equal(extracted.utm_creative_format, 'sponsored_content');
  assert.equal(extracted.utm_marketing_tactic, 'retargeting');
  assert.equal(extracted.unrelated_param, undefined);
});

test('extracts UTM parameters from URLSearchParams instance', () => {
  const searchParams = new URLSearchParams({
    utm_source: 'google',
    utm_medium: 'search',
    utm_campaign: 'cloud_consulting',
  });

  const extracted = extractUtmParams(searchParams);
  assert.deepEqual(extracted, {
    utm_source: 'google',
    utm_medium: 'search',
    utm_campaign: 'cloud_consulting',
  });
});

test('persists UTM parameters to sessionStorage, localStorage (first and last touch), and cookie', () => {
  const incoming = {
    utm_source: 'twitter',
    utm_medium: 'social',
    utm_campaign: 'ai_launch',
    utm_content: 'banner_a',
    utm_term: 'generative_ai',
    utm_id: '101',
    utm_source_platform: 'x_ads',
    utm_creative_format: 'video',
    utm_marketing_tactic: 'prospecting',
  };

  persistUtmParams(incoming);

  const stored = getStoredUtm();
  assert.deepEqual(stored, incoming);

  const attribution = getStoredAttribution();
  assert.equal(attribution.landing_page, '/solutions');
  assert.equal(attribution.referrer, 'https://google.com');
  assert.ok(attribution.timestamp);

  // Check first-touch vs last-touch
  const secondTouch = {
    utm_source: 'email',
    utm_medium: 'newsletter',
    utm_campaign: 'q4_recap',
  };
  persistUtmParams(secondTouch);

  const lastTouch = JSON.parse(localStorageMock.getItem('heapvue_utm_last_touch'));
  assert.equal(lastTouch.utm_source, 'email');

  const firstTouch = JSON.parse(localStorageMock.getItem('heapvue_utm_first_touch'));
  assert.equal(firstTouch.utm_source, 'twitter');
});

test('enriches arbitrary payloads with active UTM parameters', () => {
  persistUtmParams({
    utm_source: 'meta',
    utm_medium: 'paid_social',
    utm_campaign: 'brand_awareness',
  });

  const payload = {
    fullName: 'Jane Doe',
    email: 'jane@example.com',
  };

  const enriched = enrichWithUtm(payload);
  assert.equal(enriched.fullName, 'Jane Doe');
  assert.equal(enriched.email, 'jane@example.com');
  assert.equal(enriched.utm_source, 'meta');
  assert.equal(enriched.utm_medium, 'paid_social');
  assert.equal(enriched.utm_campaign, 'brand_awareness');
});

test('appends active UTM parameters to outbound URLs', () => {
  persistUtmParams({
    utm_source: 'google',
    utm_medium: 'cpc',
    utm_campaign: 'lead_gen',
  });

  const targetUrl = 'https://vuecart.heapvue.com/in-en';
  const decorated = appendUtmToUrl(targetUrl);

  const parsed = new URL(decorated);
  assert.equal(parsed.searchParams.get('utm_source'), 'google');
  assert.equal(parsed.searchParams.get('utm_medium'), 'cpc');
  assert.equal(parsed.searchParams.get('utm_campaign'), 'lead_gen');
});
