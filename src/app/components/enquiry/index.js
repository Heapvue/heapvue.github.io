"use client";
import React, { useState } from "react";
import $ from "jquery";
import { ButtonSecondry } from "../button";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Enquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    $.ajax({
      url: `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_FORM_ID}/exec`,
      data: formData,
      method: "post",
      success: function (response) {
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Message: "",
        });
        toast.success("We will get back to you soon!");
        setIsSubmitting(false);
      },
      error: function (err) {
        toast.error("Something went wrong, please try again!");
        setIsSubmitting(false);
      },
    });
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
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    id="name"
                    value={formData.Name}
                    autoComplete="off"
                    placeholder="Your Name"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="Email"
                    id="email"
                    value={formData.Email}
                    autoComplete="off"
                    placeholder="Your Email Address"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <PhoneInput
                    country={"in"}
                    value={formData.Phone}
                    onChange={(phone) => setFormData({ ...formData, Phone: phone })}
                    inputProps={{
                      name: "Phone",
                      required: true,
                      placeholder: "Your Phone Number",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "45px",
                      fontSize: "15px",
                      paddingLeft: "50px",
                      marginTop: "30px !important",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="Message"
                    placeholder="Your Requirements"
                    id="Description"
                    value={formData.Message}
                    autoComplete="off"
                    rows="3"
                    required
                    onChange={onChange}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
