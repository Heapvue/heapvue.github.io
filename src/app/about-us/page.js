import BotttomBanner from "../components/bottomBanner";
import { LuUsers } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiHandshake } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { RiFocus3Line } from "react-icons/ri";
import { GoEye } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className="about-page singlePage">
      <div className="container-fluid p-4 p-lg-5 contact">
      <div className="row">
          <div className="col-md-8">
            <h2>Innovating for a Better Tomorrow</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 who">
        <section className="mb-6">
          <div className="row align-items-stretch d-flex">
            <div className="col-lg-6 d-flex">
              <img
                src="/services.jpg"
                alt="About HeapVue"
                className="img-fluid w-100"
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-lg-6 details d-flex flex-column justify-content-center ps-1 ps-lg-5">
              <h2 className="mb-4">Who We Are?</h2>
              <p className="mb-4">
                At Heapvue, we leverage the transformative power of AI, machine
                learning, and cloud technologies to drive businesses toward
                unparalleled success and innovation. Our expertise lies in
                applying advanced analytics, intelligent automation, and
                scalable cloud solutions to address complex challenges,
                streamline operations, and uncover new growth opportunities. By
                integrating cutting-edge AI and ML models, we enable businesses
                to make smarter, data-driven decisions, personalize customer
                experiences, and achieve operational excellence.
              </p>
              <p className="mb-4">
                With cloud computing at the core of our approach, we help
                organizations transition to highly flexible, secure, and
                cost-efficient infrastructures that adapt to their evolving
                needs. Whether it's deploying AI-driven solutions, optimizing
                workflows through machine learning, or ensuring seamless
                scalability with cloud platforms, we are committed to unlocking
                the full potential of technology for our clients.
              </p>
              <p className="mb-4">
                At Heapvue, we believe in empowering businesses to stay
                competitive in a fast-changing digital landscape. By partnering
                with us, companies gain access to innovative tools,
                forward-thinking strategies, and the technical expertise needed
                to navigate the complexities of today’s technology-driven world
                and reach new heights of success.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <IoIosCheckmarkCircleOutline className="text-primary fs-4 me-2" />
                    <span className="fw-bold">Industry Expertise</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <IoIosCheckmarkCircleOutline className="text-primary fs-4 me-2" />
                    <span className="fw-bold">Global Reach</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <IoIosCheckmarkCircleOutline className="text-primary fs-4 me-2" />
                    <span className="fw-bold">Innovative Solutions</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <IoIosCheckmarkCircleOutline className="text-primary fs-4 me-2" />
                    <span className="fw-bold">Customer Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6 mission-vission">
          <div className="row align-items-stretch">
            <div className="col-lg-6 details d-flex flex-column justify-content-center">
              <div className="card flex-grow-1 mb-4">
                <div className="card-body p-3 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box me-4">
                      <RiFocus3Line className="icon" />
                    </div>
                    <h3>Our Mission</h3>
                  </div>
                  <p>
                    To harness the power of technology and innovation to provide
                    businesses with scalable, efficient, and impactful solutions
                    that drive growth, enhance productivity, and deliver
                    measurable results.
                  </p>
                </div>
              </div>
              <div className="card flex-grow-1">
                <div className="card-body p-3 p-lg-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box me-4">
                      <GoEye className="icon" />
                    </div>
                    <h3>Our Vision</h3>
                  </div>
                  <p>
                    To be the go-to technology partner for enterprises
                    worldwide, known for our excellence in crafting innovative
                    solutions that redefine industries and unlock new
                    possibilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/about2.jpg"
                alt="Our Team"
                className="img-fluid w-100"
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-6 core">
          <div className="row">
            <div className="col-10 col-md-10 text-start">
              <h2 className="text-start mb-5">Our Core Values</h2>
            </div>
            <div className="col-2 col-md-2 text-end">
              <FiArrowUpRight className="arrowIcon" />
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <PiHandshake />,
                title: "Integrity",
                desc: "We uphold honesty and transparency in all our engagements.",
              },
              {
                icon: <CiStar />,
                title: "Excellence",
                desc: "We are committed to exceeding expectations with every project.",
              },
              {
                icon: <SlPeople />,
                title: "Collaboration",
                desc: "We work hand-in-hand with our clients, ensuring seamless communication.",
              },
              {
                icon: <HiOutlineLightBulb />,
                title: "Innovation",
                desc: "We constantly push the boundaries of technology for impactful solutions.",
              },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body d-flex flex-column justify-content-between align-items-start">
                    <div className="icon">{value.icon}</div>
                    <div>
                      <h5>{value.title}</h5>
                      <p>{value.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-6 bg-light p-3 p-lg-5 why">
          <h2 className="text-center mb-5">Why Choose Heapvue?</h2>
          <div className="row g-4">
            {[
              {
                icon: <LuUsers className="icon" />,
                title: "Customer-Centric Approach",
                desc: "We listen, understand, and deliver solutions tailored to your unique business needs.",
              },
              {
                icon: <GrUserExpert className="icon" />,
                title: "Expert Team",
                desc: "Our team of skilled professionals combines technical expertise with industry knowledge.",
              },
              {
                icon: <AiOutlineSafetyCertificate className="icon" />,
                title: "Quality Assurance",
                desc: "We follow stringent quality control measures to ensure flawless execution.",
              },
              {
                icon: <HiOutlineLightBulb className="icon" />,
                title: "Innovation-Driven",
                desc: "We leverage the latest technologies to build future-ready applications.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex">
                  <div className="icon-box p-3 me-4">{item.icon}</div>
                  <div>
                    <h3 className="mb-3">{item.title}</h3>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <BotttomBanner
            title="Ready to Transform?"
            desc="Let's create innovative solutions together that drive your business forward."
          />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
