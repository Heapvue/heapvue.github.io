import React from "react";
import { 
  MdSecurity,
  MdAutorenew,
  MdOutlineMonetizationOn,
  MdOutlineAutoMode,
  MdOutlineHealthAndSafety,
  MdOutlineStorefront,
  MdAttachMoney,
  MdOutlinePrecisionManufacturing,
  MdDeviceHub,
} from "react-icons/md";
import { 
  BsCloudArrowUp,
  BsHddNetwork,
  BsShieldCheck,
  BsSpeedometer2,
  BsGear,
  BsLightning,
  BsPersonCheck,
  BsCart3,
  BsTruck,
} from "react-icons/bs";
import { 
  SiKubernetes,
  SiDocker,
  SiGithubactions,
  SiJenkins
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

export const metadata = {
  title: 'Cloud & DevOps Services | Infrastructure Solutions | Heapvue',
  description: 'Modernize your infrastructure with Heapvue\'s cloud and DevOps solutions. Enable continuous delivery, optimize cloud operations, and enhance scalability.',
  keywords: 'cloud computing, DevOps, infrastructure automation, continuous integration, continuous deployment, cloud migration, kubernetes',
  openGraph: {
    title: 'Cloud & DevOps Services | Infrastructure Solutions | Heapvue',
    description: 'Modernize your infrastructure with Heapvue\'s cloud and DevOps solutions. Enable continuous delivery, optimize cloud operations, and enhance scalability.',
    images: '/images/services/cloud-devops.jpg',
  }
};

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
                icon: <BsCloudArrowUp />,
                title: "Cloud Migration",
                desc: "Seamlessly transition your on-premise systems to the cloud",
              },
              {
                icon: <BsHddNetwork />,
                title: "Multi-Cloud & Hybrid",
                desc: "Maximize flexibility with integrated cloud platforms",
              },
              {
                icon: <BsShieldCheck />,
                title: "Security & Compliance",
                desc: "Protect data with robust security measures",
              },
              {
                icon: <BsSpeedometer2 />,
                title: "Performance Tuning",
                desc: "Enhance speed and reliability with proactive monitoring",
              },
              {
                icon: <MdOutlineMonetizationOn />,
                title: "Cost Management",
                desc: "Optimize expenses with detailed analysis",
              },
              {
                icon: <MdOutlineAutoMode />,
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
                    icon: <BsGear />,
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
                    icon: <MdAutorenew />,
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
                icon: <SiGithubactions />,
                title: "CI/CD Implementation",
                desc: "Automate your software development pipeline with Continuous Integration and Deployment practices",
              },
              {
                icon: <SiDocker />,
                title: "Infrastructure as Code",
                desc: "Replace manual configurations with code-based infrastructure management",
              },
              {
                icon: <SiJenkins />,
                title: "Monitoring & Logging",
                desc: "Gain real-time insights into your applications and infrastructure",
              },
              {
                icon: <MdDeviceHub />,
                title: "Cloud-Native DevOps",
                desc: "Leverage cloud platforms to scale your DevOps workflows seamlessly",
              },
              {
                icon: <SiKubernetes />,
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
                    icon: <BsSpeedometer2 />,
                    title: "Accelerated Delivery",
                    desc: "Implement agile methodologies for faster releases",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Improved Collaboration",
                    desc: "Foster better communication between teams",
                  },
                  {
                    icon: <MdSecurity />,
                    title: "Enhanced Quality",
                    desc: "Ensure reliable builds with automated testing",
                  },
                  {
                    icon: <MdOutlineMonetizationOn />,
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
                  icon: <MdOutlineHealthAndSafety />,
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

export default Service;
