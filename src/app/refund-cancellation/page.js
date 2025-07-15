import React from "react";
import { Metadata } from 'next'

function RefundCancellation() {
  return (
    <>
      <div className="container py-5 docs">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4">Refund & Cancellation Policy</h1>
            <p className="text-muted">Last Updated: 15 July 2025</p>

            <p>
              At Heapvue, we take pride in delivering high-quality software development
              services tailored to your business needs. Please read our Refund and
              Cancellation Policy carefully before engaging in any project with us.
            </p>

            <h3 id="refund">Refund Policy</h3>
            <p>
              Heapvue follows a strict no refund policy. Once a payment is made
              towards a project, it is non-refundable under any circumstances.
              This includes but is not limited to partial work, change in client
              requirements, or dissatisfaction with the project progress, provided
              the work aligns with the initially agreed scope and timelines.
            </p>

            <h3 id="cancellation">Cancellation Policy</h3>
            <p>
              Clients may choose to cancel the project at any point during its
              execution. However, in the event of cancellation:
            </p>
            <ul>
              <li>
                The client is required to pay for all work completed up to the
                date of cancellation, based on the effort and milestones achieved.
              </li>
              <li>
                Any outstanding dues must be cleared before the release of any
                deliverables.
              </li>
              <li>
                Deliverables will be provided strictly as per the original contract
                and payment terms. Additional requests or scope changes beyond the
                initial agreement may not be included or will be charged separately.
              </li>
            </ul>

            <h3 id="contact">Contact Us</h3>
            <p>
              We encourage all clients to review and approve the scope, timelines,
              and payment terms at the outset of the project to ensure clarity and
              transparency throughout the engagement. If you have any questions
              regarding this policy, please feel free to contact us at:
            </p>
            <p>
              <strong>Heapvue Technologies</strong>
              <br />
              Email:{" "}
              <a href="mailto:contact@heapvue.com">contact@heapvue.com</a>
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="sticky-top" style={{ top: "5rem" }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Table of contents</h5>
                  <ul>
                    <li>
                      <a href="#refund">Refund Policy</a>
                    </li>
                    <li>
                      <a href="#cancellation">Cancellation Policy</a>
                    </li>
                    <li>
                      <a href="#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RefundCancellation;

export const metadata = {
  title: 'Refund & Cancellation Policy | Heapvue',
  description: 'Understand Heapvue\'s refund and cancellation policies for our software development services. Learn about our payment terms and project cancellation guidelines.',
  keywords: 'refund policy, cancellation policy, payment terms, project cancellation, software development services',
  openGraph: {
    title: 'Refund & Cancellation Policy | Heapvue',
    description: 'Understand Heapvue\'s refund and cancellation policies for our software development services. Learn about our payment terms and project cancellation guidelines.',
    images: '/images/legal.jpg',
  }
};
