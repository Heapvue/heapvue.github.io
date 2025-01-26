import React from "react";
import { SiMoodle } from "react-icons/si";
import { FaGraduationCap, FaChartLine, FaUsers, FaCogs } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

function LMSIntegration() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: "url('/images/solutions/lms-hero.jpg')",
        }}
      >
        <div className="title">
          <div className="container-fluid">
            <h2>LMS Integration</h2>
            <p>
              Transforming Education Through Seamless Learning Management
              Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container-fluid mt-5 p-3 p-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <h3 className="subHead">Elevate Your Learning Experience</h3>
            <p className="subDesc">
              Our LMS integration solutions seamlessly connect your existing
              systems with leading learning platforms, creating a unified
              educational ecosystem that enhances student engagement and
              simplifies administration.
            </p>
          </div>
          <div className="col-lg-2 text-end">
            <SiMoodle className="arrowIcon" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid mt-5 p-3 p-lg-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <FaGraduationCap className="icon mb-4" />
                <h4>Custom Course Management</h4>
                <p>
                  Create, organize, and deliver courses with ease. Our platform
                  supports various content types and learning paths tailored to
                  your educational needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <IoMdAnalytics className="icon mb-4" />
                <h4>Advanced Analytics</h4>
                <p>
                  Track student progress, engagement, and performance with
                  detailed analytics and reporting tools that help optimize
                  learning outcomes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <FaUsers className="icon mb-4" />
                <h4>Collaborative Learning</h4>
                <p>
                  Foster interaction through discussion forums, group projects,
                  and real-time collaboration tools that enhance the learning
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="empowerSec bg-light">
        <div className="container-fluid p-3 p-lg-5">
          <div className="row">
            <div className="col-lg-5">
              <h3>Why Choose Our LMS Integration?</h3>
            </div>
            <div className="col-lg-7">
              <div className="rightSec">
                <div className="d-flex mb-4">
                  <div className="icon">
                    <FaChartLine />
                  </div>
                  <div className="ms-4">
                    <h5>Improved Learning Outcomes</h5>
                    <p>
                      Our LMS solutions drive better engagement and retention
                      through personalized learning paths and interactive
                      content delivery.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="icon">
                    <FaCogs />
                  </div>
                  <div className="ms-4">
                    <h5>Seamless Integration</h5>
                    <p>
                      Connect with existing systems and tools effortlessly,
                      ensuring a smooth transition and minimal disruption to
                      your educational processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-fluid py-5 p-3 p-lg-5 text-center">
        <BotttomBanner
          title="Ready to Transform?"
          desc="Let's create innovative solutions together that drive your business forward."
        />
      </div>
    </div>
  );
}

export default LMSIntegration;

export const metadata = {
  title: 'Learning Management System Solutions | E-Learning Platform | Heapvue',
  description: 'Transform education with Heapvue\'s advanced LMS solutions. Enable seamless learning experiences, track progress, and optimize educational outcomes.',
  keywords: 'learning management system, LMS, e-learning platform, online education, educational technology, digital learning',
  openGraph: {
    title: 'Learning Management System Solutions | E-Learning Platform | Heapvue',
    description: 'Transform education with Heapvue\'s advanced LMS solutions. Enable seamless learning experiences, track progress, and optimize educational outcomes.',
    images: '/images/solutions/lms.jpg',
  }
};
