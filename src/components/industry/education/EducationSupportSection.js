'use client';

import React from 'react';
import Image from 'next/image';

const supportItems = [
  {
    id: 1,
    title: 'Developing student management and enrolment platforms',
    description:
      'Designing intuitive portals that streamline student registration, course assignments, fee tracking, and profile management.',
    image: '/images/indus7.png',
    alt: 'Developing student management and enrolment platforms',
  },
  {
    id: 2,
    title: 'Building course management and access control systems',
    description:
      'Implementing secure access controls, course module progression tracking, and role-based permissions for educators and students.',
    image: '/images/indus8.png',
    alt: 'Building course management and access control systems',
  },
  {
    id: 3,
    title: 'Creating interactive and engaging learning tools',
    description:
      'Developing multimedia-rich modules, visual training tools, and interactive exercises that make learning accessible and engaging.',
    image: '/images/indus9.png',
    alt: 'Creating interactive and engaging learning tools',
  },
  {
    id: 4,
    title: 'Integrating education platforms with payment and administrative systems',
    description:
      'Connecting LMS platforms with payment processing gateways, ERPs, and communications infrastructure.',
    image: '/images/indus10.png',
    alt: 'Integrating education platforms with payment and administrative systems',
  },
  {
    id: 5,
    title: 'Designing scalable solutions for growing educational organisations',
    description:
      'Building robust cloud infrastructures capable of accommodating rising student enrollment and peak exam traffic.',
    image: '/images/indus11.png',
    alt: 'Designing scalable solutions for growing educational organisations',
  },
];

export default function EducationSupportSection() {
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
              <span className="blue-italic-text">Education Organisations</span>
            </h2>
          </div>

          <div className="support-header-right">
            <p className="support-header-desc">
              Heapvue works with edtech companies, training providers, and educational institutions to build systems that support both administrative efficiency and effective learning delivery. Our work typically includes:
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
