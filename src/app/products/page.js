import '@/components/products/Products.css';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsGridSection from '@/components/products/ProductsGridSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Products | Heapvue - Ready-to-Deploy Software Products',
  description: 'Explore Heapvue’s proprietary software platforms: VueCart headless commerce, HeapSync CRM, ChatPress AI, AppTuner, and Learnly LMS.',
};

const productFaqs = [
  {
    id: 1,
    question: 'Can we try Heapvue products before committing to a commercial license?',
    answer: 'Yes. All our products offer trial periods (14 to 30 days) or interactive sandboxes so your technical and business teams can evaluate the platform firsthand.',
  },
  {
    id: 2,
    question: 'How does deployment work for Heapvue products?',
    answer: 'We support both managed multi-tenant SaaS hosting and private cloud deployment (AWS, GCP, Azure) for enterprise teams that require dedicated VPC isolation and custom compliance configurations.',
  },
  {
    id: 3,
    question: 'Can Heapvue customize a product specifically for our organizational workflows?',
    answer: 'Absolutely. Because we engineered each product from the ground up, our software engineering team can build custom integrations, proprietary algorithmic plugins, or bespoke UI modules tailored to your operations.',
  },
  {
    id: 4,
    question: 'Do you offer API access and webhooks for third-party system integration?',
    answer: 'Yes. Every Heapvue product is engineered API-first with documented REST endpoints and event-driven webhooks for bi-directional data synchronization with your CRM, ERP, and analytics tools.',
  },
];

export default function ProductsPage() {
  return (
    <div className="products-page-container">
      {/* Products Hero Section */}
      <ProductsHero />

      {/* Solutions Built for Modern Businesses 5-Card Grid Section */}
      <ProductsGridSection />

      {/* Product-Specific FAQ Section */}
      <FaqSection customFaqs={productFaqs} />
    </div>
  );
}
