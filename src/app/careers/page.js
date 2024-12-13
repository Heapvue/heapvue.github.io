const Careers = () => {
  const jobOpenings = [
    {
      id: "sde-001",
      title: "Senior Software Engineer",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "5-8 years",
      department: "Engineering",
      description: "We're looking for a Senior Software Engineer to join our growing team. You'll be working on cutting-edge technologies and helping shape the future of our products.",
      requirements: [
        "Bachelor's/Master's degree in Computer Science or related field",
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Excellent problem-solving and communication skills"
      ],
      responsibilities: [
        "Design and implement scalable software solutions",
        "Lead technical discussions and mentor junior developers",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Participate in code reviews and maintain coding standards",
        "Contribute to architecture decisions and technical strategy"
      ]
    },
    {
      id: "pm-001",
      title: "Product Manager",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "4-6 years",
      department: "Product",
      description: "We're seeking an experienced Product Manager to drive product strategy and execution. You'll work closely with engineering, design, and business teams to deliver exceptional products.",
      requirements: [
        "Bachelor's degree in Business, Technology, or related field",
        "4+ years of product management experience",
        "Strong analytical and problem-solving abilities",
        "Excellent communication and stakeholder management skills",
        "Experience with agile methodologies"
      ],
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Gather and analyze user requirements and feedback",
        "Work with engineering teams to deliver features",
        "Monitor product metrics and drive improvements",
        "Present to stakeholders and maintain documentation"
      ]
    },
    {
      id: "ux-001",
      title: "UX/UI Designer",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "3-5 years",
      department: "Design",
      description: "Join our design team to create beautiful, intuitive user experiences. You'll be responsible for designing user interfaces that delight our customers and drive business results.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and component libraries"
      ],
      responsibilities: [
        "Create user flows, wireframes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain and evolve our design system",
        "Present design solutions to stakeholders"
      ]
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="position-relative mb-6">
        <img
          src="/services.jpg"
          alt="Careers at HeapVue"
          className="img-fluid w-100"
          style={{ 
            maxHeight: "500px", 
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
            <h1 className="display-4 fw-bold mb-3">Join Our Team</h1>
            <p className="lead mb-0">Build the future with us</p>
          </div>
        </div>
      </div>

      <div className="container py-6">
        {/* Why Join Us Section */}
        <section className="mb-6">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-4">Why Join HeapVue?</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              At HeapVue, we're building the next generation of technology solutions. Join us in our mission to transform businesses through innovation.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "bi-rocket-takeoff",
                title: "Innovation First",
                desc: "Work on cutting-edge technologies and challenging projects"
              },
              {
                icon: "bi-graph-up-arrow",
                title: "Growth Opportunities",
                desc: "Continuous learning and career advancement paths"
              },
              {
                icon: "bi-people",
                title: "Great Culture",
                desc: "Collaborative environment with talented professionals"
              },
              {
                icon: "bi-award",
                title: "Competitive Benefits",
                desc: "Comprehensive package including health and wellness benefits"
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
        </section>

        {/* Current Openings */}
        <section className="mb-6">
          <h2 className="h2 mb-4">Current Openings</h2>
          <div className="row g-4">
            {jobOpenings.map((job) => (
              <div key={job.id} className="col-12">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                      <div>
                        <h3 className="h4 mb-1">{job.title}</h3>
                        <p className="text-muted mb-2">
                          {job.department} · {job.location} · {job.type}
                        </p>
                        <div className="d-flex gap-3">
                          <span className="badge bg-primary">Experience: {job.experience}</span>
                          <span className="badge bg-secondary">{job.department}</span>
                        </div>
                      </div>
                      <button 
                        className="btn btn-primary mt-3 mt-md-0"
                        data-bs-toggle="collapse"
                        data-bs-target={`#job-${job.id}`}
                      >
                        View Details
                      </button>
                    </div>
                    
                    <div className="collapse" id={`job-${job.id}`}>
                      <hr />
                      <div className="mt-3">
                        <p>{job.description}</p>
                        
                        <h5 className="mb-3">Requirements:</h5>
                        <ul className="mb-4">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>

                        <h5 className="mb-3">Responsibilities:</h5>
                        <ul className="mb-4">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                          ))}
                        </ul>

                        <button className="btn btn-primary">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-5 bg-light rounded-4">
          <h3 className="mb-4">Don't see the right role?</h3>
          <p className="lead mb-4">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="btn btn-primary btn-lg px-5">
            Submit Your Resume
          </button>
        </section>
      </div>
    </div>
  );
};

export default Careers;
