'use client';

import React, { useState } from 'react';
import { FiArrowRight, FiBriefcase, FiMapPin, FiClock, FiMail, FiCheck, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const openingsData = [
  {
    category: 'Engineering',
    jobs: [
      {
        id: 'eng-1',
        title: 'Senior Software Engineer (Full Stack / Cloud)',
        location: 'Kochi, Kerala (Hybrid)',
        experience: '4-7 Years',
        type: 'Full-time',
        skills: ['Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'],
        overview: 'Lead the architecture and delivery of scalable enterprise platforms. You will design cloud-native microservices, optimize database schemas, and mentor junior engineers.',
      },
      {
        id: 'eng-2',
        title: 'AI / Python Backend Engineer',
        location: 'Kochi, Kerala (Hybrid)',
        experience: '3-5 Years',
        skills: ['Python', 'FastAPI', 'LangChain / LlamaIndex', 'PostgreSQL / Vector DB', 'REST APIs'],
        overview: 'Build RAG pipelines, fine-tune model integration, and develop high-throughput API endpoints for intelligent workflow automation and speech processing.',
      },
    ],
  },
  {
    category: 'Product & Design',
    jobs: [
      {
        id: 'des-1',
        title: 'Lead UI/UX Product Designer',
        location: 'Kochi, Kerala (Hybrid)',
        experience: '3-6 Years',
        skills: ['Figma', 'Design Systems', 'User Research', 'Interactive Prototyping'],
        overview: 'Translate complex enterprise workflows into intuitive, elegant user interfaces. You will define design tokens and collaborate closely with front-end engineers.',
      },
    ],
  },
];

export default function CurrentOpeningsSection() {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <section className="openings-section-wrapper py-5 bg-white">
      <div className="container" style={{ maxWidth: '1100px' }}>
        {/* Top Header Block */}
        <div className="openings-header text-center mb-5">
          <div className="badge-capsule mb-2">
            <span className="badge-bullet"></span>
            <span className="badge-text">Open Opportunities</span>
          </div>
          <h2 className="fw-bold mb-3" style={{ fontSize: '2.4rem', color: '#0F172A' }}>
            Build Groundbreaking Technology with Us
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '680px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We look for craftsmen who value clean architecture, continuous learning, and shipping production-grade software. Explore our active openings below.
          </p>
        </div>

        {/* Job Listings with Real Details */}
        <div className="d-flex flex-column gap-4 mb-5">
          {openingsData.map((group) => (
            <div key={group.category} className="mb-3">
              <h4 className="fw-bold text-dark mb-3 ps-2 border-start border-4 border-primary">
                {group.category}
              </h4>
              <div className="d-flex flex-column gap-3">
                {group.jobs.map((job) => {
                  const isExpanded = expandedJob === job.id;
                  return (
                    <div 
                      key={job.id} 
                      className="card border rounded-3 p-4 shadow-sm"
                      style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
                    >
                      <div 
                        className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 cursor-pointer"
                        onClick={() => toggleJob(job.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div>
                          <h5 className="fw-bold text-dark mb-1">{job.title}</h5>
                          <div className="d-flex flex-wrap gap-3 text-muted small">
                            <span className="d-flex align-items-center gap-1"><FiMapPin size={14} /> {job.location}</span>
                            <span className="d-flex align-items-center gap-1"><FiClock size={14} /> {job.experience}</span>
                            <span className="d-flex align-items-center gap-1"><FiBriefcase size={14} /> {job.type}</span>
                          </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <button 
                            className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleJob(job.id);
                            }}
                          >
                            {isExpanded ? 'Hide Specs' : 'View Specs'}
                            {isExpanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Specs Block */}
                      {isExpanded && (
                        <div className="pt-3 mt-3 border-top">
                          <p className="text-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                            {job.overview}
                          </p>

                          <div className="mb-3">
                            <span className="small fw-bold text-dark d-block mb-1">Key Technologies &amp; Skills:</span>
                            <div className="d-flex flex-wrap gap-2">
                              {job.skills.map((skill) => (
                                <span key={skill} className="badge bg-light text-primary border px-2 py-1" style={{ fontSize: '0.8rem' }}>
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 d-flex flex-wrap align-items-center justify-content-between gap-3">
                            <a 
                              href={`mailto:careers@heapvue.com?subject=Application for ${encodeURIComponent(job.title)}&body=Hi Heapvue Team,%0D%0A%0D%0AI would like to apply for the position of ${encodeURIComponent(job.title)}.%0D%0A%0D%0APlease find my resume and portfolio attached.`}
                              className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2 fw-semibold px-3 py-2"
                              style={{ backgroundColor: '#0555FF', borderRadius: '6px' }}
                            >
                              <FiMail size={14} /> Apply via Email (careers@heapvue.com)
                            </a>
                            <span className="text-muted small">
                              Include your GitHub, portfolio, or resume link.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Open Application Card */}
        <div className="p-4 p-md-5 rounded-4 bg-light border text-center">
          <h4 className="fw-bold text-dark mb-2">Don't See Your Exact Role?</h4>
          <p className="text-muted mx-auto mb-3" style={{ maxWidth: '600px', fontSize: '0.95rem' }}>
            We are always interested in connecting with world-class engineers, architects, and product builders. Send an open application directly to our leadership team.
          </p>
          <a 
            href="mailto:careers@heapvue.com?subject=Open Application for Heapvue&body=Hi Heapvue Team,%0D%0A%0D%0AI would like to submit an open application.%0D%0A%0D%0AMy background, GitHub, and resume are below:"
            className="btn btn-outline-dark fw-semibold px-4 py-2"
            style={{ borderRadius: '6px' }}
          >
            <FiMail size={16} className="me-2" /> Send Open CV to careers@heapvue.com
          </a>
        </div>
      </div>
    </section>
  );
}
