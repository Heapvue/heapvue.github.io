import '@/components/about/About.css';
import AboutHero from '@/components/about/AboutHero';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';
import OurMissionSection from '@/components/about/OurMissionSection';
import OurStorySection from '@/components/about/OurStorySection';
import OurCoreValuesSection from '@/components/about/OurCoreValuesSection';
import OurFoundersSection from '@/components/about/OurFoundersSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseSection from '@/components/about/WhyChooseSection';
import CaseStudySection from '@/components/home/CaseStudySection';
import AppointmentSection from '@/components/home/AppointmentSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'About Us | Heapvue - Innovating for a Better Tomorrow',
  description: 'Heapvue is a technology-driven company focused on delivering scalable digital solutions through AI, software engineering, cloud infrastructure, and modern product design.',
};

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* First Section Hero (1440 x 648) */}
      <AboutHero />

      {/* Trusted By Users Worldwide Section (1440 x 120) */}
      <CompanyLogosSection />

      {/* Our Mission Section (1200 x 343 Hug) */}
      <OurMissionSection />

      {/* Our Story Section (1200 x 1046 Hug) */}
      <OurStorySection />

      {/* Our Core Values Section (1200 x 530.49 Hug) */}
      <OurCoreValuesSection />

      {/* Our Founders & Strategic Partners Section (1200 x 530.63 Hug) */}
      {/* <OurFoundersSection /> */}

      {/* Testimonials Section: Trusted by Businesses Building for the Future (1440 x 810) */}
      <TestimonialsSection />

      {/* Why Choose Heapvue Section (1440 x 537 / 1200 x 537 Hug) */}
      <WhyChooseSection />

      {/* Case Study Section: Real Business Problems. Smart Technology Solutions (1200 x 897) */}
      <CaseStudySection />

      {/* Book an Appointment Section: Smarter Outreach. Better Conversations. Faster Growth. (1200 x 901.83 Hug) */}
      <AppointmentSection />

      {/* Have Questions? We got Answers FAQ Section (1200 x 586) */}
      <FaqSection />
    </div>
  );
}
