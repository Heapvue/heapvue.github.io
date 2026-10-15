import '@/components/about/About.css';
import AboutHero from '@/components/about/AboutHero';
import ClientsSection from '@/components/home/ClientsSection';
import OurMissionSection from '@/components/about/OurMissionSection';
import OurStorySection from '@/components/about/OurStorySection';
import OurCoreValuesSection from '@/components/about/OurCoreValuesSection';
import OurFoundersSection from '@/components/about/OurFoundersSection';
import WhyChooseSection from '@/components/about/WhyChooseSection';
import CaseStudySection from '@/components/home/CaseStudySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AppointmentSection from '@/components/home/AppointmentSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'About Us | Heapvue - Innovating for a Better Tomorrow',
  description: 'Learn about Heapvue’s leadership, history, engineering team, and culture. Founded in 2021 in Kochi, India, engineering custom software and SaaS products.',
};

const aboutFaqs = [
  {
    id: 1,
    question: 'Where is Heapvue headquartered and where are your teams located?',
    answer: 'Heapvue is headquartered in Kochi (Palarivattom, Ernakulam), Kerala, India. We operate our core engineering and product development hub from Kochi with strategic growth and advisory partners supporting clients across North America and the APAC region.',
  },
  {
    id: 2,
    question: 'When was Heapvue founded and how large is the organization?',
    answer: 'Heapvue was established in 2021. Our team consists of 30+ dedicated full-stack software engineers, cloud architects, AI specialists, and UI/UX designers.',
  },
  {
    id: 3,
    question: 'How do you balance proprietary products and client consulting?',
    answer: 'We operate dedicated teams for product development and client engineering services. Insights from custom client implementations inform our product roadmaps, while our proprietary platforms serve as powerful accelerators for client projects.',
  },
  {
    id: 4,
    question: 'How can developers or designers join the Heapvue team?',
    answer: 'We are continually seeking exceptional problem-solvers. You can explore open roles or send your resume, GitHub profile, or portfolio directly to careers@heapvue.com.',
  },
];

const homeFaqs = [
  {
    id: 1,
    question: "Are Valley's messages really personalized, or just sophisticated templates?",
    answer: "Every Valley message is based on 60+ data points of research - recent LinkedIn posts, company news, podcast appearances, funding rounds, job changes, mutual connections. The AI references what the prospect actually cares about, in your voice. Prospects reply with 'This is one of the best cold DMs I've ever gotten!' (real quote). See 100+ unedited examples at coolnessogebre.com.",
  },
  {
    id: 2,
    question: 'Does Valley find leads, or do I provide lists?',
    answer: 'Valley can both source hyper-targeted leads matching your ideal customer profile and enrich lists you provide. Our proprietary scrapers discover verified contact coordinates with sub-zero bounce rates.',
  },
  {
    id: 3,
    question: 'Will my LinkedIn account get restricted?',
    answer: 'Never. Valley operates within strict cloud session emulations mimicking genuine human interaction rhythms, randomized keystroke intervals, and native regional IP addresses.',
  },
  {
    id: 4,
    question: 'What does Valley replace in my current stack?',
    answer: 'Valley completely replaces fragmented outbound tools including manual lead research spreadsheets, traditional SDR cadences, and static mail-merge senders with a single autonomous agent.',
  },
  {
    id: 5,
    question: 'How do Heapvue’s software products differ from your custom engineering services?',
    answer: 'Heapvue provides both ready-to-deploy software products (such as Vuecart, Heapsync, and ChatPress) and bespoke software engineering tailored to your proprietary infrastructure.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <AboutHero />

      {/* Trusted By Users Worldwide Section */}
      <ClientsSection />

      {/* Our Mission Section */}
      <OurMissionSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Our Core Values Section */}
      <OurCoreValuesSection />

      {/* Leadership, Founders & Strategic Partners Section */}
      <OurFoundersSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Why Choose Heapvue */}
      <WhyChooseSection />

      {/* Featured Case Study Section */}
      <CaseStudySection />

      {/* Book an Appointment Section */}
      <AppointmentSection />

      {/* Have Questions? FAQ Section */}
      <FaqSection customFaqs={homeFaqs} />
    </div>
  );
}
