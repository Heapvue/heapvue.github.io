import React from "react";
import { 
  MdLocalShipping,
  MdTimeline,
  MdAnalytics,
  MdInventory,
  MdCloud,
  MdSmartToy,
  MdTrackChanges,
  MdHub,
} from "react-icons/md";
import { 
  BsTruck,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsBoxSeam,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

export const metadata = {
  title: 'Logistics & Supply Chain Solutions | Heapvue',
  description: 'Optimize your supply chain with Heapvue\'s AI-powered logistics solutions. Enhance transportation efficiency, automate operations, and improve delivery performance.',
  keywords: 'logistics technology, supply chain solutions, transportation management, fleet optimization, warehouse automation, AI logistics',
  openGraph: {
    title: 'Logistics & Supply Chain Solutions | Heapvue',
    description: 'Optimize your supply chain with Heapvue\'s AI-powered logistics solutions. Enhance transportation efficiency, automate operations, and improve delivery performance.',
    images: '/images/industries/logistics.jpg',
  }
};

const Logistics = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/logistics.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Logistics & Transportation</h2>
              <p>Revolutionizing Supply Chain with AI and Smart Logistics Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Logistics Solutions</h3>
              <p className="subDesc">
                Heapvue delivers cutting-edge AI-driven solutions that optimize supply 
                chains, enhance transportation efficiency, and improve logistics operations. 
                Our smart logistics technologies help organizations streamline their 
                operations while reducing costs and improving delivery times.
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
                title: "Smart Routing",
                desc: "AI-powered route optimization and planning",
              },
              {
                icon: <MdInventory />,
                title: "Inventory Management",
                desc: "Intelligent inventory tracking and forecasting",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Analytics",
                desc: "AI-driven supply chain insights",
              },
              {
                icon: <MdTrackChanges />,
                title: "Real-time Tracking",
                desc: "Advanced shipment tracking and monitoring",
              },
              {
                icon: <MdHub />,
                title: "Smart Warehousing",
                desc: "AI-enhanced warehouse management",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Logistics",
                desc: "Cloud-based logistics platform with AI",
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
                Why Choose Heapvue for Logistics?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "End-to-End Visibility",
                    desc: "Complete supply chain transparency",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Quick Integration",
                    desc: "Seamless integration with existing systems",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Solutions",
                    desc: "Flexible systems for growing operations",
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
                icon: <MdLocalShipping />,
                title: "Fleet Management",
                desc: "AI-powered fleet optimization",
              },
              {
                icon: <BsBoxSeam />,
                title: "Last Mile Solutions",
                desc: "Smart last-mile delivery optimization",
              },
              {
                icon: <MdTimeline />,
                title: "Supply Chain Analytics",
                desc: "Advanced supply chain insights",
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
            title="Transform Logistics with AI"
            desc="Partner with us to build innovative AI-powered logistics solutions that optimize your supply chain operations."
          />
        </div>
      </div>
    </>
  );
};

export default Logistics; 