import '@/components/solutions/Solutions.css';
import IntegrationHero from '@/components/solutions/system-integration-security/IntegrationHero';
import AboutIntegrationSection from '@/components/solutions/system-integration-security/AboutIntegrationSection';
import WhatWeIntegrateSection from '@/components/solutions/system-integration-security/WhatWeIntegrateSection';
import MapStackSection from '@/components/industry/MapStackSection';
import IntegrationProjectsSection from '@/components/solutions/system-integration-security/IntegrationProjectsSection';
import IntegrationApproachSection from '@/components/solutions/system-integration-security/IntegrationApproachSection';
import IntegrationBanner from '@/components/solutions/system-integration-security/IntegrationBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'System Integration & Security | Heapvue - Connected & Protected Infrastructure',
  description: 'Heapvue helps organisations integrate digital systems and strengthen infrastructure security so data flows seamlessly while maintaining strong protection against cyber threats.',
};

const integrationFaqs = [
  {
    id: 1,
    question: 'How does Heapvue protect healthcare technology platforms against brute-force attacks and SQL injections?',
    answer: 'We implement secure network architecture, automated threat protection, rate limiting, and encrypted payload parameters to fortify server perimeters against malicious brute-force attempts and database injections.',
  },
  {
    id: 2,
    question: 'Can Heapvue connect disparate data systems for healthtech startups and enterprise platforms?',
    answer: 'Yes! We design secure API bridges and custom data transformation pipelines that allow separate applications to exchange information seamlessly while maintaining full data privacy.',
  },
  {
    id: 3,
    question: 'How do secure system architectures benefit scalable applications?',
    answer: 'A secure system architecture separates services, isolates sensitive database resources, and enforces zero-trust token authentication, allowing applications to handle high traffic volume safely.',
  },
  {
    id: 4,
    question: 'What access controls and monitoring tools do you implement?',
    answer: 'We deploy Multi-Factor Authentication (MFA), Role-Based Access Controls (RBAC), tokenized authorization, and real-time security event logging for continuous platform visibility.',
  },
];

export default function SystemIntegrationSecurityPage() {
  return (
    <div className="solutions-page-container">
      {/* Hero Section */}
      <IntegrationHero />

      {/* About Integration Section */}
      <AboutIntegrationSection />

      {/* What We Help Organisations Achieve Section */}
      <WhatWeIntegrateSection />

      {/* Map Stack Section */}
      <MapStackSection />

      {/* Selected Projects Section */}
      <IntegrationProjectsSection />

      {/* Our Approach to Integration and Security Section */}
      <IntegrationApproachSection />

      {/* Integration Banner Section */}
      <IntegrationBanner />

      {/* FAQ Section */}
      <FaqSection customFaqs={integrationFaqs} />
    </div>
  );
}
