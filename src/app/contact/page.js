import React from "react";
import { IoChatbubblesOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { SlCallIn } from "react-icons/sl";
import { ButtonSecondry, Button } from "../components/button";
import BotttomBanner from "../components/bottomBanner";

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
                  <p>Heapvue, 2nd Floor, Thymuriyil Building, S Janatha Rd, Palarivattom, Kochi, Kerala 682025.</p>
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
                  <ButtonSecondry text={"+91 9400171674"}></ButtonSecondry>
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
            {/* General Information */}
            <div className="mb-5">
              <h3 className="mb-4">General Information</h3>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="accordion" id="generalFAQ">
                    {[
                      {
                        id: "gen1",
                        question:
                          "How can I contact Heapvue for general inquiries?",
                        answer:
                          "You can reach Heapvue through our website's contact form, via email at contact@heapvue.com, or by calling our customer support number.",
                      },
                      {
                        id: "gen2",
                        question: "Where is Heapvue located?",
                        answer:
                          "Heapvue is headquartered in Kochi, India, with services available globally.",
                      },
                      {
                        id: "gen3",
                        question: "Do you serve international clients?",
                        answer:
                          "Yes, Heapvue works with clients worldwide, providing customized solutions tailored to diverse business needs.",
                      },
                      {
                        id: "gen4",
                        question: "What is your response time for inquiries?",
                        answer:
                          "We strive to respond to all inquiries within 24 to 48 hours on business days.",
                      },
                      {
                        id: "gen5",
                        question:
                          "Is my personal information secure when I contact Heapvue?",
                        answer:
                          "Absolutely. We adhere to strict privacy policies to ensure that all your personal and business information is secure and used only for the purpose of addressing your inquiries.",
                      },
                    ].map((faq, index) => (
                      <div className="accordion-item mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
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
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="accordion" id="servicesFAQ">
                    {[
                      {
                        id: "conf1",
                        question:
                          "How does Heapvue ensure confidentiality in projects?",
                        answer:
                          "We take confidentiality seriously and sign Non-Disclosure Agreements (NDAs) with our clients to safeguard sensitive information. All project-related data is securely handled and stored.",
                      },
                      {
                        id: "trust1",
                        question:
                          "Why should we trust Heapvue for our business needs?",
                        answer:
                          "Heapvue has a proven track record of delivering high-quality technology solutions to businesses across industries. We focus on transparency, technical excellence, and a client-first approach to building lasting partnerships.",
                      },
                      {
                        id: "ref1",
                        question:
                          "Can you provide references from your previous clients?",
                        answer:
                          "Yes, upon request, we can share references or testimonials from satisfied clients who have partnered with us for their projects.",
                      },
                      {
                        id: "disc1",
                        question:
                          "Do you offer any discounts for your services?",
                        answer:
                          "Heapvue offers competitive pricing, and discounts may be available for long-term partnerships or large-scale projects. Please contact us for specific details.",
                      },
                      {
                        id: "contract1",
                        question:
                          "What contracts and agreements do you typically sign with clients?",
                        answer:
                          "We usually sign Service Agreements and Non-Disclosure Agreements (NDAs) with our clients to clearly outline project scope, confidentiality terms, timelines, and deliverables.",
                      },
                    ].map((faq, index) => (
                      <div className="accordion-item mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
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
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="mb-4">Services & Support</h3>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="accordion" id="generalFAQ">
                    {[
                      {
                        id: "serv1",
                        question:
                          "How does Heapvue ensure the quality of its projects?",
                        answer:
                          "Heapvue employs a robust quality assurance process that includes thorough testing at every stage of development, regular code reviews, and adherence to industry standards.",
                      },
                      {
                        id: "serv2",
                        question:
                          "What benefits can you guarantee with your services?",
                        answer:
                          "Heapvue guarantees reliable solutions tailored to your needs, timely delivery, transparent communication, and ongoing support to ensure your satisfaction.",
                      },
                      {
                        id: "serv3",
                        question:
                          "Can you promise time-bound results for deliverables?",
                        answer:
                          "Yes, we work with defined timelines and milestones to ensure time-bound results. Our team maintains clear communication to keep you informed about progress and any changes.",
                      },
                      {
                        id: "serv4",
                        question:
                          "How will we stay updated on the progress of our project?",
                        answer:
                          "Heapvue ensures regular updates through scheduled meetings, progress reports, and access to project management tools. Our team keeps you informed every step of the way.",
                      },
                      {
                        id: "serv5",
                        question:
                          "Is testing included as part of your pricing structure?",
                        answer:
                          "Yes, testing is a fundamental part of our development process and is included in our pricing. We ensure your product is thoroughly tested for functionality, performance, and security.",
                      },
                      {
                        id: "serv6",
                        question:
                          "What is expected from us during the development process?",
                        answer:
                          "Your involvement is crucial for the project’s success. We may require inputs such as detailed requirements, feedback on prototypes, and timely approvals to ensure alignment with your vision.",
                      },
                      {
                        id: "serv7",
                        question:
                          "Will I have access to the code during the development cycle, and what version control methods do you use?",
                        answer:
                          "Yes, you will have access to the code throughout the development process. We use industry-standard version control systems such as Git to ensure seamless collaboration and transparency.",
                      },
                      {
                        id: "serv8",
                        question:
                          "Can we request a pilot project to evaluate your capabilities?",
                        answer:
                          "Absolutely. Heapvue can undertake a pilot project to showcase our expertise and ensure our solutions align with your expectations.",
                      },
                    ].map((faq, index) => (
                      <div className="accordion-item mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
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
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="accordion" id="servicesFAQ">
                    {[
                      {
                        id: "standards1",
                        question:
                          "Can we enforce our coding standards on your developers?",
                        answer:
                          "Absolutely. Heapvue developers can adhere to your coding standards and guidelines, ensuring the project aligns with your specific requirements and processes.",
                      },
                      {
                        id: "onsite1",
                        question: "Can Heapvue work on-site if required?",
                        answer:
                          "Yes, Heapvue can work on-site if the project requires it. Our team is flexible and can collaborate with your in-house staff to ensure smooth project execution.",
                      },
                      {
                        id: "consultation1",
                        question:
                          "How do I request a consultation or demo for your services?",
                        answer:
                          "You can request a consultation or demo by contacting us through our website’s contact form, email, or phone. Our team will promptly respond to schedule a session tailored to your needs.",
                      },
                      {
                        id: "custom1",
                        question:
                          "Can Heapvue customize solutions for my business needs?",
                        answer:
                          "Yes, Heapvue specializes in creating customized solutions designed to meet the unique requirements of your business, regardless of its size or industry.",
                      },
                      {
                        id: "support1",
                        question:
                          "How do I get support for an existing project?",
                        answer:
                          "For support on an existing project, reach out to us through our support channels. We will assign a dedicated expert to address your concerns and provide timely solutions.",
                      },
                      {
                        id: "techissues1",
                        question:
                          "What should I do if I experience technical issues?",
                        answer:
                          "If you experience technical issues, contact our support team immediately via email or phone. We provide prompt assistance to minimize downtime and restore functionality.",
                      },
                      {
                        id: "ongoingsupport1",
                        question:
                          "Do you offer ongoing support for completed projects?",
                        answer:
                          "Yes, Heapvue offers ongoing support and maintenance services to ensure that your project continues to function optimally and adapt to any evolving business needs.",
                      },
                    ].map((faq, index) => (
                      <div className="accordion-item mb-3" key={faq.id}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
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
                          <div className="accordion-body">{faq.answer}</div>
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
                        question:
                          "I'm interested in partnering with Heapvue. Whom should I contact?",
                        answer:
                          "For partnership opportunities, please reach out to our business development team through the Contact Us page or email us directly at contact@heapvue.com.",
                      },
                      {
                        id: "car2",
                        question: "Are there any open positions at Heapvue?",
                        answer:
                          "Heapvue is always looking for talented professionals to join our team. Please check the Careers section on our website for current job openings and opportunities.",
                      },
                      {
                        id: "car3",
                        question: "How can I apply for a job?",
                        answer:
                          "To apply for a job at Heapvue, visit our Careers page and submit your application through the online form. Alternatively, you can email your resume to our HR team at hr@heapvue.com.",
                      },
                      {
                        id: "car4",
                        question:
                          "Can we outsource projects from our clients to Heapvue?",
                        answer:
                          "Yes, Heapvue can serve as your trusted partner for outsourced projects. We work with discretion and professionalism to deliver on your commitments.",
                      },
                    ].map((faq, index) => (
                      <div
                        className="accordion-item border-0 mb-3"
                        key={faq.id}
                      >
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
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
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BotttomBanner
          title="Let’s Solve It Together!"
          desc="Your success is our priority, and we look forward to crafting
              solutions that make a difference."
        />
      </div>
    </div>
  );
}

export default Contact;
