import React from "react";
import { 
  MdOutlineDevices,
  MdOutlineAutoMode,
  MdOutlineAnalytics,
  MdOutlineMonitor,
  MdOutlineHealthAndSafety,
  MdAttachMoney,
  MdOutlinePrecisionManufacturing,
  MdOutlineStorefront,
} from "react-icons/md";
import { 
  BsDatabase,
  BsLightning,
  BsPersonCheck,
  BsCart3,
  BsTruck,
} from "react-icons/bs";
import { 
  FiArrowUpRight,
} from "react-icons/fi";
import { 
  AiOutlineSafety,
} from "react-icons/ai";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

const IoTSolutions = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/iotB.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">SERVICES</span>
              <h2>Internet of Things (IoT)</h2>
              <p>Connecting the World with Smart, Scalable IoT Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">Transform Your Business with IoT</h3>
              <p className="subDesc">
                At HeapVue, we harness the power of IoT to bridge the gap
                between the physical and digital worlds, empowering businesses
                to streamline operations and unlock new opportunities.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdOutlineDevices />,
                title: "Smart Devices and Connectivity",
                desc: "Enable seamless communication between devices for real-time data exchange",
              },
              {
                icon: <MdOutlineAutoMode />,
                title: "IoT-Driven Automation",
                desc: "Automate processes with intelligent devices that respond to changing conditions",
              },
              {
                icon: <MdOutlineAnalytics />,
                title: "Predictive Analytics",
                desc: "Leverage IoT data for actionable insights and maintenance",
              },
              {
                icon: <MdOutlineMonitor />,
                title: "Remote Monitoring",
                desc: "Track assets and processes remotely for efficiency and compliance",
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
              <h3 className="h2 mb-4">Benefits of IoT Integration</h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsDatabase />,
                    title: "Enhanced Efficiency",
                    desc: "Automate workflows and optimize resource utilization",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Improved Decision-Making",
                    desc: "Use real-time data insights for informed decisions",
                  },
                  {
                    icon: <AiOutlineSafety />,
                    title: "Cost Reduction",
                    desc: "Lower maintenance and energy costs through monitoring",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Better Customer Experience",
                    desc: "Deliver personalized, connected experiences",
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

          <div className="row mt-5 mb-5 industriSec">
            <div className="col-lg-12">
              <h3 className="subHead">Applications Across Industries</h3>
            </div>
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: <MdOutlineHealthAndSafety />,
                  name: "Healthcare",
                },
                {
                  icon: <BsCart3 />,
                  name: "E-commerce",
                },
                {
                  icon: <MdAttachMoney />,
                  name: "Smart Homes",
                },
                {
                  icon: <MdOutlinePrecisionManufacturing />,
                  name: "Manufacturing",
                },
                {
                  icon: <BsTruck />,
                  name: "Transportation",
                },
                {
                  icon: <MdOutlineStorefront />,
                  name: "Retail",
                },
              ].map((industry, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="card text-center h-100">
                    <div className="card-body">
                      <div className="iconI">{industry.icon}</div>
                      <h5 className="mb-0 mt-5">{industry.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BotttomBanner
            title="Ready to Transform?"
            desc="Let's create innovative solutions together that drive your business forward."
          />
        </div>
      </div>
    </>
  );
};

export default IoTSolutions;

export const metadata = {
  title: 'IoT Solutions | Internet of Things Services | Heapvue',
  description: 'Connect and optimize your devices with Heapvue\'s IoT solutions. Enable smart operations, real-time monitoring, and data-driven decision making.',
  keywords: 'IoT solutions, Internet of Things, connected devices, smart sensors, IoT platform, industrial IoT',
  openGraph: {
    title: 'IoT Solutions | Internet of Things Services | Heapvue',
    description: 'Connect and optimize your devices with Heapvue\'s IoT solutions. Enable smart operations, real-time monitoring, and data-driven decision making.',
    images: '/images/services/iot.jpg',
  }
};
