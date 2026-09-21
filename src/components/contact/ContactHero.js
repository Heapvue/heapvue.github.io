'use client';

import React from 'react';

export default function ContactHero() {
  return (
    <section className="contact-hero-wrapper">
      <div className="contact-hero-bg-overlay"></div>
      <div className="contact-hero-container">
        {/* Capsule Badge */}
        <div className="contact-hero-badge-capsule">
          <span className="badge-bullet"></span>
          <span className="badge-text">CONTACT HEAPVUE</span>
        </div>

        {/* Main Title */}
        <h1 className="contact-hero-title">
          Let's Build Something <br />
          Great Together
        </h1>

        {/* Subtitle Subtext */}
        <p className="contact-hero-subtext">
          Have a project in mind or looking to scale your business with modern technology solutions? Connect with Heapvue to discuss AI-powered systems, software development, cloud infrastructure, and digital transformation tailored to your business needs.
        </p>
      </div>
    </section>
  );
}
