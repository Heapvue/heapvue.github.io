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
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Subsideries */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Products & Platforms</h5>
            <ul className="list-unstyled">
              <li><a href="https://apnicareer.com" target="_blank">Apnicareer</a></li>
              <li><a href="https://apptuner.dev" target="_blank">Apptuner</a></li>
              <li><a>LMS & E-learning</a></li>
              <li><a>WhatsApp Integration</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li><Link href="/services/ai-ml">AI & Machine Learning</Link></li>
              <li><Link href="/services/application-development">Application Development</Link></li>
              <li><Link href="/services/cloud-devops" >Cloud & DevOps</Link></li>
              <li><Link href="/services/enterprise-solutions">Enterprise Solutions</Link></li>
              <li><Link href="/services/generative-ai">Generative AI</Link></li>
              <li><Link href="/services/iot">IoT</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-12 col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Industries</h5>
            <ul className="list-unstyled">
              <li>Education and E-learning</li>
              <li>Energy and Utilities</li>
              <li>Finance and Banking</li>
              <li>Government and Public Sector</li>
              <li>Healthcare</li>
              <li>Logistics and Transportation</li>
              <li>Manufacturing</li>
              <li>Real Estate and Construction</li>
              <li>Retail and E-commerce</li>
              <li>Startups and SMEs</li>
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
              <a href="https://www.linkedin.com/company/heapvue" target="_blank" className="text-decoration-none me-3 socialIcon">
                <FaLinkedin />
              </a>
              <a href="https://www.x.com/heapvue" target="_blank" className="text-decoration-none socialIcon">
                <FaXTwitter />
              </a>
              </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center pt-3 mt-4 border-top copyright">
          <p className="mb-0">© {currentYear} Heapvue. All rights reserved</p>
          <div>
            <Link href="privacy-policy" className="me-3">
              Privacy Policy
            </Link>
            <Link href="terms-of-service" className="me-3">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
