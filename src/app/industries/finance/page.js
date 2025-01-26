import React from "react";
import { 
  MdAccountBalance,
  MdSecurity,
  MdAnalytics,
  MdPayments,
  MdCloud,
  MdSmartToy,
  MdOutlineAutoGraph,
  MdAttachMoney,
} from "react-icons/md";
import { 
  BsShieldLock,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsBank,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";

const Finance = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/finance.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Finance & Banking</h2>
              <p>Transforming Financial Services with AI and Smart Banking Technologies</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Financial Solutions</h3>
              <p className="subDesc">
                Heapvue delivers cutting-edge AI-driven financial solutions that enhance 
                security, automate operations, and improve customer experience. Our smart 
                banking technologies help financial institutions stay competitive while 
                ensuring regulatory compliance and risk management.
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
                title: "AI Risk Management",
                desc: "Intelligent risk assessment and monitoring",
              },
              {
                icon: <MdPayments />,
                title: "Smart Payments",
                desc: "AI-powered transaction processing and fraud detection",
              },
              {
                icon: <MdAnalytics />,
                title: "Predictive Analytics",
                desc: "AI-driven financial forecasting and insights",
              },
              {
                icon: <BsShieldLock />,
                title: "Cyber Security",
                desc: "Advanced AI security and fraud prevention",
              },
              {
                icon: <MdOutlineAutoGraph />,
                title: "Trading Intelligence",
                desc: "AI-enhanced trading and investment solutions",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Banking",
                desc: "Cloud-based financial platforms with AI",
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
                Why Choose Heapvue for Finance?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Bank-Grade Security",
                    desc: "Enterprise-level security and compliance",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Fast Integration",
                    desc: "Seamless integration with existing systems",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Solutions",
                    desc: "Flexible systems for growing institutions",
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
                icon: <MdAccountBalance />,
                title: "Digital Banking",
                desc: "Next-gen digital banking solutions",
              },
              {
                icon: <BsBank />,
                title: "Wealth Management",
                desc: "AI-powered portfolio optimization",
              },
              {
                icon: <MdAttachMoney />,
                title: "Credit Analytics",
                desc: "Advanced credit risk assessment",
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
            title="Transform Finance with AI"
            desc="Partner with us to build innovative AI-powered financial solutions that drive growth and security."
          />
        </div>
      </div>
    </>
  );
};

export default Finance; 

export const metadata = {
  title: 'Solutions for Finance Industry | Heapvue',
  description: 'Transform your financial institution with Heapvue\'s AI-powered solutions. Enhance security, automate operations, and improve customer experience.',
  keywords: 'finance technology, AI in finance, banking technology, financial software solutions',
  openGraph: {
    title: 'Solutions for Finance Industry | Heapvue',
    description: 'Transform your financial institution with Heapvue\'s AI-powered solutions. Enhance security, automate operations, and improve customer experience.',
    images: '/images/industries/finance.jpg',
  }
}; 