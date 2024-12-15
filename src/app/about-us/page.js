import BotttomBanner from "../components/bottomBanner";

const AboutUs = () => {
  return (
    <div className="about-page singlePage">
      <div className="position-relative mb-6">
        <img
          src="/grid.png"
          alt="About HeapVue"
          className="img-fluid w-100"
          style={{
            maxHeight: "700px",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center titleSec">
          <div className="container">
            <span className="badge bg-primary mb-3">ABOUT US</span>
            <h1 className="display-3 fw-bold mb-3">
              Innovating for a Better Tomorrow
            </h1>
            <p className="lead mb-0">
              Transforming businesses through cutting-edge technology solutions
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-4 p-lg-5">
        {/* Introduction */}
        <section className="mb-6">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/services.jpg"
                alt="Our Team"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Who We Are</h2>
              <p className="lead text-muted mb-4">
                At Heapvue, we are driven by a passion for innovation and a
                commitment to delivering cutting-edge technology solutions that
                transform businesses. As a trusted partner to organizations of
                all sizes, we specialize in creating tailored software, web, and
                mobile solutions that empower businesses to thrive in an
                ever-evolving digital landscape.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-2"></i>
                    <span className="fw-bold">Industry Expertise</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-2"></i>
                    <span className="fw-bold">Global Reach</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-2"></i>
                    <span className="fw-bold">Innovative Solutions</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary fs-4 me-2"></i>
                    <span className="fw-bold">Customer Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 rounded-3 p-3 me-4">
                      <i className="bi bi-rocket-takeoff text-primary fs-2"></i>
                    </div>
                    <h3 className="h4 mb-0">Our Mission</h3>
                  </div>
                  <p className="text-muted mb-0">
                    To harness the power of technology and innovation to provide
                    businesses with scalable, efficient, and impactful solutions
                    that drive growth, enhance productivity, and deliver
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-box bg-primary bg-opacity-10 rounded-3 p-3 me-4">
                      <i className="bi bi-eye text-primary fs-2"></i>
                    </div>
                    <h3 className="h4 mb-0">Our Vision</h3>
                  </div>
                  <p className="text-muted mb-0">
                    To be the go-to technology partner for enterprises
                    worldwide, known for our excellence in crafting innovative
                    solutions that redefine industries and unlock new
                    possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-6">
          <h2 className="text-center display-6 fw-bold mb-5">
            Our Core Values
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "bi-shield-lock",
                title: "Integrity",
                desc: "We uphold honesty and transparency in all our engagements.",
              },
              {
                icon: "bi-star",
                title: "Excellence",
                desc: "We are committed to exceeding expectations with every project.",
              },
              {
                icon: "bi-people-fill",
                title: "Collaboration",
                desc: "We work hand-in-hand with our clients, ensuring seamless communication.",
              },
              {
                icon: "bi-lightbulb",
                title: "Innovation",
                desc: "We constantly push the boundaries of technology for impactful solutions.",
              },
            ].map((value, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div
                      className="icon-box bg-primary bg-opacity-10 rounded-circle p-3 mx-auto mb-4"
                      style={{ width: "fit-content" }}
                    >
                      <i className={`bi ${value.icon} text-primary fs-2`}></i>
                    </div>
                    <h3 className="h5 mb-3">{value.title}</h3>
                    <p className="text-muted mb-0">{value.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-6 bg-light rounded-4 p-5">
          <h2 className="text-center display-6 fw-bold mb-5">
            Why Choose Heapvue?
          </h2>
          <div className="row g-4">
            {[
              {
                icon: "bi-person-check",
                title: "Customer-Centric Approach",
                desc: "We listen, understand, and deliver solutions tailored to your unique business needs.",
              },
              {
                icon: "bi-people",
                title: "Expert Team",
                desc: "Our team of skilled professionals combines technical expertise with industry knowledge.",
              },
              {
                icon: "bi-shield-check",
                title: "Quality Assurance",
                desc: "We follow stringent quality control measures to ensure flawless execution.",
              },
              {
                icon: "bi-lightning",
                title: "Innovation-Driven",
                desc: "We leverage the latest technologies to build future-ready applications.",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex">
                  <div className="icon-box bg-white rounded-3 p-3 me-4">
                    <i className={`bi ${item.icon} text-primary fs-2`}></i>
                  </div>
                  <div>
                    <h3 className="h5 mb-3">{item.title}</h3>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <BotttomBanner title="Ready to Transform?" desc="Let's create innovative solutions together that drive your business forward." />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
