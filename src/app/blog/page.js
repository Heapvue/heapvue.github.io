import { fetchPublishedBlogs } from '@/lib/cmsBlog';
import BlogClient from './BlogClient';

export const revalidate = 60;

export const metadata = {
  title: 'Heapvue Insights | Technology, Cloud & AI Engineering Articles',
  description: 'Explore the latest insights, architecture guides, and engineering articles on cloud modernization, AI workflows, and modern digital platforms from Heapvue.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Heapvue Insights | Technology, Cloud & AI Engineering Articles',
    description: 'Explore the latest insights, architecture guides, and engineering articles on cloud modernization, AI workflows, and modern digital platforms from Heapvue.',
    url: 'https://heapvue.com/blog',
    type: 'website',
    images: [
      {
        url: '/images/blog_analytics_dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Heapvue Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heapvue Insights | Technology, Cloud & AI Engineering Articles',
    description: 'Explore the latest insights, architecture guides, and engineering articles on cloud modernization, AI workflows, and modern digital platforms from Heapvue.',
    images: ['/images/blog_analytics_dashboard.jpg'],
  },
};

export default async function BlogPage() {
  let initialPosts = [];
  try {
    initialPosts = await fetchPublishedBlogs({ limit: 100 });
  } catch (err) {
    console.warn('Error fetching blogs in BlogPage server component:', err);
  }

  return <BlogClient initialPosts={initialPosts || []} />;
}
