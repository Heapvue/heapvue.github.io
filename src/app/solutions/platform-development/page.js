import '@/components/solutions/Solutions.css';
import PlatformDevHero from '@/components/solutions/platform-development/PlatformDevHero';
import AboutPlatformDevSection from '@/components/solutions/platform-development/AboutPlatformDevSection';
import PlatformsWeBuildDevSection from '@/components/solutions/platform-development/PlatformsWeBuildDevSection';
import MapStackSection from '@/components/industry/MapStackSection';
import PlatformDevProjectsSection from '@/components/solutions/platform-development/PlatformDevProjectsSection';
import PlatformDevApproachSection from '@/components/solutions/platform-development/PlatformDevApproachSection';
import PlatformDevBanner from '@/components/solutions/platform-development/PlatformDevBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Platform Development | Heapvue - Building Scalable & High-Performance Digital Platforms',
  description: 'Designing and developing robust, scalable platforms tailored to business needs, ensuring seamless performance, flexibility, and future-ready growth.',
};

export default function PlatformDevelopmentPage() {
  return (
    <div className="solutions-page-container">
      <PlatformDevHero />
      <AboutPlatformDevSection />
      <PlatformsWeBuildDevSection />
      <MapStackSection />
      <PlatformDevProjectsSection />
      <PlatformDevApproachSection />
      <PlatformDevBanner />
      <FaqSection />
    </div>
  );
}
