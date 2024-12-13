const GenerativeAI = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Generative AI"
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
            <h1 className="display-3 fw-bold mb-3">Generative AI</h1>
            <p className="lead mb-0">Revolutionizing Creativity and Automation with AI</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Main Introduction */}
        <div className="text-center mb-6">
          <h2 className="display-5 fw-bold text-primary mb-4">Transform Your Business with Generative AI</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
            At HeapVue, we unlock the immense potential of Generative AI to transform how businesses create, innovate, and automate. Our state-of-the-art solutions enable faster, smarter, and more creative outcomes.
          </p>
        </div>

        {/* Generative AI Capabilities */}
        <section className="mb-6">
          <h3 className="h2 text-center mb-5">What Can Generative AI Do for Your Business?</h3>
          <div className="row g-4">
            {[
              {
                icon: "bi-pencil-square",
                title: "Content Generation",
                desc: "Automate creation of high-quality text, images, audio, and video content"
              },
              {
                icon: "bi-bezier2",
                title: "Design Automation",
                desc: "Simplify product design and prototyping processes with AI-powered tools"
              },
              {
                icon: "bi-code-square",
                title: "Code Assistance",
                desc: "Enhance developer productivity with AI-driven code generation"
              },
              {
                icon: "bi-chat-dots",
                title: "Custom Chatbots",
                desc: "Deploy AI systems that generate contextually accurate responses"
              },
              {
                icon: "bi-lightbulb",
                title: "Idea Exploration",
                desc: "Leverage AI to brainstorm unique concepts and strategies"
              },
              {
                icon: "bi-database-up",
                title: "Data Augmentation",
                desc: "Synthesize realistic datasets for training and testing"
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

        {/* Value Addition Section */}
        <section className="mb-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body p-5">
              <h3 className="h2 text-center mb-5">How Generative AI Adds Value</h3>
              <div className="row g-4">
                {[
                  {
                    icon: "bi-rocket-takeoff",
                    title: "Foster Innovation",
                    desc: "Generate creative ideas and solutions that drive growth"
                  },
                  {
                    icon: "bi-clock-history",
                    title: "Save Time",
                    desc: "Automate complex tasks, increasing efficiency"
                  },
                  {
                    icon: "bi-person-check",
                    title: "Enhance Personalization",
                    desc: "Develop unique, tailor-made customer experiences"
                  },
                  {
                    icon: "bi-graph-down-arrow",
                    title: "Reduce Costs",
                    desc: "Optimize resources and minimize manual intervention"
                  }
                ].map((item, index) => (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="text-center">
                      <i className={`bi ${item.icon} text-primary fs-1 mb-3`}></i>
                      <h4 className="h5 mb-3">{item.title}</h4>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-6">
          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Applications Across Industries</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-cart3",
                  title: "E-commerce",
                  desc: "Automate product descriptions and marketing content"
                },
                {
                  icon: "bi-heart-pulse",
                  title: "Healthcare",
                  desc: "Create synthetic medical data and treatment recommendations"
                },
                {
                  icon: "bi-film",
                  title: "Entertainment",
                  desc: "Generate realistic graphics, scripts, and music"
                },
                {
                  icon: "bi-book",
                  title: "Education",
                  desc: "Develop interactive and adaptive learning materials"
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

        {/* CTA Section */}
        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Ready to Harness the Power of Generative AI?</h3>
          <p className="lead mb-4">
            Partner with HeapVue to unlock new possibilities and drive innovation.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Start Your AI Journey
          </a>
        </footer>
      </div>
    </div>
  );
};

export default GenerativeAI;
