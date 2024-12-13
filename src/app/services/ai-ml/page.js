const AIMachineLearning = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="AI & Machine Learning"
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
            <h1 className="display-3 fw-bold mb-3">AI & Machine Learning</h1>
            <p className="lead mb-0">Transforming Businesses with Smarter Decisions and Automation</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Main Introduction */}
        <div className="text-center mb-6">
          <h2 className="display-5 fw-bold text-primary mb-4">Harness the Power of AI</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            At HeapVue, we leverage cutting-edge algorithms and advanced data processing techniques to revolutionize the way businesses operate, enabling you to predict trends, optimize operations, and deliver personalized customer experiences.
          </p>
        </div>

        {/* AI & ML Capabilities */}
        <section className="mb-6">
          <h3 className="h2 text-center mb-5">Our AI & ML Capabilities</h3>
          <div className="row g-4">
            {[
              {
                icon: "bi-graph-up-arrow",
                title: "Predictive Analytics",
                desc: "Anticipate market trends and customer behavior for informed decisions"
              },
              {
                icon: "bi-chat-dots",
                title: "Natural Language Processing",
                desc: "Build smarter chatbots and sentiment analysis tools"
              },
              {
                icon: "bi-camera",
                title: "Computer Vision",
                desc: "Enable systems to recognize and process visual data"
              },
              {
                icon: "bi-gear-wide-connected",
                title: "Automated Workflows",
                desc: "Streamline operations with AI-powered automation"
              },
              {
                icon: "bi-stars",
                title: "Recommendation Systems",
                desc: "Boost engagement with tailored recommendations"
              },
              {
                icon: "bi-shield-check",
                title: "Anomaly Detection",
                desc: "Identify irregularities to enhance security and reliability"
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
        </section>

        {/* Business Benefits */}
        <section className="mb-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h3 className="h2 mb-4">How AI & ML Empower Your Business</h3>
                  <p className="lead mb-4">Transform your operations with intelligent solutions that drive growth and innovation.</p>
                </div>
                <div className="col-lg-7">
                  <div className="row g-4">
                    {[
                      {
                        icon: "bi-database-check",
                        title: "Data-Driven Decisions",
                        desc: "Transform raw data into actionable insights"
                      },
                      {
                        icon: "bi-lightning-charge",
                        title: "Enhanced Efficiency",
                        desc: "Automate repetitive tasks and save resources"
                      },
                      {
                        icon: "bi-person-check",
                        title: "Personalized Experiences",
                        desc: "Deliver customized solutions for better satisfaction"
                      },
                      {
                        icon: "bi-cash-coin",
                        title: "Cost Optimization",
                        desc: "Reduce operational costs and minimize errors"
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
        </section>

        {/* Industries Section */}
        <section className="mb-6">
          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Industries We Serve</h3>
            <div className="row g-4 justify-content-center">
              {[
                {
                  icon: "bi-hospital",
                  name: "Healthcare"
                },
                {
                  icon: "bi-cart3",
                  name: "E-commerce"
                },
                {
                  icon: "bi-bank",
                  name: "Finance"
                },
                {
                  icon: "bi-building",
                  name: "Manufacturing"
                },
                {
                  icon: "bi-truck",
                  name: "Logistics"
                },
                {
                  icon: "bi-shop",
                  name: "Retail"
                }
              ].map((industry, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2">
                  <div className="card border-0 shadow-sm text-center h-100">
                    <div className="card-body">
                      <i className={`bi ${industry.icon} text-primary fs-2 mb-3`}></i>
                      <h5 className="mb-0">{industry.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Ready to Transform Your Business with AI?</h3>
          <p className="lead mb-4">
            Partner with HeapVue to unlock the full potential of AI and Machine Learning.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Start Your AI Journey
          </a>
        </footer>
      </div>
    </div>
  );
};

export default AIMachineLearning;
