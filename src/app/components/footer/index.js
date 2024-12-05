"use client";
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
    <footer className="bg-light py-4 border-top p-5 footer">
      <div className="container-fluid">
        <div className="row mt-5">
          {/* Company */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Newsroom</li>
            </ul>
          </div>

          {/* Subsideries */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Products & Patforms</h5>
            <ul className="list-unstyled">
              <li>Apnicareer</li>
              <li>Apptuner</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li>AI & Machine Learning</li>
              <li>Application Development</li>
              <li>Cloud</li>
              <li>DevOps</li>
              <li>Enterprise Solutions</li>
              <li>Generative AI</li>
              <li>IoT</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-md-2 mb-4 mb-md-0">
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
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="fw-bold">Connect with Us</h5>
            <div className="d-flex mt-3">
              <a href="#" className="text-decoration-none me-3 socialIcon">
                <FaFacebookF />
              </a>
              <a href="#" className="text-decoration-none me-3 socialIcon">
                <FaInstagram />
              </a>
              <a href="#" className="text-decoration-none me-3 socialIcon">
                <FaLinkedin />
              </a>
              <a href="#" className="text-decoration-none socialIcon">
                <FaXTwitter />
              </a>
              </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center pt-3 mt-4 border-top copyright">
          <p className="mb-0">© {currentYear} Heapvue. All rights reserved</p>
          <div>
            <a href="#" className="me-3">
              Privacy Policy
            </a>
            <a href="#" className="me-3">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
