/**
 * Heapvue CMS Blog Service Integration
 * Connects heapvue-website to Go CMS Backend (https://cms.heapvue.cloud)
 */

export const CMS_BASE_URL = (
  process.env.NEXT_PUBLIC_CMS_API_URL || 'https://cms.heapvue.cloud'
).replace(/\/+$/, '');

/**
 * Resolves featured image path or URL
 */
export function resolveBlogImage(img) {
  if (!img) return '/images/blog_analytics_dashboard.jpg';
  if (img.startsWith('http://') || img.startsWith('https://')) return img;
  if (img.startsWith('/uploads/')) return `${CMS_BASE_URL}${img}`;
  if (img.startsWith('/')) return img;
  return `/${img}`;
}

/**
 * Formats a CMS API blog record to match the website schema
 */
export function formatCmsBlog(blog) {
  if (!blog) return null;

  let dateStr = 'Recently published';
  const rawDate = blog.published_at || blog.publishedAt || blog.created_at || blog.createdAt;
  if (rawDate) {
    try {
      const d = new Date(rawDate);
      if (!isNaN(d.getTime())) {
        dateStr = d.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
      }
    } catch {
      dateStr = 'Recently published';
    }
  }

  // Extract clean excerpt if not provided
  let excerpt = blog.excerpt;
  if (!excerpt && blog.content) {
    excerpt = blog.content
      .replace(/^#+ .*\n+/gm, '')
      .replace(/[*_#`[\]()]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 160);
    if (excerpt.length >= 160) excerpt += '...';
  }

  const primaryImage =
    blog.featured_image || (Array.isArray(blog.images) && blog.images[0]) || '';

  const authorName = blog.author_name || blog.author || 'Heapvue Team';
  const authorAvatar = blog.author_avatar || blog.authorAvatar || '/images/akhil.jpeg';

  return {
    id: blog.id,
    title: blog.title || '',
    slug: blog.slug || '',
    excerpt: excerpt || '',
    content: blog.content || '',
    category: blog.category || 'Technology',
    author: authorName,
    authorAvatar: authorAvatar,
    date: dateStr,
    publishedAt: rawDate || null,
    readTime: blog.read_time || '5 min read',
    image: resolveBlogImage(primaryImage),
    images: Array.isArray(blog.images) ? blog.images : [],
    tags: Array.isArray(blog.tags) ? blog.tags : [],
    isPublished: blog.is_published,
    fromCms: true,
  };
}

/**
 * Fetches all published blogs from CMS
 */
export async function fetchPublishedBlogs({ limit = 50, page = 1, category = '', search = '' } = {}) {
  try {
    const params = new URLSearchParams({
      limit: String(limit),
      page: String(page),
      is_published: 'true',
    });
    if (category && category !== 'All') params.append('category', category);
    if (search) params.append('search', search);

    const res = await fetch(`${CMS_BASE_URL}/api/v1/blogs?${params.toString()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const json = await res.json();
    if (json && Array.isArray(json.data)) {
      return json.data.map(formatCmsBlog).filter(Boolean);
    }
    return [];
  } catch (err) {
    console.warn('CMS Blog Fetch Warning (falling back to static content):', err.message);
    return [];
  }
}

/**
 * Fetches a single blog post by identifier (slug or ID)
 */
export async function fetchBlogBySlug(slug) {
  if (!slug) return null;
  try {
    const res = await fetch(`${CMS_BASE_URL}/api/v1/blogs/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json && json.data) {
      return formatCmsBlog(json.data);
    }
    return null;
  } catch (err) {
    console.warn(`CMS Blog Fetch By Slug Warning (${slug}):`, err.message);
    return null;
  }
}
