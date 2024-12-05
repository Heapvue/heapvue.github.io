"use client";
import { useState, useEffect } from "react";
import { Button } from "./components/button";
import { MdSecurity } from "react-icons/md";
import { CgPerformance, CgSupport } from "react-icons/cg";

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
            <Button text="Get in Touch" />
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
      <div className="container-fluid p-5 ourFeature">
        <div className="row">
          <div className="col-md-6">
            <h2>
              We specialize in creating software solutions that are tailored to
              your unique business needs.
            </h2>
          </div>
          <div className="col-md-6 rightSide">
            <div className="d-flex justify-content-center mb-3">
              <div className="icon-box">
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
            <div className="d-flex justify-content-center mb-3">
              <div className="icon-box">
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
            <div className="d-flex justify-content-center">
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
      <div className="container-fluid p-5 ourServices">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="img-frame">
                <img src="service1.jpg" className="card-img-top" alt="..." />
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
          <div className="col-md-4">
            <div className="card">
              <div className="img-frame">
                <img src="service2.jpg" className="card-img-top" alt="..." />
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
          <div className="col-md-4">
            <div className="card">
              <div className="img-frame">
                <img src="service3.jpg" className="card-img-top" alt="..." />
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
      <div className="container-fluid p-5 Quote">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              “Embracing innovation isn't just a choice; it's the key to
              survival in a digital world.”
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
