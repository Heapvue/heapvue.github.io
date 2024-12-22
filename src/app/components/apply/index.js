"use client";
import React, { useState, useEffect } from "react";
import $ from "jquery";
import { ButtonSecondry } from "../button";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Apply = (props) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    ResumeUrl: "",
    PostId: "",
    PostName: "",
  });

  useEffect(() => {
    if (props.post) {
      setFormData((prevData) => ({
        ...prevData,
        PostId: props.post.jobId || "N/A",
        PostName: props.post.jobTitle || "N/A",
      }));
    }
  }, [props.post]);

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    $.ajax({
      url: `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_CAREERS_FORM_ID}/exec`,
      data: formData,
      method: "post",
      success: function () {
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          ResumeUrl: "",
          PostId: formData.PostId,
          PostName: formData.PostName,
        });
        toast.success("Your application has been submitted successfully!");
        setIsSubmitting(false);
      },
      error: function () {
        toast.error("Something went wrong, please try again!");
        setIsSubmitting(false);
      },
    });
  };

  return (
    <div className="enquiryPopup">
      <div
        className="modal fade"
        id="careersModal"
        tabIndex="-1"
        aria-labelledby="careersModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="careersModalLabel">
                Apply Now!
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
                    name="PostId"
                    id="postId"
                    value={formData.PostId}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="PostName"
                    id="postName"
                    value={formData.PostName}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    id="name"
                    value={formData.Name}
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
                    placeholder="Your Email Address"
                    required
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <PhoneInput
                    country={"in"}
                    value={formData.Phone}
                    onChange={(phone) =>
                      setFormData({ ...formData, Phone: phone })
                    }
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
                    }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="ResumeUrl"
                    id="resume"
                    value={formData.ResumeUrl}
                    placeholder="Your Resume URL"
                    required
                    onChange={onChange}
                  />
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
                        "Submit Application"
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

export default Apply;
