import '@/components/industry/Industry.css';
import FinanceHero from '@/components/industry/finance/FinanceHero';
import AboutFinanceSection from '@/components/industry/finance/AboutFinanceSection';
import FinanceChallengesSection from '@/components/industry/finance/FinanceChallengesSection';
import MapStackSection from '@/components/industry/MapStackSection';
import FinanceSupportSection from '@/components/industry/finance/FinanceSupportSection';
import FinanceProjectsSection from '@/components/industry/finance/FinanceProjectsSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Financial Services Technology Solutions | Heapvue',
  description: 'Heapvue helps financial services firms build custom platforms, improve operational workflows, and manage client data more effectively.',
};

export default function FinancePage() {
  return (
    <div className="industries-page-container">
      <FinanceHero />
      <AboutFinanceSection />
      <FinanceChallengesSection />
      <MapStackSection />
      <FinanceSupportSection />
      <FinanceProjectsSection />
      <FaqSection />
    </div>
  );
}
