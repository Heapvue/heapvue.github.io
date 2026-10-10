import '@/components/solutions/Solutions.css';
import EcommerceHero from '@/components/solutions/ecommerce-digital-experience/EcommerceHero';
import AboutEcommerceSection from '@/components/solutions/ecommerce-digital-experience/AboutEcommerceSection';
import WhatWeDeliverEcommerceSection from '@/components/solutions/ecommerce-digital-experience/WhatWeDeliverEcommerceSection';
import MapStackSection from '@/components/industry/MapStackSection';
import EcommerceProjectsSection from '@/components/solutions/ecommerce-digital-experience/EcommerceProjectsSection';
import EcommerceApproachSection from '@/components/solutions/ecommerce-digital-experience/EcommerceApproachSection';
import EcommerceBanner from '@/components/solutions/ecommerce-digital-experience/EcommerceBanner';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'E-commerce & Digital Experience | Heapvue - Modern Digital Platforms',
  description: 'Heapvue helps organisations build modern digital platforms that support online engagement, improve user experience, and enable reliable e-commerce operations.',
};

const ecommerceFaqs = [
  {
    id: 1,
    question: 'How does Heapvue help companies struggling with WooCommerce plugin conflicts?',
    answer: 'WooCommerce platforms often suffer from plugin conflicts and stability issues. Heapvue develops custom Node.js and React e-commerce engines that eliminate third-party plugin reliance, delivering higher speed, uptime, and maintainability.',
  },
  {
    id: 2,
    question: 'Can Heapvue build and customize Shopify-based online stores?',
    answer: 'Yes! We design and implement custom Shopify themes, product management workflows, and checkout integrations for online boutique brands and retail businesses.',
  },
  {
    id: 3,
    question: 'How do you approach website design and digital branding for specialized clinics or providers?',
    answer: 'We design responsive corporate websites focused on patient trust, clear service offerings, and technical SEO implementation to strengthen digital identity and attract more patients.',
  },
  {
    id: 4,
    question: 'What payment gateways and tools can be integrated into custom e-commerce platforms?',
    answer: 'We integrate all major payment gateways (Stripe, Razorpay, PayPal, Apple Pay) as well as inventory management tools, CRMs, and accounting software.',
  },
];

export default function EcommerceDigitalExperiencePage() {
  return (
    <div className="solutions-page-container">
      {/* Hero Section */}
      <EcommerceHero />

      {/* About Section */}
      <AboutEcommerceSection />

      {/* What We Build Section */}
      <WhatWeDeliverEcommerceSection />

      {/* Selected Projects Section */}
      <EcommerceProjectsSection />

      {/* Our Approach to Digital Platforms Section */}
      <EcommerceApproachSection />

      {/* E-commerce Banner Section */}
      <EcommerceBanner />

      {/* FAQ Section */}
      <FaqSection customFaqs={ecommerceFaqs} />
    </div>
  );
}
