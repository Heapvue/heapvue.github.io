'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonialsData = [
  {
    id: 1,
    company: 'Runlayer',
    logoText: 'Runlayer',
    logoColor: '#0033cc',
    quote: '“Heapvue enabled us to connect AI agents and MCPs to our internal data, search engine and enterprise workflows seamlessly. It truly unlocks immense productivity for us.”',
    authorName: 'Elena Rostova',
    authorTitle: 'Chief Technology Officer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 2,
    company: 'Gusto',
    logoText: 'gusto',
    logoColor: '#ff5a5f',
    quote: '“Every AI tool is rushing to add MCP capabilities, but there\'s no way to manage the chaos across them all. We needed a centralized control plane as MCP sprawl became a real concern at Gusto. Runlayer is solving this - they\'re building the golden path for using MCPs in a secure, enterprise-ready manner.”',
    authorName: 'Jose Izquierdo',
    authorTitle: 'Senior Director of AI Transformation Operations',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 3,
    company: 'AngelList',
    logoText: '✌️ AngelList',
    logoColor: '#000000',
    quote: '“MCP isn\'t a distant vision, it\'s the standard for team-wide AI innovation. Heapvue provided us with rock-solid security, lightning fast performance, and unmatched support.”',
    authorName: 'Alberto Martinez',
    authorTitle: 'Head of Security',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 4,
    company: 'Vercel',
    logoText: '▲ Vercel',
    logoColor: '#000000',
    quote: '“The speed of deployment and quality of cloud architecture Heapvue delivered blew our expectations away. Their engineers are top-notch domain experts.”',
    authorName: 'Marcus Vance',
    authorTitle: 'VP of Product Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 5,
    company: 'Datadog',
    logoText: '🐶 Datadog',
    logoColor: '#632ca6',
    quote: '“Heapvue\'s AI workflows automated our revenue signal tracking from day one. Our sales team closed 40% more enterprise deals in Q3.”',
    authorName: 'Sarah Jenkins',
    authorTitle: 'Global Sales Operations Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    id: 6,
    company: 'Figma',
    logoText: '❖ Figma',
    logoColor: '#f24e1e',
    quote: '“Working with Heapvue transformed how we handle GTM intelligence and customer engagement tracking across all our international teams.”',
    authorName: 'David Chen',
    authorTitle: 'Principal Systems Architect',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Gusto (index 1) as in Figma

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="testimonials-section-wrapper">
      {/* Top Content: Badge & Heading */}
      <div className="testimonials-top-content">
        <div className="testimonials-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">Testimonials</span>
        </div>

        <div className="trusted-heading-wrapper">
          <Image 
            src="/images/trustednybusiness.png" 
            alt="Trusted by Businesses Building for the Future" 
            width={391} 
            height={148} 
            className="trusted-heading-img"
            priority
          />
        </div>
      </div>

      {/* Hovering Side-by-side Cards Carousel */}
      <div className="testimonials-carousel-viewport">
        <div 
          className="testimonials-carousel-track"
          style={{
            transform: `translateX(calc(50% - 425px - ${currentIndex * (850 + 24)}px))`
          }}
        >
          {testimonialsData.map((item, idx) => (
            <div 
              key={item.id}
              className={`testimonial-card ${idx === currentIndex ? 'active' : ''}`}
            >
              <div 
                className="testimonial-card-logo"
                style={{ color: item.logoColor }}
              >
                {item.logoText}
              </div>

              <p className="testimonial-quote">
                {item.quote}
              </p>

              <div className="testimonial-author-wrapper">
                <img 
                  src={item.avatar} 
                  alt={item.authorName} 
                  className="author-avatar"
                />
                <div>
                  <h5 className="author-name">{item.authorName}</h5>
                  <p className="author-title">{item.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls < 2 6 > */}
      <div className="testimonials-pagination">
        <button 
          onClick={handlePrev} 
          className="nav-arrow-btn" 
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={18} />
        </button>

        <div className="page-numbers">
          <span className="current-page">{currentIndex + 1}</span>
          <span className="total-pages">{testimonialsData.length}</span>
        </div>

        <button 
          onClick={handleNext} 
          className="nav-arrow-btn" 
          aria-label="Next testimonial"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
