'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="about-ai-consulting-wrapper">
      <div className="about-ai-consulting-container">
        {/* Left Content Box */}
        <div className="about-ai-consulting-content">
          <div className="about-ai-consulting-badge">
            <span className="badge-bullet" />
            <span className="badge-text">About Data & Compliance</span>
          </div>

          <h2 className="about-ai-consulting-title">
            Safeguarding Privacy & <span className="blue-italic-text">Regulatory Alignment</span>
          </h2>

          <div className="about-ai-consulting-text-group">
            <p className="about-ai-consulting-text">
              As organisations collect and process increasing volumes of personal and sensitive data, ensuring privacy, security, and regulatory compliance has become a business necessity. Regulations such as the Digital Personal Data Protection (DPDP) Act, General Data Protection Regulation (GDPR), and Health Insurance Portability and Accountability Act (HIPAA) require organisations to implement appropriate technical and organisational safeguards to protect personal information.
            </p>
            <p className="about-ai-consulting-text">
              Heapvue helps organisations design and implement technology solutions that support data privacy, strengthen security, and align with applicable regulatory requirements. We work with businesses to identify risks, implement secure system architectures, and establish processes that promote responsible data management.
            </p>
          </div>
        </div>

        {/* Right Images Box */}
        <div className="about-ai-consulting-images-box">
          <div className="consulting-img-item">
            <Image
              src="/images/con1.png"
              alt="Data Compliance Review"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
          <div className="consulting-img-item">
            <Image
              src="/images/con2.png"
              alt="Cybersecurity and Privacy Standards"
              width={289}
              height={510}
              className="consulting-dual-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
