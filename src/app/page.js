import Hero from '@/components/home/Hero';
import FlowDiagram from '@/components/home/FlowDiagram';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ServicesSection from '@/components/home/ServicesSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import IntegrationsSection from '@/components/home/IntegrationsSection';
import AppointmentSection from '@/components/home/AppointmentSection';
import FaqSection from '@/components/home/FaqSection';
import PlatformSection from '@/components/home/PlatformSection';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';
import CaseStudySection from '@/components/home/CaseStudySection';

export default function Home() {
  return (
    <div className="home-container">
      {/* Background Image - Full width edge-to-edge */}
      <div className="hero-bg-container"></div>
      
      {/* Main Home Content */}
      <div className="container position-relative z-1">
        <Hero />
        <FlowDiagram />
        <AboutSection />
      </div>

      {/* Testimonials Section (1440 Fill x 755) */}
      <TestimonialsSection />

      {/* Technology Services Section (1440 Fill x 633) */}
      <ServicesSection />

      {/* Platform Section (1440 Fill x 849) */}
      <PlatformSection />

      {/* Company Logos Section (1440 Fill x 120) */}
      <CompanyLogosSection />

      {/* Our Case Study Section (1200 Fill x 897) */}
      <CaseStudySection />

      {/* Industries We Work For Section (1200 Fill x 917.98) */}
      <IndustriesSection />

      {/* Enterprise Integrations Section (1200 Fill x 298.85) */}
      <IntegrationsSection />

      {/* Book an Appointment Section (1200 Fill x 901.83) */}
      <AppointmentSection />

      {/* Have Questions? We got Answers Section (1200 Fill x 586) */}
      <FaqSection />
    </div>
  );
}




