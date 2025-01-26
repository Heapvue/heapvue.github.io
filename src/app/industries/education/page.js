import React from "react";
import { 
  MdSchool,
  MdOutlineCastForEducation,
  MdAnalytics,
  MdPeople,
  MdCloud,
  MdSmartToy,
  MdAssignment,
  MdQuiz,
} from "react-icons/md";
import { 
  BsBookHalf,
  BsGear,
  BsGraphUp,
  BsShieldCheck,
  BsLightning,
  BsTools,
  BsClipboardData,
} from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import BotttomBanner from "@/app/components/bottomBanner";
import { Metadata } from 'next'

export const metadata = {
  title: 'Education Solutions | Smart Learning Technologies | Heapvue',
  description: 'Transform education with Heapvue\'s AI-powered learning solutions. Featuring adaptive learning, smart classrooms, and intelligent analytics for enhanced educational outcomes.',
  keywords: 'AI education, smart learning, educational technology, adaptive learning, learning analytics, smart classrooms, educational solutions',
  openGraph: {
    title: 'Education Solutions | Smart Learning Technologies | Heapvue',
    description: 'Transform education with Heapvue\'s AI-powered learning solutions. Featuring adaptive learning, smart classrooms, and intelligent analytics for enhanced educational outcomes.',
    images: [
      {
        url: '/images/industries/education.jpg',
        width: 1200,
        height: 630,
        alt: 'Heapvue Education Solutions',
      },
    ],
  },
}

const Education = () => {
  return (
    <>
      <div className="service-page">
        <div className="container-fluid">
          <div className="row background-section" style={{backgroundImage: `url('/images/industries/education.jpg')`}}>
            <div className="col-md-8 title">
              <span className="badge bg-primary mb-3">INDUSTRIES</span>
              <h2>Education Solutions</h2>
              <p>Transforming Education with AI and Smart Learning Technologies</p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-3 p-lg-5">
          <div className="row mt-5 mb-5">
            <div className="text-start col-md-10">
              <h3 className="subHead">AI-Powered Education Solutions</h3>
              <p className="subDesc">
                Heapvue delivers innovative AI-driven education solutions that personalize 
                learning experiences, enhance student engagement, and improve educational outcomes. 
                Our smart learning solutions help educational institutions modernize their approach 
                to teaching and learning while increasing operational efficiency.
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
                title: "Adaptive Learning",
                desc: "AI-powered personalized learning pathways",
              },
              {
                icon: <MdOutlineCastForEducation />,
                title: "Smart Classrooms",
                desc: "Intelligent teaching and learning environments",
              },
              {
                icon: <MdAnalytics />,
                title: "Learning Analytics",
                desc: "AI-driven insights into student performance",
              },
              {
                icon: <MdPeople />,
                title: "Student Engagement",
                desc: "AI-enhanced student interaction and support",
              },
              {
                icon: <MdQuiz />,
                title: "Automated Assessment",
                desc: "AI-powered evaluation and feedback systems",
              },
              {
                icon: <MdCloud />,
                title: "Cloud Learning",
                desc: "Cloud-based educational platforms with AI",
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
                Why Choose Heapvue for Education?
              </h3>
            </div>
            <div className="col-lg-7 rightSec">
              <div className="row g-4">
                {[
                  {
                    icon: <BsShieldCheck />,
                    title: "Future-Ready Learning",
                    desc: "Advanced solutions for modern education",
                  },
                  {
                    icon: <BsLightning />,
                    title: "Easy Integration",
                    desc: "Seamless implementation with existing systems",
                  },
                  {
                    icon: <BsTools />,
                    title: "Customized Solutions",
                    desc: "Tailored to your institution's needs",
                  },
                  {
                    icon: <BsGear />,
                    title: "Continuous Support",
                    desc: "Dedicated technical assistance and training",
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
                icon: <MdSchool />,
                title: "AI Learning Management",
                desc: "Smart LMS with AI-powered features",
              },
              {
                icon: <BsBookHalf />,
                title: "Intelligent Content",
                desc: "AI-generated educational resources",
              },
              {
                icon: <BsGraphUp />,
                title: "Performance Tracking",
                desc: "Advanced analytics for learning outcomes",
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
            title="Transform Education with AI"
            desc="Partner with us to build innovative AI-powered education solutions that enhance learning experiences and outcomes."
          />
        </div>
      </div>
    </>
  );
};

export default Education; 