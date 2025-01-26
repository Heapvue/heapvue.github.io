import React from "react";
import { 
  MdAccountBalance,
  MdSecurity,
  MdAnalytics,
  MdPeople,
  MdCloud,
  MdSmartToy,
  MdAdminPanelSettings,
  MdPolicy,
  MdPublic,
} from "react-icons/md";
import { 
  BsShieldLock,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsClipboardData,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

export const metadata = {
  title: 'Solutions for Government & Public Sector | Heapvue',
  description: 'Modernize public services with Heapvue\'s AI-powered government solutions. Enhance citizen engagement, improve operational efficiency, and drive digital transformation.',
  keywords: 'government technology, AI in government, public sector solutions, smart city, digital government, e-governance',
  openGraph: {
    title: 'Solutions for Government & Public Sector | Heapvue',
    description: 'Modernize public services with Heapvue\'s AI-powered government solutions. Enhance citizen engagement, improve operational efficiency, and drive digital transformation.',
    images: '/images/industries/government.jpg',
  }
};

const Government = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/government.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Government & Public</h2>
              <p>Modernizing Public Services with AI and Smart Government Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Government Solutions</h3>
              <p className="subDesc">
                Heapvue delivers innovative AI-driven solutions that transform public 
                services, enhance citizen engagement, and improve operational efficiency. 
                Our smart government technologies help public sector organizations 
                modernize their operations while ensuring security and compliance.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdSmartToy />,
                title: "Smart Governance",
                desc: "AI-powered decision support systems",
              },
              {
                icon: <MdPeople />,
                title: "Citizen Services",
                desc: "Intelligent citizen engagement platforms",
              },
              {
                icon: <MdAnalytics />,
                title: "Data Analytics",
                desc: "AI-driven insights for policy making",
              },
              {
                icon: <BsShieldLock />,
                title: "Cyber Security",
                desc: "Advanced security for government systems",
              },
              {
                icon: <MdAdminPanelSettings />,
                title: "Smart Administration",
                desc: "AI-enhanced administrative processes",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Government",
                desc: "Secure cloud solutions with AI capabilities",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mt-3">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="icon">{item.icon}</div>
                      </div>
                      <div className="ms-4">
                        <h4 className="h5 mb-3">{item.title}</h4>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5 mb-5 bg-light empowerSec">
            <div className="col-lg-5">
              <h3 className="h2 mb-4">
                Why Choose Heapvue for Government?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Compliance Ready",
                    desc: "Built to meet government security standards",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Rapid Deployment",
                    desc: "Swift implementation with minimal disruption",
                  },
                  {
                    icon: <BsTools />,
                    title: "Customized Solutions",
                    desc: "Tailored to specific agency needs",
                  },
                  {
                    icon: <BsGear />,
                    title: "Dedicated Support",
                    desc: "Specialized government sector support",
                  },
                ].map((item, index) => (
                  <div key={index} className="col-md-6">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="icon">{item.icon}</div>
                      </div>
                      <div className="ms-3">
                        <h5>{item.title}</h5>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdPublic />,
                title: "Smart Cities",
                desc: "AI solutions for urban management",
              },
              {
                icon: <MdPolicy />,
                title: "Policy Analytics",
                desc: "AI-powered policy impact assessment",
              },
              {
                icon: <BsClipboardData />,
                title: "Resource Optimization",
                desc: "Intelligent resource allocation systems",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mt-3">
                <div className="card h-100">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="icon">{item.icon}</div>
                      </div>
                      <div className="ms-4">
                        <h4 className="h5 mb-3">{item.title}</h4>
                        <p className="text-muted mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <BotttomBanner
            title="Transform Government with AI"
            desc="Partner with us to build innovative AI-powered solutions that modernize public services and enhance citizen experience."
          />
        </div>
      </div>
    </>
  );
};

export default Government; 