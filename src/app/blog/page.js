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

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(true);
        const cmsBlogs = await fetchPublishedBlogs({ limit: 100 });
        if (isMounted) {
          setPosts(cmsBlogs || []);
        }
      } catch (err) {
        console.warn('Failed to load dynamic blogs from CMS:', err);
        if (isMounted) setPosts([]);
      } finally {
        if (isMounted) setIsLoading(false);
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

  const featuredPost = posts.length > 0 ? posts[0] : null;

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
                Explore expert perspectives on software architecture, AI engineering, and modern digital platforms from Heapvue&apos;s technology team.
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
                {featuredPost ? (
                  <div className="blog-featured-card">
                    <div className="blog-featured-header">
                      <span className="blog-featured-badge">FEATURED READ</span>
                      <span className="blog-featured-meta">{featuredPost.date} • {featuredPost.author}</span>
                    </div>

                    <div className="blog-featured-img-box">
                      <Image
                        src={featuredPost.image || "/images/blog_featured_ai.jpg"}
                        alt={featuredPost.title}
                        width={440}
                        height={248}
                        className="blog-featured-img"
                        priority
                      />
                    </div>

                    <h3 className="blog-featured-title">
                      {featuredPost.title}
                    </h3>

                    <Link href={`/blog/${featuredPost.slug}`} className="blog-featured-read-btn">
                      Read <span>&raquo;</span>
                    </Link>
                  </div>
                ) : (
                  <div className="blog-featured-card">
                    <div className="blog-featured-header">
                      <span className="blog-featured-badge">HEAPVUE INSIGHTS</span>
                      <span className="blog-featured-meta">Editorial Perspectives</span>
                    </div>

                    <div className="blog-featured-img-box">
                      <Image
                        src="/images/blog_featured_ai.jpg"
                        alt="Heapvue Engineering Insights"
                        width={440}
                        height={248}
                        className="blog-featured-img"
                        priority
                      />
                    </div>

                    <h3 className="blog-featured-title">
                      Engineering &amp; Enterprise Cloud Architecture
                    </h3>

                    <a href="#blog-grid" className="blog-featured-read-btn">
                      Explore Articles <span>&raquo;</span>
                    </a>
                  </div>
                )}
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

          {/* Posts Grid */}
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-3" role="status" style={{ width: "2.5rem", height: "2.5rem" }}>
                <span className="visually-hidden">Loading articles...</span>
              </div>
              <p className="text-muted">Loading latest insights from Heapvue CMS...</p>
            </div>
          ) : displayedPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {displayedPosts.map((post) => (
                <article key={post.id || post.slug} className="blog-card-item">
                  <div className="blog-card-image-box">
                    <Image
                      src={post.image || "/images/blog_analytics_dashboard.jpg"}
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
          ) : posts.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted fs-5 mb-2">
                No published articles available at this time.
              </p>
              <p className="text-secondary small">
                Articles published in Heapvue CMS will automatically appear here.
              </p>
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
