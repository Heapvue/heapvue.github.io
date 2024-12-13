const ApplicationDevelopment = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Application Development"
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
            <h1 className="display-3 fw-bold mb-3">Application Development</h1>
            <p className="lead mb-0">Transforming Ideas into Powerful Digital Solutions</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Web Development Section */}
        <section id="web-development" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Web Development</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              At HeapVue, we specialize in creating high-performing, user-friendly websites tailored to meet the unique needs of businesses across industries. With cutting-edge technologies and innovative design, we deliver solutions that not only look great but also drive growth and engagement.
            </p>
          </div>

          {/* Web Development Services */}
          <div className="row g-4 mb-5">
            {[
              {
                icon: "bi-code-slash",
                title: "Custom Web Development",
                desc: "From simple websites to complex web applications, we build custom solutions that align with your business objectives"
              },
              {
                icon: "bi-phone",
                title: "Responsive Design",
                desc: "Ensuring seamless user experiences across devices, from desktops to smartphones"
              },
              {
                icon: "bi-cart3",
                title: "E-Commerce Solutions",
                desc: "Robust platforms to take your online store to the next level with secure, scalable designs"
              },
              {
                icon: "bi-wordpress",
                title: "Content Management Systems",
                desc: "Empowering you with easy-to-manage CMS platforms like WordPress, Drupal, and Joomla"
              },
              {
                icon: "bi-plug",
                title: "API Integrations",
                desc: "Connecting your systems and streamlining workflows with third-party API integrations"
              },
              {
                icon: "bi-gear",
                title: "Website Maintenance",
                desc: "Ongoing support to ensure your website stays secure, updated, and optimized"
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

        {/* Mobile App Development Section */}
        <section id="mobile-development" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Mobile App Development</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              In today's digital age, a strong mobile presence is essential for businesses to connect with their customers. We specialize in crafting intuitive, feature-rich mobile applications that enhance user experiences and drive business growth.
            </p>
          </div>

          <div className="card border-0 shadow-lg rounded-4 mb-5">
            <div className="card-body p-5">
              <div className="row g-4">
                <div className="col-lg-6">
                  <h3 className="h2 mb-4">Our Mobile App Development Expertise</h3>
                  <div className="d-grid gap-4">
                    {[
                      {
                        icon: "bi-phone",
                        title: "Custom Mobile App Development",
                        desc: "Tailor-made applications that meet your unique business needs"
                      },
                      {
                        icon: "bi-arrows-angle-expand",
                        title: "Cross-Platform Development",
                        desc: "Seamless experiences on both iOS and Android platforms"
                      },
                      {
                        icon: "bi-shield-check",
                        title: "Native App Development",
                        desc: "High-performance apps for iOS (Swift) and Android (Kotlin)"
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
                <div className="col-lg-6">
                  <img 
                    src="/applicationDevelopment.jpg" 
                    height={175}
                    width={250}
                    alt="Mobile Development" 
                    className="img-fluid rounded-4 shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Development Section */}
        <section id="ecommerce-development" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">E-commerce Development</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Transform your retail business with our powerful, user-friendly e-commerce solutions designed to deliver seamless shopping experiences and drive revenue growth.
            </p>
          </div>

          <div className="bg-light rounded-4 p-5">
            <div className="row g-4">
              {[
                {
                  icon: "bi-shop",
                  title: "Custom E-commerce Solutions",
                  desc: "Personalized online stores aligned with your brand identity"
                },
                {
                  icon: "bi-credit-card",
                  title: "Secure Payment Gateways",
                  desc: "Multiple payment options with top-tier security"
                },
                {
                  icon: "bi-graph-up",
                  title: "SEO-Ready Stores",
                  desc: "Optimized for better search engine visibility"
                },
                {
                  icon: "bi-gear-wide-connected",
                  title: "Third-Party Integrations",
                  desc: "Seamless integration with CRM, ERP, and other tools"
                },
                {
                  icon: "bi-speedometer2",
                  title: "Speed & Performance",
                  desc: "Lightning-fast loading times for better conversion"
                },
                {
                  icon: "bi-shield-lock",
                  title: "Secure & Scalable",
                  desc: "Built to protect data and grow with your business"
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
          </div>
        </section>

        {/* CTA Section */}
        <footer className="text-center py-5 bg-primary text-white rounded-4">
          <h3 className="mb-4">Ready to Build Your Next Digital Solution?</h3>
          <p className="lead mb-4">
            Let's work together to create exceptional digital experiences that drive results.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Start Your Project Today
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ApplicationDevelopment;
