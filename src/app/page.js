import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import HeroBackgroundVideo from '@/components/home/HeroBackgroundVideo';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'));
const PlatformSection = dynamic(() => import('@/components/home/PlatformSection'));
const ClientsSection = dynamic(() => import('@/components/home/ClientsSection'));
const CaseStudySection = dynamic(() => import('@/components/home/CaseStudySection'));
const IndustriesSection = dynamic(() => import('@/components/home/IndustriesSection'));
const IntegrationsSection = dynamic(() => import('@/components/home/IntegrationsSection'));
const AppointmentSection = dynamic(() => import('@/components/home/AppointmentSection'));
const FaqSection = dynamic(() => import('@/components/home/FaqSection'));

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

const homeFaqs = [
  {
    id: 1,
    question: 'How do Heapvue’s software products differ from your custom engineering services?',
    answer: 'Heapvue provides both ready-to-deploy software products (such as Vuecart for e-commerce, Heapsync for CRM, and Chatpress for AI interactions) and bespoke software engineering. You can adopt our pre-built products for rapid deployment or engage our engineering teams for fully customized architecture tailored to your proprietary requirements.',
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
  {
    id: 6,
    question: 'How are Heapvue’s software products and engineering services priced?',
    answer: 'Heapvue operates on a transparent, sales-led pricing model. Our modular SaaS platforms (Vuecart, Heapsync, Chatpress) offer tiered monthly or annual licensing tailored to your active store or user volume, while custom engineering pods and architecture advisory are structured on fixed-deliverable milestones or dedicated monthly retainers. Contact our team for an upfront scope and price estimate.',
  },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Video Section */}
      <section className="hero-video-section">
        <HeroBackgroundVideo />

        <div className="container position-relative z-1">
          <Hero />
        </div>
      </section>

      {/* About Section (Starts after video section) */}
      <div className="container position-relative z-1">
        <AboutSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Technology Services Section */}
      <ServicesSection />

      {/* Platform Section */}
      <PlatformSection />

      {/* Trusted by Clients Section */}
      <ClientsSection />

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
