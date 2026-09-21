'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section className="about-section-wrapper">
      <div className="about-section-container">
        {/* Left Box - 560px x 510px */}
        <div className="about-left-box">
          <div className="about-left-top">
            {/* Pill Badge */}
            <div className="about-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">About Heapvue</span>
            </div>

            {/* Heading Image */}
            <div className="wespecialize-img-wrapper">
              <Image 
                src="/images/wespecialize.png" 
                alt="We specialize in creating software solutions that are tailored to your unique business needs." 
                width={437} 
                height={181} 
                className="wespecialize-img"
                priority
              />
            </div>
          </div>

          {/* Bottom Features Grid */}
          <div className="about-features-grid">
            {/* Feature 1 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Image 
                  src="/images/feedback.png" 
                  alt="Security icon" 
                  width={36} 
                  height={32} 
                  className="feature-icon"
                />
              </div>
              <h4 className="feature-title">Security</h4>
              <p className="feature-desc">
                We guarantee protection for your business against cyber threats.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Image 
                  src="/images/feedback.png" 
                  alt="Performance icon" 
                  width={36} 
                  height={32} 
                  className="feature-icon"
                />
              </div>
              <h4 className="feature-title">Performance</h4>
              <p className="feature-desc">
                We ensure optimal performance with 24/7 proactive maintenance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Image 
                  src="/images/feedback.png" 
                  alt="Support icon" 
                  width={36} 
                  height={32} 
                  className="feature-icon"
                />
              </div>
              <h4 className="feature-title">Support</h4>
              <p className="feature-desc">
                Our experts are available 24/7 to keep operations running smoothly.
              </p>
            </div>
          </div>
        </div>

        {/* Right Box - 598px x 510px */}
        <div className="about-right-box">
          {/* Left Column of Right Box */}
          <div className="about-right-left-col">
            {/* Blue Quote Card */}
            <div className="about-quote-card">
              <p className="quote-text">
                “We now rely on Heapvue for all our intelligent software solutions.”
              </p>
              <Link href="/contact" className="btn quote-btn">
                Book a demo <FiArrowRight size={14} />
              </Link>
            </div>

            {/* Flower Design Image Card */}
            <div className="flower-card-wrapper">
              <Image 
                src="/images/flowerdesign.png" 
                alt="Colorful abstract flower artwork" 
                width={289} 
                height={202} 
                className="flower-img"
              />
            </div>
          </div>

          {/* Right Column of Right Box (Two Guys Image) */}
          <div className="twoguys-card-wrapper">
            <Image 
              src="/images/twoguys.png" 
              alt="Heapvue team working together" 
              width={299} 
              height={510} 
              className="twoguys-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
