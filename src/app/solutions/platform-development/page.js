import '@/components/solutions/Solutions.css';
import PlatformDevHero from '@/components/solutions/platform-development/PlatformDevHero';
import AboutPlatformDevSection from '@/components/solutions/platform-development/AboutPlatformDevSection';
import PlatformsWeBuildDevSection from '@/components/solutions/platform-development/PlatformsWeBuildDevSection';
import PlatformDevProjectsSection from '@/components/solutions/platform-development/PlatformDevProjectsSection';
import PlatformDevApproachSection from '@/components/solutions/platform-development/PlatformDevApproachSection';
import PlatformDevBanner from '@/components/solutions/platform-development/PlatformDevBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Platform Development | Heapvue - Building Scalable & High-Performance Digital Platforms',
  description: 'Designing and developing robust, scalable platforms tailored to business needs, ensuring seamless performance, flexibility, and future-ready growth.',
};

const platformFaqs = [
  {
    id: 1,
    question: 'What technologies do you use for custom platform development?',
    answer: 'We build platforms using modern, cloud-native stacks including Node.js, Go, Python, React, Next.js, and PostgreSQL, deployed across AWS, GCP, or Azure with Docker and Kubernetes containerization.',
  },
  {
    id: 2,
    question: 'How do you ensure enterprise platforms can scale as our user base grows?',
    answer: 'We engineer horizontally scalable microservices, employ distributed caching (Redis), message queues (Kafka/RabbitMQ), and database read replicas to handle high concurrency with low latency.',
  },
  {
    id: 3,
    question: 'Can you integrate our new platform with existing internal databases and third-party tools?',
    answer: 'Yes. We build resilient REST and GraphQL APIs, event-driven webhooks, and secure integration middleware that connect smoothly with your CRM, ERP, payment gateways, and data warehouses.',
  },
];

export default function PlatformDevelopmentPage() {
  return (
    <div className="solutions-page-container">
      <PlatformDevHero />
      <AboutPlatformDevSection />
      <PlatformsWeBuildDevSection />
      <PlatformDevProjectsSection />
      <PlatformDevApproachSection />
      <PlatformDevBanner />
      <FaqSection customFaqs={platformFaqs} />
    </div>
  );
}
