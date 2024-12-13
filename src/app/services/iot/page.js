const IoTSolutions = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Internet of Things"
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
            <h1 className="display-3 fw-bold mb-3">Internet of Things (IoT)</h1>
            <p className="lead mb-0">Connecting the World with Smart, Scalable IoT Solutions</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Main Introduction */}
        <div className="text-center mb-6">
          <h2 className="display-5 fw-bold text-primary mb-4">Transform Your Business with IoT</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            At HeapVue, we harness the power of IoT to bridge the gap between the physical and digital worlds, empowering businesses to streamline operations and unlock new opportunities.
          </p>
        </div>

        {/* IoT Solutions */}
        <section className="mb-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <img 
                    src="/iot.jpg" 
                    alt="IoT Solutions" 
                    className="img-fluid rounded-4 shadow mb-4 mb-lg-0"
                  />
                </div>
                <div className="col-lg-6">
                  <h3 className="h2 mb-4">Core IoT Capabilities</h3>
                  <div className="d-grid gap-4">
                    {[
                      {
                        icon: "bi-device-ssd",
                        title: "Smart Devices and Connectivity",
                        desc: "Enable seamless communication between devices for real-time data exchange"
                      },
                      {
                        icon: "bi-gear-wide-connected",
                        title: "IoT-Driven Automation",
                        desc: "Automate processes with intelligent devices that respond to changing conditions"
                      },
                      {
                        icon: "bi-graph-up-arrow",
                        title: "Predictive Analytics",
                        desc: "Leverage IoT data for actionable insights and maintenance"
                      },
                      {
                        icon: "bi-display",
                        title: "Remote Monitoring",
                        desc: "Track assets and processes remotely for efficiency and compliance"
                      }
                    ].map((item, index) => (
                      <div key={index} className="d-flex">
                        <div className="flex-shrink-0">
                          <i className={`bi ${item.icon} text-primary fs-3`}></i>
                        </div>
                        <div className="ms-4">
                          <h5>{item.title}</h5>
                          <p className="text-muted mb-0">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-6">
          <h3 className="h2 text-center mb-5">Benefits of IoT Integration</h3>
          <div className="row g-4">
            {[
              {
                icon: "bi-speedometer2",
                title: "Enhanced Efficiency",
                desc: "Automate workflows and optimize resource utilization"
              },
              {
                icon: "bi-graph-up",
                title: "Improved Decision-Making",
                desc: "Use real-time data insights for informed decisions"
              },
              {
                icon: "bi-piggy-bank",
                title: "Cost Reduction",
                desc: "Lower maintenance and energy costs through monitoring"
              },
              {
                icon: "bi-person-check",
                title: "Better Customer Experience",
                desc: "Deliver personalized, connected experiences"
              },
              {
                icon: "bi-shield-check",
                title: "Greater Safety",
                desc: "Monitor environments and detect anomalies"
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
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
        </section>

        {/* Industry Applications */}
        <section className="mb-6">
          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Applications Across Industries</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-building-gear",
                  title: "Manufacturing",
                  desc: "Monitor equipment and optimize production lines"
                },
                {
                  icon: "bi-heart-pulse",
                  title: "Healthcare",
                  desc: "Enable remote patient monitoring and smart devices"
                },
                {
                  icon: "bi-shop",
                  title: "Retail",
                  desc: "Implement smart shelves and inventory tracking"
                },
                {
                  icon: "bi-truck",
                  title: "Transportation",
                  desc: "Improve fleet management and logistics"
                },
                {
                  icon: "bi-house-gear",
                  title: "Smart Homes",
                  desc: "Enhance comfort with connected appliances"
                }
              ].map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className={`bi ${item.icon} text-primary fs-2 me-3`}></i>
                        <h4 className="h5 mb-0">{item.title}</h4>
                      </div>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Ready to Connect Your Business to the Future?</h3>
          <p className="lead mb-4">
            Let's explore how IoT solutions can transform your operations and drive growth.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Get Started Today
          </a>
        </footer>
      </div>
    </div>
  );
};

export default IoTSolutions;
