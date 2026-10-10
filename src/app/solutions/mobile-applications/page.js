import '@/components/solutions/Solutions.css';
import MobileHero from '@/components/solutions/mobile-applications/MobileHero';
import AboutMobileSection from '@/components/solutions/mobile-applications/AboutMobileSection';
import WhatWeBuildMobileSection from '@/components/solutions/mobile-applications/WhatWeBuildMobileSection';
import MapStackSection from '@/components/industry/MapStackSection';
import MobileProjectsSection from '@/components/solutions/mobile-applications/MobileProjectsSection';
import MobileApproachSection from '@/components/solutions/mobile-applications/MobileApproachSection';
import MobileBanner from '@/components/solutions/mobile-applications/MobileBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Mobile Applications | Heapvue - Intuitive & Reliable Mobile Apps',
  description: 'Heapvue helps organisations design and build mobile applications that deliver practical functionality, intuitive user experiences, and reliable performance.',
};

const mobileFaqs = [
  {
    id: 1,
    question: 'How do healthcare patient engagement apps handle online consultations and follow-ups?',
    answer: 'We build secure, HIPAA-compliant patient platforms that allow users to book appointments, receive doctor recommendations, manage follow-up reminders, and perform video/chat consultations seamlessly.',
  },
  {
    id: 2,
    question: 'Can Heapvue build lifestyle and wellness apps with personalized diet plans and routines?',
    answer: 'Yes! We engineer lifestyle and coaching platforms that deliver customized diet plans, exercise tracking, push reminders, and educational media tailored to individual health goals.',
  },
  {
    id: 3,
    question: 'How does the multilingual voice-to-text application process voice across languages?',
    answer: 'The subscription-based mobile application captures voice audio in one language, processes neural translation models, corrects grammar in real time, and outputs formatted text across multiple target languages.',
  },
  {
    id: 4,
    question: 'Do your mobile applications integrate with existing cloud databases and APIs?',
    answer: 'Yes, every mobile application is engineered to integrate smoothly with your existing backend systems, CRMs, payment gateways, and enterprise APIs.',
  },
];

export default function MobileApplicationsPage() {
  return (
    <div className="solutions-page-container">
      {/* Hero Section */}
      <MobileHero />

      {/* About Mobile Section */}
      <AboutMobileSection />

      {/* What We Build Section */}
      <WhatWeBuildMobileSection />

      {/* Selected Projects Section */}
      <MobileProjectsSection />

      {/* Our Approach to Mobile App Development Section */}
      <MobileApproachSection />

      {/* Mobile Banner Section */}
      <MobileBanner />

      {/* FAQ Section */}
      <FaqSection customFaqs={mobileFaqs} />
    </div>
  );
}
