'use client';

import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const integrations = [
  {
    name: 'Microsoft Sentinel',
    category: 'Cloud SIEM & Security',
    docUrl: 'https://learn.microsoft.com/en-us/azure/sentinel/',
  },
  {
    name: 'Datadog',
    category: 'Observability & APM',
    docUrl: 'https://docs.datadoghq.com/',
  },
  {
    name: 'Elasticsearch',
    category: 'Search & Analytics',
    docUrl: 'https://www.elastic.co/docs',
  },
  {
    name: 'IBM QRadar',
    category: 'Threat Management',
    docUrl: 'https://www.ibm.com/docs/en/qradar-common',
  },
  {
    name: 'Splunk',
    category: 'Enterprise Observability',
    docUrl: 'https://docs.splunk.com/',
  },
  {
    name: 'Cisco Duo',
    category: 'Zero Trust & MFA',
    docUrl: 'https://duo.com/docs',
  },
  {
    name: 'Okta',
    category: 'Identity & Access (IAM)',
    docUrl: 'https://help.okta.com/',
  },
  {
    name: 'Ping Identity',
    category: 'Federated SSO & Identity',
    docUrl: 'https://docs.pingidentity.com/',
  },
];

export default function IntegrationsSection() {
  return (
    <section className="integrations-section-wrapper py-5">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-4">
          <div className="badge-capsule mb-2">
            <span className="badge-bullet"></span>
            <span className="badge-text">Interoperability</span>
          </div>
          <h2 className="integrations-title mb-2">
            Natively Integrates with Your Enterprise Stack
          </h2>
          <p className="text-muted small mx-auto" style={{ maxWidth: '640px' }}>
            Seamlessly connect your legacy workflows, security infrastructure, and observability tooling with Heapvue platforms and integrations.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {integrations.map((item) => (
            <div key={item.name} className="col-6 col-md-4 col-lg-3">
              <a
                href={item.docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex flex-column justify-content-between p-3 rounded-3 text-decoration-none h-100"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                  color: '#0f172a',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#93c5fd';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(5, 85, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="fw-bold" style={{ fontSize: '0.95rem' }}>{item.name}</span>
                  <FiExternalLink size={14} className="text-muted" />
                </div>
                <span className="text-muted" style={{ fontSize: '0.78rem' }}>{item.category}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
