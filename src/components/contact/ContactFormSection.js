'use client';

import React, { useState } from 'react';

export default function ContactFormSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    serviceType: '',
    description: '',
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
      alert('Please confirm that your information is accurate by checking the box.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        serviceType: '',
        description: '',
        agree: false,
      });
    }, 4000);
  };

  return (
    <section className="contact-form-section-wrapper">
      <div className="contact-form-container">
        {/* Left Side: Contact Info */}
        <div className="contact-form-left">
          <div className="contact-form-badge-capsule">
            <span className="badge-bullet"></span>
            <span className="badge-text">CONTACT HEAPVUE</span>
          </div>

          <h2 className="contact-form-main-title">
            Let’s Build Smart <br />
            <span className="contact-blue-highlight">Technology Solutions Together.</span>
          </h2>

          <div className="contact-info-blocks">
            {/* Email Block */}
            <div className="info-block">
              <span className="info-label">EMAIL</span>
              <a href="mailto:contact@heapvue.com" className="info-value-link">
                contact@heapvue.com
              </a>
            </div>

            {/* Phone Block */}
            <div className="info-block">
              <span className="info-label">PHONE NUMBER</span>
              <a href="tel:+919400171674" className="info-value-link">
                +91 9400171674
              </a>
            </div>

            {/* Address Block */}
            <div className="info-block">
              <span className="info-label">ADDRESS</span>
              <p className="info-value-address">
                39/2475-B1, SUITE C54 LR, TOWERS, SJRRA 104 S J RD, Palarivattom, Ernakulam, Ernakulam- 682025, Kerala
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="contact-form-right">
          {/* Top Tabs */}
          <div className="contact-tabs">
            <button
              type="button"
              className={`contact-tab-btn ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General Enquiry
            </button>
            <button
              type="button"
              className={`contact-tab-btn ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              Products
            </button>
            <button
              type="button"
              className={`contact-tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
              onClick={() => setActiveTab('careers')}
            >
              Careers
            </button>
          </div>

          {submitted ? (
            <div className="contact-form-success">
              <h3>Thank You!</h3>
              <p>Your query has been submitted successfully. Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form-element" onSubmit={handleSubmit}>
              {/* Section 1: Your Details */}
              <div className="form-section">
                <h4 className="form-section-title">Your Details</h4>
                <div className="form-grid-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="enter your full name*"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="enter your phone number*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>
                <div className="form-grid-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="company / brand name"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Section 2: About the product */}
              <div className="form-section">
                <h4 className="form-section-title">About the product</h4>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="contact-select"
                >
                  <option value="" disabled>
                    Select service type*
                  </option>
                  <option value="ai-solutions">AI &amp; Machine Learning Solutions</option>
                  <option value="software-engineering">Software Engineering &amp; Custom Apps</option>
                  <option value="cloud-infrastructure">Cloud Architecture &amp; Infrastructure</option>
                  <option value="ui-ux-design">UI/UX &amp; Digital Product Design</option>
                  <option value="consulting">IT Strategy &amp; Digital Transformation</option>
                  <option value="other">Other Enquiry</option>
                </select>

                <textarea
                  name="description"
                  placeholder="Product description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="contact-textarea"
                ></textarea>
              </div>

              {/* Section 3: Checkbox & Submit */}
              <div className="form-bottom-action">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkbox-label">
                    I agree to be contacted by Heapvue and confirm that my information is accurate.
                  </span>
                </label>

                <button type="submit" className="contact-submit-btn">
                  Send your query
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
