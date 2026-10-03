'use client';

import React from 'react';
import Image from 'next/image';

const complianceServices = [
  {
    id: 1,
    title: 'DPDP readiness assessment and implementation support',
    description: 'Evaluate DPDP requirements and implement technical privacy controls.',
    bg: '/images/bluebg.png',
  },
  {
    id: 2,
    title: 'GDPR compliance consulting and technical implementation',
    description: 'Implement user consent, data rights, and GDPR technical compliance.',
    bg: '/images/greenbg.png',
  },
  {
    id: 3,
    title: 'HIPAA-aligned technology consulting for healthcare organisations',
    description: 'Build HIPAA-compliant data pipelines and encrypted health record systems.',
    bg: '/images/bluebg.png',
  },
  {
    id: 4,
    title: 'Privacy-by-design system architecture',
    description: 'Embed privacy and encryption standards directly into core software architecture.',
    bg: '/images/greenbg.png',
  },
  {
    id: 5,
    title: 'Data security assessments',
    description: 'Audit data storage, payload transfers, and database permissions for security risks.',
    bg: '/images/bluebg.png',
  },
  {
    id: 6,
    title: 'Identity and access management',
    description: 'Deploy multi-factor authentication, SSO, and role-based access control (RBAC).',
    bg: '/images/bluebg.png',
  },
  {
    id: 7,
    title: 'Secure infrastructure design',
    description: 'Architect perimeter security, network firewalls, and isolated cloud VPCs.',
    bg: '/images/bluebg.png',
  },
  {
    id: 8,
    title: 'Data encryption and secure data transmission',
    description: 'Implement end-to-end encryption at rest and in transit across applications.',
    bg: '/images/greenbg.png',
  },
  {
    id: 9,
    title: 'Compliance documentation & audit support',
    description: 'Conduct vulnerability assessments & support audits alongside legal teams.',
    bg: '/images/bluebg.png',
  },
];

export default function ServicesGridSection() {
  return (
    <section className="consulting-grid-wrapper">
      <div className="consulting-grid-container">
        {/* Top Header Box */}
        <div className="consulting-grid-header">
          <div className="consulting-grid-header-left">
            <div className="consulting-grid-badge">
              <span className="badge-bullet" />
              <span className="badge-text">How We Help</span>
            </div>
            <h2 className="consulting-grid-main-title">
              Data Privacy &
              <br />
              <span className="blue-italic-text">Compliance Expertise.</span>
            </h2>
          </div>

          <div className="consulting-grid-header-right">
            <p className="consulting-grid-header-desc">
              Our data privacy and compliance consulting services help organisations design and implement technology solutions that align with DPDP, GDPR, and HIPAA regulatory frameworks:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="consulting-cards-grid">
          {complianceServices.map((service) => (
            <div
              key={service.id}
              className="consulting-service-card"
              style={{ backgroundImage: `url('${service.bg}')` }}
            >
              <div className="consulting-card-icon">
                <Image
                  src="/images/con3.png"
                  alt="Compliance Icon"
                  width={42}
                  height={42}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className="consulting-card-body">
                <h3 className="consulting-card-title">{service.title}</h3>
                <p className="consulting-card-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Subtext */}
        <p className="consulting-grid-footer-text">
          Our focus is on building technology that supports compliance while enabling organisations to operate efficiently and securely.
        </p>
      </div>
    </section>
  );
}
