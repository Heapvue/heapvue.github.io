'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiSearch, FiX } from 'react-icons/fi';
import CaseStudySection from '@/components/home/CaseStudySection';
import AppointmentSection from '@/components/home/AppointmentSection';
import { trackMetaEvent } from '@/lib/metaPixel';
import { fetchPublishedBlogs } from '@/lib/cmsBlog';
import './Blog.css';

const INITIAL_BLOG_POSTS = [
  {
    id: 1,
    title: 'Improving Prediction Model Accuracy: Strategies and Soluti...',
    slug: 'improving-prediction-model-accuracy-strategies-solutions',
    excerpt: 'Heapvue partners with businesses across multiple industries to build scalable digital platforms, auto...',
    category: 'Data Science',
    author: 'Aswin Raj',
    date: 'Nov 4, 2024',
    image: '/images/blog_analytics_dashboard.jpg',
  },
  {
    id: 2,
    title: 'Generative AI: Transforming Content Creation and Personaliz...',
    slug: 'generative-ai-transforming-content-creation-personalization',
    excerpt: 'Discover how generative AI is revolutionizing content creation and personalization, from autom...',
    category: 'AI & Machine Learning',
    author: 'Akhil S Kumar',
    date: 'Aug 18, 2024',
    image: '/images/blog_genai_funnel.jpg',
  },
  {
    id: 3,
    title: "DevOps in 2024: Why It's a Must-Have for Accelerated Digit...",
    slug: 'devops-2024-accelerated-digital-growth',
    excerpt: 'Discover why DevOps has become essential for business success in 2024, its key benefits, emer...',
    category: 'DevOps',
    author: 'Akhil S Kumar',
    date: 'May 11, 2024',
    image: '/images/blog_devops_diagram.jpg',
  },
  {
    id: 4,
    title: 'Generative AI: Transforming Content Creation and Personaliz...',
    slug: 'generative-ai-transforming-content-creation-personalization-2',
    excerpt: 'Discover how generative AI is revolutionizing content creation and personalization, from autom...',
    category: 'AI & Machine Learning',
    author: 'Akhil S Kumar',
    date: 'Aug 18, 2024',
    image: '/images/blog_genai_funnel.jpg',
  },
  {
    id: 5,
    title: "DevOps in 2024: Why It's a Must-Have for Accelerated Digit...",
    slug: 'devops-2024-accelerated-digital-growth-2',
    excerpt: 'Discover why DevOps has become essential for business success in 2024, its key benefits, emer...',
    category: 'DevOps',
    author: 'Akhil S Kumar',
    date: 'May 11, 2024',
    image: '/images/blog_devops_diagram.jpg',
  },
  {
    id: 6,
    title: 'Improving Prediction Model Accuracy: Strategies and Soluti...',
    slug: 'improving-prediction-model-accuracy-strategies-solutions-2',
    excerpt: 'Heapvue partners with businesses across multiple industries to build scalable digital platforms, auto...',
    category: 'Data Science',
    author: 'Aswin Raj',
    date: 'Nov 4, 2024',
    image: '/images/blog_analytics_dashboard.jpg',
  },
  {
    id: 7,
    title: 'Zero-Trust Cloud Architecture: Designing for Compliance in 2024',
    slug: 'zero-trust-cloud-architecture-compliance',
    excerpt: 'Key strategies for multi-cloud governance, automated cryptographic audits, and DPDP/GDPR alignment without latency penalties.',
    category: 'Cloud Architecture',
    author: 'Aswin Raj',
    date: 'Apr 24, 2024',
    image: '/images/indus1.png',
  },
  {
    id: 8,
    title: 'Headless E-Commerce: Maximizing Conversion with Micro-Frontends',
    slug: 'headless-ecommerce-micro-frontends',
    excerpt: 'Why decoupled architectures deliver sub-second page loads, elastic checkout pipelines, and superior omnichannel journeys.',
    category: 'Cloud Architecture',
    author: 'Akhil S Kumar',
    date: 'Apr 02, 2024',
    image: '/images/indus3.png',
  },
  {
    id: 9,
    title: 'Building Resilient Event-Driven Microservices on Kubernetes',
    slug: 'event-driven-microservices-kubernetes',
    excerpt: 'Architectural lessons on Kafka partitions, gRPC communication protocols, and self-healing containerized deployments at scale.',
    category: 'DevOps',
    author: 'Aswin Raj',
    date: 'Mar 15, 2024',
    image: '/images/indus5.png',
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(INITIAL_BLOG_POSTS);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Fetch published blogs dynamically from CMS backend
  useEffect(() => {
    let isMounted = true;
    async function loadCmsBlogs() {
      try {
        const cmsBlogs = await fetchPublishedBlogs({ limit: 50 });
        if (isMounted && cmsBlogs && cmsBlogs.length > 0) {
          // Merge CMS blogs ahead of static posts (deduplicating by slug)
          const cmsSlugs = new Set(cmsBlogs.map((b) => b.slug));
          const nonDuplicateStatic = INITIAL_BLOG_POSTS.filter(
            (sp) => !cmsSlugs.has(sp.slug)
          );
          setPosts([...cmsBlogs, ...nonDuplicateStatic]);
        }
      } catch (err) {
        console.warn('Using static blog posts fallback:', err);
      }
    }
    loadCmsBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    trackMetaEvent('Lead', { content_name: 'blog_book_a_call' });
    trackMetaEvent('Schedule', { content_name: 'blog_book_a_call' });
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  // Dynamically compute unique categories from all loaded blogs
  const categories = useMemo(() => {
    const cats = ['All'];
    const seen = new Set();
    posts.forEach((p) => {
      if (p.category && !seen.has(p.category)) {
        seen.add(p.category);
        cats.push(p.category);
      }
    });
    return cats;
  }, [posts]);

  // Filter posts based on category and live search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        (post.title && post.title.toLowerCase().includes(query)) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
        (post.author && post.author.toLowerCase().includes(query)) ||
        (post.category && post.category.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="blog-page-container">
      {/* ====================================================================
          1. Hero Section: Orange Noise Texture Background Matching Reference
          ==================================================================== */}
      <section className="blog-hero-section">
        {/* Organic Fine Grain Noise Texture Overlay */}
        <div className="blog-hero-noise-overlay" aria-hidden="true" />

        {/* Soft painted edge accents matching reference */}
        <div className="blog-hero-edge-accent-left" aria-hidden="true">
          <div className="blog-hero-impasto-texture" />
        </div>
        <div className="blog-hero-edge-accent-right" aria-hidden="true" />

        <div className="blog-hero-content-container">
          <div className="blog-hero-row">
            {/* Left Column: Heading, Subtitle & Book a Call Form */}
            <div className="blog-hero-left">
              <h1 className="blog-hero-title">
                Insights for the<br />
                Digital Age
              </h1>

              <p className="blog-hero-description">
                Learn about the best revenue operations strategies, growth strategies, and ways to increase go-to-market efficiencies from Default&apos;s experts.
              </p>

              <form onSubmit={handleSubscribe} className="blog-hero-form">
                <input
                  type="email"
                  className="blog-hero-email-input"
                  placeholder="Your Work Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="blog-hero-btn">
                  {submitted ? 'Request Sent!' : 'Book a call'}
                </button>
              </form>
            </div>

            {/* Right Column: Featured Read Halo Card */}
            <div className="blog-hero-right">
              <div className="blog-featured-card-wrapper">
                <div className="blog-featured-card">
                  {/* Top Meta Header */}
                  <div className="blog-featured-header">
                    <span className="blog-featured-badge">FEATURED READ</span>
                    <span className="blog-featured-meta">Feb 18, 2024 • Aswin Raj</span>
                  </div>

                  {/* 3D AI Digital Image */}
                  <div className="blog-featured-img-box">
                    <Image
                      src="/images/blog_featured_ai.jpg"
                      alt="How AI and Machine Learning Are Reshaping Enterprise Workflows"
                      width={440}
                      height={248}
                      className="blog-featured-img"
                      priority
                    />
                  </div>

                  {/* Article Title */}
                  <h3 className="blog-featured-title">
                    How AI and Machine Learning Are Re...
                  </h3>

                  {/* Black Read Button */}
                  <Link href="/blog/the-impact-of-ai-and-ml-across-key-industries-in-2024" className="blog-featured-read-btn">
                    Read <span>&raquo;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Insights & News Grid Section Matching Reference Image 1
          ==================================================================== */}
      <section className="blog-grid-section" id="blog-grid">
        <div className="blog-grid-container">
          {/* Section Header */}
          <div className="blog-section-header">
            <div className="blog-section-header-left">
              <div className="casestudy-badge-capsule mb-3">
                <span className="badge-bullet">▪</span>
                <span className="badge-text">Our Insights &amp; News</span>
              </div>

              <h2 className="blog-section-main-title">
                Smart Technology <span className="blog-title-blue">Solutions</span><br />
                for <span className="blog-title-blue">Modern Industries</span>
              </h2>
            </div>

            <div className="blog-section-header-right">
              <p className="blog-section-description">
                Heapvue partners with businesses across multiple industries to build scalable digital platforms, automate operations, and deliver intelligent user experiences powered by modern technology.
              </p>
            </div>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="blog-controls-bar">
            <div className="blog-search-container">
              <FiSearch className="blog-search-icon" />
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search blogs by title, keywords, topic, or author..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="blog-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <FiX />
                </button>
              )}
            </div>

            <div className="blog-category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`blog-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid (3 Columns matching Image 1) */}
          {displayedPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {displayedPosts.map((post) => (
                <article key={post.id} className="blog-card-item">
                  <div className="blog-card-image-box">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={440}
                      height={260}
                      className="blog-card-img"
                    />
                  </div>

                  <div className="blog-card-body">
                    <h3 className="blog-card-title">
                      {post.title}
                    </h3>

                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>

                    <div className="blog-card-divider" />

                    <div className="blog-card-footer">
                      <span className="blog-card-meta">
                        {post.date} &bull; {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-card-arrow-btn"
                        aria-label={`Read article: ${post.title}`}
                      >
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted fs-5 mb-3">
                No articles found matching &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ borderRadius: 0 }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="blog-load-more-wrapper">
              <button
                type="button"
                className="blog-load-more-btn"
                onClick={handleLoadMore}
              >
                Load More <FiArrowRight className="ms-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          3. Case Study Section (Imported from Home page)
          ==================================================================== */}
      <CaseStudySection />

      {/* ====================================================================
          4. Technical Consultation Section (Imported from Home page)
          ==================================================================== */}
      <AppointmentSection />
    </div>
  );
}
