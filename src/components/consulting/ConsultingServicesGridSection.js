'use client';

import React from 'react';
import { 
  FiTarget, 
  FiCpu, 
  FiMessageSquare, 
  FiDatabase, 
  FiHeadphones, 
  FiRefreshCw, 
  FiLayers, 
  FiTrendingUp, 
  FiCheckCircle 
} from 'react-icons/fi';

const consultingServices = [
  {
    id: 1,
    title: 'AI strategy and opportunity assessment',
    description: 'Identify high-value AI opportunities and build a practical roadmap aligned with business goals.',
    bg: '/images/bluebg.png',
    icon: FiTarget,
  },
  {
    id: 2,
    title: 'Generative AI consulting',
    description: 'Design practical generative AI solutions that improve productivity and business outcomes.',
    bg: '/images/greenbg.png',
    icon: FiCpu,
  },
  {
    id: 3,
    title: 'Conversational AI and intelligent chatbots',
    description: 'Build intelligent chatbots that enhance interactions and deliver personalised experiences.',
    bg: '/images/bluebg.png',
    icon: FiMessageSquare,
  },
  {
    id: 4,
    title: 'Retrieval-Augmented Generation (RAG) solutions',
    description: 'Connect AI models with trusted data to deliver accurate and contextual responses.',
    bg: '/images/greenbg.png',
    icon: FiDatabase,
  },
  {
    id: 5,
    title: 'AI-powered customer support and virtual assistants',
    description: 'Enable smarter customer support with faster, personalised, and intelligent assistance.',
    bg: '/images/bluebg.png',
    icon: FiHeadphones,
  },
  {
    id: 6,
    title: 'Workflow automation using AI',
    description: 'Automate repetitive workflows to improve efficiency, productivity, and operational performance.',
    bg: '/images/bluebg.png',
    icon: FiRefreshCw,
  },
  {
    id: 7,
    title: 'AI integration with existing business systems',
    description: 'Integrate AI with existing systems to enhance capabilities & streamline business operations.',
    bg: '/images/bluebg.png',
    icon: FiLayers,
  },
  {
    id: 8,
    title: 'AI product strategy and architecture',
    description: 'Define scalable AI strategies and architectures built for performance and long-term growth.',
    bg: '/images/greenbg.png',
    icon: FiTrendingUp,
  },
  {
    id: 9,
    title: 'Proof of Concept (PoC) development and validation',
    description: 'Validate AI ideas through working prototypes before investing in full-scale implementation.',
    bg: '/images/bluebg.png',
    icon: FiCheckCircle,
  },
];

export default function ConsultingServicesGridSection() {
  return (
    <section className="consulting-grid-wrapper">
      <div className="consulting-grid-container">
        {/* Top Header Box (1200 x 148 Hug) */}
        <div className="consulting-grid-header">
          {/* Left Title Box */}
          <div className="consulting-grid-header-left">
            <div className="consulting-grid-badge">
              <span className="badge-bullet" />
              <span className="badge-text">How We Help</span>
            </div>
            <h2 className="consulting-grid-main-title">
              Our AI Consulting &amp; Advisory Capabilities
            </h2>
          </div>

          {/* Right Description Box */}
          <div className="consulting-grid-header-right">
            <p className="consulting-grid-header-desc">
              Our AI consulting services help organisations explore, plan, and implement AI solutions that address real business challenges. Our expertise includes:
            </p>
          </div>
        </div>

        {/* 9 Blocks Grid with Distinct Icons */}
        <div className="consulting-cards-grid">
          {consultingServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="consulting-service-card"
                style={{ backgroundImage: `url('${service.bg}')` }}
              >
                {/* Top Icon Box */}
                <div className="consulting-card-icon d-flex align-items-center justify-content-center text-primary" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                  <IconComp size={24} />
                </div>

                {/* Bottom Content Box */}
                <div className="consulting-card-body">
                  <h3 className="consulting-card-title">{service.title}</h3>
                  <p className="consulting-card-desc">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Subtext */}
        <p className="consulting-grid-footer-text">
          We combine business understanding with technology expertise to create strategies that are practical, scalable, and aligned with organisational goals.
        </p>
      </div>
    </section>
  );
}
