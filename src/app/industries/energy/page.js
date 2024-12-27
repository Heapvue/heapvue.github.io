import React from "react";
import { 
  MdBolt,
  MdOutlineEnergySavingsLeaf,
  MdAnalytics,
  MdEngineering,
  MdCloud,
  MdSmartToy,
  MdSensors,
  MdFactory,
} from "react-icons/md";
import { 
  BsLightning,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsSun,
  BsTools,
  BsClipboardData,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";

const Energy = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/energy.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Energy Solutions</h2>
              <p>Revolutionizing Energy with AI and Smart Grid Technologies</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Energy Solutions</h3>
              <p className="subDesc">
                Heapvue delivers cutting-edge AI-driven energy solutions that optimize 
                power generation, distribution, and consumption. Our smart grid technologies 
                help energy providers enhance efficiency, reduce costs, and accelerate the 
                transition to sustainable energy systems.
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
                title: "Smart Grid AI",
                desc: "AI-powered grid management and optimization",
              },
              {
                icon: <MdOutlineEnergySavingsLeaf />,
                title: "Energy Efficiency",
                desc: "Intelligent energy consumption optimization",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Analytics",
                desc: "AI-driven energy demand forecasting",
              },
              {
                icon: <MdSensors />,
                title: "Smart Monitoring",
                desc: "Real-time AI-based asset monitoring",
              },
              {
                icon: <BsSun />,
                title: "Renewable Integration",
                desc: "AI solutions for renewable energy systems",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Energy Platform",
                desc: "Cloud-based energy management with AI",
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
                Why Choose Heapvue for Energy?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Advanced Security",
                    desc: "Enterprise-grade security for energy systems",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Rapid Implementation",
                    desc: "Quick deployment with minimal disruption",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Solutions",
                    desc: "Flexible systems that grow with your needs",
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
                icon: <MdBolt />,
                title: "Grid Intelligence",
                desc: "Smart grid optimization and automation",
              },
              {
                icon: <MdEngineering />,
                title: "Predictive Maintenance",
                desc: "AI-powered equipment maintenance",
              },
              {
                icon: <BsGraphUp />,
                title: "Energy Analytics",
                desc: "Advanced energy consumption insights",
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
            title="Transform Energy with AI"
            desc="Partner with us to build innovative AI-powered energy solutions that drive efficiency and sustainability."
          />
        </div>
      </div>
    </>
  );
};

export default Energy; 