'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const foundersData = [
  {
    id: 'akhil',
    name: 'Akhil',
    role: 'Founder & Chief Executive Officer',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/akhil.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'aswin',
    name: 'Aswin',
    role: 'Co-Founder & CTO',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/aswin.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'nirmal',
    name: 'Nirmal',
    role: 'Co-Founder & Director IoT',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/nirmal.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'rajiv',
    name: 'Rajiv',
    role: 'Co-Founder & COO',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/rajiv.jpeg',
    linkedin: 'https://linkedin.com',
  },
];

const partnersData = [
  {
    id: 'kurt',
    name: 'Kurt',
    role: 'Strategic Growth Partner',
    location: 'North America',
    description: "Helps organisations across North America leverage HeapVue's solutions to drive digital transformation.",
    image: '/images/kurt.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'shwetha',
    name: 'Shwetha',
    role: 'Strategic Growth Partner',
    location: 'APAC Region',
    description: "Drives strategic partnerships and enterprise technology initiatives across global markets.",
    image: '/images/shwetha.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'libin',
    name: 'Libin',
    role: 'Strategic Growth Partner',
    location: 'EMEA Region',
    description: "Fosters long-term client relationships and expands technological capabilities in strategic sectors.",
    image: '/images/libin.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'james-carter',
    name: 'James Carter',
    role: 'Strategic Growth Partner',
    location: 'North America',
    description: "Helps organisations across the US and Canada leverage HeapVue's solutions to achieve operational excellence.",
    image: '/images/partner.png',
    linkedin: 'https://linkedin.com',
  },
];

export default function OurFoundersSection() {
  return (
    <section className="our-founders-wrapper">
      <div className="our-founders-container">
        {/* Section 1: Our Founders (Commented out) */}
        {/*
        <div className="founders-block">
          <h2 className="founders-section-title">Our Founders</h2>

          <div className="founders-cards-grid">
            {foundersData.map((founder) => (
              <div key={founder.id} className="founder-card">
                <div className="founder-img-wrapper">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={282}
                    height={282}
                    className="founder-img"
                  />
                </div>
                <div className="founder-card-info">
                  <h3 className="founder-name">{founder.name}</h3>
                  <p className="founder-role">{founder.role}</p>
                  <p className="founder-desc">{founder.description}</p>
                  <div className="founder-social-row">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link-icon"
                      aria-label={`${founder.name} LinkedIn Profile`}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Section 2: Our Strategic Partners (Commented out) */}
        {/*
        <div className="founders-block partners-block">
          <h2 className="founders-section-title">Our Strategic Partners</h2>

          <div className="partners-cards-grid">
            {partnersData.map((partner) => (
              <div key={partner.id} className="founder-card partner-card">
                <div className="founder-img-wrapper">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={282}
                    height={282}
                    className="founder-img"
                  />
                </div>
                <div className="founder-card-info">
                  <h3 className="founder-name">{partner.name}</h3>
                  <p className="founder-role">{partner.role}</p>
                  {partner.location && (
                    <div className="partner-location-badge">
                      <FiMapPin size={14} className="location-pin-icon" />
                      <span>{partner.location}</span>
                    </div>
                  )}
                  <p className="founder-desc">{partner.description}</p>
                  <div className="founder-social-row">
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin-link-icon"
                      aria-label={`${partner.name} LinkedIn Profile`}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
