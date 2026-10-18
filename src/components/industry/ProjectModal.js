'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ProjectModal({
  isOpen,
  projects,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || activeIndex === null || !projects[activeIndex]) {
    return null;
  }

  const activeProject = projects[activeIndex];

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Left Image Column */}
        <div className="project-modal-img-col">
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            sizes="(max-width: 900px) 100vw, 440px"
            className="project-modal-img"
            priority
          />
        </div>

        {/* Right Content Column */}
        <div className="project-modal-content-col">
          {/* Header with Title, Desc and Prev/Next arrows */}
          <div className="project-modal-header">
            <div className="project-modal-header-text">
              <h3 className="project-modal-title">{activeProject.title}</h3>
              <p className="project-modal-desc">{activeProject.description}</p>
            </div>
            {projects.length > 1 && (
              <div className="project-modal-nav-btns">
                <button
                  type="button"
                  className="modal-nav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  aria-label="Previous project"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="modal-nav-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  aria-label="Next project"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Meta Row: Industry, Service, Duration */}
          {activeProject.meta && (
            <div className="project-modal-meta-row">
              <div className="project-modal-meta-item">
                <div className="modal-meta-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M14 7h1" />
                    <path d="M9 11h1" />
                    <path d="M14 11h1" />
                    <path d="M9 15h1" />
                    <path d="M14 15h1" />
                    <path d="M10 21v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3" />
                  </svg>
                </div>
                <div className="modal-meta-text">
                  <span className="modal-meta-label">Industry</span>
                  <span className="modal-meta-value">
                    {activeProject.meta.industry}
                  </span>
                </div>
              </div>

              <div className="modal-meta-divider"></div>

              <div className="project-modal-meta-item">
                <div className="modal-meta-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className="modal-meta-text">
                  <span className="modal-meta-label">Service</span>
                  <span className="modal-meta-value">
                    {activeProject.meta.service}
                  </span>
                </div>
              </div>

              <div className="modal-meta-divider"></div>

              <div className="project-modal-meta-item">
                <div className="modal-meta-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="0" ry="0" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <text
                      x="12"
                      y="18"
                      fontSize="7"
                      fontWeight="700"
                      textAnchor="middle"
                      fill="#0555FF"
                      stroke="none"
                      fontFamily="Poppins, sans-serif"
                    >
                      31
                    </text>
                  </svg>
                </div>
                <div className="modal-meta-text">
                  <span className="modal-meta-label">Duration</span>
                  <span className="modal-meta-value">
                    {activeProject.meta.duration}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Story Details: Challenge, Solution, Impact */}
          <div className="project-modal-story-list">
            {activeProject.challenge && (
              <div className="project-modal-story-item">
                <div className="story-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M14 7h1" />
                    <path d="M9 11h1" />
                    <path d="M14 11h1" />
                    <path d="M9 15h1" />
                    <path d="M14 15h1" />
                  </svg>
                </div>
                <div className="story-text-box">
                  <h4 className="story-title">The Challenge</h4>
                  <p className="story-desc">{activeProject.challenge}</p>
                </div>
              </div>
            )}

            {activeProject.solution && (
              <div className="project-modal-story-item">
                <div className="story-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M14 7h1" />
                    <path d="M9 11h1" />
                    <path d="M14 11h1" />
                    <path d="M9 15h1" />
                    <path d="M14 15h1" />
                  </svg>
                </div>
                <div className="story-text-box">
                  <h4 className="story-title">Our Solution</h4>
                  <p className="story-desc">{activeProject.solution}</p>
                </div>
              </div>
            )}

            {activeProject.impact && (
              <div className="project-modal-story-item">
                <div className="story-icon-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0555FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
                    <path d="M9 7h1" />
                    <path d="M14 7h1" />
                    <path d="M9 11h1" />
                    <path d="M14 11h1" />
                    <path d="M9 15h1" />
                    <path d="M14 15h1" />
                  </svg>
                </div>
                <div className="story-text-box">
                  <h4 className="story-title">The Impact</h4>
                  <p className="story-desc">{activeProject.impact}</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Metrics Row */}
          {activeProject.metrics && activeProject.metrics.length > 0 && (
            <div className="project-modal-metrics-row">
              {activeProject.metrics.map((m, i) => (
                <div key={i} className="project-modal-metric-col">
                  <span className="metric-val">{m.value}</span>
                  <span className="metric-lbl">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
