import React from "react";
import { 
  MdHealthAndSafety,
  MdOutlineMonetizationOn,
  MdSecurity,
  MdAnalytics,
  MdOutlineIntegrationInstructions,
  MdCloud,
  MdSmartToy,
  MdBiotech,
} from "react-icons/md";
import { 
  BsShieldCheck,
  BsClipboardData,
  BsGraphUp,
  BsPersonCheck,
  BsLightning,
  BsGear,
  BsRobot,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { RiHeartPulseLine, RiHospitalLine } from "react-icons/ri";
import BotttomBanner from "@/app/components/bottomBanner";

const Healthcare = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/healthcare.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Healthcare Solutions</h2>
              <p>Transforming Healthcare Delivery with Advanced Digital Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Healthcare Solutions</h3>
              <p className="subDesc">
                Heapvue delivers cutting-edge healthcare technology solutions powered by artificial intelligence
                that enhance patient care, streamline clinical workflows, and improve operational efficiency. 
                Our AI-driven solutions help healthcare providers deliver better outcomes while reducing costs 
                and ensuring compliance.
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
                title: "AI-Driven Diagnostics",
                desc: "Advanced diagnostic support using machine learning algorithms",
              },
              {
                icon: <BsClipboardData />,
                title: "Intelligent EHR Systems",
                desc: "AI-enhanced medical record management and analysis",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Healthcare Analytics",
                desc: "AI-powered insights for improved clinical decisions and outcomes",
              },
              {
                icon: <MdBiotech />,
                title: "Smart Patient Monitoring",
                desc: "AI-based patient monitoring and early warning systems",
              },
              {
                icon: <BsRobot />,
                title: "Automated Care Coordination",
                desc: "AI-powered care coordination and workflow optimization",
              },
              {
                icon: <MdCloud />,
                title: "Cloud AI Solutions",
                desc: "Scalable cloud-based AI solutions for healthcare",
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
                Why Choose Heapvue for Healthcare?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Security First",
                    desc: "HIPAA-compliant solutions with robust security measures",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Rapid Implementation",
                    desc: "Quick deployment with minimal disruption",
                  },
                  {
                    icon: <BsGear />,
                    title: "Customized Solutions",
                    desc: "Tailored to your specific healthcare needs",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Expert Support",
                    desc: "24/7 technical support and maintenance",
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
              <h3 className="subHead">AI-Driven Healthcare Innovation</h3>
              <p className="subDesc">
                Our innovative healthcare solutions leverage advanced artificial intelligence, 
                machine learning, IoT, and cloud computing to revolutionize patient care
                and medical operations. We help healthcare providers stay ahead in the
                rapidly evolving digital health landscape with state-of-the-art AI technology.
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
                title: "AI-Enabled Telemedicine",
                desc: "Smart virtual care solutions with AI-powered diagnostics",
              },
              {
                icon: <MdOutlineMonetizationOn />,
                title: "Intelligent RCM",
                desc: "AI-optimized billing and payment processes",
              },
              {
                icon: <BsGraphUp />,
                title: "Advanced Analytics",
                desc: "Deep learning insights for enhanced patient care",
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
            title="Transform Healthcare with AI"
            desc="Partner with us to build innovative AI-powered healthcare solutions that revolutionize patient care and operational efficiency."
          />
        </div>
      </div>
    </>
  );
};

export default Healthcare;