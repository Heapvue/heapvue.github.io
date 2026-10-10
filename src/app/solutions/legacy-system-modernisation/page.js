import '@/components/solutions/Solutions.css';
import LegacyHero from '@/components/solutions/legacy-system-modernisation/LegacyHero';
import AboutLegacySection from '@/components/solutions/legacy-system-modernisation/AboutLegacySection';
import WhatWeModerniseSection from '@/components/solutions/legacy-system-modernisation/WhatWeModerniseSection';
import MapStackSection from '@/components/industry/MapStackSection';
import LegacyProjectsSection from '@/components/solutions/legacy-system-modernisation/LegacyProjectsSection';
import LegacyApproachSection from '@/components/solutions/legacy-system-modernisation/LegacyApproachSection';
import LegacyBanner from '@/components/solutions/legacy-system-modernisation/LegacyBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Legacy System Modernisation | Heapvue - Upgrade & Secure Legacy Infrastructure',
  description: 'Heapvue helps organisations modernise legacy software systems by redesigning architecture, upgrading technology stacks, and improving system security and performance.',
};

const legacyFaqs = [
  {
    id: 1,
    question: 'How do you modernise legacy systems without causing downtime to business operations?',
    answer: 'We utilize incremental migration strategies and phased transitions. This allows us to upgrade legacy modules step-by-step while maintaining data continuity, ensuring minimal to zero disruption to live business workflows.',
  },
  {
    id: 2,
    question: 'Can Heapvue handle outdated tech stacks like legacy PHP Laravel or WooCommerce?',
    answer: 'Yes. We frequently migrate legacy PHP, WooCommerce, and outdated monolithic frameworks to modern, high-performance Node.js and React technology stacks.',
  },
  {
    id: 3,
    question: 'How does Heapvue address security threats like SQL injections or brute-force attacks?',
    answer: 'We execute comprehensive security hardening, implement secure network architecture, upgrade encryption algorithms, and eliminate vulnerable plugins or legacy dependencies.',
  },
  {
    id: 4,
    question: 'What happens to our existing data during the modernisation process?',
    answer: 'Preserving data integrity is a top priority. We perform automated data validation and seamless database migrations so that no operational data is lost during the upgrade.',
  },
];

export default function LegacySystemModernisationPage() {
  return (
    <div className="solutions-page-container">
      {/* Hero Section */}
      <LegacyHero />

      {/* About Legacy Section */}
      <AboutLegacySection />

      {/* What We Modernise Section */}
      <WhatWeModerniseSection />

      {/* Selected Projects Section */}
      <LegacyProjectsSection />

      {/* Our Approach Section */}
      <LegacyApproachSection />

      {/* Legacy Banner Section */}
      <LegacyBanner />

      {/* FAQ Section */}
      <FaqSection customFaqs={legacyFaqs} />
    </div>
  );
}
