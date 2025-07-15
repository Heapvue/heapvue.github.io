"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-light py-4 border-top p-2 p-lg-5 footer">
      <div className="container-fluid">
        <div className="row mt-5">
          {/* Company */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Subsideries */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Products & Solutions</h5>
            <ul className="list-unstyled">
              <li>
                <a href="http://chatpress.heapvue.com" target="_blank">
                  Chatpress
                </a>
              </li>
              <li>
                <a href="https://apnicareer.com" target="_blank">
                  Apnicareer
                </a>
              </li>
              {/* <li><a href="https://apptuner.dev" target="_blank">Apptuner</a></li> */}
              <li>
                <Link href="/solutions/lms">LMS & E-learning</Link>
              </li>
              <li>
                <Link href="/solutions/whatsapp">WhatsApp Integration</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/services/ai-ml">AI & Machine Learning</Link>
              </li>
              <li>
                <Link href="/services/application-development">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops">Cloud & DevOps</Link>
              </li>
              <li>
                <Link href="/services/enterprise-solutions">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/generative-ai">Generative AI</Link>
              </li>
              <li>
                <Link href="/services/iot">IoT</Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Industries</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/industries/education">
                  Education and E-learning
                </Link>
              </li>
              <li>
                <Link href="/industries/energy">Energy and Utilities</Link>
              </li>
              <li>
                <Link href="/industries/finance">Finance and Banking</Link>
              </li>
              <li>
                <Link href="/industries/government">
                  Government and Public Sector
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/industries/logistics">
                  Logistics and Transportation
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing">Manufacturing</Link>
              </li>
              <li>
                <Link href="/industries/real-estate">
                  Real Estate and Construction
                </Link>
              </li>
              <li>
                <Link href="/industries/retail">Retail and E-commerce</Link>
              </li>
              <li>
                <Link href="/industries/startups">Startups and SMEs</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Connect with Us</h5>
            <div className="d-flex mt-3">
              {/* <a href="https://www.facebook.com/heapvue" target="_blank" className="text-decoration-none me-3 socialIcon">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/heapvue" target="_blank" className="text-decoration-none me-3 socialIcon">
                <FaInstagram />
              </a> */}
              <a
                href="https://www.linkedin.com/company/heapvue"
                target="_blank"
                className="text-decoration-none me-3 socialIcon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.x.com/heapvue"
                target="_blank"
                className="text-decoration-none socialIcon"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container-fluid pt-3 mt-4 border-top copyright">
          <div className="row text-center text-md-start align-items-center">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <p className="mb-0">
                © {currentYear} Heapvue. All rights reserved
              </p>
            </div>
            <div className="col-12 col-md-6 text-md-end">
              <Link href="/privacy-policy" className="me-3">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="me-3">
                Terms of Service
              </Link>
              <Link href="/refund-cancellation" className="me-3">
                Refund & Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
