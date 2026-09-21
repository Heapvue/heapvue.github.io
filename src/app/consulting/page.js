import '@/components/consulting/Consulting.css';
import ConsultingHero from '@/components/consulting/ConsultingHero';
import AboutAiConsultingSection from '@/components/consulting/AboutAiConsultingSection';
import ConsultingServicesGridSection from '@/components/consulting/ConsultingServicesGridSection';
import MapStackSection from '@/components/industry/MapStackSection';
import ConsultingEngagementsSection from '@/components/consulting/ConsultingEngagementsSection';
import ConsultingApproachSection from '@/components/consulting/ConsultingApproachSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'AI Consulting | Heapvue - Turn AI Potential Into Business Impact',
  description: 'Heapvue helps organisations identify high-value AI opportunities, select the right technologies, and implement intelligent solutions that align with business goals.',
};

export default function ConsultingPage() {
  return (
    <div className="consulting-page-container">
      {/* Hero Section (1440 x 728 overall / 1440 x 648 content excluding navbar) */}
      <ConsultingHero />

      {/* About AI Consulting Section (1200 x 510 Hug) */}
      <AboutAiConsultingSection />

      {/* From AI Strategy to Real-World Solutions Grid Section (1440 x 1291 Hug) */}
      <ConsultingServicesGridSection />

      {/* Discover How To Map Heapvue to Your Stack Section (1200 x 301.89 Hug) */}
      <MapStackSection />

      {/* Typical Engagements in AI Consulting Section (1201 x 735 Hug) */}
      <ConsultingEngagementsSection />

      {/* Intelligent Technology Built for Modern Businesses Approach Section (1200 x 603 Hug) */}
      <ConsultingApproachSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
