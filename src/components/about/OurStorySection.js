'use client';

import Image from 'next/image';

export default function OurStorySection() {
  return (
    <section className="our-story-wrapper">
      <div className="our-story-container">
        {/* Top Header Box (1200w x 278h Hug) */}
        <div className="story-header-box">
          {/* Left Box (542w x 148h) */}
          <div className="story-left-box">
            {/* Pill Badge */}
            <div className="story-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">Our Story</span>
            </div>

            {/* Title */}
            <h2 className="story-main-title">
              <span className="story-title-line">Building Smarter Systems</span>
              <span className="story-title-line">for the <span className="story-highlight">Digital Future</span></span>
            </h2>
          </div>

          {/* Right Box (510w x 222h) */}
          <div className="story-right-box">
            <p>
              From scalable cloud infrastructure to AI-powered platforms, Heapvue develops technology solutions designed to solve complex business challenges. Our focus is on creating seamless digital experiences, optimizing workflows, and empowering companies to innovate faster in an evolving digital landscape.
            </p>
            <p>
              We combine engineering excellence, user-focused design, and modern technologies to build reliable systems that improve efficiency, accelerate growth, and deliver measurable business impact.
            </p>
          </div>
        </div>

        {/* Middle Banner Title (1094w x 100h Hug) */}
        <h3 className="story-middle-title">
          <span className="story-middle-line">
            We're a team of <span className="story-blue-highlight">engineers</span>,{' '}
            <span className="story-blue-highlight">designers</span>,{' '}
            <span className="story-blue-highlight">strategists</span>, and{' '}
            <span className="story-blue-highlight">innovators</span>
          </span>
          <span className="story-middle-line">
            building the future of intelligent digital experiences.
          </span>
        </h3>

        {/* Bottom Team Image (1200w x 580h) */}
        <div className="story-team-img-wrapper">
          <Image
            src="/images/aboutusbg2.png"
            alt="Heapvue team of engineers, designers, strategists, and innovators"
            width={1200}
            height={580}
            className="story-team-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
