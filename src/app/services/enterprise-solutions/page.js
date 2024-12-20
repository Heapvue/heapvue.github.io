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

const EnterpriseSolutions = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/enterpriseSolB.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">SERVICES</span>
              <h2>Enterprise Solutions</h2>
              <p>Building Scalable and Robust Enterprise Software</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">Enterprise Software Development</h3>
              <p className="subDesc">
                {" "}
                In the fast-paced world of business, enterprises need software
                that can keep up with their evolving demands. We specialize in
                Enterprise Software Development tailored to address the unique
                challenges of large-scale organizations.
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
                title: "End-to-End Custom Development",
                desc: "From requirement gathering to deployment, we deliver software that aligns with your goals",
              },
              {
                icon: <GiProcessor />,
                title: "Integration with Existing Systems",
                desc: "Seamless operations by integrating with legacy systems and third-party applications",
              },
              {
                icon: <IoCameraOutline />,
                title: "Customer Relationship Management",
                desc: "Enhanced customer engagement with custom CRM solutions and integrations",
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
              <h3 className="h2 mb-4">Why Choose HeapVue?</h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsDatabase />,
                    title: "Tailored Solutions",
                    desc: "Software specific to your organizational needs",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Future-Ready Technology",
                    desc: "Built with cutting-edge tools and frameworks",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Data Security",
                    desc: "Robust protocols ensuring data security and compliance",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Scalable Architecture",
                    desc: "Solutions that grow with your business",
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
              <h3 className="subHead">
                Custom Solutions for Large Organizations
              </h3>
              <p className="subDesc">
                {" "}
                We specialize in crafting customized software solutions designed
                to address the complex needs of enterprise-level businesses.
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
                title: "Tailored to Your Business Needs",
                desc: "Solutions that cater to your specific workflows and industry requirements",
              },
              {
                icon: <GiProcessor />,
                title: "Scalable Architecture",
                desc: "Future-ready solutions that evolve with your business needs",
              },
              {
                icon: <IoCameraOutline />,
                title: "Comprehensive Services",
                desc: "From ERP systems to advanced analytics tools",
              },
              {
                icon: <GoWorkflow />,
                title: "Security and Compliance",
                desc: "Robust security measures and regulatory compliance",
              },
              {
                icon: <MdOutlineRecommend />,
                title: "Post-deployment Support",
                desc: "Ongoing support to ensure continued success",
              },
              {
                icon: <MdOutlineRecommend />,
                title: "Agile Development",
                desc: "Faster delivery and flexible customization",
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

export default EnterpriseSolutions;
