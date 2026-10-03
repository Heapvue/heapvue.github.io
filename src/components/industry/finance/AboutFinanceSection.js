'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutFinanceSection() {
  return (
    <section className="about-healthcare-wrapper">
      <div className="about-healthcare-container">
        {/* Left Written Content Box */}
        <div className="about-healthcare-content-box">
          <div className="about-healthcare-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">About Finance Solutions</span>
          </div>

          <h2 className="about-healthcare-title">
            Structured & Secure <span className="blue-highlight">Financial Platforms</span>
          </h2>

          <p className="about-healthcare-text">
            Financial services organisations rely heavily on digital systems to manage client relationships, track leads, handle sensitive data, and streamline internal operations. As the volume of data and client interactions increases, the need for structured, secure, and efficient systems becomes critical.
          </p>
          <p className="about-healthcare-text">
            Heapvue helps financial services firms build custom platforms, improve operational workflows, and manage client data more effectively. Our solutions are designed to support accuracy, reliability, and data security while simplifying day-to-day business processes.
          </p>
        </div>

        {/* Right Image Box */}
        <div className="about-healthcare-img-box">
          <Image
            src="/images/con1.png"
            alt="Financial Services Solutions"
            width={570}
            height={510}
            className="about-healthcare-img"
          />
        </div>
      </div>
    </section>
  );
}
