import '@/components/industry/Industry.css';
import StartupsHero from '@/components/industry/startups/StartupsHero';
import AboutStartupsSection from '@/components/industry/startups/AboutStartupsSection';
import StartupsChallengesSection from '@/components/industry/startups/StartupsChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import StartupsSupportSection from '@/components/industry/startups/StartupsSupportSection';
import StartupsProjectsSection from '@/components/industry/startups/StartupsProjectsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Technology Solutions for Startups | Heapvue',
  description: 'Heapvue works with startups to design, build, and scale digital products and platforms, from MVP development to architecture.',
};

export default function StartupsPage() {
  return (
    <div className="industries-page-container">
      <StartupsHero />
      <AboutStartupsSection />
      <StartupsChallengesSection />
      <MapStackSection />
      <StartupsSupportSection />
      <StartupsProjectsSection />
      <FaqSection />
    </div>
  );
}
