'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { trackMetaEvent } from '@/lib/metaPixel';
import { getStoredUtm, getStoredAttribution, UTM_KEYS } from '@/lib/utm';
import { FiCheckCircle, FiChevronDown } from 'react-icons/fi';

const ENQUIRY_TABS = [
  { id: 'service', label: 'Service Enquiry' },
  { id: 'platform', label: 'Platform Enquiry' },
  { id: 'consultation', label: 'Consultation Enquiry' },
  { id: 'careers', label: 'Careers Enquiry' },
];

const SERVICE_OPTIONS = [
  'Custom Software Development',
  'AI & Intelligent Automation',
  'Enterprise Cloud Infrastructure & DevOps',
  'Legacy System Modernisation',
  'E-Commerce & Digital Experience',
  'Mobile Applications (iOS & Android)',
  'System Integration & Zero-Trust Security',
];

const PLATFORM_OPTIONS = [
  'AI Workflows & Intelligent Automation',
  'Heapsync CRM & Operations Engine',
  'Vuecart Headless Commerce Platform',
  'Chatpress Conversational AI Framework',
  'Apptuner Cloud & DevOps Suite',
  'Learnly Enterprise LMS',
];

const CONSULTATION_OPTIONS = [
  'Digital Transformation Strategy & Roadmap',
  'Cloud Architecture & Migration Advisory',
  'AI Strategy, Feasibility & RAG Architecture',
  'Data Privacy & Compliance (DPDP, GDPR, HIPAA)',
  'Technology Stack Modernisation & Audit',
];

const CAREER_OPTIONS = [
  'Senior Software Engineer',
  'Full Stack Developer',
  'Cloud & DevOps Engineer',
  'AI / LLM Application Engineer',
  'Product Manager',
  'UX/UI Designer',
  'Senior Content Writer',
  'Junior Content Writer',
  'Technical Project Manager',
  'Enterprise Solutions Consultant',
  'General Career Application / Internship',
];

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState('service');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyOrPortfolio: '',
    selectedType: '',
    description: '',
    optInMarketing: false,
    agreePrivacy: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [utmParams, setUtmParams] = useState({});
  const formStartedRef = useRef(false);

  useEffect(() => {
    setUtmParams(getStoredUtm());
    const handleUtmUpdated = () => setUtmParams(getStoredUtm());
    window.addEventListener('heapvue:utm-updated', handleUtmUpdated);
    return () => window.removeEventListener('heapvue:utm-updated', handleUtmUpdated);
  }, []);

  // Auto-detect tab and role from URL query parameters (e.g. /contact?tab=careers&role=Senior+Software+Engineer)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      const roleParam = params.get('role');

      if (tabParam && ENQUIRY_TABS.some((t) => t.id === tabParam.toLowerCase())) {
        setActiveTab(tabParam.toLowerCase());
      }

      if (roleParam) {
        setFormData((prev) => ({
          ...prev,
          selectedType: roleParam,
        }));
      }

      // Smooth scroll to form if coming from a job apply link
      if (tabParam === 'careers' || roleParam || window.location.hash === '#contact-form') {
        const formEl = document.getElementById('contact-form');
        if (formEl) {
          setTimeout(() => {
            formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    }
  }, []);

  // Fires once per visit on first focus inside the form, so "started but never submitted" can be targeted.
  const handleFormStart = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackMetaEvent('ContactFormStart', { content_category: activeTab });
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setFormData((prev) => ({
      ...prev,
      selectedType: '',
      description: '',
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('Please agree to the Privacy Statement before submitting.');
      return;
    }
    const activeUtms = getStoredUtm();
    // Post enquiry to Heapvue CMS with active UTM attribution data
    try {
      fetch('https://cms.heapvue.cloud/api/v1/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enquiryType: activeTab,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          companyOrPortfolio: formData.companyOrPortfolio,
          selectedType: formData.selectedType,
          description: formData.description,
          optInMarketing: formData.optInMarketing,
          agreePrivacy: formData.agreePrivacy,
          ...activeUtms,
        }),
      }).catch((err) => console.warn('CMS sync notice:', err));
    } catch (e) { }

    // Careers applications are not sales leads, so they get their own event.
    if (activeTab === 'careers') {
      trackMetaEvent('CareerApplication', { content_name: formData.selectedType, ...activeUtms });
    } else {
      trackMetaEvent('Lead', { content_category: activeTab, content_name: formData.selectedType, ...activeUtms });
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        companyOrPortfolio: '',
        selectedType: '',
        description: '',
        optInMarketing: false,
        agreePrivacy: false,
      });
    }, 4500);
  };

  const getDropdownLabel = () => {
    switch (activeTab) {
      case 'service':
        return 'Select service type*';
      case 'platform':
        return 'Select platform of interest*';
      case 'consultation':
        return 'Select consultation focus area*';
      case 'careers':
        return 'Select role or department*';
      default:
        return 'Select option*';
    }
  };

  const getDropdownOptions = () => {
    switch (activeTab) {
      case 'service':
        return SERVICE_OPTIONS;
      case 'platform':
        return PLATFORM_OPTIONS;
      case 'consultation':
        return CONSULTATION_OPTIONS;
      case 'careers': {
        if (formData.selectedType && !CAREER_OPTIONS.includes(formData.selectedType)) {
          return [formData.selectedType, ...CAREER_OPTIONS];
        }
        return CAREER_OPTIONS;
      }
      default:
        return [];
    }
  };

  const getSectionTitle = () => {
    switch (activeTab) {
      case 'service':
        return 'About the service';
      case 'platform':
        return 'About the platform';
      case 'consultation':
        return 'About the consultation';
      case 'careers':
        return 'About your application';
      default:
        return 'About your enquiry';
    }
  };

  const getDescriptionPlaceholder = () => {
    switch (activeTab) {
      case 'service':
        return 'Product / project description';
      case 'platform':
        return 'Platform requirements or business use case';
      case 'consultation':
        return 'Briefly outline your consultation goals or challenges';
      case 'careers':
        return 'Briefly tell us about your experience and background';
      default:
        return 'Please provide details';
    }
  };

  return (
    <section id="contact-form" className="contact-form-main-section">
      <div className="contact-form-main-container">
        <div className="contact-form-layout-grid">
          {/* Left Column: Title & Office Details */}
          <div className="contact-info-col">
            <div className="contact-form-badge-capsule">
              <span className="badge-bullet" aria-hidden="true"></span>
              <span className="badge-text">Contact Heapvue</span>
            </div>

            <h2 className="contact-form-main-title">
              <span className="contact-title-line">Let’s Build Smart</span>
              <span className="contact-title-line contact-title-blue">
                Technology Solutions Together.
              </span>
            </h2>

            <div className="contact-details-list">
              {/* EMAIL */}
              <div className="contact-detail-item">
                <span className="contact-detail-label">EMAIL</span>
                <a href="mailto:contact@heapvue.com" className="contact-detail-value-link">
                  contact@heapvue.com
                </a>
              </div>

              {/* PHONE NUMBER */}
              <div className="contact-detail-item">
                <span className="contact-detail-label">PHONE NUMBER</span>
                <a href="tel:+919400171674" className="contact-detail-value-link">
                  +91 9400171674
                </a>
              </div>

              {/* ADDRESS */}
              <div className="contact-detail-item">
                <span className="contact-detail-label">ADDRESS</span>
                <p className="contact-detail-address">
                  Heapvue, 39/2475-B1, Suite C54, LR Towers, SJRRA 104 S J Road, Palarivattom, Ernakulam, Kerala 682025, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Form */}
          <div className="contact-form-card-col">
            {/* 4 Enquiry Tabs */}
            <div className="enquiry-tabs-header" role="tablist">
              {ENQUIRY_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`enquiry-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="contact-form-success-box">
                <FiCheckCircle size={44} className="success-icon" />
                <h3 className="success-title">Your Query Has Been Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out. Our engineering and solutions team will review your enquiry and get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} onFocus={handleFormStart} className="enquiry-actual-form">
                {/* 1. Group: Your Details */}
                <div className="form-group-block">
                  <h4 className="form-group-heading">Your Details</h4>
                  <div className="form-inputs-grid">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="enter your full name*"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="form-custom-input"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="enter your phone number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-custom-input"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-custom-input"
                    />
                    <input
                      type="text"
                      name="companyOrPortfolio"
                      placeholder={
                        activeTab === 'careers'
                          ? 'linkedin / portfolio link*'
                          : 'company / brand name'
                      }
                      value={formData.companyOrPortfolio}
                      onChange={handleChange}
                      required={activeTab === 'careers'}
                      className="form-custom-input"
                    />
                  </div>
                </div>

                {/* 2. Group: About the [Type] */}
                <div className="form-group-block">
                  <h4 className="form-group-heading">{getSectionTitle()}</h4>
                  <div className="form-single-col-group">
                    <div className="select-dropdown-wrapper">
                      <select
                        name="selectedType"
                        value={formData.selectedType}
                        onChange={handleChange}
                        required
                        className="form-custom-select"
                      >
                        <option value="" disabled>
                          {getDropdownLabel()}
                        </option>
                        {getDropdownOptions().map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="select-arrow-icon" />
                    </div>

                    <textarea
                      name="description"
                      rows={4}
                      placeholder={getDescriptionPlaceholder()}
                      value={formData.description}
                      onChange={handleChange}
                      className="form-custom-textarea"
                    />
                  </div>
                </div>

                {/* 3. The 2 Toggle Switches (Matching Image 2) */}
                <div className="form-toggles-block">
                  {/* Toggle 1: Marketing Opt-in */}
                  <label className="toggle-item-row">
                    <span className="toggle-switch-container">
                      <input
                        type="checkbox"
                        name="optInMarketing"
                        checked={formData.optInMarketing}
                        onChange={handleChange}
                        className="toggle-native-checkbox"
                      />
                      <span className="toggle-track" />
                    </span>
                    <span className="toggle-label-text">
                      Opt in for marketing communication{' '}
                      <Link href="/privacy" className="toggle-privacy-link">
                        Privacy Statement
                      </Link>
                    </span>
                  </label>

                  {/* Toggle 2: Privacy Agreement (Required) */}
                  <label className="toggle-item-row">
                    <span className="toggle-switch-container">
                      <input
                        type="checkbox"
                        name="agreePrivacy"
                        checked={formData.agreePrivacy}
                        onChange={handleChange}
                        required
                        className="toggle-native-checkbox"
                      />
                      <span className="toggle-track" />
                    </span>
                    <span className="toggle-label-text">
                      I agree to the{' '}
                      <Link href="/privacy" className="toggle-privacy-link">
                        Privacy Statement
                      </Link>
                      *
                    </span>
                  </label>
                </div>

                {/* Hidden UTM tracking fields */}
                {UTM_KEYS.map((key) => (
                  <input
                    key={key}
                    type="hidden"
                    name={key}
                    value={utmParams[key] || ''}
                  />
                ))}

                {/* Submit Button */}
                <button type="submit" className="form-submit-query-btn">
                  Send your query
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
