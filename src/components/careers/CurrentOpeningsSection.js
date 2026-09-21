'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const openingsData = [
  {
    category: 'Engineering',
    jobs: [
      {
        id: 'eng-1',
        title: 'Senior Software Engineer',
        location: 'Kochi',
        experience: '5-8 years',
        type: 'Full-time',
        link: '/contact',
      },
      {
        id: 'eng-2',
        title: 'Full Stack Developer',
        location: 'Kochi',
        experience: '3-5 Years',
        type: 'Full-time',
        link: '/contact',
      },
    ],
  },
  {
    category: 'Design',
    jobs: [
      {
        id: 'des-1',
        title: 'Product Manager',
        location: 'Kochi',
        experience: '5-8 years',
        type: 'Full-time',
        link: '/contact',
      },
      {
        id: 'des-2',
        title: 'UX/UI Designer',
        location: 'Kochi',
        experience: '3-5 years',
        type: 'Full-time',
        link: '/contact',
      },
    ],
  },
  {
    category: 'Content',
    jobs: [
      {
        id: 'cnt-1',
        title: 'Senior Content Writer',
        location: 'Kochi',
        experience: '2-4 years',
        type: 'Full-time',
        link: '/contact',
      },
      {
        id: 'cnt-2',
        title: 'Junior Content Writer',
        location: 'Kochi',
        experience: '1-2 years',
        type: 'Full-time',
        link: '/contact',
      },
    ],
  },
];

export default function CurrentOpeningsSection() {
  return (
    <section className="openings-section-wrapper">
      <div className="openings-container">
        {/* Top Header Block */}
        <div className="openings-header">
          {/* Left Title */}
          <div className="openings-header-left">
            <div className="openings-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">Current Openings</span>
            </div>
            <h2 className="openings-main-title">
              Join Our <span className="openings-blue-highlight">Team &amp; Build</span> <br />
              Modern Digital Solutions.
            </h2>
          </div>

          {/* Right Subtext */}
          <div className="openings-header-right">
            <p>
              At Heapvue, we're building intelligent digital products that help businesses scale through AI, cloud technologies, modern engineering, and user-focused experiences. Join a team driven by innovation, collaboration, and continuous growth.
            </p>
          </div>
        </div>

        {/* Job Listings Box */}
        <div className="openings-jobs-box">
          {openingsData.map((group) => (
            <div key={group.category} className="openings-category-group">
              <h3 className="category-title">{group.category}</h3>
              <div className="jobs-list">
                {group.jobs.map((job) => (
                  <Link key={job.id} href={job.link} className="job-row-link">
                    <div className="job-row">
                      <h4 className="job-title">{job.title}</h4>
                      <div className="job-right-meta">
                        <span className="job-meta-text">
                          {job.location} &bull; {job.experience} &bull; {job.type}
                        </span>
                        <div className="job-arrow-btn">
                          <FiArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
