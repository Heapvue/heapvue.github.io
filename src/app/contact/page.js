import '@/components/contact/Contact.css';
import ContactHero from '@/components/contact/ContactHero';
import ContactOptionsSection from '@/components/contact/ContactOptionsSection';
import ContactFormSection from '@/components/contact/ContactFormSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Contact Us | Heapvue - Let\'s Build Something Great Together',
  description: 'Have a project in mind or looking to scale your business with modern technology solutions? Connect with Heapvue to discuss AI-powered systems and cloud infrastructure.',
};

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      {/* First Section Hero (1440 x 728 / 1440 x 648) */}
      <ContactHero />

      {/* Contact Options Section (1440 x 269 / 1200 x 269 Hug) */}
      <ContactOptionsSection />

      {/* Contact Form & Info Section (1200 Hug x 626 Hug) */}
      <ContactFormSection />

      {/* Have Questions? We got Answers FAQ Section (1200 x 586) */}
      <FaqSection />
    </div>
  );
}
