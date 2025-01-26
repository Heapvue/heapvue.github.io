import React from "react";
import { 
  MdPrecisionManufacturing,
  MdAutoMode,
  MdAnalytics,
  MdInventory2,
  MdOutlineIntegrationInstructions,
  MdCloud,
  MdSmartToy,
  MdFactory,
} from "react-icons/md";
import { 
  BsRobot,
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
  title: 'Manufacturing Solutions | Smart Factory Technology | Heapvue',
  description: 'Transform your manufacturing operations with Heapvue\'s AI-powered solutions. Optimize production, enhance quality control, and enable predictive maintenance.',
  keywords: 'manufacturing technology, industrial automation, smart factory, predictive maintenance, quality control, AI manufacturing',
  openGraph: {
    title: 'Manufacturing Solutions | Smart Factory Technology | Heapvue',
    description: 'Transform your manufacturing operations with Heapvue\'s AI-powered solutions. Optimize production, enhance quality control, and enable predictive maintenance.',
    images: '/images/industries/manufacturing.jpg',
  }
};

const Manufacturing = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/manufacturing.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Manufacturing Solutions</h2>
              <p>Revolutionizing Manufacturing with AI and Smart Automation</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Manufacturing Solutions</h3>
              <p className="subDesc">
                Heapvue delivers innovative AI-driven manufacturing solutions that optimize 
                production processes, enhance quality control, and enable predictive maintenance. 
                Our smart manufacturing solutions help industries achieve higher efficiency, 
                reduce costs, and maintain competitive advantage.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdPrecisionManufacturing />,
                title: "Smart Production",
                desc: "AI-optimized production planning and execution",
              },
              {
                icon: <BsRobot />,
                title: "Robotic Process Automation",
                desc: "Intelligent automation for manufacturing processes",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Analytics",
                desc: "AI-powered insights for operational excellence",
              },
              {
                icon: <MdInventory2 />,
                title: "Smart Inventory Management",
                desc: "AI-driven inventory optimization and control",
              },
              {
                icon: <MdAutoMode />,
                title: "Quality Control AI",
                desc: "Automated quality inspection and assurance",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Manufacturing",
                desc: "Cloud-based AI solutions for manufacturing",
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
                Why Choose Heapvue for Manufacturing?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Industry 4.0 Ready",
                    desc: "Future-ready solutions for smart manufacturing",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Quick Implementation",
                    desc: "Rapid deployment with minimal downtime",
                  },
                  {
                    icon: <BsTools />,
                    title: "Customized Solutions",
                    desc: "Tailored to your manufacturing needs",
                  },
                  {
                    icon: <BsGear />,
                    title: "24/7 Support",
                    desc: "Round-the-clock technical assistance",
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
                icon: <MdSmartToy />,
                title: "AI Process Optimization",
                desc: "Smart optimization of manufacturing processes",
              },
              {
                icon: <BsClipboardData />,
                title: "Digital Twin Solutions",
                desc: "AI-powered virtual manufacturing simulation",
              },
              {
                icon: <BsGraphUp />,
                title: "Performance Analytics",
                desc: "Deep insights into manufacturing metrics",
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
            title="Transform Manufacturing with AI"
            desc="Partner with us to build innovative AI-powered manufacturing solutions that drive efficiency and growth."
          />
        </div>
      </div>
    </>
  );
};

export default Manufacturing; 