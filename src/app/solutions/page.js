import Link from 'next/link';
import '@/components/solutions/Solutions.css';
import FaqSection from '@/components/home/FaqSection';
import { 
  FiLayers, 
  FiRefreshCw, 
  FiCpu, 
  FiShoppingBag, 
  FiSmartphone, 
  FiShield, 
  FiArrowRight, 
  FiCheckCircle 
} from 'react-icons/fi';

export const metadata = {
  title: 'Engineering & Technology Solutions | Heapvue',
  description: 'Explore Heapvue’s comprehensive engineering solutions: custom platform development, legacy modernization, enterprise AI systems, mobile applications, and zero-trust security.',
};

const solutionsList = [
  {
    id: 'platform-development',
    title: 'Platform Development',
    path: '/solutions/platform-development',
    icon: FiLayers,
    badge: 'Custom Architecture',
    desc: 'Scalable multi-tenant digital platforms, microservices architectures, and robust cloud-native backends engineered for enterprise reliability.',
    capabilities: [
      'Multi-tenant cloud architecture',
      'High-throughput REST & GraphQL APIs',
      'Role-based access & granular permissions',
      'Event-driven data processing pipelines',
    ],
  },
  {
    id: 'legacy-system-modernisation',
    title: 'Legacy System Modernisation',
    path: '/solutions/legacy-system-modernisation',
    icon: FiRefreshCw,
    badge: 'Cloud Transformation',
    desc: 'Transform aging monolithic applications, fragile dependencies, and technical debt into modern, maintainable cloud-ready systems.',
    capabilities: [
      'Monolith-to-microservices decoupling',
      'Database schema migration & replication',
      'Performance refactoring & CI/CD automation',
      'Zero-downtime cutover strategies',
    ],
  },
  {
    id: 'ai-intelligent-automation',
    title: 'AI & Intelligent Automation',
    path: '/solutions/ai-intelligent-automation',
    icon: FiCpu,
    badge: 'Artificial Intelligence',
    desc: 'Domain-specific generative AI workflows, NLP processing, multilingual translation, and predictive automation built into operational systems.',
    capabilities: [
      'Retrieval-Augmented Generation (RAG)',
      'Multilingual voice-to-text processing',
      'Automated data extraction & document analysis',
      'Custom LLM model fine-tuning & orchestration',
    ],
  },
  {
    id: 'ecommerce-digital-experience',
    title: 'E-commerce & Digital Experience',
    path: '/solutions/ecommerce-digital-experience',
    icon: FiShoppingBag,
    badge: 'Digital Commerce',
    desc: 'High-conversion headless commerce platforms, custom storefronts, and seamless omnichannel customer journeys that withstand peak volume.',
    capabilities: [
      'Headless commerce architecture',
      'Payment gateway & omnichannel integrations',
      'Inventory, order & catalog management',
      'Sub-second catalog browsing & fast checkout',
    ],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    path: '/solutions/mobile-applications',
    icon: FiSmartphone,
    badge: 'iOS & Android',
    desc: 'High-performance native and cross-platform mobile apps providing responsive, offline-tolerant, and secure digital user experiences.',
    capabilities: [
      'Cross-platform Flutter & React Native development',
      'Native iOS (Swift) & Android (Kotlin)',
      'Real-time push notifications & background sync',
      'Biometric authentication & local encryption',
    ],
  },
  {
    id: 'system-integration-security',
    title: 'System Integration & Security',
    path: '/solutions/system-integration-security',
    icon: FiShield,
    badge: 'Enterprise Security',
    desc: 'Connect disparate software systems, implement unified middleware, and harden infrastructure with zero-trust cyber security frameworks.',
    capabilities: [
      'Enterprise API middleware & webhooks',
      'Zero-trust network architecture',
      'SIEM, logging & telemetry integration',
      'Vulnerability mitigation & penetration hardening',
    ],
  },
];

const solutionsFaqs = [
  {
    id: 1,
    question: 'How do you determine whether a project needs custom development or a pre-built product?',
    answer: 'During our discovery phase, we evaluate your workflow complexity, competitive differentiation needs, and timeline. If standard requirements align with our existing platforms (VueCart, HeapSync, Learnly), we recommend licensing or customizing them. When requirements demand proprietary intellectual property or unique integrations, we architect a bespoke custom solution.',
  },
  {
    id: 2,
    question: 'How do you handle transitions from legacy software to modern cloud systems?',
    answer: 'We utilize phased migration strategies, such as the Strangler Fig pattern, to modernize components iteratively without disrupting active operations. Data integrity, automated testing, and parallel-run periods guarantee zero unexpected downtime.',
  },
  {
    id: 3,
    question: 'Who retains the intellectual property rights to custom code built by Heapvue?',
    answer: 'For all custom engineering engagements, full intellectual property (IP), source code repositories, and architectural documentation belong entirely to the client upon completion and milestone settlement.',
  },
  {
    id: 4,
    question: 'What is your average timeline to deliver an enterprise solution MVP?',
    answer: 'Typical MVP platform releases take between 8 to 14 weeks depending on architectural complexity. We work in two-week agile sprints with working software demonstrated at the end of each iteration.',
  },
];

export default function SolutionsIndexPage() {
  return (
    <div className="solutions-page-container bg-light">
      {/* Hero Section */}
      <section className="solutions-hero-wrapper">
        <div className="solutions-hero-bg-overlay"></div>
        <div className="solutions-hero-container">
          <div className="solutions-hero-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text" style={{ color: '#0F172A', fontWeight: 600 }}>
              End-to-End Technology Capabilities
            </span>
          </div>

          <h1 className="solutions-hero-title text-white fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Engineering &amp; Enterprise <span style={{ color: '#38BDF8' }}>Technology Solutions</span>
          </h1>

          <p className="solutions-hero-desc text-light opacity-90 mx-auto" style={{ maxWidth: '780px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We engineer resilient software platforms, modernize mission-critical systems, and integrate artificial intelligence to solve complex enterprise challenges.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold text-primary" style={{ backgroundColor: '#EFF6FF', fontSize: '0.85rem' }}>
              Core Capabilities
            </span>
            <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0F172A' }}>
              Six Focused Solution Practices
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '640px' }}>
              Explore each dedicated practice area to learn about architectural patterns, capabilities, and relevant project engagements.
            </p>
          </div>

          <div className="row g-4">
            {solutionsList.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.id} className="col-12 col-md-6 col-lg-4">
                  <div 
                    className="card h-100 border-0 shadow-sm p-4 d-flex flex-column justify-content-between"
                    style={{ 
                      borderRadius: '16px', 
                      backgroundColor: '#ffffff',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      border: '1px solid #e2e8f0'
                    }}
                  >
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div 
                          className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: '#EFF6FF', color: '#0555FF', width: '52px', height: '52px' }}
                        >
                          <IconComp size={24} />
                        </div>
                        <span 
                          className="badge rounded-pill fw-medium text-secondary"
                          style={{ backgroundColor: '#F1F5F9', fontSize: '0.75rem', padding: '6px 12px' }}
                        >
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="fw-bold mb-2" style={{ fontSize: '1.25rem', color: '#0F172A' }}>
                        {sol.title}
                      </h3>

                      <p className="text-muted small mb-3" style={{ lineHeight: '1.6' }}>
                        {sol.desc}
                      </p>

                      <div className="mb-4">
                        <span className="d-block text-dark fw-semibold small mb-2">Key Focus Areas:</span>
                        <ul className="list-unstyled mb-0">
                          {sol.capabilities.map((cap, idx) => (
                            <li key={idx} className="d-flex align-items-start gap-2 mb-1" style={{ fontSize: '0.84rem', color: '#475569' }}>
                              <FiCheckCircle size={14} className="text-primary mt-1 flex-shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-top">
                      <Link 
                        href={sol.path}
                        className="btn btn-outline-primary w-100 d-inline-flex align-items-center justify-content-center gap-2 fw-semibold"
                        style={{ borderRadius: '8px', fontSize: '0.9rem' }}
                      >
                        Explore Solution <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Solutions CTA */}
      <section className="py-5" style={{ backgroundColor: '#040D21', color: '#ffffff' }}>
        <div className="container text-center" style={{ maxWidth: '820px' }}>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem' }}>
            Have a Specific Architectural Challenge?
          </h2>
          <p className="text-light opacity-75 mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
            Connect with our engineering architects to assess technical feasibility, analyze infrastructure requirements, and plan your delivery milestones.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link 
              href="/contact" 
              className="btn btn-primary px-4 py-3 fw-semibold shadow-sm"
              style={{ backgroundColor: '#0555FF', borderRadius: '8px', fontSize: '0.95rem' }}
            >
              Discuss Your Project <FiArrowRight size={16} />
            </Link>
            <Link 
              href="/products" 
              className="btn btn-outline-light px-4 py-3 fw-semibold"
              style={{ borderRadius: '8px', fontSize: '0.95rem' }}
            >
              Explore Ready-to-Deploy Products
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions FAQ */}
      <FaqSection customFaqs={solutionsFaqs} />
    </div>
  );
}
