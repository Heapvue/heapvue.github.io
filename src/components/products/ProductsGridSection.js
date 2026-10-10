'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiShoppingCart, 
  FiUsers, 
  FiMessageSquare, 
  FiSettings, 
  FiBookOpen, 
  FiArrowRight, 
  FiExternalLink, 
  FiCheckCircle, 
  FiFileText, 
  FiPlay 
} from 'react-icons/fi';

const products = [
  {
    id: 'vuecart',
    name: 'VueCart',
    category: 'Headless E-Commerce Platform',
    description: 'High-speed, modular commerce platform engineered for modern brands. Fast API-first checkout, multi-currency support, and flexible headless storefronts.',
    pricing: 'Starting at $79/mo · 14-Day Free Trial',
    pilotCustomer: 'Adopted by regional D2C brands & specialty retailers for sub-second catalog speeds.',
    tags: ['E-Commerce', 'Headless API', 'Multi-Currency'],
    link: 'https://vuecart.heapvue.com/in-en',
    docsLink: 'https://vuecart.heapvue.com/in-en',
    iconBg: '#0555FF',
    icon: FiShoppingCart,
    previewImg: '/images/product_vuecart.png',
  },
  {
    id: 'heapsync',
    name: 'HeapSync',
    category: 'Client & Relationship CRM',
    description: 'Unified customer relationship management for modern sales and client servicing teams. Manage deals, automate communication history, and track customer lifecycles.',
    pricing: 'From $29/user/mo · Free Tier for Teams < 5',
    pilotCustomer: 'Used by financial advisory firms and corporate service providers for client lifecycle tracking.',
    tags: ['CRM', 'Pipeline Management', 'Automation'],
    link: 'https://heapsync.heapvue.com/',
    docsLink: 'https://heapsync.heapvue.com/',
    iconBg: '#10B981',
    icon: FiUsers,
    previewImg: '/images/product_heapsync.png',
  },
  {
    id: 'chatpress',
    name: 'ChatPress',
    category: 'AI Knowledge & Conversational Agent',
    description: 'RAG-powered conversational assistant that trains on your knowledge base to resolve visitor inquiries, qualify leads, and provide instant product guidance 24/7.',
    pricing: 'From $49/mo · Includes 5,000 AI interactions',
    pilotCustomer: 'Deployed across e-commerce storefronts and healthcare clinics for instant patient and customer triage.',
    tags: ['Generative AI', 'RAG Chatbot', 'Lead Capture'],
    link: 'https://chatpress.heapvue.com/',
    docsLink: 'https://chatpress.heapvue.com/',
    iconBg: '#8B5CF6',
    icon: FiMessageSquare,
    previewImg: '/images/product_chatpress.png',
  },
  {
    id: 'apptuner',
    name: 'AppTuner',
    category: 'Application Health & DevOps Monitor',
    description: 'Keep your web applications running optimally with automated health checks, uptime alerts, dependency security scanning, and performance telemetry.',
    pricing: 'Starting at $39/mo per cluster · 30-Day Trial',
    pilotCustomer: 'Monitors microservices and high-availability web apps for digital engineering teams.',
    tags: ['DevOps', 'Observability', 'Uptime Alerts'],
    link: 'https://apptuner.dev/',
    docsLink: 'https://apptuner.dev/',
    iconBg: '#F97316',
    icon: FiSettings,
    previewImg: '/images/product_apptuner.png',
  },
  {
    id: 'learnly',
    name: 'Learnly',
    category: 'Modern Learning Management System',
    description: 'Intuitive LMS designed for corporate training, academy courses, and interactive cohort learning. Deliver lessons, track student completion, and issue certificates.',
    pricing: 'Starting at $89/mo · Unlimited Courses',
    pilotCustomer: 'Piloted by executive coaching institutes and technical academies for structured learning delivery.',
    tags: ['LMS', 'Education', 'Assessments'],
    link: 'https://learnly.heapvue.com/', // Production host, removing dev-host link
    docsLink: 'https://learnly.heapvue.com/',
    iconBg: '#4F46E5',
    icon: FiBookOpen,
    previewImg: '/images/product_learnly.png',
  },
];

export default function ProductsGridSection() {
  return (
    <section className="products-grid-wrapper py-5 bg-light">
      <div className="container" style={{ maxWidth: '1240px' }}>
        {/* Header */}
        <div className="text-center mb-5">
          <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
            PROPRIETARY SOFTWARE SUITE
          </span>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.4rem', color: '#0F172A' }}>
            Ready-to-Deploy Software Products
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '720px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Accelerate your operations with our proven software platforms. Deploy off-the-shelf, or collaborate with our engineering team to customize features for your workflow.
          </p>
        </div>

        {/* 5 Product Cards */}
        <div className="d-flex flex-column gap-5">
          {products.map((prod, index) => {
            const IconComponent = prod.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={prod.id}
                id={prod.id}
                className="card border-0 shadow-sm p-4 p-md-5"
                style={{ borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
              >
                <div className={`row g-4 align-items-center ${isReversed ? 'flex-md-row-reverse' : ''}`}>
                  {/* Product Details */}
                  <div className="col-12 col-lg-6">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div 
                        className="rounded-3 p-3 d-flex align-items-center justify-content-center text-white"
                        style={{ backgroundColor: prod.iconBg, width: '52px', height: '52px' }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <span className="text-muted small fw-semibold text-uppercase">{prod.category}</span>
                        <h3 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.8rem' }}>
                          {prod.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-secondary mb-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                      {prod.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {prod.tags.map((tag) => (
                        <span key={tag} className="badge bg-light text-secondary border px-2 py-1" style={{ fontSize: '0.78rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-3 rounded-3 bg-light border mb-4">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <span className="small fw-bold text-dark">Pricing Model:</span>
                        <span className="badge bg-success-subtle text-success small">{prod.pricing}</span>
                      </div>
                      <div className="small text-muted">
                        <strong>Pilot Profile:</strong> {prod.pilotCustomer}
                      </div>
                    </div>

                    <div className="d-flex flex-wrap gap-3">
                      <a 
                        href={prod.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary d-inline-flex align-items-center gap-2 fw-semibold px-4 py-2"
                        style={{ backgroundColor: prod.iconBg, borderColor: prod.iconBg, borderRadius: '8px' }}
                      >
                        Launch Product <FiExternalLink size={15} />
                      </a>
                      <a 
                        href={prod.docsLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-secondary d-inline-flex align-items-center gap-2 px-3 py-2"
                        style={{ borderRadius: '8px' }}
                      >
                        <FiFileText size={15} /> Documentation
                      </a>
                      <Link 
                        href={`/contact?product=${prod.id}`}
                        className="btn btn-outline-primary d-inline-flex align-items-center gap-2 px-3 py-2"
                        style={{ borderRadius: '8px' }}
                      >
                        Request Customisation &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Product Screenshot / Preview */}
                  <div className="col-12 col-lg-6">
                    <div 
                      className="p-3 rounded-4 bg-light border position-relative overflow-hidden shadow-sm"
                      style={{ minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <Image 
                        src={prod.previewImg} 
                        alt={`${prod.name} interface preview`}
                        width={600}
                        height={380}
                        className="img-fluid rounded-3 shadow-sm"
                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
