'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const educationProjects = [
  {
    id: 1,
    title: 'Student Enrolment and Course Management Platform for an EdTech Company',
    description:
      'An edtech company needed a platform to manage student enrolment, course assignments, fee collection, and access control. Heapvue developed a comprehensive system that centralised academic operations and simplified student management.',
    image: '/images/con2.png',
    link: '/contact',
  },
  {
    id: 2,
    title: 'Interactive Learning Module for Special Education',
    description:
      'An organisation required a training tool to help children with special needs learn words and phrases through visual engagement. Heapvue developed an interactive module that uses images and structured exercises to make learning more accessible and engaging.',
    image: '/images/product_learnly.png',
    link: '/contact',
  },
];

export default function EducationProjectsSection() {
  return (
    <section className="industry-projects-wrapper">
      <div className="industry-projects-container">
        {/* Header Block */}
        <div className="industry-projects-header">
          <div className="industry-projects-badge">
            <span className="badge-bullet"></span>
            <span className="badge-text">Selected Projects</span>
          </div>
          <h2 className="industry-projects-title">
            Highlighted Projects Across <span className="blue-italic-text">Education Solutions</span>
          </h2>
          <p className="industry-projects-subtext">
            As education continues to evolve digitally, organisations need systems that are flexible, scalable, and easy to manage. Heapvue helps education providers build digital platforms that streamline operations and enhance the overall learning experience.
          </p>
        </div>

        {/* 2 Clickable Cards Grid */}
        <div className="industry-projects-grid two-cols">
          {educationProjects.map((project) => (
            <Link key={project.id} href={project.link} className="industry-project-card">
              <div className="industry-project-card-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={384}
                  height={220}
                  className="industry-project-card-img"
                />
              </div>
              <div className="industry-project-card-body">
                <div>
                  <h3 className="industry-project-card-title">{project.title}</h3>
                  <p className="industry-project-card-desc">{project.description}</p>
                </div>
                <span className="industry-project-card-link">View Project</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
