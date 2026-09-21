import '@/components/products/Products.css';
import ProductsHero from '@/components/products/ProductsHero';
import ProductsGridSection from '@/components/products/ProductsGridSection';
import CompanyLogosSection from '@/components/home/CompanyLogosSection';
import FaqSection from '@/components/home/FaqSection';

export const metadata = {
  title: 'Products | Heapvue - Powering Your Business with AI & Cloud-Native Products',
  description: 'We build and deploy modern, scalable products that help businesses automate, engage, and grow — faster.',
};

export default function ProductsPage() {
  return (
    <div className="products-page-container">
      {/* Products Hero Section (1440 x 648 Hug) */}
      <ProductsHero />

      {/* Solutions Built for Modern Businesses 5-Card Grid Section */}
      <ProductsGridSection />

      {/* Trusted Logos Strip */}
      <div className="py-4 bg-white">
        <CompanyLogosSection />
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
