import '@/components/industry/Industry.css';
import EducationHero from '@/components/industry/education/EducationHero';
import AboutEducationSection from '@/components/industry/education/AboutEducationSection';
import EducationChallengesSection from '@/components/industry/education/EducationChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EducationSupportSection from '@/components/industry/education/EducationSupportSection';
import EducationProjectsSection from '@/components/industry/education/EducationProjectsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Education & EdTech Solutions | Heapvue',
  description: 'Heapvue helps education organisations build digital platforms that simplify student management and improve learning delivery.',
};

export default function EducationPage() {
  return (
    <div className="industries-page-container">
      <EducationHero />
      <AboutEducationSection />
      <EducationChallengesSection />
      <MapStackSection />
      <EducationSupportSection />
      <EducationProjectsSection />
      <FaqSection />
    </div>
  );
}
