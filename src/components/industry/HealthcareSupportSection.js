'use client';

import React from 'react';
import Image from 'next/image';

const supportItems = [
  {
    id: 1,
    title: 'Developing patient engagement platforms and mobile applications',
    description:
      'Designing intuitive mobile apps and digital platforms to enhance patient engagement, accessibility, and personalized healthcare experiences.',
    image: '/images/indus7.png',
    alt: 'Developing patient engagement platforms and mobile applications',
  },
  {
    id: 2,
    title: 'Modernising legacy healthcare systems',
    description:
      'Upgrading legacy healthcare systems with scalable, secure, and modern technologies to improve efficiency, performance, and user experience.',
    image: '/images/indus8.png',
    alt: 'Modernising legacy healthcare systems',
  },
  {
    id: 3,
    title: 'Integrating healthcare platforms with other digital systems',
    description:
      'Seamlessly connecting healthcare platforms with external systems to enable unified data flow, interoperability, and improved operational efficiency.',
    image: '/images/indus9.png',
    alt: 'Integrating healthcare platforms with other digital systems',
  },
  {
    id: 4,
    title: 'Strengthening infrastructure security & protecting patient data',
    description:
      'Enhancing infrastructure security with robust protocols to safeguard patient data, ensure compliance, and prevent unauthorized access or breaches.',
    image: '/images/indus10.png',
    alt: 'Strengthening infrastructure security & protecting patient data',
  },
  {
    id: 5,
    title: 'Building scalable digital platforms that support growing healthcare operations',
    description:
      'Designing scalable digital platforms to support expanding healthcare operations, ensuring performance, flexibility, and seamless user experience.',
    image: '/images/indus11.png',
    alt: 'Building scalable digital platforms that support growing healthcare operations',
  },
];

export default function HealthcareSupportSection() {
  return (
    <section className="healthcare-support-wrapper">
      <div className="healthcare-support-container">
        {/* Top Header Block (1201 x 148 Hug) */}
        <div className="support-header-box">
          {/* Left Title Box */}
          <div className="support-header-left">
            <div className="support-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">How We Enable Healthcare</span>
            </div>
            <h2 className="support-main-title">
              How We <span className="blue-italic-text">Support</span>
              <br />
              <span className="blue-italic-text">Healthcare Organisations</span>
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="support-header-right">
            <p className="support-header-desc">
              Heapvue works with healthcare providers, digital health startups, and medical service organisations to build systems that support both operational efficiency and patient experience. Our work in healthcare typically involves:
            </p>
          </div>
        </div>

        {/* Second Box: 5 Row Items (1201 x 1273 Hug) */}
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
