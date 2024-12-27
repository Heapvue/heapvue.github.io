import React from "react";
import { 
  MdShoppingCart,
  MdStorefront,
  MdAnalytics,
  MdInventory,
  MdCloud,
  MdSmartToy,
  MdPeople,
  MdLocalOffer,
  MdTrendingUp,
  MdPayments,
} from "react-icons/md";
import { 
  BsShop,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsBarChart,
  BsBoxSeam,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";

const Retail = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/retail.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Retail Solutions</h2>
              <p>Transforming Retail Experience with AI and Smart Commerce Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Retail Solutions</h3>
              <p className="subDesc">
                Heapvue delivers cutting-edge AI-driven solutions that revolutionize 
                retail operations, enhance customer experience, and optimize inventory 
                management. Our smart retail technologies help businesses increase sales, 
                reduce costs, and create personalized shopping experiences.
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
                title: "Smart Analytics",
                desc: "AI-powered retail analytics and insights",
              },
              {
                icon: <MdInventory />,
                title: "Inventory Intelligence",
                desc: "Smart inventory management and forecasting",
              },
              {
                icon: <MdPeople />,
                title: "Customer Experience",
                desc: "AI-driven personalization and engagement",
              },
              {
                icon: <MdLocalOffer />,
                title: "Dynamic Pricing",
                desc: "Real-time price optimization with AI",
              },
              {
                icon: <MdStorefront />,
                title: "Store Operations",
                desc: "Smart store management and automation",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Retail",
                desc: "Cloud-based retail platform with AI",
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
                Why Choose Heapvue for Retail?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Omnichannel Ready",
                    desc: "Seamless integration across all channels",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Quick Implementation",
                    desc: "Rapid deployment of retail solutions",
                  },
                  {
                    icon: <BsTools />,
                    title: "Scalable Platform",
                    desc: "Flexible systems for growing businesses",
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
                icon: <MdTrendingUp />,
                title: "Demand Forecasting",
                desc: "AI-powered demand prediction",
              },
              {
                icon: <MdPayments />,
                title: "Smart Payments",
                desc: "Intelligent payment processing",
              },
              {
                icon: <BsBarChart />,
                title: "Sales Analytics",
                desc: "Advanced sales performance insights",
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
            title="Transform Retail with AI"
            desc="Partner with us to build innovative AI-powered retail solutions that drive growth and customer satisfaction."
          />
        </div>
      </div>
    </>
  );
};

export default Retail; 