'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    message: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Please agree to our privacy policy to submit your inquiry.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        workEmail: '',
        phone: '',
        company: '',
        serviceType: '',
        budget: '',
        timeline: '',
        message: '',
        agree: false,
      });
    }, 4000);
  };

  return (
    <section className="contact-form-section-wrapper py-5 bg-light">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row g-5 align-items-start">
          {/* Left Side: Contact Information & Guarantees */}
          <div className="col-12 col-lg-5">
            <div className="contact-form-badge-capsule mb-3">
              <span className="badge-bullet"></span>
              <span className="badge-text">Direct Practitioner Access</span>
            </div>

            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#0F172A', lineHeight: '1.25' }}>
              Let’s Engineer Your <span className="contact-blue-highlight">Technology Blueprint</span>
            </h2>

            <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
              Connect directly with our solutions architects to discuss technical architecture, product demonstrations, or custom engineering timelines.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              {/* Email Block */}
              <div className="p-3 bg-white rounded-3 border d-flex gap-3 align-items-start shadow-sm">
                <FiMail className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-muted small fw-bold text-uppercase d-block">Work Inquiries &amp; RFP</span>
                  <a href="mailto:contact@heapvue.com" className="fw-bold text-dark text-decoration-none">
                    contact@heapvue.com
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-3 bg-white rounded-3 border d-flex gap-3 align-items-start shadow-sm">
                <FiPhone className="text-success mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-muted small fw-bold text-uppercase d-block">Direct Phone</span>
                  <a href="tel:+919400171674" className="fw-bold text-dark text-decoration-none">
                    +91 9400171674
                  </a>
                </div>
              </div>

              {/* Address Block with Map Link */}
              <div className="p-3 bg-white rounded-3 border d-flex gap-3 align-items-start shadow-sm">
                <FiMapPin className="text-danger mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-muted small fw-bold text-uppercase d-block">Headquarters</span>
                  <p className="small text-dark mb-1" style={{ lineHeight: '1.4' }}>
                    39/2475-B1, Suite C54, LR Towers, SJRRA 104 S J Road, Palarivattom, Ernakulam, Kerala 682025, India
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Palarivattom+Kochi+Kerala" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="small text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
                  >
                    View on Google Maps <FiExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Working Hours & Response SLA */}
              <div className="p-3 bg-white rounded-3 border d-flex gap-3 align-items-start shadow-sm">
                <FiClock className="text-info mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-muted small fw-bold text-uppercase d-block">Operating Hours &amp; Response SLA</span>
                  <p className="small text-dark mb-1">
                    Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM IST
                  </p>
                  <span className="badge bg-success-subtle text-success small">
                    Guaranteed Response within 24 Hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Standardized Comprehensive Form */}
          <div className="col-12 col-lg-7">
            <div className="p-4 p-md-5 rounded-4 bg-white border shadow-sm">
              <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '1.5rem' }}>
                Project Discovery &amp; Consultation Form
              </h3>
              <p className="text-muted small mb-4">
                Please provide details about your project scope, timeline, and goals.
              </p>

              {submitted ? (
                <div className="p-4 rounded-3 bg-success-subtle text-success text-center">
                  <FiCheckCircle size={40} className="mb-2" />
                  <h4 className="fw-bold mb-1">Inquiry Received</h4>
                  <p className="small mb-0">
                    Thank you! Our engineering team will review your brief and contact you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name and Email */}
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Work Email *</label>
                      <input
                        type="email"
                        name="workEmail"
                        placeholder="john@company.com"
                        value={formData.workEmail}
                        onChange={handleChange}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company & Phone */}
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Company / Organization</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Type (Aligned with entire website) */}
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark">Primary Service or Product Interest *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="" disabled>Select service or product*</option>
                      <optgroup label="Engineering Solutions">
                        <option value="platform-development">Platform Development</option>
                        <option value="legacy-modernisation">Legacy System Modernisation</option>
                        <option value="ai-automation">AI &amp; Intelligent Automation</option>
                        <option value="ecommerce">E-commerce &amp; Digital Experience</option>
                        <option value="mobile-apps">Mobile Applications (iOS/Android)</option>
                        <option value="system-integration">System Integration &amp; Zero-Trust Security</option>
                      </optgroup>
                      <optgroup label="Consulting & Advisory">
                        <option value="digital-transformation">Digital Transformation Roadmaps</option>
                        <option value="tech-consulting">Technology &amp; Architecture Consulting</option>
                        <option value="data-compliance">Data Privacy Compliance (DPDP, GDPR, HIPAA)</option>
                        <option value="ai-consulting">AI Strategy &amp; Governance Advisory</option>
                      </optgroup>
                      <optgroup label="Proprietary Products">
                        <option value="vuecart">VueCart Headless Commerce</option>
                        <option value="heapsync">HeapSync CRM</option>
                        <option value="chatpress">ChatPress AI Agent</option>
                        <option value="apptuner">AppTuner DevOps</option>
                        <option value="learnly">Learnly LMS</option>
                      </optgroup>
                      <option value="general">Other Technical Inquiry</option>
                    </select>
                  </div>

                  {/* Row 4: Budget & Timeline */}
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Estimated Project Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select budget range (optional)</option>
                        <option value="under-15k">&lt; $15,000</option>
                        <option value="15k-35k">$15,000 &ndash; $35,000</option>
                        <option value="35k-75k">$35,000 &ndash; $75,000</option>
                        <option value="75k-plus">$75,000+</option>
                        <option value="saas-license">Product Monthly License</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-dark">Expected Delivery Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select timeline (optional)</option>
                        <option value="immediate">Immediate (&lt; 1 month)</option>
                        <option value="1-3-months">1 &ndash; 3 Months</option>
                        <option value="3-6-months">3 &ndash; 6 Months</option>
                        <option value="exploratory">Exploratory / Discovery Phase</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief */}
                  <div className="mb-3">
                    <label className="form-label small fw-bold text-dark">Project Brief or Requirements</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Describe your current tech stack, key operational objectives, or features required..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    ></textarea>
                  </div>

                  {/* Consent Checkbox with Explicit Link to /privacy */}
                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      name="agree"
                      id="consentCheck"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="form-check-input"
                    />
                    <label htmlFor="consentCheck" className="form-check-label small text-muted">
                      I agree to be contacted by Heapvue regarding this inquiry and acknowledge that my data is handled in accordance with the{' '}
                      <Link href="/privacy" target="_blank" className="text-primary text-decoration-underline fw-semibold">
                        Privacy Policy
                      </Link>.
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-3 fw-bold"
                    style={{ backgroundColor: '#0555FF', borderRadius: '8px', fontSize: '1rem' }}
                  >
                    Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
