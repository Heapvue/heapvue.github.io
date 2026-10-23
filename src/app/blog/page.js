import { fetchPublishedBlogs } from '@/lib/cmsBlog';
import BlogClient from './BlogClient';

export const revalidate = 60;

export default async function BlogPage() {
  let initialPosts = [];
  try {
    initialPosts = await fetchPublishedBlogs({ limit: 100 });
  } catch (err) {
    console.warn('Error fetching blogs in BlogPage server component:', err);
  }

  return <BlogClient initialPosts={initialPosts || []} />;
}
