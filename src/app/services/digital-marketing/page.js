import { Metadata } from 'next'

export const metadata = {
  title: 'Digital Marketing & SEO Services | Online Growth Solutions | Heapvue',
  description: 'Boost your online presence with Heapvue\'s digital marketing and SEO services. Drive traffic, increase conversions, and grow your business digitally.',
  keywords: 'digital marketing, SEO services, online marketing, search engine optimization, content marketing, social media marketing',
  openGraph: {
    title: 'Digital Marketing & SEO Services | Online Growth Solutions | Heapvue',
    description: 'Boost your online presence with Heapvue\'s digital marketing and SEO services. Drive traffic, increase conversions, and grow your business digitally.',
    images: '/images/services/digital-marketing.jpg',
  }
};

const DigitalMarketing = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Digital Marketing & SEO"
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
            <h1 className="display-3 fw-bold mb-3">Digital Marketing & SEO</h1>
            <p className="lead mb-0">Elevate Your Brand's Online Presence</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* SEO Section */}
        <section id="seo-services" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Search Engine Optimization (SEO)</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              In today's highly competitive digital landscape, visibility is the cornerstone of success. Our strategic SEO services are designed to elevate your brand's online presence, drive organic traffic, and improve search engine rankings.
            </p>
          </div>

          {/* SEO Services Grid */}
          <div className="row g-4 mb-5">
            {[
              {
                icon: "bi-bullseye",
                title: "Customized SEO Strategies",
                desc: "Tailored approaches aligned with your goals and industry trends"
              },
              {
                icon: "bi-gear",
                title: "Technical SEO",
                desc: "Comprehensive technical audits and optimization for peak performance"
              },
              {
                icon: "bi-search",
                title: "Keyword Research",
                desc: "In-depth research to target high-value search terms"
              },
              {
                icon: "bi-pencil-square",
                title: "Content Optimization",
                desc: "SEO-friendly content that engages and converts"
              },
              {
                icon: "bi-link-45deg",
                title: "Link Building",
                desc: "Ethical strategies to build domain authority"
              },
              {
                icon: "bi-graph-up",
                title: "Analytics & Reporting",
                desc: "Detailed insights into your SEO performance"
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

          {/* Why Choose HeapVue for SEO */}
          <div className="bg-light rounded-4 p-5 mb-5">
            <h3 className="h2 text-center mb-5">Why Choose HeapVue for SEO?</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-trophy",
                  title: "Proven Expertise",
                  desc: "Track record of driving organic growth"
                },
                {
                  icon: "bi-lightning",
                  title: "Latest Trends",
                  desc: "Up-to-date with search engine algorithms"
                },
                {
                  icon: "bi-arrows-angle-expand",
                  title: "Holistic Approach",
                  desc: "Comprehensive on-page and off-page SEO"
                },
                {
                  icon: "bi-graph-up-arrow",
                  title: "Data-Driven",
                  desc: "Insights that maximize your ROI"
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

        {/* SEM Section */}
        <section id="sem-services" className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Search Engine Marketing (SEM)</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Our Search Engine Marketing services combine data-driven insights with creative strategies to maximize your online reach and deliver measurable results.
            </p>
          </div>

          {/* SEM Features */}
          <div className="card border-0 shadow-lg rounded-4 mb-5">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="h2 mb-4">Comprehensive SEM Solutions</h3>
                  <div className="d-grid gap-4">
                    {[
                      {
                        icon: "bi-megaphone",
                        title: "Tailored PPC Campaigns",
                        desc: "Customized campaigns that target the right audience"
                      },
                      {
                        icon: "bi-clipboard-data",
                        title: "Performance Analytics",
                        desc: "Detailed tracking and optimization of campaign metrics"
                      },
                      {
                        icon: "bi-shuffle",
                        title: "A/B Testing",
                        desc: "Continuous optimization for maximum performance"
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
                    src="/digitalMarketing.jpg" 
                    alt="SEM Analytics" 
                    className="img-fluid rounded-4 shadow"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SEM Benefits */}
          <div className="bg-light rounded-4 p-5">
            <h3 className="h2 text-center mb-5">Benefits of Our SEM Services</h3>
            <div className="row g-4">
              {[
                {
                  icon: "bi-target",
                  title: "Targeted Reach",
                  desc: "Connect with your ideal audience"
                },
                {
                  icon: "bi-cash-coin",
                  title: "ROI Focused",
                  desc: "Maximize return on ad spend"
                },
                {
                  icon: "bi-lightning-charge",
                  title: "Quick Results",
                  desc: "Immediate visibility and traffic"
                },
                {
                  icon: "bi-gear-wide-connected",
                  title: "Scalable Campaigns",
                  desc: "Grow your reach as needed"
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
          <h3 className="mb-4">Ready to Boost Your Online Presence?</h3>
          <p className="lead mb-4">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5 py-3">
            Get Started Today
          </a>
        </footer>
      </div>
    </div>
  );
};

export default DigitalMarketing;
