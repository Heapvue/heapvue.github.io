'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Markdown from 'react-markdown';
import { trackMetaEvent } from '@/lib/metaPixel';
import { fetchBlogBySlug, fetchPublishedBlogs } from '@/lib/cmsBlog';
import {
  FiCalendar,
  FiClock,
  FiTag,
  FiArrowRight,
  FiCheck,
} from 'react-icons/fi';
import FaqSection from '@/components/home/FaqSection';
import '../Blog.css';
import './BlogDetail.css';

const blogFaqs = [
  {
    id: 1,
    question: "How do Heapvue's engineering insights translate into custom client solutions?",
    answer: "Our technical articles reflect real-world architectural patterns and production lessons from our engineering engagements. We leverage these verified patterns to build custom, scalable, and resilient software for our clients.",
  },
  {
    id: 2,
    question: "How do Heapvue's proprietary software products differ from your custom engineering services?",
    answer: "Heapvue provides both ready-to-deploy software products (such as Vuecart for e-commerce, Heapsync for CRM, and ChatPress for AI interactions) and bespoke software engineering. You can adopt our pre-built platforms for rapid deployment or engage our teams for bespoke architecture tailored to your business needs.",
  },
  {
    id: 3,
    question: "Can our team engage Heapvue for technology advisory or architecture audits?",
    answer: "Yes. In addition to full-cycle software engineering, we offer fractional CTO services, cloud architecture reviews, zero-trust security audits, and buy-vs-build feasibility assessments.",
  },
  {
    id: 4,
    question: "How can we discuss a project or request a technical consultation?",
    answer: "You can reach our engineering team directly via our Contact page or schedule an initial technical discussion. We respond within 24 business hours with an initial review of your requirements.",
  },
];

export default function BlogDetailClient({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params?.slug;

  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [activeToc, setActiveToc] = useState('');
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

  // In-article CTA form
  const [ctaName, setCtaName] = useState('');
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaBooked, setCtaBooked] = useState(false);

  // Fetch blog detail dynamically from CMS
  useEffect(() => {
    let isMounted = true;
    async function loadBlog() {
      if (!slug) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        const post = await fetchBlogBySlug(slug);
        if (isMounted) {
          setBlogPost(post);
        }
      } catch (err) {
        console.warn('Failed to load blog detail by slug:', err);
        if (isMounted) setBlogPost(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    loadBlog();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Fetch related posts from CMS
  useEffect(() => {
    let isMounted = true;
    async function loadRelated() {
      try {
        const posts = await fetchPublishedBlogs({ limit: 6 });
        if (isMounted && posts && posts.length > 0) {
          const filtered = posts.filter((p) => p.slug !== slug).slice(0, 3);
          if (filtered.length > 0) {
            setRelatedPosts(filtered);
          }
        }
      } catch (err) {
        console.warn('Using static related posts fallback:', err);
      }
    }
    loadRelated();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Dynamically extract TOC headings from markdown content
  const tocSections = useMemo(() => {
    if (!blogPost?.content) return [];
    const lines = blogPost.content.split('\n');
    const sections = [];
    let idx = 1;
    lines.forEach((line) => {
      const match = line.match(/^##\s+(.+)$/);
      if (match) {
        const rawTitle = match[1].replace(/[*_`]/g, '').trim();
        const id = 'sec-' + rawTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        sections.push({
          id,
          title: `${idx}. ${rawTitle}`,
        });
        idx++;
      }
    });
    return sections;
  }, [blogPost]);

  useEffect(() => {
    if (tocSections.length > 0 && !activeToc) {
      setActiveToc(tocSections[0].id);
    }
  }, [tocSections, activeToc]);

  const handleSidebarSubscribe = (e) => {
    e.preventDefault();
    if (!sidebarEmail) return;
    setSidebarSubscribed(true);
    setTimeout(() => {
      setSidebarEmail('');
      setSidebarSubscribed(false);
    }, 4000);
  };

  const handleCtaBook = (e) => {
    e.preventDefault();
    if (!ctaEmail) return;
    trackMetaEvent('Lead', { content_name: 'blog_article_appointment' });
    trackMetaEvent('Schedule', { content_name: 'blog_article_appointment' });
    setCtaBooked(true);
    setTimeout(() => {
      setCtaName('');
      setCtaEmail('');
      setCtaBooked(false);
    }, 4000);
  };

  if (loading) {
    return (
      <div className="blog-page-container text-center py-5" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: "2.5rem", height: "2.5rem" }}>
            <span className="visually-hidden">Loading article...</span>
          </div>
          <p className="text-muted">Loading article from Heapvue Insights...</p>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="blog-page-container text-center py-5" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="container py-5">
          <h1 className="h2 mb-3 font-weight-bold">Article Not Found</h1>
          <p className="text-muted mb-4 fs-5" style={{ maxWidth: 520, margin: "0 auto" }}>
            The article you are looking for may have been moved, unpublished, or does not exist.
          </p>
          <Link href="/blog" className="btn btn-primary" style={{ borderRadius: 0, padding: "10px 24px", fontWeight: 600 }}>
            Back to All Insights
          </Link>
        </div>
      </div>
    );
  }

  // Resolved metadata from dynamic CMS post
  const title = blogPost.title;
  const subtitle = blogPost.excerpt;
  const authorName = blogPost.author || "Heapvue Team";
  const authorAvatar = blogPost.authorAvatar || "/images/akhil.jpeg";
  const dateStr = blogPost.date || "Recently published";
  const categoryName = blogPost.category || "Technology";
  const readTimeStr = blogPost.readTime || "5 min read";

  return (
    <div className="blog-page-container blog-detail-wrapper">
      {/* ====================================================================
          1. Hero Section: Dark Blurred Code Background Matching Reference
          ==================================================================== */}
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-bg" aria-hidden="true" />
        <div className="blog-detail-hero-overlay" aria-hidden="true" />

        <div className="blog-detail-hero-content container">
          {/* Main Title */}
          <h1 className="blog-detail-main-title">{title}</h1>

          {/* Subtitle */}
          <p className="blog-detail-subtitle">{subtitle}</p>

          {/* Meta Bar */}
          <div className="blog-detail-meta-bar">
            <div className="blog-detail-meta-item">
              <Image
                src={authorAvatar}
                alt={authorName}
                width={24}
                height={24}
                className="blog-detail-avatar-img"
              />
              <span className="meta-val">{authorName}</span>
            </div>

            <div className="blog-detail-meta-item">
              <FiCalendar className="meta-icon" />
              <span className="meta-val">{dateStr}</span>
            </div>

            <div className="blog-detail-meta-item">
              <FiTag className="meta-icon" />
              <span className="meta-val">{categoryName}</span>
            </div>

            <div className="blog-detail-meta-item">
              <FiClock className="meta-icon" />
              <span className="meta-val">{readTimeStr}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. Two-Column Article Content & Sticky Sidebar Section
          ==================================================================== */}
      <section className="blog-detail-body-section">
        <div className="container">
          <div className="blog-detail-grid">
            {/* Left Column: Article Body */}
            <article className="blog-detail-article">
              {/* Mobile Table of Contents (< 1024px at the TOP) */}
              <div className="mobile-toc-block d-block d-lg-none mb-4">
                <div className="sidebar-widget sidebar-toc-widget">
                  <div className="toc-header">
                    <FiClock className="toc-clock-icon" />
                    <span>{readTimeStr}</span>
                  </div>

                  <nav className="toc-nav-list">
                    {tocSections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveToc(sec.id)}
                        className={`toc-nav-item ${activeToc === sec.id ? 'active' : ''}`}
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Dynamic CMS Article Body */}
              <div className="cms-article-body">
                {blogPost.content ? (
                  <Markdown
                    components={{
                      h1: ({ children }) => (
                        <h2 className="article-heading-2">{children}</h2>
                      ),
                      h2: ({ children }) => {
                        const raw = String(children);
                        const id =
                          'sec-' +
                          raw.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                        return (
                          <h2 className="article-heading-2" id={id}>
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children }) => (
                        <h3 className="article-heading-3">{children}</h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="article-heading-4">{children}</h4>
                      ),
                      p: ({ children }) => (
                        <p className="article-body-p">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="article-bullet-list">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol
                          className="article-bullet-list"
                          style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}
                        >
                          {children}
                        </ol>
                      ),
                      blockquote: ({ children }) => (
                        <div className="article-callout-insight">
                          <span className="callout-tag">Insight:</span> {children}
                        </div>
                      ),
                    }}
                  >
                    {blogPost.content}
                  </Markdown>
                ) : (
                  <p className="lead-paragraph">{blogPost.excerpt}</p>
                )}

                {/* In-Article CTA Banner (Lead Generation) */}
                <div className="article-cta-wrapper my-5" id="sec-scalability">
                  <div className="article-cta-noise" aria-hidden="true" />
                  <div className="article-cta-glow-top" aria-hidden="true" />
                  <div className="article-cta-glow-bottom" aria-hidden="true" />

                  <div className="article-cta-card">
                    <div className="article-cta-header">
                      <h3 className="article-cta-title">
                        Give your sales team<br />an unfair advantage.
                      </h3>
                      <div className="article-cta-divider" />
                    </div>

                    <form onSubmit={handleCtaBook} className="article-cta-form">
                      <div className="article-cta-input-row">
                        <input
                          type="text"
                          className="article-cta-input"
                          placeholder="Enter your first name"
                          value={ctaName}
                          onChange={(e) => setCtaName(e.target.value)}
                        />
                        <input
                          type="email"
                          className="article-cta-input"
                          placeholder="Enter your work email"
                          value={ctaEmail}
                          onChange={(e) => setCtaEmail(e.target.value)}
                          required
                        />
                      </div>

                      <button type="submit" className="article-cta-btn">
                        {ctaBooked ? (
                          <>
                            Appointment Booked! <FiCheck className="ms-1" />
                          </>
                        ) : (
                          <>
                            Book an Appointment <FiArrowRight className="ms-1" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </article>

            {/* Right Column: Sticky Sidebar */}
            <aside className="blog-detail-sidebar">
              <div className="sidebar-sticky-wrapper">
                {/* 1. Table of Contents / Read Progress (Desktop Only) */}
                <div className="sidebar-widget sidebar-toc-widget d-none d-lg-block">
                  <div className="toc-header">
                    <FiClock className="toc-clock-icon" />
                    <span>{readTimeStr}</span>
                  </div>

                  <nav className="toc-nav-list">
                    {tocSections.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setActiveToc(sec.id)}
                        className={`toc-nav-item ${activeToc === sec.id ? 'active' : ''}`}
                      >
                        {sec.title}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* 2. Sky Blue Newsletter Card */}
                <div className="sidebar-widget sidebar-newsletter-widget">
                  <div className="newsletter-card-inner">
                    <div className="newsletter-pill-tag">Stay updated</div>
                    <h4 className="newsletter-heading">
                      Stay in the loop by signing up to our email newsletter
                    </h4>

                    <form onSubmit={handleSidebarSubscribe} className="newsletter-form">
                      <div className="newsletter-input-group">
                        <input
                          type="email"
                          className="newsletter-email-input"
                          placeholder="Work email address"
                          value={sidebarEmail}
                          onChange={(e) => setSidebarEmail(e.target.value)}
                          required
                        />
                        <button type="submit" className="newsletter-submit-btn">
                          {sidebarSubscribed ? 'Done' : 'Sign up'}
                        </button>
                      </div>
                    </form>

                    <p className="newsletter-privacy-note">
                      Free. Unsubscribe any time. Read our transparent{' '}
                      <Link href="/privacy" className="newsletter-privacy-link">
                        privacy policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ====================================================================
          3. Bottom Section: Our Insights & News (Only when related posts exist)
          ==================================================================== */}
      {relatedPosts.length > 0 && (
      <section className="blog-grid-section">
        <div className="blog-grid-container">
          <div className="blog-section-header">
            <div className="blog-section-header-left">
              <div className="casestudy-badge-capsule mb-3">
                <span className="badge-bullet">▪</span>
                <span className="badge-text">Our Insights &amp; News</span>
              </div>

              <h2 className="blog-section-main-title">
                Smart Technology <span className="blog-title-blue">Solutions</span><br />
                for <span className="blog-title-blue">Modern Industries</span>.
              </h2>
            </div>

            <div className="blog-section-header-right">
              <p className="blog-section-description">
                Heapvue partners with businesses across multiple industries to build scalable digital platforms, automate operations, and deliver intelligent user experiences powered by modern technology.
              </p>
            </div>
          </div>

          {/* Related Articles 3-Column Grid */}
          <div className="blog-cards-grid">
            {relatedPosts.map((post) => (
              <article key={post.id || post.slug} className="blog-card-item">
                <div className="blog-card-image-box">
                  <Image
                    src={post.image || '/images/blog_analytics_dashboard.jpg'}
                    alt={post.title}
                    width={440}
                    height={260}
                    className="blog-card-img"
                  />
                </div>

                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
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
        </div>
      </section>
      )}

      {/* ====================================================================
          4. Bottom Section: FAQs from Home Page
          ==================================================================== */}
      <FaqSection customFaqs={blogFaqs} />
    </div>
  );
}
