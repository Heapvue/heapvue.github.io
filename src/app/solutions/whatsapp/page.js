import React from "react";
import { RiWhatsappFill, RiCustomerService2Fill } from "react-icons/ri";
import { FaRobot, FaChartLine, FaUsersCog, FaShieldAlt } from "react-icons/fa";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

function WhatsAppIntegration() {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: "url('/images/solutions/whatsapp-hero.jpg')",
        }}
      >
        <div className="title">
          <div className="container-fluid">
            <h2>WhatsApp Integration</h2>
            <p>
              Transform Your Business Communication with WhatsApp Business API
              Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container-fluid mt-5 p-3 p-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <h3 className="subHead">Enhance Customer Engagement</h3>
            <p className="subDesc">
              Leverage the world's most popular messaging platform to connect
              with your customers, automate responses, and drive business growth
              through personalized communication.
            </p>
          </div>
          <div className="col-lg-2 text-end">
            <RiWhatsappFill className="arrowIcon" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid mt-5 p-3 p-lg-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <FaRobot className="icon mb-4" />
                <h4>Automated Responses</h4>
                <p>
                  Set up intelligent chatbots to handle customer queries 24/7,
                  ensuring instant responses and improved customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <RiCustomerService2Fill className="icon mb-4" />
                <h4>Customer Support</h4>
                <p>
                  Provide seamless customer support through WhatsApp, with
                  features like ticket management and automated follow-ups.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <FaChartLine className="icon mb-4" />
                <h4>Analytics & Insights</h4>
                <p>
                  Track message metrics, response times, and customer engagement
                  patterns to optimize your communication strategy.
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
              <h3>Benefits of WhatsApp Integration</h3>
            </div>
            <div className="col-lg-7">
              <div className="rightSec">
                <div className="d-flex mb-4">
                  <div className="icon">
                    <FaUsersCog />
                  </div>
                  <div className="ms-4">
                    <h5>Enhanced Customer Experience</h5>
                    <p>
                      Provide instant, personalized responses through customers'
                      preferred messaging platform, leading to higher
                      satisfaction and engagement rates.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="icon">
                    <FaShieldAlt />
                  </div>

                  <div className="ms-4">
                    <h5>Secure Communication</h5>
                    <p>
                      Benefit from WhatsApp's end-to-end encryption while
                      maintaining professional communication standards and
                      compliance requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-fluid py-5 p-3 p-lg-5">
        <BotttomBanner
          title="Ready to Transform?"
          desc="Let's create innovative solutions together that drive your business forward."
        />
      </div>
    </div>
  );
}

export default WhatsAppIntegration;

export const metadata = {
  title: 'WhatsApp Business Solutions | Messaging Integration | Heapvue',
  description: 'Enhance customer engagement with Heapvue\'s WhatsApp Business solutions. Enable seamless communication, automate responses, and improve customer service.',
  keywords: 'WhatsApp Business, messaging solutions, customer engagement, business communication, WhatsApp integration',
  openGraph: {
    title: 'WhatsApp Business Solutions | Messaging Integration | Heapvue',
    description: 'Enhance customer engagement with Heapvue\'s WhatsApp Business solutions. Enable seamless communication, automate responses, and improve customer service.',
    images: '/images/solutions/whatsapp.jpg',
  }
};
