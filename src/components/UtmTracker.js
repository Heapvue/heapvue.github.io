'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  extractUtmParams,
  persistUtmParams,
  getStoredUtm,
  getStoredAttribution,
  appendUtmToUrl,
} from '@/lib/utm';

function UtmTrackerInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Inspect URL search params for any UTM parameters
    const incomingUtms = extractUtmParams(searchParams);
    if (Object.keys(incomingUtms).length > 0) {
      persistUtmParams(incomingUtms);
    }

    // 2. Expose on window for easy browser console inspection / verification
    if (typeof window !== 'undefined') {
      window.__HEAPVUE_UTM__ = getStoredAttribution();
      window.getHeapvueUtm = getStoredUtm;
      window.getHeapvueAttribution = getStoredAttribution;
    }
  }, [searchParams]);

  // Delegated listener to auto-propagate active UTMs to subdomains (e.g. Vuecart.heapvue.com)
  useEffect(() => {
    const handleLinkClick = (e) => {
      const link = e.target.closest?.('a[href*="heapvue.com"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      // Only decorate links that point to other heapvue subdomains
      if (/^https?:\/\/(?!www\.|heapvue\.com)[a-z0-9-]+\.heapvue\.com/i.test(href)) {
        const enriched = appendUtmToUrl(href);
        if (enriched !== href) {
          link.setAttribute('href', enriched);
        }
      }
    };

    document.addEventListener('click', handleLinkClick, { capture: true });
    return () => document.removeEventListener('click', handleLinkClick, { capture: true });
  }, []);

  return null;
}

export default function UtmTracker() {
  return (
    <Suspense fallback={null}>
      <UtmTrackerInner />
    </Suspense>
  );
}
