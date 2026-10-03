import '@/components/consulting/Consulting.css';
import HeroSection from '@/components/consulting/ai-consulting/HeroSection';
import AboutSection from '@/components/consulting/ai-consulting/AboutSection';
import ServicesGridSection from '@/components/consulting/ai-consulting/ServicesGridSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EngagementsSection from '@/components/consulting/ai-consulting/EngagementsSection';
import ApproachSection from '@/components/consulting/ai-consulting/ApproachSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'AI Consulting | Heapvue - Strategy & Practical AI Implementation',
  description: 'Heapvue helps organisations identify high-value AI opportunities, select the right technologies, and implement intelligent solutions that align with business goals.',
};

const aiConsultingFaqs = [
  {
    id: 1,
    question: 'How do you identify high-value AI use cases for our business?',
    answer: 'We conduct AI opportunity assessments by auditing your operational bottlenecks, customer touchpoints, and data pipelines to isolate high-ROI use cases that deliver immediate value.',
  },
  {
    id: 2,
    question: 'What is Retrieval-Augmented Generation (RAG) and why is it useful?',
    answer: 'RAG connects generative AI models to your verified internal enterprise documents and databases, ensuring AI answers are accurate, grounded, and specific to your corporate knowledge.',
  },
  {
    id: 3,
    question: 'How does Heapvue validate AI ideas before full development?',
    answer: 'We build Proof of Concept (PoC) working prototypes within 2 to 4 weeks, testing accuracy, user experience, and technical feasibility before investing in production scale.',
  },
  {
    id: 4,
    question: 'Can AI be integrated with our existing CRM and enterprise tools?',
    answer: 'Yes, we engineer lightweight API microservices and secure connectors that embed AI capabilities directly into your existing CRMs, ERPs, and internal workflows.',
  },
];

export default function AiConsultingPage() {
  return (
    <div className="consulting-page-container">
      <HeroSection />
      <AboutSection />
      <ServicesGridSection />
      <MapStackSection />
      <EngagementsSection />
      <ApproachSection />
      <FaqSection customFaqs={aiConsultingFaqs} />
    </div>
  );
}
