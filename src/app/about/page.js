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
  alternates: {
    canonical: '/about',
  },
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
      <FaqSection customFaqs={aboutFaqs} />
    </div>
  );
}
