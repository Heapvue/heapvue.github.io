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

const AIMachineLearning = () => {
  return (
    <div className="service-page">
      <div className="container-fluid">
        <div className="row background-section">
          <div className="col-md-8 title">
            <span className="badge bg-primary mb-3">SERVICES</span>
            <h2>AI & Machine Learning</h2>
            <p>Transforming Businesses with Smarter Decisions and Automation</p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-3 p-lg-5">
        <div className="row mt-5 mb-5">
          <div className="text-start col-md-10">
            <h3 className="subHead">Harness the Power of AI</h3>
            <p className="subDesc">
              {" "}
              At HeapVue, we leverage cutting-edge algorithms and advanced data
              processing techniques to revolutionize the way businesses operate,
              enabling you to predict trends, optimize operations, and deliver
              personalized customer experiences.
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
              title: "Predictive Analytics",
              desc: "Anticipate market trends and customer behavior for informed decisions",
            },
            {
              icon: <GiProcessor />,
              title: "Natural Language Processing",
              desc: "Build smarter chatbots and sentiment analysis tools",
            },
            {
              icon: <IoCameraOutline />,
              title: "Computer Vision",
              desc: "Enable systems to recognize and process visual data",
            },
            {
              icon: <GoWorkflow />,
              title: "Automated Workflows",
              desc: "Streamline operations with AI-powered automation",
            },
            {
              icon: <MdOutlineRecommend />,
              title: "Recommendation Systems",
              desc: "Boost engagement with tailored recommendations",
            },
            {
              icon: <MdScreenSearchDesktop />,
              title: "Anomaly Detection",
              desc: "Identify irregularities to enhance security and reliability",
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
            <h3 className="h2 mb-4">How AI & ML Empower Your Business</h3>
          </div>
          <div className="col-lg-7 rightSec">
            <div className="row g-4">
              {[
                {
                  icon: <BsDatabase />,
                  title: "Data-Driven Decisions",
                  desc: "Transform raw data into actionable insights",
                },
                {
                  icon: <BsLightning />,
                  title: "Enhanced Efficiency",
                  desc: "Automate repetitive tasks and save resources",
                },
                {
                  icon: <BsPersonCheck />,
                  title: "Personalized Experiences",
                  desc: "Deliver customized solutions for better satisfaction",
                },
                {
                  icon: <BsCashCoin />,
                  title: "Cost Optimization",
                  desc: "Reduce operational costs and minimize errors",
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
  );
};

export default AIMachineLearning;
