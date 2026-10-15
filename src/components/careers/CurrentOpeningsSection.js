'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiSearch, 
  FiX, 
  FiChevronDown, 
  FiRotateCcw,
  FiBriefcase
} from 'react-icons/fi';

// TOGGLE FLAG: Set to false to show "No Active Openings" state, or true to display active job postings.
// When set to false, all job data and filter logic remain completely preserved in the file.
const HAS_ACTIVE_OPENINGS = false;

const ALL_OPENINGS_DATA = [
  {
    id: 'eng-1',
    title: 'Senior Software Engineer',
    category: 'Engineering',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '5-8 years',
    skills: ['Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'Microservices'],
    overview: 'Lead the architecture and delivery of scalable enterprise platforms. Design cloud-native microservices, optimize high-throughput database schemas, and mentor talented engineers.',
  },
  {
    id: 'eng-2',
    title: 'Full Stack Developer',
    category: 'Engineering',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '3-5 Years',
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'Tailwind / CSS', 'REST APIs'],
    overview: 'Develop modern, responsive user interfaces and robust APIs. Work across front-end design systems and scalable backend microservices.',
  },
  {
    id: 'eng-3',
    title: 'Cloud & DevOps Engineer',
    category: 'Engineering',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '4-7 years',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD Pipelines', 'Linux'],
    overview: 'Design, configure, and maintain automated multi-cloud deployment pipelines, container orchestration, and high-availability infrastructure.',
  },
  {
    id: 'eng-4',
    title: 'AI / LLM Application Engineer',
    category: 'Engineering',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '3-6 years',
    skills: ['Python', 'FastAPI', 'LangChain', 'LlamaIndex', 'Vector Databases'],
    overview: 'Build enterprise autonomous agent systems, RAG workflows, and intelligent semantic automation integrated into production software.',
  },
  {
    id: 'des-1',
    title: 'Product Manager',
    category: 'Design',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '5-8 years',
    skills: ['Product Strategy', 'Agile / Scrum', 'User Research', 'Product Roadmapping', 'Data Analytics'],
    overview: 'Drive product vision and execution for enterprise software and AI applications. Partner closely with design, engineering, and stakeholders to deliver world-class digital experiences.',
  },
  {
    id: 'des-2',
    title: 'UX/UI Designer',
    category: 'Design',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '3-5 years',
    skills: ['Figma', 'UI Design', 'Design Systems', 'Interactive Prototyping', 'User Flows'],
    overview: 'Translate complex enterprise workflows into clean, elegant, intuitive user interfaces. Define design system components and work directly with engineers.',
  },
  {
    id: 'cnt-1',
    title: 'Senior Content Writer',
    category: 'Content',
    country: 'India',
    city: 'Kochi',
    workMode: 'Hybrid',
    hireType: 'Full-time',
    experience: '2-4 years',
    skills: ['Technical Copywriting', 'SEO Strategy', 'Case Studies', 'Brand Storytelling', 'Content Strategy'],
    overview: 'Create high-impact technical articles, whitepapers, case studies, and brand copy. Help articulate Heapvue’s advanced technological solutions to global audiences.',
  },
  {
    id: 'cnt-2',
    title: 'Junior Content Writer',
    category: 'Content',
    country: 'India',
    city: 'Kochi',
    workMode: 'On-site',
    hireType: 'Full-time',
    experience: '1-2 years',
    skills: ['Content Writing', 'Research', 'Proofreading', 'Social Media Copy', 'Editing'],
    overview: 'Assist with creating engaging website content, blog posts, and documentation while collaborating with design and marketing teams.',
  },
];

const INITIAL_BATCH_COUNT = 4;
const BATCH_LOAD_STEP = 3;

export default function CurrentOpeningsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState('All');
  const [selectedHireType, setSelectedHireType] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Progressive auto-load on scroll
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_COUNT);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const sentinelRef = useRef(null);

  // Filter logic
  const filteredJobs = useMemo(() => {
    return ALL_OPENINGS_DATA.filter((job) => {
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesCategory = job.category.toLowerCase().includes(query);
        const matchesSkills = job.skills.some((s) => s.toLowerCase().includes(query));
        const matchesDesc = job.overview.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCategory && !matchesSkills && !matchesDesc) {
          return false;
        }
      }

      // Country filter (now supports only India)
      if (selectedCountry !== 'All' && job.country !== selectedCountry) {
        return false;
      }

      // City filter
      if (selectedCity !== 'All' && job.city !== selectedCity) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && job.category !== selectedCategory) {
        return false;
      }

      // Work mode filter
      if (selectedWorkMode !== 'All' && job.workMode !== selectedWorkMode) {
        return false;
      }

      // Hire type filter
      if (selectedHireType !== 'All' && job.hireType !== selectedHireType) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCountry, selectedCity, selectedCategory, selectedWorkMode, selectedHireType]);

  // Reset visibleCount whenever any filter or search changes
  useEffect(() => {
    setVisibleCount(INITIAL_BATCH_COUNT);
  }, [searchQuery, selectedCountry, selectedCity, selectedCategory, selectedWorkMode, selectedHireType]);

  // Auto-load rest of the posts on scroll via IntersectionObserver
  useEffect(() => {
    if (!sentinelRef.current) return;
    if (visibleCount >= filteredJobs.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + BATCH_LOAD_STEP, filteredJobs.length));
            setIsLoadingMore(false);
          }, 150);
        }
      },
      { rootMargin: '250px 0px', threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredJobs.length]);

  // Fallback window scroll listener for auto-loading
  useEffect(() => {
    const handleScroll = () => {
      if (visibleCount >= filteredJobs.length) return;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 500) {
        setVisibleCount((prev) => Math.min(prev + BATCH_LOAD_STEP, filteredJobs.length));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, filteredJobs.length]);

  // Visible sliced list
  const displayedJobs = useMemo(() => {
    return filteredJobs.slice(0, visibleCount);
  }, [filteredJobs, visibleCount]);

  // Group displayed jobs by category maintaining order: Engineering, Design, Content
  const groupedJobs = useMemo(() => {
    const categoryOrder = ['Engineering', 'Design', 'Content'];
    const groups = {};

    displayedJobs.forEach((job) => {
      if (!groups[job.category]) {
        groups[job.category] = [];
      }
      groups[job.category].push(job);
    });

    const result = [];
    categoryOrder.forEach((cat) => {
      if (groups[cat] && groups[cat].length > 0) {
        result.push({ category: cat, jobs: groups[cat] });
      }
    });

    Object.keys(groups).forEach((cat) => {
      if (!categoryOrder.includes(cat) && groups[cat].length > 0) {
        result.push({ category: cat, jobs: groups[cat] });
      }
    });

    return result;
  }, [displayedJobs]);

  const isFilterActive = 
    Boolean(searchQuery.trim()) || 
    selectedCountry !== 'All' || 
    selectedCity !== 'All' || 
    selectedCategory !== 'All' || 
    selectedWorkMode !== 'All' || 
    selectedHireType !== 'All';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCountry('All');
    setSelectedCity('All');
    setSelectedCategory('All');
    setSelectedWorkMode('All');
    setSelectedHireType('All');
  };

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <section className="openings-section-wrapper">
      <div className="openings-container">
        {/* Header Block matching Reference Design 1:1 */}
        <div className="openings-header">
          <div className="openings-header-left">
            <div className="openings-badge-capsule">
              <span className="badge-bullet"></span>
              <span className="badge-text">Current Openings</span>
            </div>
            <h2 className="openings-main-title">
              <span className="openings-title-line">
                Join Our <span className="openings-blue-highlight">Team &amp; Build</span>
              </span>
              <span className="openings-title-line">Modern Digital Solutions.</span>
            </h2>
          </div>

          <div className="openings-header-right">
            <p className="openings-header-desc">
              At Heapvue, we're building intelligent digital products that help businesses scale through AI, cloud technologies, modern engineering, and user-focused experiences. Join a team driven by innovation, collaboration, and continuous growth.
            </p>
          </div>
        </div>

        {/* Sticky Fixed Search & Filter Controls Section */}
        <div className="openings-controls-panel sticky-controls">
          {/* Top Row: Full-width Search Bar */}
          <div className="openings-search-row full-width-row">
            <div className="openings-search-box full-width-search">
              <FiSearch className="openings-search-icon" size={18} />
              <input
                type="text"
                className="openings-search-input"
                placeholder="Search jobs by title, skills, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="openings-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <FiX size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: 5 Filter Dropdowns + Reset */}
          <div className="openings-filters-row">
            {/* Country Filter (now supports only India) */}
            <div className="openings-filter-item">
              <label className="openings-filter-label" htmlFor="filter-country">Country</label>
              <div className="openings-select-wrapper">
                <select
                  id="filter-country"
                  className="openings-select"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="All">All Countries</option>
                  <option value="India">India</option>
                </select>
                <FiChevronDown className="openings-select-arrow" size={14} />
              </div>
            </div>

            {/* City Filter */}
            <div className="openings-filter-item">
              <label className="openings-filter-label" htmlFor="filter-city">City</label>
              <div className="openings-select-wrapper">
                <select
                  id="filter-city"
                  className="openings-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="All">All Cities</option>
                  <option value="Kochi">Kochi</option>
                </select>
                <FiChevronDown className="openings-select-arrow" size={14} />
              </div>
            </div>

            {/* Job Category Filter */}
            <div className="openings-filter-item">
              <label className="openings-filter-label" htmlFor="filter-category">Job Category</label>
              <div className="openings-select-wrapper">
                <select
                  id="filter-category"
                  className="openings-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All">All Categories</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Content">Content</option>
                </select>
                <FiChevronDown className="openings-select-arrow" size={14} />
              </div>
            </div>

            {/* Work Mode Filter */}
            <div className="openings-filter-item">
              <label className="openings-filter-label" htmlFor="filter-workmode">Work Mode</label>
              <div className="openings-select-wrapper">
                <select
                  id="filter-workmode"
                  className="openings-select"
                  value={selectedWorkMode}
                  onChange={(e) => setSelectedWorkMode(e.target.value)}
                >
                  <option value="All">All Modes</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                </select>
                <FiChevronDown className="openings-select-arrow" size={14} />
              </div>
            </div>

            {/* Hire Type Filter */}
            <div className="openings-filter-item">
              <label className="openings-filter-label" htmlFor="filter-hiretype">Hire Type</label>
              <div className="openings-select-wrapper">
                <select
                  id="filter-hiretype"
                  className="openings-select"
                  value={selectedHireType}
                  onChange={(e) => setSelectedHireType(e.target.value)}
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                <FiChevronDown className="openings-select-arrow" size={14} />
              </div>
            </div>

            {/* Reset Button */}
            {isFilterActive && (
              <div className="openings-filter-item reset-item">
                <button
                  type="button"
                  className="openings-reset-btn"
                  onClick={handleResetFilters}
                  title="Reset all filters"
                >
                  <FiRotateCcw size={14} />
                  <span>Reset</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Jobs Listings Box */}
        <div className="openings-jobs-box">
          {!HAS_ACTIVE_OPENINGS ? (
            <div className="openings-no-jobs-container">
              <div className="no-jobs-icon-wrapper">
                <FiBriefcase size={32} />
              </div>
              <h3 className="no-jobs-title">No Active Openings at the Moment</h3>
              <p className="no-jobs-desc">
                We currently do not have any open positions, but we are always eager to connect with talented innovators, engineers, designers, and problem-solvers. Feel free to submit an open application, and our talent team will reach out when a relevant opportunity arises.
              </p>
              <Link
                href="/contact?tab=careers&role=General+Career+Application+%2F+Internship#contact-form"
                className="no-jobs-apply-btn"
              >
                <span>Submit an Open Application</span>
                <FiArrowRight size={16} />
              </Link>
            </div>
          ) : groupedJobs.length === 0 ? (
            <div className="openings-empty-state">
              <p className="empty-title">No matching positions found.</p>
              <p className="empty-desc">
                Try adjusting your search criteria or resetting the filters to view all available positions.
              </p>
              <button
                type="button"
                className="empty-reset-btn"
                onClick={handleResetFilters}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            groupedJobs.map((group) => (
              <div key={group.category} className="openings-category-group">
                <h3 className="category-title">{group.category}</h3>

                <div className="jobs-list">
                  {group.jobs.map((job) => {
                    const isExpanded = expandedJobId === job.id;
                    return (
                      <div key={job.id} className="job-row-wrapper">
                        <div
                          className={`job-row ${isExpanded ? 'expanded' : ''}`}
                          onClick={() => toggleJob(job.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleJob(job.id);
                            }
                          }}
                        >
                          <div className="job-left-info">
                            <h4 className="job-title">{job.title}</h4>
                          </div>

                          <div className="job-right-meta">
                            <span className="job-meta-text">
                              {job.city} • {job.experience} • {job.hireType}
                            </span>
                            <Link
                              href={`/contact?tab=careers&role=${encodeURIComponent(job.title)}#contact-form`}
                              className="job-arrow-btn"
                              aria-label={`Apply for ${job.title}`}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <FiArrowRight size={18} />
                            </Link>
                          </div>
                        </div>

                        {/* Collapsible Job Details Spec Drawer */}
                        {isExpanded && (
                          <div className="job-details-drawer">
                            <p className="job-overview-text">{job.overview}</p>

                            <div className="job-skills-block">
                              <span className="job-skills-heading">Key Skills &amp; Technologies:</span>
                              <div className="job-skills-chips">
                                {job.skills.map((skill) => (
                                  <span key={skill} className="job-skill-chip">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="job-drawer-footer">
                              <Link
                                href={`/contact?tab=careers&role=${encodeURIComponent(job.title)}#contact-form`}
                                className="job-apply-btn"
                              >
                                <span>Apply for this Role</span>
                                <FiArrowRight size={16} />
                              </Link>
                              <span className="job-drawer-note">
                                Location: {job.city}, {job.country} ({job.workMode})
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}

          {/* Sentinel element to trigger auto-load on scroll */}
          {HAS_ACTIVE_OPENINGS && visibleCount < filteredJobs.length && (
            <div ref={sentinelRef} className="openings-scroll-sentinel">
              {isLoadingMore && <div className="openings-loading-indicator">Loading more positions...</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
