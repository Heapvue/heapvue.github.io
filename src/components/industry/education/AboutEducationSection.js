'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutEducationSection() {
  return (
    <section className="about-healthcare-wrapper">
      <div className="about-healthcare-container">
        {/* Left Written Content Box */}
        <div className="about-healthcare-content-box">
          <div className="about-healthcare-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">About Education Solutions</span>
          </div>

          <h2 className="about-healthcare-title">
            Flexible & Engaging <span className="blue-highlight">Digital Education Platforms</span>
          </h2>

          <p className="about-healthcare-text">
            Education providers today increasingly rely on digital platforms to manage students, deliver content, and streamline administrative processes. Whether it is online learning platforms, training systems, or specialised education tools, institutions need reliable systems that are easy to manage and scalable.
          </p>
          <p className="about-healthcare-text">
            Heapvue helps education organisations build digital platforms that simplify student management, improve learning delivery, and enhance overall operational efficiency. Our solutions are designed to support both academic workflows and engaging learning experiences.
          </p>
        </div>

        {/* Right Image Box */}
        <div className="about-healthcare-img-box">
          <Image
            src="/images/con2.png"
            alt="Education Digital Platforms"
            width={570}
            height={510}
            className="about-healthcare-img"
          />
        </div>
      </div>
    </section>
  );
}
