'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MapStackSection() {
  return (
    <section className="map-stack-wrapper">
      <div className="map-stack-container">
        {/* Left Graphic Mark (down.png: 332 x 184) */}
        <div className="map-stack-graphic-left">
          <Image
            src="/images/down.png"
            alt="Heapvue stack map graphic left"
            width={332}
            height={184}
            className="map-stack-img"
            priority
          />
        </div>

        {/* Right Graphic Mark (up.png: 332 x 184) */}
        <div className="map-stack-graphic-right">
          <Image
            src="/images/up.png"
            alt="Heapvue stack map graphic right"
            width={332}
            height={184}
            className="map-stack-img"
            priority
          />
        </div>

        {/* Center Content Box (1200 x 301 container) */}
        <div className="map-stack-content">
          <h2 className="map-stack-title">
            Discover How To Map Heapvue to Your Stack
          </h2>
          <p className="map-stack-subtext">
            Tell us your existing identity stack and we'll walk through deployment best practices, integration timelines, and how our enterprise customers went from pilot to production in weeks.
          </p>
          <Link href="/contact" className="map-stack-btn">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
