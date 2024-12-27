import React from "react";
import { 
  MdRocketLaunch,
  MdLightbulb,
  MdAnalytics,
  MdSpeed,
  MdCloud,
  MdSmartToy,
  MdTrendingUp,
  MdGroups,
  MdAutorenew,
  MdPriceChange,
} from "react-icons/md";
import { 
  BsGraphUp,
  BsGear,
  BsLightning,
  BsShieldCheck,
  BsTools,
  BsArrowUpRight,
  BsCpu,
  BsCash,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";

const Startup = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/startups.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Startup Solutions</h2>
              <p>Accelerating Growth with AI and Smart Business Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Startup Solutions</h3>
              <p className="subDesc">
                Heapvue delivers innovative AI-driven solutions that help startups scale 
                rapidly, optimize operations, and gain competitive advantage. Our smart 
                technologies enable young businesses to leverage enterprise-grade AI 
                capabilities while maintaining agility and cost-effectiveness.
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
                title: "AI Integration",
                desc: "Quick and scalable AI implementation",
              },
              {
                icon: <MdSpeed />,
                title: "Rapid Scaling",
                desc: "AI-powered growth acceleration",
              },
              {
                icon: <MdAnalytics />,
                title: "Smart Analytics",
                desc: "Data-driven decision making",
              },
              {
                icon: <MdGroups />,
                title: "Customer Insights",
                desc: "AI-driven customer understanding",
              },
              {
                icon: <MdAutorenew />,
                title: "Process Automation",
                desc: "Intelligent workflow optimization",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Solutions",
                desc: "Scalable cloud infrastructure with AI",
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
                Why Choose Heapvue for Startups?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsLightning />,
                    title: "Quick Launch",
                    desc: "Rapid deployment and implementation",
                  },
                  {
                    icon: <BsCash />,
                    title: "Cost-Effective",
                    desc: "Flexible pricing for startups",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Solutions",
                    desc: "Grows with your business",
                  },
                  {
                    icon: <BsGear />,
                    title: "Expert Support",
                    desc: "Dedicated startup success team",
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
                icon: <MdRocketLaunch />,
                title: "Growth Acceleration",
                desc: "AI-powered business scaling",
              },
              {
                icon: <MdPriceChange />,
                title: "Smart Pricing",
                desc: "Dynamic pricing optimization",
              },
              {
                icon: <BsGraphUp />,
                title: "Market Analytics",
                desc: "AI-driven market insights",
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
            title="Accelerate Your Startup with AI"
            desc="Partner with us to build innovative AI-powered solutions that drive rapid growth and sustainable success."
          />
        </div>
      </div>
    </>
  );
};

export default Startup; 