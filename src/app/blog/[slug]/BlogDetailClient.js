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

const homeFaqs = [
  {
    id: 1,
    question: "Are Valley's messages really personalized, or just sophisticated templates?",
    answer: "Every Valley message is based on 60+ data points of research - recent LinkedIn posts, company news, podcast appearances, funding rounds, job changes, mutual connections. The AI references what the prospect actually cares about, in your voice. Prospects reply with 'This is one of the best cold DMs I've ever gotten!' (real quote). See 100+ unedited examples at coolnessogebre.com.",
  },
  {
    id: 2,
    question: 'Does Valley find leads, or do I provide lists?',
    answer: 'Valley can both source hyper-targeted leads matching your ideal customer profile and enrich lists you provide. Our proprietary scrapers discover verified contact coordinates with sub-zero bounce rates.',
  },
  {
    id: 3,
    question: 'Will my LinkedIn account get restricted?',
    answer: 'Never. Valley operates within strict cloud session emulations mimicking genuine human interaction rhythms, randomized keystroke intervals, and native regional IP addresses.',
  },
  {
    id: 4,
    question: 'What does Valley replace in my current stack?',
    answer: 'Valley completely replaces fragmented outbound tools including manual lead research spreadsheets, traditional SDR cadences, and static mail-merge senders with a single autonomous agent.',
  },
  {
    id: 5,
    question: 'How do Heapvue’s software products differ from your custom engineering services?',
    answer: 'Heapvue provides both ready-to-deploy software products (such as Vuecart, Heapsync, and ChatPress) and bespoke software engineering tailored to your proprietary infrastructure.',
  },
];

const RELATED_POSTS = [
  {
    id: 1,
    title: 'Improving Prediction Model Accuracy: Strategies and Soluti...',
    slug: 'improving-prediction-model-accuracy-strategies-solutions',
    excerpt: 'Heapvue partners with businesses across multiple industries to build scalable digital platforms, auto...',
    date: 'Nov 4, 2024',
    author: 'Aswin Raj',
    image: '/images/blog_analytics_dashboard.jpg',
  },
  {
    id: 2,
    title: 'Generative AI: Transforming Content Creation and Personaliz...',
    slug: 'generative-ai-transforming-content-creation-personalization',
    excerpt: 'Discover how generative AI is revolutionizing content creation and personalization, from autom...',
    date: 'Aug 18, 2024',
    author: 'Akhil S Kumar',
    image: '/images/blog_genai_funnel.jpg',
  },
  {
    id: 3,
    title: "DevOps in 2024: Why It's a Must-Have for Accelerated Digit...",
    slug: 'devops-2024-accelerated-digital-growth',
    excerpt: 'Discover why DevOps has become essential for business success in 2024, its key benefits, emer...',
    date: 'May 11, 2024',
    author: 'Akhil S Kumar',
    image: '/images/blog_devops_diagram.jpg',
  },
];

const DEFAULT_TOC_SECTIONS = [
  { id: 'sec-traditional-hr', title: '1. The Current Landscape' },
  { id: 'sec-integrating-tech', title: '2. Impact Across Key Industries' },
  { id: 'sec-employer-brand', title: '3. Finance and Banking' },
  { id: 'sec-scalability', title: '4. Retail and E-commerce' },
];

export default function BlogDetailClient({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params?.slug;

  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState(RELATED_POSTS);
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
      if (!slug) return;
      try {
        const post = await fetchBlogBySlug(slug);
        if (isMounted && post) {
          setBlogPost(post);
        }
      } catch (err) {
        console.warn('Using static blog fallback for detail:', err);
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
    if (!blogPost?.content) return DEFAULT_TOC_SECTIONS;
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
    return sections.length > 0 ? sections : DEFAULT_TOC_SECTIONS;
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

  // Resolved metadata
  const title =
    blogPost?.title ||
    'The Impact of AI and ML Across Key Industries in 2024';
  const subtitle =
    blogPost?.excerpt ||
    'Capture buying signals, identify decision-makers, and automate personalized outreach with enterprise-grade AI workflows designed for modern sales teams.';
  const authorName = blogPost?.author || 'Akhil S Kumar';
  const authorAvatar = blogPost?.authorAvatar || '/images/akhil.jpeg';
  const dateStr = blogPost?.date || 'Apr 16, 2024';
  const categoryName = blogPost?.category || 'Technology';
  const readTimeStr = blogPost?.readTime || '12 min read';

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

              {/* Dynamic CMS Markdown Content */}
              {blogPost?.content ? (
                <div className="cms-article-body">
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

                  {/* In-Article CTA Banner (Preserved for Lead Generation) */}
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
              ) : (
                /* Static Default Article Body Fallback */
                <>
                  <p className="lead-paragraph">
                    Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing business operations across industries at an unprecedented pace. With the AI market projected to reach $1,811.75 billion by 2030, growing at a CAGR of 38.1%, these technologies are becoming fundamental to business success.
                  </p>

                  <h2 className="article-heading-2" id="sec-traditional-hr">
                    The Current Landscape
                  </h2>
                  <p className="article-body-p">
                    According to McKinsey, 50% of organizations are already using AI in at least one business function. This adoption is driving transformative changes across various sectors:
                  </p>
                  <ul className="article-bullet-list">
                    <li>Enhanced operational efficiency</li>
                    <li>Reduced operational costs</li>
                    <li>Improved decision-making processes</li>
                    <li>Better customer experiences</li>
                    <li>Innovative service delivery methods</li>
                  </ul>

                  <h2 className="article-heading-2" id="sec-integrating-tech">
                    Impact Across Key Industries
                  </h2>

                  <h3 className="article-heading-3">Healthcare</h3>
                  <p className="article-body-p">
                    The healthcare sector is experiencing a revolutionary transformation through AI and ML:
                  </p>

                  <h4 className="article-heading-4">Diagnostic Improvements</h4>
                  <ul className="article-bullet-list">
                    <li>AI algorithms analyzing medical images with expert-level accuracy</li>
                    <li>Early disease detection through pattern recognition</li>
                    <li>Reduced false positives and negatives in diagnoses</li>
                  </ul>

                  <h4 className="article-heading-4">Personalized Medicine</h4>
                  <ul className="article-bullet-list">
                    <li>Tailored treatment plans based on individual patient data</li>
                    <li>Analysis of genetic information and medical history</li>
                    <li>Integration with platforms like IBM Watson Health</li>
                  </ul>

                  <div className="article-callout-insight">
                    <span className="callout-tag">Key insight:</span> AI applications could save the U.S. healthcare economy up to $150 billion annually by 2026.
                  </div>

                  <h3 className="article-heading-3" id="sec-employer-brand">
                    Finance and Banking
                  </h3>
                  <p className="article-body-p">
                    AI and ML have become cornerstone technologies in financial services:
                  </p>

                  <h4 className="article-heading-4">Fraud Detection</h4>
                  <ul className="article-bullet-list">
                    <li>Real-time transaction monitoring</li>
                    <li>Pattern recognition for suspicious activities</li>
                    <li>Enhanced security measures</li>
                  </ul>

                  <h4 className="article-heading-4">Risk Management</h4>
                  <ul className="article-bullet-list">
                    <li>Advanced credit risk assessment</li>
                    <li>Automated loan approval processes</li>
                    <li>Predictive analysis for market trends</li>
                  </ul>

                  <div className="article-callout-insight">
                    <span className="callout-tag">Impact:</span> Banks could reduce costs by $1 trillion annually by 2030 through AI implementation.
                  </div>

                  {/* In-Article CTA Banner */}
                  <div className="article-cta-wrapper" id="sec-scalability">
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

                  <h3 className="article-heading-3">Retail and E-commerce</h3>
                  <p className="article-body-p">
                    The retail sector is leveraging AI for enhanced customer experience:
                  </p>

                  <h4 className="article-heading-4">Personalization</h4>
                  <ul className="article-bullet-list">
                    <li>Customized product recommendations</li>
                    <li>Tailored shopping experiences</li>
                    <li>Behavior-based marketing</li>
                  </ul>

                  <h4 className="article-heading-4">Inventory Management</h4>
                  <ul className="article-bullet-list">
                    <li>Demand forecasting</li>
                    <li>Automated supply chain optimization</li>
                    <li>Reduced waste and storage costs</li>
                  </ul>
                </>
              )}
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
          3. Bottom Section: Our Insights & News
          ==================================================================== */}
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

      {/* ====================================================================
          4. Bottom Section: FAQs from Home Page
          ==================================================================== */}
      <FaqSection customFaqs={homeFaqs} />
    </div>
  );
}
