import '@/components/consulting/Consulting.css';
import HeroSection from '@/components/consulting/technology-consulting/HeroSection';
import AboutSection from '@/components/consulting/technology-consulting/AboutSection';
import ServicesGridSection from '@/components/consulting/technology-consulting/ServicesGridSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EngagementsSection from '@/components/consulting/technology-consulting/EngagementsSection';
import ApproachSection from '@/components/consulting/technology-consulting/ApproachSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Technology Consulting | Heapvue - Architecture & Tech Stack Evaluation',
  description: 'Heapvue provides technology consulting services that help organisations evaluate, plan, and implement the right technology solutions.',
};

const techConsultingFaqs = [
  {
    id: 1,
    question: 'How do you evaluate and select the right technology stack for an organisation?',
    answer: 'We evaluate your performance requirements, scalability goals, team capabilities, ecosystem integrations, and total cost of ownership to recommend the optimal frameworks, databases, and cloud services.',
  },
  {
    id: 2,
    question: 'What is included in software architecture consulting?',
    answer: 'We design modular, resilient system blueprints covering API gateways, microservices, database schema design, caching layers, and cloud infrastructure layout.',
  },
  {
    id: 3,
    question: 'How does Heapvue perform performance, scalability, and security reviews?',
    answer: 'Our senior architects inspect codebases, database indexing, API query speeds, server load configurations, and security practices to identify bottlenecks and vulnerabilities.',
  },
  {
    id: 4,
    question: 'Can Heapvue guide migration from legacy architectures to modern Node.js or cloud stacks?',
    answer: 'Yes, we specialize in low-risk migration planning, helping organizations transition off unstable legacy platforms (such as outdated monolithic setups or complex plugin stacks) to modern, maintainable architectures.',
  },
];

export default function TechnologyConsultingPage() {
  return (
    <div className="consulting-page-container">
      <HeroSection />
      <AboutSection />
      <ServicesGridSection />
      <MapStackSection />
      <EngagementsSection />
      <ApproachSection />
      <FaqSection customFaqs={techConsultingFaqs} />
    </div>
  );
}
