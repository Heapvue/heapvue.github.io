'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiArrowRight, FiStar } from 'react-icons/fi';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Booking requested for: ${email}`);
    }
  };

  return (
    <div className="hero-content">
      {/* AI Badge Capsule */}
      <div className="badge-capsule">
        <span className="badge-bullet"></span>
        <span className="badge-text">
          AI-Powered Revenue Intelligence for Modern GTM Teams
        </span>
      </div>

      {/* Custom Heading Image */}
      <div className="heading-img-wrapper">
        <Image 
          src="/images/the heading home.png" 
          alt="Intelligent Technology Solutions for Modern Businesses" 
          width={820} 
          height={120} 
          className="heading-img"
          priority
        />
      </div>

      {/* Subtitle */}
      <p className="hero-subheading">
        Capture buying signals, identify decision-makers, and automate personalized outreach with enterprise-grade AI workflows designed for modern sales teams.
      </p>

      {/* Book a Demo Inline Form */}
      <form onSubmit={handleSubmit} className="email-form-wrapper">
        <div className="email-form-container">
          <input 
            type="email" 
            className="form-control email-input" 
            placeholder="Enter your email here" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn submit-btn">
            Book a Demo <FiArrowRight />
          </button>
        </div>
      </form>

      {/* Avatars and Ratings */}
      <div className="ratings-wrapper">
        <div className="avatars-container">
          <div className="avatar-circle" style={{ zIndex: 4 }}>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="User 1" width="100%" height="100%" style={{ objectFit: 'cover' }} />
          </div>
          <div className="avatar-circle" style={{ zIndex: 3 }}>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="User 2" width="100%" height="100%" style={{ objectFit: 'cover' }} />
          </div>
          <div className="avatar-circle" style={{ zIndex: 2 }}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="User 3" width="100%" height="100%" style={{ objectFit: 'cover' }} />
          </div>
          <div className="avatar-circle" style={{ zIndex: 1 }}>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="User 4" width="100%" height="100%" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="rating-text-container">
          <FiStar className="rating-star fill-current" style={{ fill: '#ffb300' }} />
          <span className="rating-label">Rated 4.97/5 from 500+ reviews</span>
        </div>
      </div>
    </div>
  );
}
