import Hero from '@/components/home/Hero';
import FlowDiagram from '@/components/home/FlowDiagram';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import IntegrationsSection from '@/components/home/IntegrationsSection';
import AppointmentSection from '@/components/home/AppointmentSection';
import FaqSection from '@/components/home/FaqSection';
import PlatformSection from '@/components/home/PlatformSection';
import CaseStudySection from '@/components/home/CaseStudySection';

const homeFaqs = [
  {
    id: 1,
    question: 'How do Heapvue’s software products differ from your custom engineering services?',
    answer: 'Heapvue provides both ready-to-deploy software products (such as VueCart for e-commerce, HeapSync for CRM, and ChatPress for AI interactions) and bespoke software engineering. You can adopt our pre-built products for rapid deployment or engage our engineering teams for fully customized architecture tailored to your proprietary requirements.',
  },
  {
    id: 2,
    question: 'Can we customize Heapvue’s proprietary products to fit our workflow?',
    answer: 'Yes. Our products are engineered with modular, API-first architectures. Clients can license our software off-the-shelf, customize them with custom integrations and extensions, or have our engineering team build bespoke capabilities on top of our foundation.',
  },
  {
    id: 3,
    question: 'What engagement models do you offer for custom development and consulting?',
    answer: 'We offer flexible engagement structures including dedicated engineering pods, fixed-scope delivery milestones, and fractional technology advisory. All engagements include transparent sprint reporting and intellectual property transfer.',
  },
  {
    id: 4,
    question: 'How does Heapvue ensure data security and regulatory compliance?',
    answer: 'Our architectures incorporate zero-trust security principles, transport encryption, and granular role-based access control. We regularly assist clients in aligning their systems with DPDP, GDPR, and HIPAA compliance mandates.',
  },
  {
    id: 5,
    question: 'How do we begin an engagement with Heapvue?',
    answer: 'You can schedule an introductory architecture consultation directly through our Contact page. Our technical team reviews your current stack and business goals, providing a clear blueprint and buy-vs-build feasibility assessment.',
  },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* Background Image */}
      <div className="hero-bg-container"></div>
      
      {/* Main Home Content */}
      <div className="container position-relative z-1">
        <Hero />
        <FlowDiagram />
        <AboutSection />
      </div>

      {/* Technology Services Section */}
      <ServicesSection />

      {/* Platform Section */}
      <PlatformSection />

      {/* Featured Case Study Section (Live HTML banner with interactive controls) */}
      <CaseStudySection />

      {/* Industries We Work For Section */}
      <IndustriesSection />

      {/* Enterprise Integrations Section */}
      <IntegrationsSection />

      {/* Consultation Booking Section */}
      <AppointmentSection />

      {/* Have Questions? Tailored FAQ Section */}
      <FaqSection customFaqs={homeFaqs} />
    </div>
  );
}
