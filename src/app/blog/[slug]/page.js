import BlogDetailClient from './BlogDetailClient';
import { fetchPublishedBlogs, fetchBlogBySlug } from '@/lib/cmsBlog';

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const blogs = await fetchPublishedBlogs({ limit: 100 });
    if (Array.isArray(blogs) && blogs.length > 0) {
      return blogs.map((b) => ({ slug: b.slug }));
    }
  } catch (err) {
    console.warn('generateStaticParams error:', err);
  }
  return [{ slug: 'default' }];
}

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  if (!slug) {
    return {
      title: 'Insights | Heapvue',
      description: 'Insights and expert perspectives from Heapvue on technology, engineering, and digital transformation.',
    };
  }

  try {
    const blog = await fetchBlogBySlug(slug);
    if (blog) {
      return {
        title: `${blog.title} | Heapvue Insights`,
        description: blog.excerpt || 'Insights and expert perspectives from Heapvue on technology and engineering.',
        alternates: {
          canonical: `/blog/${slug}`,
        },
        openGraph: {
          title: blog.title,
          description: blog.excerpt,
          images: blog.image ? [{ url: blog.image }] : [],
        },
      };
    }
  } catch {
    // fallback
  }

  const formattedTitle = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} | Heapvue Insights`,
    description:
      'Insights and expert perspectives from Heapvue on technology, engineering, and digital transformation.',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const slug = params?.slug;
  const blog = await fetchBlogBySlug(slug);

  const articleSchema = blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: blog.excerpt,
        datePublished: blog.publishedAt || undefined,
        dateModified: blog.publishedAt || undefined,
        author: {
          '@type': 'Organization',
          name: blog.author || 'Heapvue Team',
          url: 'https://heapvue.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Heapvue',
          url: 'https://heapvue.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://heapvue.com/images/Heapvue_Logo.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://heapvue.com/blog/${slug}`,
        },
        image: blog.image
          ? (blog.image.startsWith('http') ? blog.image : `https://heapvue.com${blog.image}`)
          : undefined,
      }
    : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogDetailClient slug={slug} initialPost={blog} />
    </>
  );
}
