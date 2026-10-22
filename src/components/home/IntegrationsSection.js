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
    name: 'Vuecart',
    icon: FiShoppingCart,
  },
  {
    name: 'Learnly',
    icon: FiBookOpen,
  },
  {
    name: 'Heapvue Cloud Services',
    icon: FiCloud,
  },
  {
    name: 'Apptuner',
    icon: FiSliders,
  },
  {
    name: 'Chatpress',
    icon: FiMessageSquare,
  },
  {
    name: 'Heapsync',
    icon: FiUsers,
  },
  {
    name: 'Custom Software',
    icon: FiCode,
  },
  {
    name: 'DevOps & Cloud',
    icon: FiServer,
  },
  {
    name: 'Security Engineering',
    icon: FiShield,
  },
  {
    name: 'Monitoring & Observability',
    icon: FiActivity,
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
            <div
              key={item.name}
              className="integration-box"
            >
              <div className="integration-box-content">
                <item.icon size={22} className="integration-box-icon" />
                <span className="integration-box-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
