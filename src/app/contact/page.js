import '@/components/contact/Contact.css';
import ContactHero from '@/components/contact/ContactHero';
import ContactOptionsSection from '@/components/contact/ContactOptionsSection';
import ContactFormSection from '@/components/contact/ContactFormSection';

export const metadata = {
  title: 'Contact Us | Heapvue - Schedule a Technical Consultation',
  description: 'Connect with Heapvue’s engineering and product teams. Discuss custom platform development, cloud architecture, AI integrations, or product licensing.',
};

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Options Cards */}
      <ContactOptionsSection />

      {/* Standardized Contact Form & Verified Office Details (Off-topic FAQ removed) */}
      <ContactFormSection />
    </div>
  );
}
