'use client';

export default function AboutHero() {
  return (
    <section className="about-hero-wrapper">
      <div className="about-hero-bg-overlay"></div>
      
      <div className="about-hero-container">
        {/* Badge Capsule */}
        <div className="about-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">ABOUT HEAPVUE</span>
        </div>

        {/* Main Title */}
        <h1 className="about-hero-title">
          Innovating for a
          <br />
          Better Tomorrow
        </h1>

        {/* Subtitle */}
        <p className="about-hero-subtext">
          Heapvue is a technology-driven company focused on delivering scalable digital solutions through AI, software engineering, cloud infrastructure, and modern product design.
        </p>
      </div>
    </section>
  );
}
