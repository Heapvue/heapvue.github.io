import '@/components/industry/Industry.css';
import RetailHero from '@/components/industry/retail-ecommerce/RetailHero';
import AboutRetailSection from '@/components/industry/retail-ecommerce/AboutRetailSection';
import RetailChallengesSection from '@/components/industry/retail-ecommerce/RetailChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import RetailSupportSection from '@/components/industry/retail-ecommerce/RetailSupportSection';
import RetailProjectsSection from '@/components/industry/retail-ecommerce/RetailProjectsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Retail & E-commerce Technology Solutions | Heapvue',
  description: 'Heapvue helps retail and e-commerce organisations build modern digital storefronts, streamline operations, and create scalable commerce platforms.',
};

export default function RetailEcommercePage() {
  return (
    <div className="industries-page-container">
      <RetailHero />
      <AboutRetailSection />
      <RetailChallengesSection />
      <MapStackSection />
      <RetailSupportSection />
      <RetailProjectsSection />
      <FaqSection />
    </div>
  );
}
