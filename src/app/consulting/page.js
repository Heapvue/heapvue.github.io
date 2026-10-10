import Link from 'next/link';
import '@/components/consulting/Consulting.css';
import FaqSection from '@/components/home/FaqSection';
import { 
  FiTrendingUp, 
  FiCode, 
  FiLock, 
  FiCpu, 
  FiArrowRight, 
  FiCheckCircle, 
  FiCompass, 
  FiShield 
} from 'react-icons/fi';

export const metadata = {
  title: 'Strategic Technology & Advisory Consulting | Heapvue',
  description: 'Heapvue provides senior technology consulting: Digital Transformation Roadmaps, Cloud Architecture Advisory, Data Compliance (DPDP, GDPR, HIPAA), and Enterprise AI Strategy.',
};

const consultingPractices = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    path: '/consulting/digital-transformation',
    icon: FiTrendingUp,
    badge: 'Roadmaps & Strategy',
    desc: 'Align organizational goals with technology execution. We help enterprise leadership formulate actionable roadmaps, modernize business processes, and maximize return on technology investment.',
    focusAreas: [
      'Multi-year digital transformation roadmaps',
      'Operating model & engineering workflow optimization',
      'Legacy risk assessment & modernization prioritization',
      'Technology capability & organizational readiness audit',
    ],
    proofTitle: 'Enterprise Roadmap Alignment',
    proofDesc: 'Formulated a comprehensive 3-year modernization roadmap for a multi-regional logistics enterprise, phasing out siloed systems without disruption.',
  },
  {
    id: 'technology-consulting',
    title: 'Technology & Stack Consulting',
    path: '/consulting/technology-consulting',
    icon: FiCode,
    badge: 'Architecture & Stacks',
    desc: 'Deep technical stack evaluations, cloud architecture advisory, and infrastructure reviews. We guide CTOs and engineering teams in choosing and designing scalable technical foundations.',
    focusAreas: [
      'Tech stack selection & cloud architecture review',
      'Microservices decoupling & API gateway strategy',
      'Codebase quality & technical debt audits',
      'High-availability & cloud cost optimization (AWS/GCP/Azure)',
    ],
    proofTitle: 'Cloud Architecture Redesign',
    proofDesc: 'Evaluated and re-architected a high-traffic SaaS backend, eliminating single points of failure and reducing cloud hosting expenditure by 34%.',
  },
  {
    id: 'data-compliance',
    title: 'Data & Compliance Advisory',
    path: '/consulting/data-compliance',
    icon: FiLock,
    badge: 'DPDP · GDPR · HIPAA',
    desc: 'Comprehensive regulatory data privacy and cybersecurity assessments. We align corporate digital systems with the Digital Personal Data Protection Act (DPDP), GDPR, and HIPAA standards.',
    focusAreas: [
      'DPDP, GDPR & HIPAA data privacy assessments',
      'PII data flow mapping & consent management advisory',
      'Zero-trust security architecture & role-based controls',
      'Security audit prep & vendor vulnerability governance',
    ],
    proofTitle: 'Healthcare Regulatory Alignment',
    proofDesc: 'Conducted end-to-end data flow audits and implemented zero-trust compliance controls for a clinical healthtech platform prior to national audit.',
  },
  {
    id: 'ai-consulting',
    title: 'AI Strategy & Advisory',
    path: '/consulting/ai-consulting',
    icon: FiCpu,
    badge: 'AI Governance & Feasibility',
    desc: 'Strategic AI advisory designed to navigate the generative AI landscape responsibly. We evaluate AI feasibility, establish governance guardrails, and design RAG architectures.',
    focusAreas: [
      'Enterprise AI feasibility & business case analysis',
      'Model selection (Open-Source vs. Proprietary APIs)',
      'Data governance, security & prompt injection safeguards',
      'RAG & vector database architectural advisory',
    ],
    proofTitle: 'Enterprise AI Governance Blueprint',
    proofDesc: 'Designed practical AI adoption guidelines and architectural guardrails for a financial services group assessing generative AI assistants.',
  },
];

const consultingFaqs = [
  {
    id: 1,
    question: 'How does Heapvue’s consulting differ from your engineering solutions?',
    answer: 'Consulting focuses on strategic roadmaps, architectural evaluation, regulatory audits, and technical advisory. Solutions involve hands-on custom software engineering and implementation. Clients frequently engage our consulting team first to define architecture and requirements before commissioning custom builds.',
  },
  {
    id: 2,
    question: 'What engagement structures do you provide for consulting?',
    answer: 'We provide structured diagnostic audits (typically 2-4 weeks), sprint-based advisory engagements, and ongoing Fractional CTO / Principal Architect retainers for leadership teams.',
  },
  {
    id: 3,
    question: 'Are your compliance assessments legal advice?',
    answer: 'Our compliance advisory focuses on technical architecture, infrastructure controls, encryption standards, and data handling workflows required under DPDP, GDPR, and HIPAA. We work alongside your internal or external legal counsel to bridge technical implementation with legal requirements.',
  },
  {
    id: 4,
    question: 'How do you conduct a Technology Stack Audit?',
    answer: 'Our senior architects review repository code quality, cloud infrastructure configurations, API contracts, deployment pipelines, and security controls. We deliver a detailed risk register and actionable remediation matrix.',
  },
];

export default function ConsultingIndexPage() {
  return (
    <div className="consulting-page-container bg-light">
      {/* Hero Section */}
      <section className="consulting-hero-wrapper" style={{ minHeight: '520px', backgroundColor: '#040D21', padding: '80px 20px', color: '#ffffff', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.85rem' }}>
            <span className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#38BDF8' }} />
            <span className="text-light fw-semibold">Executive &amp; Technical Advisory</span>
          </div>

          <h1 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.2 }}>
            Strategic Technology &amp; <span style={{ color: '#38BDF8' }}>Architecture Advisory</span>
          </h1>

          <p className="text-light opacity-90 mx-auto mb-4" style={{ maxWidth: '740px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We bridge executive business goals with engineering execution. We evaluate architecture, formulate transformation roadmaps, govern AI adoption, and secure regulatory data compliance.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-primary px-4 py-3 fw-semibold shadow-sm" style={{ backgroundColor: '#0555FF', borderRadius: '8px' }}>
              Schedule Advisory Discovery <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Practices Grid */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold text-primary" style={{ backgroundColor: '#EFF6FF', fontSize: '0.85rem' }}>
              Our Advisory Practices
            </span>
            <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0F172A' }}>
              Four Targeted Consulting Practices
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
              Distinct advisory disciplines designed to provide clear answers, reduce technical risk, and ensure sustainable scale.
            </p>
          </div>

          <div className="row g-4">
            {consultingPractices.map((practice) => {
              const IconComponent = practice.icon;
              return (
                <div key={practice.id} id={practice.id} className="col-12 col-lg-6">
                  <div 
                    className="card h-100 border-0 shadow-sm p-4 p-md-5 d-flex flex-column justify-content-between"
                    style={{ 
                      borderRadius: '16px', 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div 
                          className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: '#EFF6FF', color: '#0555FF', width: '56px', height: '56px' }}
                        >
                          <IconComponent size={26} />
                        </div>
                        <span 
                          className="badge rounded-pill fw-medium text-secondary"
                          style={{ backgroundColor: '#F1F5F9', fontSize: '0.75rem', padding: '6px 12px' }}
                        >
                          {practice.badge}
                        </span>
                      </div>

                      <h3 className="fw-bold mb-3" style={{ fontSize: '1.45rem', color: '#0F172A' }}>
                        {practice.title}
                      </h3>

                      <p className="text-muted mb-4" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                        {practice.desc}
                      </p>

                      <div className="mb-4">
                        <span className="d-block text-dark fw-bold small mb-2 text-uppercase" style={{ letterSpacing: '0.04em' }}>
                          Advisory Focus:
                        </span>
                        <ul className="list-unstyled mb-0">
                          {practice.focusAreas.map((item, idx) => (
                            <li key={idx} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: '0.88rem', color: '#475569' }}>
                              <FiCheckCircle size={15} className="text-primary mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Distinct Single Proof Block per Practice */}
                      <div className="p-3 rounded-3 mb-4" style={{ backgroundColor: '#F8FAFC', borderLeft: '4px solid #0555FF' }}>
                        <span className="d-block fw-bold text-dark small mb-1">
                          Proof Case: {practice.proofTitle}
                        </span>
                        <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                          {practice.proofDesc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-top d-flex align-items-center justify-content-between">
                      <Link 
                        href={practice.path}
                        className="btn btn-outline-primary d-inline-flex align-items-center gap-2 fw-semibold btn-sm"
                        style={{ borderRadius: '6px' }}
                      >
                        Deep Dive Practice <FiArrowRight size={14} />
                      </Link>

                      <Link 
                        href="/contact"
                        className="text-muted small text-decoration-none fw-medium"
                      >
                        Enquire About Advisory &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory Principles */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-5">
              <span className="text-primary fw-bold small text-uppercase">Our Engagement Philosophy</span>
              <h3 className="fw-bold text-dark mt-2 mb-3" style={{ fontSize: '1.8rem' }}>
                Practitioner-Led Advisory. Zero Fluff.
              </h3>
              <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                We do not sell theoretical slide decks. Our advisors are active software architects and engineers who understand the practical realities of production codebases, deployment pipelines, and compliance audits.
              </p>
            </div>
            <div className="col-12 col-md-7">
              <div className="row g-3">
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light border">
                    <FiCompass className="text-primary mb-2" size={24} />
                    <h6 className="fw-bold mb-1">Actionable Blueprints</h6>
                    <small className="text-muted">Direct architecture recommendations ready for developer execution.</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-3 bg-light border">
                    <FiShield className="text-success mb-2" size={24} />
                    <h6 className="fw-bold mb-1">Regulatory Rigor</h6>
                    <small className="text-muted">Practical controls mapping to DPDP, GDPR, and HIPAA specifications.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting FAQ */}
      <FaqSection customFaqs={consultingFaqs} />
    </div>
  );
}
