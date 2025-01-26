import React from "react";
import { 
  MdOutlineAutoAwesome,
  MdOutlineDesignServices,
  MdOutlineCode,
  MdOutlineSmartToy,
  MdOutlineLightbulb,
  MdOutlineDataExploration,
  MdOutlineHealthAndSafety,
  MdAttachMoney,
  MdOutlinePrecisionManufacturing,
} from "react-icons/md";
import { 
  BsLightning,
  BsClockHistory,
  BsPersonCheck,
  BsCart3,
  BsTruck,
  BsShop,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

const GenerativeAI = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/generativeAIB.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">SERVICES</span>
              <h2>Generative AI</h2>
              <p>Revolutionizing Creativity and Automation with AI</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">
                Transform Your Business with Generative AI
              </h3>
              <p className="subDesc">
                At HeapVue, we unlock the immense potential of Generative AI to
                transform how businesses create, innovate, and automate. Our
                state-of-the-art solutions enable faster, smarter, and more
                creative outcomes.
              </p>
            </div>
            <div className="col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row mt-5 mb-5">
            {[
              {
                icon: <MdOutlineAutoAwesome />,
                title: "Content Generation",
                desc: "Automate creation of high-quality text, images, audio, and video content",
              },
              {
                icon: <MdOutlineDesignServices />,
                title: "Design Automation",
                desc: "Simplify product design and prototyping processes with AI-powered tools",
              },
              {
                icon: <MdOutlineCode />,
                title: "Code Assistance",
                desc: "Enhance developer productivity with AI-driven code generation",
              },
              {
                icon: <MdOutlineSmartToy />,
                title: "Custom Chatbots",
                desc: "Deploy AI systems that generate contextually accurate responses",
              },
              {
                icon: <MdOutlineLightbulb />,
                title: "Idea Exploration",
                desc: "Leverage AI to brainstorm unique concepts and strategies",
              },
              {
                icon: <MdOutlineDataExploration />,
                title: "Data Augmentation",
                desc: "Synthesize realistic datasets for training and testing",
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
                How Generative AI Adds Value?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <MdOutlineLightbulb />,
                    title: "Foster Innovation",
                    desc: "Generate creative ideas and solutions that drive growth",
                  },
                  {
                    icon: <BsClockHistory />,
                    title: "Save Time",
                    desc: "Automate complex tasks, increasing efficiency",
                  },
                  {
                    icon: <BsPersonCheck />,
                    title: "Enhance Personalization",
                    desc: "Develop unique, tailor-made customer experiences",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Reduce Costs",
                    desc: "Optimize resources and minimize manual intervention",
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
                  icon: <BsShop />,
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

export default GenerativeAI;

export const metadata = {
  title: 'Generative AI Solutions | AI Content & Creation | Heapvue',
  description: 'Harness the power of generative AI with Heapvue\'s cutting-edge solutions. Create content, automate processes, and innovate with next-gen AI technology.',
  keywords: 'generative AI, AI content creation, natural language processing, AI automation, machine learning, creative AI',
  openGraph: {
    title: 'Generative AI Solutions | AI Content & Creation | Heapvue',
    description: 'Harness the power of generative AI with Heapvue\'s cutting-edge solutions. Create content, automate processes, and innovate with next-gen AI technology.',
    images: '/images/services/generative-ai.jpg',
  }
};
