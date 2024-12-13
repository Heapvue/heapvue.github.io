import React from "react";

const Service = () => {
  return (
    <div className="service-page">
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Cloud and DevOps"
          className="img-fluid w-100"
          style={{ 
            maxHeight: "700px", 
            objectFit: "cover",
            filter: "brightness(0.8)"
          }}
        />
        <div
          className="position-absolute bottom-0 start-0 p-5"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
            color: "white",
            width: "100%",
          }}
        >
          <div className="container">
            <span className="badge bg-primary mb-3">SERVICES</span>
            <h1 className="display-3 fw-bold mb-3">Cloud & DevOps</h1>
            <p className="lead mb-0">Power Your Business with Agile and Scalable Cloud Solutions</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        <header className="text-center mb-6">
          <h2 className="display-5 fw-bold text-primary mb-4">Cloud & DevOps Solutions</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Empowering your business with modern cloud solutions and agile
            workflows that drive innovation and growth.
          </p>
        </header>

        <section id="cloud-services" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Cloud Services</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              At Heapvue, we offer a comprehensive suite of cloud services designed to transform your business operations. Whether you're migrating to the cloud, optimizing existing infrastructure, or building a robust cloud-first strategy, our solutions empower you to stay competitive in a fast-evolving digital landscape.
            </p>
          </div>

          <div className="card border-0 shadow-lg rounded-4 mb-5">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="text-primary mb-4">
                    <i className="bi bi-building-gear fs-1"></i>
                  </div>
                  <h3 className="h2 mb-4">Cloud Infrastructure</h3>
                  <p className="lead mb-4">Building the Foundation of Your Digital Success</p>
                </div>
                <div className="col-lg-8">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-arrow-repeat text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Cloud Migration</h5>
                          <p className="text-muted">Seamlessly transition your on-premise systems to the cloud</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-diagram-3 text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Multi-Cloud & Hybrid</h5>
                          <p className="text-muted">Maximize flexibility with integrated cloud platforms</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-shield-check text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Security & Compliance</h5>
                          <p className="text-muted">Protect data with robust security measures</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-lg rounded-4 mb-5">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="text-primary mb-4">
                    <i className="bi bi-speedometer2 fs-1"></i>
                  </div>
                  <h3 className="h2 mb-4">Cloud Optimization</h3>
                  <p className="lead mb-4">Maximize Efficiency, Minimize Costs</p>
                </div>
                <div className="col-lg-8">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-graph-up-arrow text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Performance Tuning</h5>
                          <p className="text-muted">Enhance speed and reliability with proactive monitoring</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-cash-coin text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Cost Management</h5>
                          <p className="text-muted">Optimize expenses with detailed analysis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <i className="bi bi-robot text-primary fs-4"></i>
                        </div>
                        <div className="ms-3">
                          <h5>Automation</h5>
                          <p className="text-muted">Streamline operations with automated workflows</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Why Choose Heapvue for Cloud Services?</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-gear-wide-connected",
                  title: "Customized Solutions",
                  desc: "Tailored cloud strategies that align with your business goals"
                },
                {
                  icon: "bi-people-fill",
                  title: "Expert Guidance",
                  desc: "A team of certified professionals with extensive experience"
                },
                {
                  icon: "bi-arrows-angle-expand",
                  title: "Scalable Architecture",
                  desc: "Solutions that grow with your business demands"
                },
                {
                  icon: "bi-eye-fill",
                  title: "Proactive Monitoring",
                  desc: "24/7 monitoring and support for uninterrupted operations"
                },
                {
                  icon: "bi-rocket-takeoff",
                  title: "Future-Ready",
                  desc: "Stay ahead with innovative cloud solutions"
                }
              ].map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                      <h4 className="h5 mb-3">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="devops-services" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">DevOps Excellence</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              At Heapvue, we provide expert DevOps consultation services to help your organization embrace agile workflows and deliver software with greater speed, quality, and reliability. By bridging the gap between development and IT operations, we enable your teams to collaborate seamlessly and achieve faster time-to-market.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              {
                icon: "bi-infinity",
                title: "CI/CD Implementation",
                desc: "Automate your software development pipeline with Continuous Integration and Deployment practices"
              },
              {
                icon: "bi-code-square",
                title: "Infrastructure as Code",
                desc: "Replace manual configurations with code-based infrastructure management"
              },
              {
                icon: "bi-graph-up",
                title: "Monitoring & Logging",
                desc: "Gain real-time insights into your applications and infrastructure"
              },
              {
                icon: "bi-cloud-check",
                title: "Cloud-Native DevOps",
                desc: "Leverage cloud platforms to scale your DevOps workflows seamlessly"
              },
              {
                icon: "bi-boxes",
                title: "Containerization",
                desc: "Optimize deployment with Docker and Kubernetes"
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className={`bi ${item.icon} text-primary fs-2`}></i>
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

          <div className="bg-light rounded-4 p-5 mb-5">
            <h3 className="h2 text-center mb-5">Benefits of Heapvue's DevOps Consultation</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-lightning-charge",
                  title: "Accelerated Delivery",
                  desc: "Implement agile methodologies for faster releases"
                },
                {
                  icon: "bi-people",
                  title: "Improved Collaboration",
                  desc: "Foster better communication between teams"
                },
                {
                  icon: "bi-shield-check",
                  title: "Enhanced Quality",
                  desc: "Ensure reliable builds with automated testing"
                },
                {
                  icon: "bi-piggy-bank",
                  title: "Cost Efficiency",
                  desc: "Reduce operational overhead through automation"
                }
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                      <h4 className="h5 mb-3">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Ready to Transform Your Business?</h3>
          <p className="lead mb-4">
            Let's discuss how Heapvue can help you achieve your cloud and DevOps goals.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Contact Us Today
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Service;
