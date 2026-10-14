import BlogDetailClient from './BlogDetailClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: 'the-impact-of-ai-and-ml-across-key-industries-in-2024' },
    { slug: 'improving-prediction-model-accuracy-strategies-solutions' },
    { slug: 'generative-ai-transforming-content-creation-personalization' },
    { slug: 'devops-2024-accelerated-digital-growth' },
    { slug: 'generative-ai-transforming-content-creation-personalization-2' },
    { slug: 'devops-2024-accelerated-digital-growth-2' },
    { slug: 'improving-prediction-model-accuracy-strategies-solutions-2' },
    { slug: 'zero-trust-cloud-architecture-compliance' },
    { slug: 'headless-ecommerce-micro-frontends' },
    { slug: 'event-driven-microservices-kubernetes' },
  ];
}

export function generateMetadata({ params }) {
  const formattedTitle = params?.slug
    ? params.slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Blog Detail';

  return {
    title: `${formattedTitle} | Heapvue Insights`,
    description:
      'Insights and expert perspectives from Heapvue on technology, engineering, and digital transformation.',
  };
}

export default function BlogDetailPage({ params }) {
  return <BlogDetailClient slug={params?.slug} />;
}
