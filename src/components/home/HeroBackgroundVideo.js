'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Do not autoplay on mobile screens (< 768px) or if user requested data-saver/reduced-motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection?.saveData;

    if (!isMobile && !prefersReducedMotion && !saveData) {
      video.play().catch(() => {
        // Autoplay policy fallback (keep poster displayed)
      });
    }
  }, []);

  return (
    <div className="hero-bg-container">
      {/* High-priority preload tag hoisted to head by Next.js */}
      <link
        rel="preload"
        href="/images/hero_video_poster.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <video
        ref={videoRef}
        className="hero-bg-video"
        src="/images/gemini_generated_video_29666f92.mp4"
        poster="/images/hero_video_poster.webp"
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="hero-video-overlay"></div>
    </div>
  );
}
