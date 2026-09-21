'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FiShoppingCart, 
  FiUsers, 
  FiMessageSquare, 
  FiSettings, 
  FiBookOpen, 
  FiArrowRight, 
  FiZap, 
  FiShield, 
  FiHeart 
} from 'react-icons/fi';
import AboutPlatformSection from '@/components/solutions/AboutPlatformSection';

import Image from 'next/image';

const products = [
  {
    id: 'vuecart',
    name: 'VueCart',
    description: 'Powerful eCommerce platform built for modern businesses. Similar to Shopify, but flexible, scalable and yours.',
    tags: ['E-Commerce', 'Headless'],
    link: 'https://vuecart.heapvue.com/in-en',
    iconBg: '#0555FF',
    icon: <FiShoppingCart size={22} />,
    tagBg: '#EFF6FF',
    mockAccent: '#0555FF',
    previewImg: '/images/product_vuecart.png',
  },
  {
    id: 'heapsync',
    name: 'HeapSync',
    description: 'A smart CRM to manage your customers, leads and business relationships — all in one place.',
    tags: ['CRM', 'Customer Management'],
    link: 'https://heapsync.heapvue.com/',
    iconBg: '#10B981',
    icon: <FiUsers size={22} />,
    tagBg: '#ECFDF5',
    mockAccent: '#10B981',
    previewImg: '/images/product_heapsync.png',
  },
  {
    id: 'chatpress',
    name: 'ChatPress',
    description: 'AI-powered chatbot that captures leads, answers queries and recommends the right products or services.',
    tags: ['AI / GenAI', 'Chatbot'],
    link: 'https://chatpress.heapvue.com/',
    iconBg: '#8B5CF6',
    icon: <FiMessageSquare size={22} />,
    tagBg: '#F5F3FF',
    mockAccent: '#8B5CF6',
    previewImg: '/images/product_chatpress.png',
  },
  {
    id: 'apptuner',
    name: 'AppTuner',
    description: 'Keep your applications running smoothly with automated maintenance, monitoring and support.',
    tags: ['DevOps', 'Maintenance'],
    link: 'https://apptuner.dev/',
    iconBg: '#F97316',
    icon: <FiSettings size={22} />,
    tagBg: '#FFF7ED',
    mockAccent: '#F97316',
    previewImg: '/images/product_apptuner.png',
  },
  {
    id: 'learnly',
    name: 'Learnly',
    description: 'A modern LMS to create, manage and deliver engaging learning experiences at scale.',
    tags: ['LMS', 'Education'],
    link: 'https://dev.learnly.heapvue.com/',
    iconBg: '#4F46E5',
    icon: <FiBookOpen size={22} />,
    tagBg: '#EEF2FF',
    mockAccent: '#4F46E5',
    previewImg: '/images/product_learnly.png',
  },
];

export default function ProductsGridSection() {
  return (
    <section className="products-grid-wrapper">
      <div className="products-grid-container">
        {/* Top Header Box */}
        <div className="products-grid-header">
          {/* Left Title & Subtext */}
          <div className="products-grid-header-left">
            <span className="products-section-tag">OUR PRODUCTS</span>
            <h2 className="products-main-title">
              Solutions Built for Modern Businesses
            </h2>
            <p className="products-main-desc">
              From eCommerce to customer engagement, we create product experiences that solve real problems and drive measurable growth.
            </p>
          </div>

          {/* Right Highlights Capsule */}
          <div className="products-feature-highlights">
            <div className="feature-highlight-item">
              <div className="feature-icon-wrapper">
                <FiZap size={16} />
              </div>
              <div className="feature-text-group">
                <span className="feature-title">Scalable</span>
                <span className="feature-subtitle">Built for growth</span>
              </div>
            </div>

            <div className="feature-divider" />

            <div className="feature-highlight-item">
              <div className="feature-icon-wrapper">
                <FiShield size={16} />
              </div>
              <div className="feature-text-group">
                <span className="feature-title">Secure</span>
                <span className="feature-subtitle">Enterprise ready</span>
              </div>
            </div>

            <div className="feature-divider" />

            <div className="feature-highlight-item">
              <div className="feature-icon-wrapper">
                <FiHeart size={16} />
              </div>
              <div className="feature-text-group">
                <span className="feature-title">AI-Powered</span>
                <span className="feature-subtitle">Smarter workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="products-cards-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card-item">
              <div>
                {/* Header (Icon + Name) */}
                <div className="product-card-header">
                  <div
                    className="product-icon-box"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="product-name">{item.name}</h3>
                </div>

                {/* Description */}
                <p className="product-desc">{item.description}</p>

                {/* Tags */}
                <div className="product-tags-group">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="product-tag-pill"
                      style={{ backgroundColor: item.tagBg }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More External Link */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-learn-more-link"
                >
                  Learn more <FiArrowRight size={14} />
                </a>
              </div>

              {/* Bottom Card Image Preview */}
              <div className="product-preview-mock">
                <Image
                  src={item.previewImg}
                  alt={item.name}
                  width={340}
                  height={150}
                  className="product-preview-img"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
