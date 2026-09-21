'use client';

import React from 'react';

export default function ProductsHero() {
  return (
    <section className="products-hero-wrapper">
      <div className="products-hero-container">
        {/* Badge Capsule */}
        <div className="products-hero-badge-capsule">
          <span className="badge-bullet" />
          <span className="badge-text">Our Products</span>
        </div>

        {/* Main Title */}
        <h1 className="products-hero-title">
          Powering Your Business with
          <br />
          <span className="blue-gradient-text">AI &amp; Cloud-Native Products</span>
        </h1>

        {/* Subtitle Description */}
        <p className="products-hero-subtext">
          We build and deploy modern, scalable products that help businesses automate, engage, and grow — faster.
        </p>
      </div>
    </section>
  );
}
