'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutRetailSection() {
  return (
    <section className="about-healthcare-wrapper">
      <div className="about-healthcare-container">
        {/* Left Written Content Box */}
        <div className="about-healthcare-content-box">
          <div className="about-healthcare-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">About Retail & E-commerce</span>
          </div>

          <h2 className="about-healthcare-title">
            Reliable Digital Systems for <span className="blue-highlight">Omnichannel Commerce</span>
          </h2>

          <p className="about-healthcare-text">
            Retail and e-commerce businesses today depend on reliable digital systems to manage online sales, inventory, customer interactions, and overall operations. As competition increases and customer expectations evolve, businesses need platforms that are stable, scalable, and easy to manage.
          </p>
          <p className="about-healthcare-text">
            Heapvue helps retail and e-commerce organisations build modern digital storefronts, streamline operations, and create systems that support both online and offline business functions. From custom e-commerce platforms to inventory and workflow management systems, our solutions are designed to improve efficiency and enhance customer experience.
          </p>
        </div>

        {/* Right Image Box */}
        <div className="about-healthcare-img-box">
          <Image
            src="/images/sol4.png"
            alt="Retail & E-commerce Platforms"
            width={570}
            height={510}
            className="about-healthcare-img"
          />
        </div>
      </div>
    </section>
  );
}
