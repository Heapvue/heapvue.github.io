'use client';

import React from 'react';
import {
  FiShoppingCart,
  FiBookOpen,
  FiCloud,
  FiSliders,
  FiMessageSquare,
  FiUsers,
  FiCode,
  FiServer,
  FiShield,
  FiActivity
} from 'react-icons/fi';

const platforms = [
  {
    name: 'Vucart',
    docUrl: 'https://vuecart.heapvue.com/in-en',
    icon: FiShoppingCart,
    isExternal: true,
  },
  {
    name: 'Learnly',
    docUrl: 'https://learnly.heapvue.com/',
    icon: FiBookOpen,
    isExternal: true,
  },
  {
    name: 'Heapvue Cloud Services',
    docUrl: '/services',
    icon: FiCloud,
    isExternal: false,
  },
  {
    name: 'Apptuner',
    docUrl: 'https://apptuner.dev/',
    icon: FiSliders,
    isExternal: true,
  },
  {
    name: 'Chatpress',
    docUrl: 'https://chatpress.heapvue.com/',
    icon: FiMessageSquare,
    isExternal: true,
  },
  {
    name: 'Heapsync',
    docUrl: 'https://heapsync.heapvue.com/',
    icon: FiUsers,
    isExternal: true,
  },
  {
    name: 'Custom Software',
    docUrl: '/services',
    icon: FiCode,
    isExternal: false,
  },
  {
    name: 'DevOps & Cloud',
    docUrl: '/services',
    icon: FiServer,
    isExternal: false,
  },
  {
    name: 'Security Engineering',
    docUrl: '/services',
    icon: FiShield,
    isExternal: false,
  },
  {
    name: 'Monitoring & Observability',
    docUrl: '/services',
    icon: FiActivity,
    isExternal: false,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="integrations-section-wrapper py-5">
      <div className="integrations-container">
        <h2 className="integrations-title">
          One Ecosystem. Six Powerful Platforms &amp; Enterprise Services.
        </h2>

        <div className="integrations-grid">
          {platforms.map((item) => (
            <a
              key={item.name}
              href={item.docUrl}
              target={item.isExternal ? '_blank' : '_self'}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              className="integration-box"
            >
              <div className="integration-box-content">
                <item.icon size={22} className="integration-box-icon" />
                <span className="integration-box-name">{item.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
