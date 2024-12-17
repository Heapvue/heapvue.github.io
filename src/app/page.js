"use client";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import { MdSecurity } from "react-icons/md";
import { CgPerformance, CgSupport } from "react-icons/cg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import Enquiry from "./components/enquiry";

export default function Home() {
  const videoSources = ["heroVideo.mp4"];

  const [selectedVideo, setSelectedVideo] = useState("heroVideo.mp4");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videoSources.length);
    setSelectedVideo(videoSources[randomIndex]);
  }, []);

  return (
    <>
      <div>
        <div className="container-fluid text-white text-center hero-content">
          <div>
            <h5 className="small-text mb-3">
              Empowering Tomorrow with Artificial Intelligence
            </h5>
            <h1 className="display-4 fw-bold mb-4">
              Accelerating growth with <br />
              <span className="gradient">AI for tomorrow.</span>
            </h1>
            <Button text="Get in Touch" type="button" dataBsToggle="modal" dataBsTarget="#inquiryModal" />
          </div>
        </div>

        {/* Background Image */}
        <div className="hero-background">
          <video
            autoPlay
            src={selectedVideo}
            muted
            loop
            id="background-video"
            playsInline
            className="w-100 hero-video"
          />
          <div className="overlay"></div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 ourFeature">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2>
              We specialize in creating software solutions that are tailored to
              your unique business needs.
            </h2>
          </div>
          <div className="col-12 col-lg-6 rightSide">
            <div className="d-flex justify-content-start mb-3">
              <div className="icon-box w-10">
                <MdSecurity className="icon" />
              </div>
              <div className="content-box">
                <h3>SECURITY</h3>
                <p>
                  We guarantee that our security solutions will protect your
                  business from cyber threats.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start mb-3">
              <div className="icon-box w-10">
                <CgPerformance className="icon" />
              </div>
              <div className="content-box">
                <h3>PERFORMANCE</h3>
                <p>
                  We provide continuous proactive maintenance to ensure optimal
                  performance 24/7.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start">
              <div className="icon-box">
                <CgSupport className="icon" />
              </div>
              <div className="content-box">
                <h3>SUPPORT</h3>
                <p>
                  Our team of experts is available 24/7 to ensure your business
                  operations are not disrupted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 ourServices">
        <div className="row">
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="service1.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">AI & MACHINE LEARNING</h5>
                <hr></hr>
                <p className="card-text">
                  Our AI and machine learning solutions can help you unlock the
                  full potential of your data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="service2.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">SOFTWARE DEVELOPMENT</h5>
                <hr></hr>
                <p className="card-text">
                  Our software development services are designed to help you
                  create custom solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="service3.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">CLOUD COMPUTING</h5>
                <hr></hr>
                <p className="card-text">
                  Our cloud computing solutions can help you reduce costs and
                  improve scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 Quote">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              “Embracing innovation isn't just a choice; it's the key to
              survival in a digital world.”
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid testimonial">
        <div className="row">
          <div className="col-lg-12 reviewSec">
            <div
              id="clientReviewCarousel"
              className="carousel slide zoom-in"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mx-auto">
                    <div className="card-body">
                      <p>
                        “We are delighted to be associated to your company and
                        specially with your IP Attorney who has given us clear
                        directions on how to handle our case. We have
                        successfully started our campaign of registering our
                        brand globally and look forward to see better results.”
                      </p>
                      <div className="d-flex justify-content-start mt-4 align-items-center">
                        <div className="clientImg">
                          <img src="Rajiv.jpg" loading="lazy" alt="Client Image" />
                        </div>
                        <div className="clientDetails">
                          <h6>Rajiv Ambat</h6>
                          <p>Nuvovivo Healthcare Pvt Ltd.</p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="companyLogo ms-3">
                          <img src="clientLogo1.png" loading="lazy" alt="Company Logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mx-auto">
                    <div className="card-body">
                      <p>
                        “We are delighted to be associated to your company and
                        specially with your IP Attorney who has given us clear
                        directions on how to handle our case. We have
                        successfully started our campaign of registering our
                        brand globally and look forward to see better results.”
                      </p>
                      <div className="d-flex justify-content-start mt-4 align-items-center">
                        <div className="clientImg">
                          <img src="Sandeep.jpg" loading="lazy" alt="Client Image" />
                        </div>
                        <div className="clientDetails">
                          <h6>Dr Sandeep Prabhakar</h6>
                          <p>SOLVEMyHealth Vitality Healthcare Pvt Ltd.</p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="companyLogo ms-3">
                          <img src="clientLogo.png" loading="lazy" alt="Company Logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card mx-auto">
                    <div className="card-body">
                      <p>
                        “We are delighted to be associated to your company and
                        specially with your IP Attorney who has given us clear
                        directions on how to handle our case. We have
                        successfully started our campaign of registering our
                        brand globally and look forward to see better results.”
                      </p>
                      <div className="d-flex justify-content-start mt-4 align-items-center">
                        <div className="clientImg">
                          <img src="client.jpeg" loading="lazy" alt="Client Image" />
                        </div>
                        <div className="clientDetails">
                          <h6>Summaya Amad</h6>
                          <p>Al Muqattam Auto Spare Parts Trading LLC</p>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="companyLogo ms-3">
                          <img src="clientLogo.png" loading="lazy" alt="Company Logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start mt-4 buttons">
              <div
                className="carouselBtn"
                data-bs-target="#clientReviewCarousel"
                data-bs-slide="prev"
              >
                <IoIosArrowBack className="arrowIcon" />
              </div>
              <div
                className="carouselBtn"
                data-bs-target="#clientReviewCarousel"
                data-bs-slide="next"
              >
                <IoIosArrowForward className="arrowIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 industries">
        <div className="row">
          <div className="col-10 col-md-10 text-start">
            <h2>Transform Your Industry with Our Tailored Solutions</h2>
          </div>
          <div className="col-2 col-md-2 text-end">
            <FiArrowUpRight className="arrowIcon" />
          </div>
        </div>
        <div className="row industriesSec">
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="industries.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">HEALTHCARE</h5>
                <hr></hr>
                <p className="card-text">
                  Our AI and machine learning solutions can help you unlock the
                  full potential of your data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="industries1.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Finance & Banking</h5>
                <hr></hr>
                <p className="card-text">
                  Our software development services are designed to help you
                  create custom solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0">
            <div className="card">
              <div className="img-frame">
                <img src="industries2.jpg" loading="lazy" className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Retail and E-commerce</h5>
                <hr></hr>
                <p className="card-text">
                  Our cloud computing solutions can help you reduce costs and
                  improve scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 p-lg-5 transformation">
        <div className="row mt-5">
          <div className="col-lg-12 ps-2 ps-lg-5 text-start">
            <h2>How Our Digital Services Transformed These Businesses</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                {/* First Slide */}
                <div className="carousel-item active position-relative">
                  <img
                    src="industries.jpg"
                    loading="lazy"
                    className="d-block w-100"
                    alt="Industry Image"
                  />
                  <div className="badgeTextContainer">
                    <div className="badge">SOFTWARE DEVELOPMENT</div>
                    <div className="text">
                    Our software development services are designed to help you
                    create custom solutions.
                    </div>
                  </div>
                </div>

                {/* Second Slide */}
                <div className="carousel-item position-relative">
                  <img
                    src="industries1.jpg"
                    loading="lazy"
                    className="d-block w-100"
                    alt="Industry Image"
                  />
                  <div className="badgeTextContainer">
                    <div className="badge">CLOUD COMPUTING</div>
                    <div className="text">Our software development services are designed to help you
                    create custom solutions.</div>
                  </div>
                </div>

                {/* Third Slide */}
                <div className="carousel-item position-relative">
                  <img
                    src="industries2.jpg"
                    loading="lazy"
                    className="d-block w-100"
                    alt="Industry Image"
                  />
                  <div className="badgeTextContainer">
                    <div className="badge">MACHINE LEARNING</div>
                    <div className="text">Our software development services are designed to help you
                    create custom solutions.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center mt-4 buttons">
              <div
                className="carouselBtn"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <IoIosArrowBack className="arrowIcon" />
              </div>
              <div
                className="carouselBtn"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <IoIosArrowForward className="arrowIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Enquiry />
    </>
  );
}
