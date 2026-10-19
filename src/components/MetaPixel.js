'use client';

import { useEffect, Suspense } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackMetaEvent } from '@/lib/metaPixel';
import { getStoredUtm } from '@/lib/utm';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1103012972101271';

// Next.js navigates without reloading, so PageView is fired on every route change
// rather than once in the base code.
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const utm = getStoredUtm();
    window.fbq?.('track', 'PageView', utm);
  }, [pathname, searchParams]);

  return null;
}

// One delegated listener covers every CTA, so new "Book a demo" links are tracked without edits.
function ClickTracker() {
  useEffect(() => {
    const onClick = (event) => {
      const el = event.target.closest?.('[data-meta-event], a[href^="/contact"], a[href^="tel:"], a[href^="mailto:"]');
      if (!el) return;
      const href = el.getAttribute('href') || '';
      const label = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60);
      const params = { content_name: label, source_path: window.location.pathname };

      if (el.dataset.metaEvent) {
        trackMetaEvent(el.dataset.metaEvent, params);
      } else if (href.startsWith('tel:') || href.startsWith('mailto:')) {
        trackMetaEvent('Contact', { ...params, contact_method: href.startsWith('tel:') ? 'phone' : 'email' });
      } else if (/book|schedule|demo/i.test(label)) {
        trackMetaEvent('BookDemoClick', params);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

export default function MetaPixel() {
  if (!PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <ClickTracker />
    </>
  );
}
