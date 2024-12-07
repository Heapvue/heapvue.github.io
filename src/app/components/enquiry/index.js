"use client";

import React, { useState } from "react";
import axios from "axios";
import { ButtonSecondry } from "../button";

const Enquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.target);
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value);
    });

    try {
      const response = await axios.post(
        "/api/submit-enquiry",
        formParams.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        setMessage("Form submitted successfully.");
        e.target.reset();
      } else {
        setMessage("Error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("Error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="enquiryPopup">
      <div
        className="modal fade"
        id="inquiryModal"
        tabIndex="-1"
        aria-labelledby="inquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="inquiryModalLabel">
                Request a Call Back
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="demoForm" onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="entry.938846834"
                    id="firstName"
                    autoComplete="off"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="entry.726387839"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    name="entry.1616351108"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="entry.466848905"
                    placeholder="Your Requirements"
                    id="Description"
                    autoComplete="off"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    By Clicking, you agree to your company name{" "}
                    <a href="#">terms of service</a> and{" "}
                    <a href="#">privacy policy</a>.
                  </label>
                </div>
                <div className="modal-footer">
                  <ButtonSecondry
                    type="submit"
                    disabled={isSubmitting}
                    text={
                      isSubmitting ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        "Request a Call Back"
                      )
                    }
                  ></ButtonSecondry>
                </div>
              </form>
              {message && <p className="mt-3 text-center message">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
