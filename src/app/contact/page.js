import React from "react";
import { IoChatbubblesOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { SlCallIn } from "react-icons/sl";
import { ButtonSecondry, Button } from "../components/button";
import Enquiry from "../components/enquiry";

function Contact() {
  return (
    <div>
      <div className="container-fluid p-4 p-lg-5 contact">
        <div className="row">
          <div className="col-md-8">
            <h2>Let's Build Something Great Together</h2>
          </div>
        </div>
        <div className="row mt-5 text-start">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex flex-column justify-content-between align-items-start">
                <div className="icon">
                  <IoChatbubblesOutline />
                </div>
                <div>
                  <h5>Chat to sales</h5>
                  <p>we're here to help.</p>
                  <ButtonSecondry text={"contact@heapvue.com"}></ButtonSecondry>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex flex-column justify-content-between align-items-start">
                <div className="icon">
                  <IoLocationOutline />
                </div>
                <div>
                  <h5>Visit us</h5>
                  <p>Visit our office HQ.</p>
                  <ButtonSecondry text={"View on Google Maps"}></ButtonSecondry>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex flex-column justify-content-between align-items-start">
                <div className="icon">
                  <FiPhone />
                </div>
                <div>
                  <h5>Call us</h5>
                  <p>Mon - Fri from 9am to 5pm.</p>
                  <ButtonSecondry text={"+91 0000000000"}></ButtonSecondry>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body d-flex flex-column justify-content-between align-items-start">
                <div className="icon">
                  <SlCallIn />
                </div>
                <div>
                  <h5>Request Call Back</h5>
                  <p>we'll call you back.</p>
                  <ButtonSecondry
                    text="Request Call Back"
                    type="button"
                    dataBsToggle="modal"
                    dataBsTarget="#inquiryModal"
                  ></ButtonSecondry>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between p-4 bottomBanner">
              <div className="text-center text-lg-start mb-3 mb-lg-0">
                <h2 className="mb-2">Become a Solver!</h2>
                <p>
                  Access to a dedicated team of IT specialists who deliver the
                  perfect solutions.
                </p>
              </div>
              <div>
                <Button
                  text="Get in Touch"
                  type="button"
                  dataBsToggle="modal"
                  dataBsTarget="#inquiryModal"
                  className="btn btn-dark px-4 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <Enquiry />
    </div>
  );
}

export default Contact;
