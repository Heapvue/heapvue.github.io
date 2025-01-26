import React from "react";
import { 
  MdApartment,
  MdArchitecture,
  MdAnalytics,
  MdConstruction,
  MdCloud,
  MdSmartToy,
  MdHomeWork,
  MdSecurity,
  MdEngineering,
  MdBuildCircle,
} from "react-icons/md";
import { 
  BsBuilding,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsHouseDoor,
  BsClipboardData,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

export const metadata = {
  title: 'Real Estate Solutions | Property Technology | Heapvue',
  description: 'Revolutionize property management with Heapvue\'s AI-powered real estate solutions. Optimize property operations, enhance tenant experience, and improve asset management.',
  keywords: 'real estate technology, proptech solutions, property management software, smart buildings, AI real estate',
  openGraph: {
    title: 'Real Estate Solutions | Property Technology | Heapvue',
    description: 'Revolutionize property management with Heapvue\'s AI-powered real estate solutions. Optimize property operations, enhance tenant experience, and improve asset management.',
    images: '/images/industries/real-estate.jpg',
  }
};

const RealEstate = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/real-estate.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Real Estate</h2>
              <p>Transforming Property Development with AI and Smart Construction Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Real Estate Solutions</h3>
              <p className="subDesc">
                Heapvue delivers innovative AI-driven solutions that revolutionize property 
                development, enhance construction efficiency, and improve project management. 
                Our smart construction technologies help organizations optimize their operations, 
                reduce costs, and ensure project success through advanced analytics and automation.
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
                title: "Smart Planning",
                desc: "AI-powered project planning and optimization",
              },
              {
                icon: <MdArchitecture />,
                title: "BIM Integration",
                desc: "Intelligent Building Information Modeling",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Analytics",
                desc: "AI-driven construction insights and forecasting",
              },
              {
                icon: <MdConstruction />,
                title: "Site Monitoring",
                desc: "Real-time construction site surveillance",
              },
              {
                icon: <MdHomeWork />,
                title: "Property Management",
                desc: "AI-enhanced property maintenance systems",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Solutions",
                desc: "Cloud-based construction management with AI",
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
                Why Choose Heapvue for Real Estate?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Quality Assurance",
                    desc: "AI-powered quality control systems",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Rapid Implementation",
                    desc: "Quick deployment of smart solutions",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Platform",
                    desc: "Flexible systems for growing projects",
                  },
                  {
                    icon: <BsGear />,
                    title: "Expert Support",
                    desc: "Dedicated technical assistance",
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
                icon: <MdEngineering />,
                title: "Resource Management",
                desc: "AI-optimized resource allocation",
              },
              {
                icon: <MdBuildCircle />,
                title: "Safety Compliance",
                desc: "Smart safety monitoring and alerts",
              },
              {
                icon: <BsClipboardData />,
                title: "Project Analytics",
                desc: "Advanced project performance insights",
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
            title="Transform Real Estate with AI"
            desc="Partner with us to build innovative AI-powered solutions that revolutionize property development and construction management."
          />
        </div>
      </div>
    </>
  );
};

export default RealEstate; 