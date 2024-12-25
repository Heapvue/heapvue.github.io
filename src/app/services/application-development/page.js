import { 
  MdOutlineWebAsset,
  MdOutlineDesignServices,
  MdOutlineShoppingCart,
  MdOutlineDashboardCustomize,
  MdApi,
  MdOutlineSecurity,
  MdOutlineHealthAndSafety,
  MdOutlineStorefront,
} from "react-icons/md";
import { 
  BiMobileAlt,
  BiDevices,
  BiCodeAlt,
  BiMobile
} from "react-icons/bi";
import { 
  BsBank2,
  BsBuilding,
  BsTruck,
  BsShop,
} from "react-icons/bs";
import BotttomBanner from "@/app/components/bottomBanner";
import { FiArrowUpRight } from "react-icons/fi";

const ApplicationDevelopment = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/applicationDevelopmentB.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">SERVICES</span>
              <h2>Application Development</h2>
              <p>Transforming Ideas into Powerful Digital Solutions</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">Web Development</h3>
              <p className="subDesc">
                {" "}
                At HeapVue, we specialize in creating high-performing,
                user-friendly websites tailored to meet the unique needs of
                businesses across industries. With cutting-edge technologies and
                innovative design, we deliver solutions that not only look great
                but also drive growth and engagement.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdOutlineWebAsset />,
                title: "Custom Web Development",
                desc: "From simple websites to complex web applications, we build custom solutions that align with your business objectives",
              },
              {
                icon: <MdOutlineDesignServices />,
                title: "Responsive Design",
                desc: "Ensuring seamless user experiences across devices, from desktops to smartphones",
              },
              {
                icon: <MdOutlineShoppingCart />,
                title: "E-Commerce Solutions",
                desc: "Robust platforms to take your online store to the next level with secure, scalable designs",
              },
              {
                icon: <MdOutlineDashboardCustomize />,
                title: "Content Management Systems",
                desc: "Empowering you with easy-to-manage CMS platforms like WordPress, Drupal, and Joomla",
              },
              {
                icon: <MdApi />,
                title: "API Integrations",
                desc: "Connecting your systems and streamlining workflows with third-party API integrations",
              },
              {
                icon: <MdOutlineSecurity />,
                title: "Website Maintenance",
                desc: "Ongoing support to ensure your website stays secure, updated, and optimized",
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
              <h3 className="h2 mb-4">Our Mobile App Development Expertise</h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BiMobileAlt />,
                    title: "Custom Mobile App Development",
                    desc: "Tailor-made applications that meet your unique business needs",
                  },
                  {
                    icon: <BiDevices />,
                    title: "Cross-Platform Development",
                    desc: "Seamless experiences on both iOS and Android platforms",
                  },
                  {
                    icon: <BiCodeAlt />,
                    title: "Native App Development",
                    desc: "High-performance apps for iOS (Swift) and Android (Kotlin)",
                  },
                  {
                    icon: <BiMobile />,
                    title: "Progressive Web Applications (PWAs)",
                    desc: "Blazing-fast, web-based apps that provide a native-like experience across devices.",
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
              <h3 className="subHead">E-commerce Development</h3>
              <p className="subDesc">
                {" "}
                Transform your retail business with our powerful, user-friendly
                e-commerce solutions designed to deliver seamless shopping
                experiences and drive revenue growth.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdOutlineWebAsset />,
                title: "Custom E-commerce Solutions",
                desc: "Personalized online stores aligned with your brand identity",
              },
              {
                icon: <MdOutlineDesignServices />,
                title: "Secure Payment Gateways",
                desc: "Multiple payment options with top-tier security",
              },
              {
                icon: <MdOutlineShoppingCart />,
                title: "SEO-Ready Stores",
                desc: "Optimized for better search engine visibility",
              },
              {
                icon: <MdOutlineDashboardCustomize />,
                title: "Third-Party Integrations",
                desc: "Seamless integration with CRM, ERP, and other tools",
              },
              {
                icon: <MdApi />,
                title: "Speed & Performance",
                desc: "Lightning-fast loading times for better conversion",
              },
              {
                icon: <MdOutlineSecurity />,
                title: "Secure & Scalable",
                desc: "Built to protect data and grow with your business",
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
                  icon: <BsShop />,
                  name: "E-commerce",
                },
                {
                  icon: <BsBank2 />,
                  name: "Finance",
                },
                {
                  icon: <BsBuilding />,
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

export default ApplicationDevelopment;
