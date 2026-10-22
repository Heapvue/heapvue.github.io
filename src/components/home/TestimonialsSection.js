'use client';

import { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonialsData = [
  {
    id: 1,
    company: 'Bonnacci',
    logoSrc: '/images/clients/bonnacci.webp',
    quote: '“Heapvue enabled us to connect AI agents and scalable workflows seamlessly to our enterprise systems. It truly unlocks immense productivity and operational efficiency for us.”',
    authorName: 'Elena Rostova',
    authorTitle: 'Chief Technology Officer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    services: ['AI Agents & Workflows', 'Enterprise System Integration', 'Cloud Architecture'],
  },
  {
    id: 2,
    company: 'Forsight',
    logoSrc: '/images/clients/forsight.png',
    quote: '“Every AI tool is rushing to add capabilities, but there\'s no way to manage the chaos across them all. We needed a centralized control plane as data sprawl became a real concern. Heapvue solved this - they built the golden path for secure, enterprise-ready digital operations.”',
    authorName: 'Jose Izquierdo',
    authorTitle: 'Senior Director of Digital Transformation',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    services: ['Zero Trust Security', 'Cloud Infrastructure', 'Enterprise API Modernization'],
  },
  {
    id: 3,
    company: 'Zentra Learn',
    logoSrc: '/images/clients/zentra-learn.webp',
    quote: '“Modern digital learning isn\'t a distant vision, it\'s the standard for our education platforms. Heapvue provided us with rock-solid cloud infrastructure, lightning-fast performance, and unmatched technical advisory.”',
    authorName: 'Alberto Martinez',
    authorTitle: 'Head of Learning Architecture',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    services: ['Cloud Architecture', 'High-Availability DevOps', 'Modern Web Engineering'],
  },
  {
    id: 4,
    company: 'SolveMyHealth',
    logoSrc: '/images/clients/solvemyhealth.webp',
    quote: '“The speed of deployment and quality of cloud architecture Heapvue delivered blew our expectations away. Their engineers are top-notch domain experts who ensured data security and high availability from day one.”',
    authorName: 'Marcus Vance',
    authorTitle: 'VP of Product Engineering',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85',
    services: ['HIPAA-Compliant Cloud', 'Real-Time Telemedicine API', 'Microservices Architecture'],
  },
  {
    id: 5,
    company: 'Conzaura',
    logoSrc: '/images/clients/conzaura.png',
    quote: '“Heapvue\'s software products automated our business intelligence workflows from day one. Our operations team scaled multi-channel customer engagement with ease and zero downtime.”',
    authorName: 'Sarah Jenkins',
    authorTitle: 'Global Operations Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    services: ['Commerce Intelligence', 'Automated Workflows', 'Full-Stack Software Development'],
  },
  {
    id: 6,
    company: 'Pankajakasthuri',
    logoSrc: '/images/clients/pankajakasthuri.png',
    quote: '“Partnering with Heapvue transformed how we manage commerce intelligence and digital operations across all our platforms. Their bespoke solutions are robust and future-proof.”',
    authorName: 'David Chen',
    authorTitle: 'Principal Systems Architect',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85',
    services: ['Headless Commerce', 'Digital Operations Platform', 'Database Optimization'],
  },
];

const count = testimonialsData.length;

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section-wrapper">
      <div className="testimonials-container">
        {/* Top Content: Badge & Heading */}
        <div className="testimonials-top-content">
          <div className="testimonials-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">Testimonials</span>
          </div>

          <div className="trusted-heading-wrapper">
            <h2 className="testimonials-heading">
              <span className="testimonials-heading-accent">Trusted</span> by Businesses <br className="d-none d-md-block" />
              Building for the Future
            </h2>
          </div>
        </div>

        {/* Carousel Viewport with Peeking Next Card like in Case Studies */}
        <div className="testimonials-carousel-viewport">
          <div
            className="testimonials-carousel-track"
            style={{
              transform: `translateX(calc(-${currentIndex} * (var(--tm-card-w, 1200px) + var(--tm-card-gap, 24px))))`,
              transition: 'transform 0.48s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {testimonialsData.map((item, idx) => (
              <div
                key={item.id}
                className={`testimonial-card ${idx === currentIndex ? 'active' : ''}`}
              >
                {/* Large B&W Client Image covering full height & 40% width, dispersing to the right */}
                <div className="testimonial-bg-image-wrapper">
                  <img
                    src={item.avatar}
                    alt={item.authorName}
                    className="testimonial-card-bg-photo"
                  />
                  <div className="testimonial-photo-dispersion-overlay"></div>
                </div>

                {/* Card Content layer sitting above the image */}
                <div className="testimonial-card-content-layer">
                  {/* Top Row: Company Logo on Right Side */}
                  <div className="testimonial-card-top-header">
                    <div className="testimonial-card-logo-container">
                      <img
                        src={item.logoSrc}
                        alt={item.company}
                        className="testimonial-client-logo-img"
                      />
                    </div>
                  </div>

                  {/* Middle: Client Message */}
                  <p className="testimonial-quote">
                    {item.quote}
                  </p>

                  {/* Bottom: Services boxes we did for client + Name & Designation */}
                  <div className="testimonial-card-bottom-info">
                    <div className="testimonial-services-tags">
                      {item.services.map((service, sIdx) => (
                        <span key={sIdx} className="testimonial-service-pill">
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="testimonial-author-wrapper">
                      <h5 className="author-name">{item.authorName}</h5>
                      <p className="author-title">{item.authorTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons like in Case Studies (No numbers) */}
        <div className="testimonials-nav-buttons">
          <button
            type="button"
            onClick={handlePrev}
            className="testimonials-nav-btn prev-btn"
            aria-label="Previous testimonial"
          >
            <FiArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="testimonials-nav-btn next-btn"
            aria-label="Next testimonial"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
