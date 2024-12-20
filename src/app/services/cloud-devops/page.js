import React from "react";
import { VscGraph } from "react-icons/vsc";
import { GiProcessor } from "react-icons/gi";
import { IoCameraOutline } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import {
  MdOutlineRecommend,
  MdScreenSearchDesktop,
  MdOutlineLocalHospital,
  MdAttachMoney,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import {
  BsDatabase,
  BsLightning,
  BsPersonCheck,
  BsCashCoin,
  BsCart3,
  BsTruck,
} from "react-icons/bs";
import BotttomBanner from "@/app/components/bottomBanner";
import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/CloudL.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">SERVICES</span>
              <h2>Cloud & DevOps</h2>
              <p>Power Your Business with Agile and Scalable Cloud Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">Cloud Services</h3>
              <p className="subDesc">
                {" "}
                At Heapvue, we offer a comprehensive suite of cloud services
                designed to transform your business operations. Whether you're
                migrating to the cloud, optimizing existing infrastructure, or
                building a robust cloud-first strategy, our solutions empower
                you to stay competitive in a fast-evolving digital landscape.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <VscGraph />,
                title: "Cloud Migration",
                desc: "Seamlessly transition your on-premise systems to the cloud",
              },
              {
                icon: <GiProcessor />,
                title: "Multi-Cloud & Hybrid",
                desc: "Maximize flexibility with integrated cloud platforms",
              },
              {
                icon: <IoCameraOutline />,
                title: "Security & Compliance",
                desc: "Protect data with robust security measures",
              },
              {
                icon: <GoWorkflow />,
                title: "Performance Tuning",
                desc: "Enhance speed and reliability with proactive monitoring",
              },
              {
                icon: <MdOutlineRecommend />,
                title: "Cost Management",
                desc: "Optimize expenses with detailed analysis",
              },
              {
                icon: <MdScreenSearchDesktop />,
                title: "Automation",
                desc: "Streamline operations with automated workflows",
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
                Why Choose Heapvue for Cloud Services?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsDatabase />,
                    title: "Customized Solutions",
                    desc: "Tailored cloud strategies that align with your business goals",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Expert Guidance",
                    desc: "A team of certified professionals with extensive experience",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Scalable Architecture",
                    desc: "Solutions that grow with your business demands",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Future-Ready",
                    desc: "Stay ahead with innovative cloud solutions",
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
            <div className="text-start col-md-10">
              <h3 className="subHead">DevOps Excellence</h3>
              <p className="subDesc">
                {" "}
                At Heapvue, we provide expert DevOps consultation services to
                help your organization embrace agile workflows and deliver
                software with greater speed, quality, and reliability. By
                bridging the gap between development and IT operations, we
                enable your teams to collaborate seamlessly and achieve faster
                time-to-market.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <VscGraph />,
                title: "CI/CD Implementation",
                desc: "Automate your software development pipeline with Continuous Integration and Deployment practices",
              },
              {
                icon: <GiProcessor />,
                title: "Infrastructure as Code",
                desc: "Replace manual configurations with code-based infrastructure management",
              },
              {
                icon: <IoCameraOutline />,
                title: "Monitoring & Logging",
                desc: "Gain real-time insights into your applications and infrastructure",
              },
              {
                icon: <GoWorkflow />,
                title: "Cloud-Native DevOps",
                desc: "Leverage cloud platforms to scale your DevOps workflows seamlessly",
              },
              {
                icon: <MdOutlineRecommend />,
                title: "Containerization",
                desc: "Optimize deployment with Docker and Kubernetes",
              }
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
              Benefits of Heapvue's DevOps Consultation
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsDatabase />,
                    title: "Accelerated Delivery",
                    desc: "Implement agile methodologies for faster releases",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Improved Collaboration",
                    desc: "Foster better communication between teams",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Enhanced Quality",
                    desc: "Ensure reliable builds with automated testing",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Cost Efficiency",
                    desc: "Reduce operational overhead through automation",
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
              <h3 className="subHead">Industries We Serve</h3>
            </div>
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: <MdOutlineLocalHospital />,
                  name: "Healthcare",
                },
                {
                  icon: <BsCart3 />,
                  name: "E-commerce",
                },
                {
                  icon: <MdAttachMoney />,
                  name: "Finance",
                },
                {
                  icon: <MdOutlinePrecisionManufacturing />,
                  name: "Manufacturing",
                },
                {
                  icon: <BsTruck />,
                  name: "Logistics",
                },
                {
                  icon: <RiShoppingBag3Line />,
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

export default Service;
