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
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            
            {/* General Information */}
            <div className="mb-5">
              <h3 className="h4 mb-4">General Information</h3>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="accordion" id="generalFAQ">
                    {[
                      {
                        id: "gen1",
                        question: "How can I contact Heapvue for general inquiries?",
                        answer: "You can reach Heapvue through our website's contact form, via email at contact@heapvue.com, or by calling our customer support number."
                      },
                      {
                        id: "gen2",
                        question: "Where is Heapvue located?",
                        answer: "Heapvue is headquartered in Kochi, India, with services available globally."
                      },
                      {
                        id: "gen3",
                        question: "Do you serve international clients?",
                        answer: "Yes, Heapvue works with clients worldwide, providing customized solutions tailored to diverse business needs."
                      },
                      {
                        id: "gen4",
                        question: "What is your response time for inquiries?",
                        answer: "We strive to respond to all inquiries within 24 to 48 hours on business days."
                      },
                      {
                        id: "gen5",
                        question: "Is my personal information secure when I contact Heapvue?",
                        answer: "Absolutely. We adhere to strict privacy policies to ensure that all your personal and business information is secure and used only for the purpose of addressing your inquiries."
                      }
                    ].map((faq, index) => (
                      <div className="accordion-item border-0 mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed shadow-sm rounded"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${faq.id}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={faq.id}
                          className="accordion-collapse collapse"
                          data-bs-parent="#generalFAQ"
                        >
                          <div className="accordion-body bg-light rounded-bottom">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services & Support */}
                <div className="col-lg-6">
                  <div className="accordion" id="servicesFAQ">
                    {[
                      {
                        id: "serv1",
                        question: "How does Heapvue ensure the quality of its projects?",
                        answer: "Heapvue employs a robust quality assurance process that includes thorough testing at every stage of development, regular code reviews, and adherence to industry standards."
                      },
                      {
                        id: "serv2",
                        question: "What benefits can you guarantee with your services?",
                        answer: "Heapvue guarantees reliable solutions tailored to your needs, timely delivery, transparent communication, and ongoing support to ensure your satisfaction."
                      },
                      {
                        id: "serv3",
                        question: "Can you promise time-bound results for deliverables?",
                        answer: "Yes, we work with defined timelines and milestones to ensure time-bound results. Our team maintains clear communication to keep you informed about progress and any changes."
                      },
                      {
                        id: "serv4",
                        question: "How will we stay updated on the progress of our project?",
                        answer: "Heapvue ensures regular updates through scheduled meetings, progress reports, and access to project management tools. Our team keeps you informed every step of the way."
                      },
                      {
                        id: "serv5",
                        question: "Is testing included as part of your pricing structure?",
                        answer: "Yes, testing is a fundamental part of our development process and is included in our pricing. We ensure your product is thoroughly tested for functionality, performance, and security."
                      }
                    ].map((faq, index) => (
                      <div className="accordion-item border-0 mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed shadow-sm rounded"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${faq.id}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={faq.id}
                          className="accordion-collapse collapse"
                          data-bs-parent="#servicesFAQ"
                        >
                          <div className="accordion-body bg-light rounded-bottom">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Careers & Partnerships */}
            <div className="mb-5">
              <h3 className="h4 mb-4">Careers & Partnerships</h3>
              <div className="row">
                <div className="col-lg-6">
                  <div className="accordion" id="careersFAQ">
                    {[
                      {
                        id: "car1",
                        question: "I'm interested in partnering with Heapvue. Whom should I contact?",
                        answer: "For partnership opportunities, please reach out to our business development team through the Contact Us page or email us directly at contact@heapvue.com."
                      },
                      {
                        id: "car2",
                        question: "Are there any open positions at Heapvue?",
                        answer: "Heapvue is always looking for talented professionals to join our team. Please check the Careers section on our website for current job openings and opportunities."
                      },
                      {
                        id: "car3",
                        question: "How can I apply for a job?",
                        answer: "To apply for a job at Heapvue, visit our Careers page and submit your application through the online form. Alternatively, you can email your resume to our HR team at hr@heapvue.com."
                      }
                    ].map((faq, index) => (
                      <div className="accordion-item border-0 mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed shadow-sm rounded"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${faq.id}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={faq.id}
                          className="accordion-collapse collapse"
                          data-bs-parent="#careersFAQ"
                        >
                          <div className="accordion-body bg-light rounded-bottom">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
