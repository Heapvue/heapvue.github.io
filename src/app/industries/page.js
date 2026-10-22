import HealthcarePage, { metadata as healthcareMetadata } from './healthcare/page';

export const metadata = {
  ...healthcareMetadata,
  title: 'Healthcare Technology Solutions | Heapvue',
  description: 'Heapvue delivers cutting-edge healthcare technology solutions powered by artificial intelligence that enhance patient care, streamline clinical workflows, and improve operational efficiency.',
  alternates: {
    canonical: '/industries/healthcare',
  },
};

export default HealthcarePage;
