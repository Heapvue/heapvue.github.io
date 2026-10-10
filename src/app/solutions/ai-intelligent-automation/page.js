import '@/components/solutions/Solutions.css';
import AiHero from '@/components/solutions/ai-intelligent-automation/AiHero';
import AboutAiSection from '@/components/solutions/ai-intelligent-automation/AboutAiSection';
import WhatWeAutomateSection from '@/components/solutions/ai-intelligent-automation/WhatWeAutomateSection';
import MapStackSection from '@/components/industry/MapStackSection';
import AiProjectsSection from '@/components/solutions/ai-intelligent-automation/AiProjectsSection';
import AiApproachSection from '@/components/solutions/ai-intelligent-automation/AiApproachSection';
import AiBanner from '@/components/solutions/ai-intelligent-automation/AiBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'AI & Intelligent Automation | Heapvue - Building Practical AI Systems',
  description: 'Heapvue helps organisations build AI-powered systems that enhance customer engagement, automate interactions, and improve operational efficiency.',
};

const aiFaqs = [
  {
    id: 1,
    question: 'How do RAG-based AI chatbots work for customer engagement?',
    answer: 'RAG (Retrieval-Augmented Generation) chatbots combine retrieval algorithms with language models. They search your company’s internal knowledge base to retrieve accurate, up-to-date product information and deliver precise answers to visitors in real time.',
  },
  {
    id: 2,
    question: 'How does multilingual voice-to-text processing handle grammar correction?',
    answer: 'Our voice processing systems capture spoken input, transcribe it into text, and utilize specialized neural translation and grammar models to output grammatically correct text across multiple target languages.',
  },
  {
    id: 3,
    question: 'Can AI learning tools be tailored for special education and accessible learning?',
    answer: 'Yes! We design interactive AI modules that utilize visual prompts, structured exercises, and adaptive difficulty levels to make language learning engaging and accessible for children with special needs.',
  },
  {
    id: 4,
    question: 'How does Heapvue ensure AI solutions fit existing enterprise platforms?',
    answer: 'We architect flexible API endpoints and custom middleware that seamlessly link AI models directly into your current CRM, web applications, or mobile software without interrupting daily workflows.',
  },
];

export default function AiIntelligentAutomationPage() {
  return (
    <div className="solutions-page-container">
      {/* Hero Section */}
      <AiHero />

      {/* About AI Section */}
      <AboutAiSection />

      {/* What We Build Section */}
      <WhatWeAutomateSection />

      {/* Selected Projects Section */}
      <AiProjectsSection />

      {/* Our Approach to AI Solutions Section */}
      <AiApproachSection />

      {/* AI Banner Section */}
      <AiBanner />

      {/* FAQ Section */}
      <FaqSection customFaqs={aiFaqs} />
    </div>
  );
}
