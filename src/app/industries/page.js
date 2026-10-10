import Link from 'next/link';
import '@/components/industry/Industry.css';
import FaqSection from '@/components/home/FaqSection';
import { 
  FiActivity, 
  FiShoppingBag, 
  FiDollarSign, 
  FiBookOpen, 
  FiZap, 
  FiArrowRight, 
  FiCheckCircle, 
  FiLayers 
} from 'react-icons/fi';

export const metadata = {
  title: 'Industry Solutions | Heapvue',
  description: 'Specialized technology architectures for Healthcare, Retail & E-commerce, Financial Services, and Education. Evaluate our Buy, Build, or Customise models.',
};

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: FiActivity,
    accentColor: '#0284c7',
    summary: 'Secure digital platforms, appointment management, and patient care workflows engineered under HIPAA and DPDP compliance standards.',
    builtOn: {
      product: 'ChatPress AI + Custom Architecture',
      buy: 'Ready AI patient inquiry triage via ChatPress',
      build: '100% bespoke clinical workflows and patient EHR integrations',
      customise: 'Hybrid patient portal extending pre-built communication backends',
    },
    challengesSolved: [
      'Protecting patient PII and health records from data vulnerabilities',
      'Eliminating fragmented manual scheduling and consultation follow-ups',
      'Maintaining continuous regulatory audit trails and encryption',
    ],
    proofCase: 'Hardened network architecture and patient consultation platform for a multi-specialty clinical network.',
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: FiShoppingBag,
    accentColor: '#16a34a',
    summary: 'High-conversion commerce architectures, headless storefronts, and automated inventory systems engineered for high traffic and promotion spikes.',
    builtOn: {
      product: 'VueCart Headless Commerce',
      buy: 'Deploy VueCart for high-speed headless digital storefronts',
      build: 'Custom multi-vendor marketplace or bespoke warehouse ERP',
      customise: 'VueCart core extended with custom ERP and localized payment engines',
    },
    challengesSolved: [
      'Slow catalog browsing and checkout abandonment during flash sales',
      'Frequent downtime and plugin conflicts on legacy monoliths (e.g. WooCommerce)',
      'Disconnected inventory across offline outlets and online channels',
    ],
    proofCase: 'Migrated an FMCG retailer from an unstable plugin stack to a high-throughput Node.js commerce architecture.',
  },
  {
    id: 'finance',
    name: 'Financial Services & FinTech',
    icon: FiDollarSign,
    accentColor: '#d97706',
    summary: 'Institutional-grade security, client lifecycle management, and financial workflow automation with strict audit logging.',
    builtOn: {
      product: 'HeapSync CRM',
      buy: 'License HeapSync for centralized client and lead tracking',
      build: 'Bespoke loan origination or algorithmic transaction processing engine',
      customise: 'HeapSync CRM customized with proprietary financial compliance rules',
    },
    challengesSolved: [
      'Scattered lead tracking across spreadsheets and disconnected databases',
      'Meeting stringent financial regulatory audit and data retention mandates',
      'Slow, manual client onboarding and documentation verification',
    ],
    proofCase: 'Custom client management platform for a boutique asset management advisory firm.',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    icon: FiBookOpen,
    accentColor: '#7c3aed',
    summary: 'Modern learning management systems (LMS), student enrolment platforms, and scalable course delivery infrastructure.',
    builtOn: {
      product: 'Learnly LMS',
      buy: 'Deploy Learnly for modern course management and interactive lessons',
      build: 'Fully custom institutional university ERP and examination system',
      customise: 'Learnly core tailored with custom certification and grading workflows',
    },
    challengesSolved: [
      'High operational overhead in manual student admissions and fee tracking',
      'Poor student engagement on clunky legacy educational software',
      'Scaling digital examination and live class concurrency',
    ],
    proofCase: 'Student enrollment and digital course delivery platform for an executive education provider.',
  },
];

const industriesFaqs = [
  {
    id: 1,
    question: 'How does Heapvue decide whether to Buy, Build, or Customise for my sector?',
    answer: 'We analyze your core business differentiation. If your operational needs align with industry standards, licensing one of our proprietary products (VueCart, HeapSync, Learnly) saves months of development time. If your workflow is your secret sauce, we engineer a custom solution from scratch. For hybrid needs, we customize our product base.',
  },
  {
    id: 2,
    question: 'How do you address regulatory compliance in regulated sectors like Healthcare and Finance?',
    answer: 'We embed security and compliance from day one. In Healthcare, we adhere to HIPAA and DPDP data privacy standards. In Financial Services, we enforce audit logs, encryption in transit and at rest, and strict role-based access controls.',
  },
  {
    id: 3,
    question: 'Can you work with our existing domain-specific legacy software?',
    answer: 'Yes. We specialize in building secure integration middleware, modern API layers, and gradual migration pathways that modernize your stack without requiring a risky total shutdown.',
  },
];

export default function IndustriesIndexPage() {
  return (
    <div className="industries-page-container bg-light">
      {/* Hero Section */}
      <section className="industries-hero-wrapper" style={{ minHeight: '520px', backgroundColor: '#040D21', padding: '80px 20px', color: '#ffffff', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '0.85rem' }}>
            <span className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#38BDF8' }} />
            <span className="text-light fw-semibold">Industry-Specific Engineering</span>
          </div>

          <h1 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.2 }}>
            Domain-Specific <span style={{ color: '#38BDF8' }}>Technology Solutions</span>
          </h1>

          <p className="text-light opacity-90 mx-auto mb-4" style={{ maxWidth: '740px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Every industry has unique compliance, data, and operational constraints. We combine domain knowledge with our flexible Buy, Build, or Customise delivery model.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-primary px-4 py-3 fw-semibold shadow-sm" style={{ backgroundColor: '#0555FF', borderRadius: '8px' }}>
              Discuss Your Industry Needs <FiArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Directory with "Built On" Strip */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-2 fw-semibold text-primary" style={{ backgroundColor: '#EFF6FF', fontSize: '0.85rem' }}>
              Target Verticals
            </span>
            <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0F172A' }}>
              Architectures Engineered for Your Sector
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '680px' }}>
              Each sector features an explicit &ldquo;Built On&rdquo; model detailing when to deploy our proprietary products, build custom software, or customize a hybrid solution.
            </p>
          </div>

          <div className="d-flex flex-column gap-5">
            {industries.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div 
                  key={sec.id} 
                  id={sec.id}
                  className="card border-0 shadow-sm p-4 p-md-5"
                  style={{ borderRadius: '16px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }}
                >
                  <div className="row g-4 align-items-center">
                    {/* Left Column: Sector Info */}
                    <div className="col-12 col-lg-6">
                      <div className="d-flex align-items-center gap-3 mb-3">
                        <div 
                          className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: '#EFF6FF', color: sec.accentColor, width: '56px', height: '56px' }}
                        >
                          <IconComp size={28} />
                        </div>
                        <h3 className="fw-bold mb-0" style={{ fontSize: '1.6rem', color: '#0F172A' }}>
                          {sec.name}
                        </h3>
                      </div>

                      <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {sec.summary}
                      </p>

                      <div className="mb-4">
                        <span className="d-block fw-bold text-dark small text-uppercase mb-2" style={{ letterSpacing: '0.04em' }}>
                          Core Challenges Solved:
                        </span>
                        <ul className="list-unstyled mb-0">
                          {sec.challengesSolved.map((chal, i) => (
                            <li key={i} className="d-flex align-items-start gap-2 mb-2" style={{ fontSize: '0.9rem', color: '#475569' }}>
                              <FiCheckCircle size={15} className="text-success mt-1 flex-shrink-0" />
                              <span>{chal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 rounded-3 bg-light border mb-3">
                        <span className="d-block fw-bold text-dark small mb-1">Delivered Outcome:</span>
                        <p className="text-muted small mb-0">{sec.proofCase}</p>
                      </div>
                    </div>

                    {/* Right Column: "Built On" Strip (Buy vs. Build vs. Customise) */}
                    <div className="col-12 col-lg-6">
                      <div className="p-4 rounded-4" style={{ backgroundColor: '#F8FAFC', border: '2px solid #E2E8F0' }}>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <FiLayers size={18} className="text-primary" />
                          <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '1.15rem' }}>
                            The &ldquo;Built On&rdquo; Architecture Strip
                          </h4>
                        </div>
                        <p className="text-muted small mb-4">
                          Foundational technology: <strong>{sec.builtOn.product}</strong>
                        </p>

                        <div className="d-flex flex-column gap-3">
                          {/* Buy */}
                          <div className="p-3 rounded-3 bg-white border">
                            <div className="d-flex align-items-center justify-content-between mb-1">
                              <span className="badge bg-primary-subtle text-primary fw-bold" style={{ fontSize: '0.75rem' }}>BUY (Off-The-Shelf)</span>
                              <span className="small text-muted">Rapid Deployment</span>
                            </div>
                            <p className="small text-dark mb-0">{sec.builtOn.buy}</p>
                          </div>

                          {/* Customise */}
                          <div className="p-3 rounded-3 bg-white border">
                            <div className="d-flex align-items-center justify-content-between mb-1">
                              <span className="badge bg-warning-subtle text-warning-emphasis fw-bold" style={{ fontSize: '0.75rem' }}>CUSTOMISE (Hybrid)</span>
                              <span className="small text-muted">Modular Extensions</span>
                            </div>
                            <p className="small text-dark mb-0">{sec.builtOn.customise}</p>
                          </div>

                          {/* Build */}
                          <div className="p-3 rounded-3 bg-white border">
                            <div className="d-flex align-items-center justify-content-between mb-1">
                              <span className="badge bg-success-subtle text-success fw-bold" style={{ fontSize: '0.75rem' }}>BUILD (Bespoke)</span>
                              <span className="small text-muted">100% Proprietary IP</span>
                            </div>
                            <p className="small text-dark mb-0">{sec.builtOn.build}</p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-top text-center">
                          <Link href="/contact" className="btn btn-outline-primary btn-sm fw-semibold">
                            Enquire for {sec.name} &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reclassified Startups Section as an Engagement Model */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-4 text-md-center">
              <div className="rounded-circle p-4 d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary mb-3" style={{ width: '84px', height: '84px' }}>
                <FiZap size={40} />
              </div>
              <h4 className="fw-bold text-dark">Fast-Growth Ventures</h4>
              <span className="badge bg-primary">Engagement Model</span>
            </div>
            <div className="col-12 col-md-8">
              <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '1.6rem' }}>
                MVP Development &amp; Scalable Architecture for Startups
              </h3>
              <p className="text-muted mb-3" style={{ lineHeight: '1.6' }}>
                Startups have unique velocity and budget requirements. Rather than treating venture stage as an industry sector, we offer a dedicated MVP engineering model designed to take founders from concept to market-ready architecture in 8 to 12 weeks.
              </p>
              <ul className="list-unstyled d-flex flex-wrap gap-3 mb-3 text-muted small">
                <li className="d-flex align-items-center gap-1"><FiCheckCircle className="text-success" /> Fixed-cost MVP scoping</li>
                <li className="d-flex align-items-center gap-1"><FiCheckCircle className="text-success" /> Cloud infrastructure setup</li>
                <li className="d-flex align-items-center gap-1"><FiCheckCircle className="text-success" /> Full IP ownership transfer</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-primary btn-sm fw-semibold">
                Explore Venture Engagement &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries FAQ */}
      <FaqSection customFaqs={industriesFaqs} />
    </div>
  );
}
