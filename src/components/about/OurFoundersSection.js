'use client';

import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import SectionBadge from '@/components/SectionBadge';

const foundersData = [
  {
    id: 'akhil',
    name: 'Akhil S Kumar',
    role: 'Founder & CEO',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/akhil.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'aswin',
    name: 'K Aswin RAJ',
    role: 'Co-Founder & CTO',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/aswin.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'nirmal',
    name: 'Nirmal EJ',
    role: 'Co-Founder & Director IoT',
    description: 'Visionary leader with a passion for building technology that creates real-world value.',
    image: '/images/nirmal.jpeg',
    linkedin: 'https://linkedin.com',
  },
];

const partnersData = [
  {
    id: 'kurt',
    name: 'Kurt',
    role: 'Strategic Growth Partner',
    location: 'UK',
    description: "Helps organisations across North America leverage HeapVue's solutions to drive digital transformation.",
    image: '/images/kurt.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'shwetha',
    name: 'Shwetha',
    role: 'Strategic Growth Partner',
    location: 'Canada',
    description: "Drives strategic partnerships and enterprise technology initiatives across global markets.",
    image: '/images/shwetha.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'libin',
    name: 'Libin',
    role: 'Strategic Growth Partner',
    location: 'Kerala',
    description: "Fosters long-term client relationships and expands technological capabilities in strategic sectors.",
    image: '/images/libin.jpeg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'rajiv',
    name: 'Rajiv Ambat',
    role: 'Strategic Growth Partner',
    location: 'Kerala',
    description: "Drives enterprise technology initiatives, strategic partnerships, and digital transformation across Kerala.",
    image: '/images/rajiv.jpeg',
    linkedin: 'https://linkedin.com',
  },
];

export default function OurFoundersSection() {
  return (
    <section className="our-founders-wrapper">
      <div className="our-founders-container">
        {/* Section 1: Our Founders */}
        {/* <div className="founders-block">
          <div className="founders-header-box">
            <SectionBadge text="Leadership" className="founders-badge" />
            <h2 className="founders-main-title">
              The Minds Driving Our <span className="founders-blue-highlight">Vision &amp; Innovation</span>
            </h2>
            <p className="founders-subtext">
              Meet the founders, technologists, and innovators leading Heapvue's mission to engineer modern intelligent digital solutions.
            </p>
          </div>

          <div className="founders-cards-grid">
            {foundersData.map((founder) => (
              <div key={founder.id} className="founder-card">
                <div className="founder-img-wrapper">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={320}
                    height={320}
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
                      <FaLinkedinIn size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Section 2: Our Strategic Partners */}
        <div className="founders-block partners-block">
          <div className="founders-header-box">
            <SectionBadge text="Global Network" className="founders-badge" />
            <h2 className="founders-main-title">
              Our Strategic <span className="founders-blue-highlight">Partners</span>
            </h2>
            <p className="founders-subtext">
              Collaborating with strategic partners across key global markets to deliver transformative technology and enterprise scale.
            </p>
          </div>

          <div className="partners-cards-grid">
            {partnersData.map((partner) => (
              <div key={partner.id} className="founder-card partner-card">
                <div className="founder-img-wrapper">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={320}
                    height={320}
                    className="founder-img"
                  />
                </div>
                <div className="founder-card-info">
                  <h3 className="founder-name">{partner.name}</h3>
                  <p className="founder-role">{partner.role}</p>
                  {partner.location && (
                    <div className="partner-location-badge">
                      <span className="location-pin-box">
                        <FiMapPin size={12} className="location-pin-icon" />
                      </span>
                      <span className="location-text">{partner.location}</span>
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
                      <FaLinkedinIn size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
