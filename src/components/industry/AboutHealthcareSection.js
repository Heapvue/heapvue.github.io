'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutHealthcareSection() {
  return (
    <section className="about-healthcare-wrapper">
      <div className="about-healthcare-container">
        {/* Left Written Content Box (541 x 428) */}
        <div className="about-healthcare-content-box">
          {/* Badge Capsule */}
          <div className="about-healthcare-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">About Healthcare Solution</span>
          </div>

          {/* Title */}
          <h2 className="about-healthcare-title">
            Real Business <span className="blue-highlight">Problems</span>. Smart Technology <span className="blue-highlight">Solutions</span>.
          </h2>

          {/* Paragraphs */}
          <p className="about-healthcare-text">
            Healthcare organisations today rely heavily on digital systems to manage patient records, appointments, consultations, and communication. As patient expectations evolve and healthcare services become more digitally connected, hospitals and healthcare providers need reliable systems that support efficient operations while protecting sensitive patient data.
          </p>
          <p className="about-healthcare-text">
            Heapvue helps healthcare organisations build secure digital platforms, modernise legacy systems, and develop patient-facing applications that improve operational efficiency and enhance patient experience. Our solutions are designed to integrate with existing healthcare systems while maintaining strong security and data protection standards.
          </p>
        </div>

        {/* Right Image Box (570 x 510) */}
        <div className="about-healthcare-img-box">
          <Image
            src="/images/induspatient.png"
            alt="About Healthcare Solution"
            width={570}
            height={510}
            className="about-healthcare-img"
          />
        </div>
      </div>
    </section>
  );
}
