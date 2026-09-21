import '@/components/solutions/Solutions.css';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import AboutPlatformSection from '@/components/solutions/AboutPlatformSection';
import PlatformsWeBuildSection from '@/components/solutions/PlatformsWeBuildSection';
import MapStackSection from '@/components/industry/MapStackSection';
import SolutionsProjectsSection from '@/components/solutions/SolutionsProjectsSection';
import PlatformApproachSection from '@/components/solutions/PlatformApproachSection';
import CustomPlatformBanner from '@/components/solutions/CustomPlatformBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Solutions | Heapvue - Building Scalable & High-Performance Digital Platforms',
  description: 'Designing and developing robust, scalable platforms tailored to business needs, ensuring seamless performance, flexibility, and future-ready growth.',
};

export default function SolutionsPage() {
  return (
    <div className="solutions-page-container">
      {/* First Section Hero (1440 x 728 overall / 1440 x 648 content excluding navbar) */}
      <SolutionsHero />

      {/* About Platform Development & Trusted Logos Section (1440 x 529 Hug) */}
      <AboutPlatformSection />

      {/* Platforms We Design and Deliver 6-Card Grid Section (1200 x 814 Hug) */}
      <PlatformsWeBuildSection />

      {/* Discover How To Map Heapvue to Your Stack Section (1200 x 301.89 Hug) */}
      <MapStackSection />

      {/* Solutions Selected Projects Section (1200 x 648.85 Hug) */}
      <SolutionsProjectsSection />

      {/* Our Approach to Platform Development Section (1201 x 1788 Hug) */}
      <PlatformApproachSection />

      {/* Custom Platform Banner Section (1200 x 328 Hug) */}
      <CustomPlatformBanner />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
