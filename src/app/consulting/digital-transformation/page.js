import '@/components/consulting/Consulting.css';
import HeroSection from '@/components/consulting/digital-transformation/HeroSection';
import AboutSection from '@/components/consulting/digital-transformation/AboutSection';
import ServicesGridSection from '@/components/consulting/digital-transformation/ServicesGridSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EngagementsSection from '@/components/consulting/digital-transformation/EngagementsSection';
import ApproachSection from '@/components/consulting/digital-transformation/ApproachSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Digital Transformation | Heapvue - Strategy & Roadmap Consulting',
  description: 'Heapvue helps organisations develop practical digital transformation strategies that align technology investments with business objectives.',
};

const transformationFaqs = [
  {
    id: 1,
    question: 'How does Heapvue align digital transformation with existing business goals?',
    answer: 'We work directly with leadership and operational teams to audit existing workflows, pinpoint bottlenecks, and map out a phased technology roadmap tied directly to revenue growth, efficiency, and scalability objectives.',
  },
  {
    id: 2,
    question: 'What is involved in legacy system assessment and modernisation planning?',
    answer: 'We evaluate your legacy codebases, server architecture, and third-party dependencies to identify technical debt and security risks, then construct a low-risk migration blueprint that preserves data and business continuity.',
  },
  {
    id: 3,
    question: 'How do you support startups with product strategy and MVP planning?',
    answer: 'For startups, we define essential core features, recommend scalable tech stacks, design system architecture, and establish a milestone-based MVP development roadmap prior to full implementation.',
  },
  {
    id: 4,
    question: 'What happens after the digital transformation strategy is formulated?',
    answer: 'Heapvue provides continuous technical advisory, architectural oversight, and engineering support throughout execution to ensure implementation strictly follows the defined strategy.',
  },
];

export default function DigitalTransformationPage() {
  return (
    <div className="consulting-page-container">
      <HeroSection />
      <AboutSection />
      <ServicesGridSection />
      <MapStackSection />
      <EngagementsSection />
      <ApproachSection />
      <FaqSection customFaqs={transformationFaqs} />
    </div>
  );
}
