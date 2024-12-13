const EnterpriseSolutions = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Enterprise Solutions"
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
            <h1 className="display-3 fw-bold mb-3">Enterprise Solutions</h1>
            <p className="lead mb-0">Building Scalable and Robust Enterprise Software</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Enterprise Software Development Section */}
        <section id="enterprise-software" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Enterprise Software Development</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              In the fast-paced world of business, enterprises need software that can keep up with their evolving demands. We specialize in Enterprise Software Development tailored to address the unique challenges of large-scale organizations.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div className="card border-0 shadow-lg rounded-4 mb-5">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h3 className="h2 mb-4">Comprehensive Enterprise Solutions</h3>
                  <p className="lead mb-4">From streamlining internal processes to enhancing customer experiences, our solutions are built for reliability, scalability, and efficiency.</p>
                </div>
                <div className="col-lg-7">
                  <div className="row g-4">
                    {[
                      {
                        icon: "bi-gear-wide-connected",
                        title: "End-to-End Custom Development",
                        desc: "From requirement gathering to deployment, we deliver software that aligns with your goals"
                      },
                      {
                        icon: "bi-diagram-3",
                        title: "Integration with Existing Systems",
                        desc: "Seamless operations by integrating with legacy systems and third-party applications"
                      },
                      {
                        icon: "bi-people",
                        title: "Customer Relationship Management",
                        desc: "Enhanced customer engagement with custom CRM solutions and integrations"
                      }
                    ].map((item, index) => (
                      <div key={index} className="col-md-6">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <i className={`bi ${item.icon} text-primary fs-2`}></i>
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
            </div>
          </div>

          {/* Why Choose HeapVue */}
          <div className="bg-light rounded-4 p-5 mb-5">
            <h3 className="h2 text-center mb-5">Why Choose HeapVue?</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-gear-fill",
                  title: "Tailored Solutions",
                  desc: "Software specific to your organizational needs"
                },
                {
                  icon: "bi-lightning-charge",
                  title: "Future-Ready Technology",
                  desc: "Built with cutting-edge tools and frameworks"
                },
                {
                  icon: "bi-shield-lock",
                  title: "Data Security",
                  desc: "Robust protocols ensuring data security and compliance"
                },
                {
                  icon: "bi-graph-up",
                  title: "Scalable Architecture",
                  desc: "Solutions that grow with your business"
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

        {/* Custom Solutions Section */}
        <section id="custom-solutions" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Custom Solutions for Large Organizations</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              We specialize in crafting customized software solutions designed to address the complex needs of enterprise-level businesses.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {[
              {
                icon: "bi-bullseye",
                title: "Tailored to Your Business Needs",
                desc: "Solutions that cater to your specific workflows and industry requirements"
              },
              {
                icon: "bi-building-gear",
                title: "Scalable Architecture",
                desc: "Future-ready solutions that evolve with your business needs"
              },
              {
                icon: "bi-tools",
                title: "Comprehensive Services",
                desc: "From ERP systems to advanced analytics tools"
              },
              {
                icon: "bi-shield-check",
                title: "Security and Compliance",
                desc: "Robust security measures and regulatory compliance"
              },
              {
                icon: "bi-clock-history",
                title: "Post-deployment Support",
                desc: "Ongoing support to ensure continued success"
              },
              {
                icon: "bi-rocket-takeoff",
                title: "Agile Development",
                desc: "Faster delivery and flexible customization"
              }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
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

          {/* Industries Section */}
          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Industries We Serve</h3>
            <div className="row g-4 justify-content-center">
              {[
                "Finance", "Healthcare", "Retail", 
                "Manufacturing", "Technology", "Education"
              ].map((industry, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body d-flex align-items-center justify-content-center">
                      <h5 className="mb-0">{industry}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Transform Your Enterprise Today</h3>
          <p className="lead mb-4">
            Partner with HeapVue to turn your operational challenges into strategic advantages.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Schedule a Consultation
          </a>
        </footer>
      </div>
    </div>
  );
};

export default EnterpriseSolutions;