import '@/components/contact/Contact.css';
import ContactHero from '@/components/contact/ContactHero';
import ContactOptionsSection from '@/components/contact/ContactOptionsSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Contact Us | Heapvue - Schedule a Technical Consultation',
  description: 'Connect with Heapvue’s engineering and product teams. Discuss custom platform development, cloud architecture, AI integrations, or product licensing.',
  alternates: {
    canonical: '/contact',
  },
};

const contactFaqs = [
  {
    id: 1,
    question: 'How quickly can I expect a response to my enquiry?',
    answer: 'Our engineering and solutions team reviews every enquiry and responds within 24 business hours with an initial technical assessment or scheduling for an introductory discovery session.',
  },
  {
    id: 2,
    question: 'Can we execute a Non-Disclosure Agreement (NDA) before sharing project details?',
    answer: 'Yes, absolutely. We routinely sign mutual Non-Disclosure Agreements (NDAs) before discussing proprietary business workflows, architecture specifications, or sensitive technical roadmaps.',
  },
  {
    id: 3,
    question: 'What engagement models does Heapvue support?',
    answer: 'We provide flexible engagement models tailored to your requirements, including end-to-end turnkey development, dedicated engineering pods, architecture advisory, and enterprise software product licensing.',
  },
  {
    id: 4,
    question: 'Where is Heapvue located and can we meet in person?',
    answer: 'Our primary engineering and corporate center is located at LR Towers, S Janatha Rd, Palarivattom, Kochi, Kerala. We facilitate both in-person meetings at our office and virtual technical sessions worldwide.',
  },
  {
    id: 5,
    question: 'How do you handle technical support and post-launch maintenance?',
    answer: 'We provide structured maintenance agreements, proactive health monitoring, automated security patching, and responsive continuous engineering support for all deployed applications.',
  },

];

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Options Cards */}
      <ContactOptionsSection />

      {/* Enquiry Form Section */}
      <ContactFormSection />

      {/* Frequently Asked Questions Section */}
      <FaqSection customFaqs={contactFaqs} />
    </div>
  );
}
