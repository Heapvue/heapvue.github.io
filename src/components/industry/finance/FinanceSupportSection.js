'use client';

import React from 'react';
import Image from 'next/image';

const supportItems = [
  {
    id: 1,
    title: 'Developing custom CRM and client management platforms',
    description:
      'Designing tailored CRM platforms that streamline lead tracking, client interactions, proposal generation, and relationship management.',
    image: '/images/indus7.png',
    alt: 'Developing custom CRM and client management platforms',
  },
  {
    id: 2,
    title: 'Streamlining lead tracking and proposal workflows',
    description:
      'Automating proposal creation, document delivery, and lead stage transitions to increase deal velocity and operational clarity.',
    image: '/images/indus8.png',
    alt: 'Streamlining lead tracking and proposal workflows',
  },
  {
    id: 3,
    title: 'Building secure systems for handling sensitive financial data',
    description:
      'Implementing strict access controls, encryption standards, and compliance measures to safeguard sensitive client financial data.',
    image: '/images/indus9.png',
    alt: 'Building secure systems for handling sensitive financial data',
  },
  {
    id: 4,
    title: 'Integrating multiple business tools into a unified system',
    description:
      'Connecting disparate financial software, analytics tools, and communication channels into one cohesive digital workspace.',
    image: '/images/indus10.png',
    alt: 'Integrating multiple business tools into a unified system',
  },
  {
    id: 5,
    title: 'Improving operational visibility and process efficiency',
    description:
      'Creating real-time reporting dashboards and process automated workflows that reduce manual overhead and boost decision-making.',
    image: '/images/indus11.png',
    alt: 'Improving operational visibility and process efficiency',
  },
];

export default function FinanceSupportSection() {
  return (
    <section className="healthcare-support-wrapper">
      <div className="healthcare-support-container">
        <div className="support-header-box">
          <div className="support-header-left">
            <div className="support-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">How We Support</span>
            </div>
            <h2 className="support-main-title">
              How We <span className="blue-italic-text">Support</span>
              <br />
              <span className="blue-italic-text">Financial Services Organisations</span>
            </h2>
          </div>

          <div className="support-header-right">
            <p className="support-header-desc">
              Heapvue works with financial firms, advisory services, and growing organisations to build systems that support both client management and internal operations. Our work typically includes:
            </p>
          </div>
        </div>

        <div className="support-rows-container">
          {supportItems.map((item) => (
            <div key={item.id} className="support-row-item">
              <div className="support-col-title">
                <h3>{item.title}</h3>
              </div>
              <div className="support-col-desc">
                <p>{item.description}</p>
              </div>
              <div className="support-col-image">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={489}
                  height={196}
                  className="support-row-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
