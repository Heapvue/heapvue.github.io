'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const aiProjects = [
  {
    id: 1,
    title: 'AI Customer Engagement Chatbot for a Nutraceutical Company',
    description:
      'A nutraceutical company wanted to assist website visitors with product information and recommendations. Heapvue built a RAG-based AI chatbot trained on the company’s knowledge base to answer queries, provide information, and recommend products to visitors in real time.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Multilingual Voice-to-Text Application',
    description:
      'A company required a mobile application capable of converting voice input in one language into text in another language with grammar correction. Heapvue developed a multilingual voice processing system that enables users to communicate and generate text across languages more easily.',
    image: '/images/sol4.png',
    link: '/contact',
  },
  {
    id: 3,
    title: 'AI-Assisted Learning Tool for Special Education',
    description:
      'An educational organisation needed a training tool for children with special needs that could help them learn words and phrases through visual prompts. Heapvue developed an interactive learning module that uses images and structured exercises to make language learning more engaging and accessible.',
    image: '/images/sol4.png',
    link: '/contact',
  },
];

export default function AiProjectsSection() {
  return (
    <section className="solutions-projects-wrapper">
      <div className="solutions-projects-container">
        {/* Top Header Box */}
        <div className="solutions-projects-header">
          {/* Pill Badge */}
          <div className="selected-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>

          {/* Main Title */}
          <h2 className="highlighted-projects-title">
            Highlighted Projects in <span className="blue-italic-text">AI & Intelligent Automation</span>
          </h2>

          {/* Subtext */}
          <p className="highlighted-projects-subtext">
            Discover how Heapvue builds practical AI applications that automate customer interactions, enhance language processing, and create engaging digital tools.
          </p>
        </div>

        {/* 3 Cards Block Container */}
        <div className="solutions-cards-block">
          {aiProjects.map((project) => (
            <div key={project.id} className="solutions-card-item">
              <div className="solutions-card-img-box">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={385}
                  height={220}
                  className="solutions-card-img"
                  priority
                />
              </div>
              <div className="solutions-card-body">
                <div>
                  <h3 className="solutions-card-title">{project.title}</h3>
                  <p className="solutions-card-desc">{project.description}</p>
                </div>
                <Link href={project.link} className="solutions-card-link">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
