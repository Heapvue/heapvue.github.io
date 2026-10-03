'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutStartupsSection() {
  return (
    <section className="about-healthcare-wrapper">
      <div className="about-healthcare-container">
        {/* Left Written Content Box */}
        <div className="about-healthcare-content-box">
          <div className="about-healthcare-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">About Startup Solutions</span>
          </div>

          <h2 className="about-healthcare-title">
            Move from Idea to Execution with <span className="blue-highlight">Scalable Engineering</span>
          </h2>

          <p className="about-healthcare-text">
            Startups operate in fast-moving environments where speed, flexibility, and scalability are critical. Building the right technology foundation early can significantly impact how quickly a product evolves and how effectively a business scales.
          </p>
          <p className="about-healthcare-text">
            Heapvue works with startups to design, build, and scale digital products and platforms that align with evolving business needs. From MVP development to system architecture and integrations, we help startups move from idea to execution with reliable and scalable technology.
          </p>
        </div>

        {/* Right Image Box */}
        <div className="about-healthcare-img-box">
          <Image
            src="/images/twoguys.png"
            alt="Startup Engineering & Development"
            width={570}
            height={510}
            className="about-healthcare-img"
          />
        </div>
      </div>
    </section>
  );
}
