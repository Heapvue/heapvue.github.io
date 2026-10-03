import '@/components/industry/Industry.css';
import HealthcareHero from '@/components/industry/healthcare/HealthcareHero';
import AboutHealthcareSection from '@/components/industry/healthcare/AboutHealthcareSection';
import HealthcareChallengesSection from '@/components/industry/healthcare/HealthcareChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import HealthcareSupportSection from '@/components/industry/healthcare/HealthcareSupportSection';
import HealthcareProjectsSection from '@/components/industry/healthcare/HealthcareProjectsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Healthcare Digital Solutions | Heapvue',
  description: 'Heapvue helps healthcare organisations build secure digital platforms, modernise legacy systems, and develop patient-facing applications.',
};

export default function HealthcarePage() {
  return (
    <div className="industries-page-container">
      <HealthcareHero />
      <AboutHealthcareSection />
      <HealthcareChallengesSection />
      <MapStackSection />
      <HealthcareSupportSection />
      <HealthcareProjectsSection />
      <FaqSection />
    </div>
  );
}
