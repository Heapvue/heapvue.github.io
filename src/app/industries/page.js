import '@/components/industry/Industry.css';
import IndustryHero from '@/components/industry/IndustryHero';
import AboutHealthcareSection from '@/components/industry/AboutHealthcareSection';
import HealthcareChallengesSection from '@/components/industry/HealthcareChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import HealthcareSupportSection from '@/components/industry/HealthcareSupportSection';
import HighlightedProjectsSection from '@/components/industry/HighlightedProjectsSection';
import HealthcareProjectsGridSection from '@/components/industry/HealthcareProjectsGridSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Industries | Heapvue - Healthcare & Industry Technology Solutions',
  description: 'Heapvue delivers cutting-edge healthcare technology solutions powered by artificial intelligence that enhance patient care, streamline clinical workflows, and improve operational efficiency.',
};

export default function IndustriesPage() {
  return (
    <div className="industries-page-container">
      {/* First Section Hero (1440 x 728 overall / 1440 x 648 content excluding navbar) */}
      <IndustryHero />

      {/* About Healthcare Solution Section (1200 x 510 Hug) */}
      <AboutHealthcareSection />

      {/* Typical Challenges in Healthcare Section (1200 x 1087 Hug) */}
      <HealthcareChallengesSection />

      {/* Discover How To Map Heapvue to Your Stack Section (1200 x 301.89 Hug) */}
      <MapStackSection />

      {/* How We Support Healthcare Organisations Section (1201 x 1477 Hug) */}
      <HealthcareSupportSection />

      {/* Highlighted Projects Across Healthcare Solutions Header (1199.84 x 162 Hug) */}
      <HighlightedProjectsSection />

      {/* Highlighted Projects 3-Card Grid Section (1199.84 x 502 Hug) */}
      <HealthcareProjectsGridSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
