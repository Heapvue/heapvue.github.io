"use client";
import { useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { ButtonSecondry } from "../components/button";
import BotttomBanner from "../components/bottomBanner";
import Apply from "../components/apply";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState({
    jobId: "",
    jobTitle: "",
  });

  const setJob = (jobId, jobTitle) => {
    setSelectedJob({
      jobId: jobId,
      jobTitle: jobTitle,
    });
  };

  const jobOpenings = [
    {
      id: "SDE-001",
      title: "Senior Software Engineer",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "5-8 years",
      department: "Engineering",
      description:
        "We're looking for a Senior Software Engineer to join our growing team. You'll be working on cutting-edge technologies and helping shape the future of our products.",
      requirements: [
        "Bachelor's/Master's degree in Computer Science or related field",
        "5+ years of experience in full-stack development",
        "Strong proficiency in React, Node.js, and modern JavaScript",
        "Experience with cloud platforms (AWS/Azure/GCP)",
        "Excellent problem-solving and communication skills",
      ],
      responsibilities: [
        "Design and implement scalable software solutions",
        "Lead technical discussions and mentor junior developers",
        "Collaborate with cross-functional teams to deliver high-quality products",
        "Participate in code reviews and maintain coding standards",
        "Contribute to architecture decisions and technical strategy",
      ],
    },
    {
      id: "PM-001",
      title: "Product Manager",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "4-6 years",
      department: "Product",
      description:
        "We're seeking an experienced Product Manager to drive product strategy and execution. You'll work closely with engineering, design, and business teams to deliver exceptional products.",
      requirements: [
        "Bachelor's degree in Business, Technology, or related field",
        "4+ years of product management experience",
        "Strong analytical and problem-solving abilities",
        "Excellent communication and stakeholder management skills",
        "Experience with agile methodologies",
      ],
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Gather and analyze user requirements and feedback",
        "Work with engineering teams to deliver features",
        "Monitor product metrics and drive improvements",
        "Present to stakeholders and maintain documentation",
      ],
    },
    {
      id: "UX-001",
      title: "UX/UI Designer",
      location: "Kochi, India (Hybrid)",
      type: "Full-time",
      experience: "3-5 years",
      department: "Design",
      description:
        "Join our design team to create beautiful, intuitive user experiences. You'll be responsible for designing user interfaces that delight our customers and drive business results.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and component libraries",
      ],
      responsibilities: [
        "Create user flows, wireframes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain and evolve our design system",
        "Present design solutions to stakeholders",
      ],
    },
  ];

  return (
    <div className="container-fluid p-4 p-lg-5 careers">
      <div className="row">
        <div className="col-md-8">
          <h2>Be Part of Our Mission to Transform</h2>
        </div>
      </div>
      <div className="row mt-5 text-start g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between align-items-start">
              <div className="icon">
                <HiOutlineLightBulb />
              </div>
              <div>
                <h5>Innovation First</h5>
                <p>
                  Work on cutting-edge technologies and challenging projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between align-items-start">
              <div className="icon">
                <FaPeopleGroup />
              </div>
              <div>
                <h5>Growth Opportunities</h5>
                <p>Continuous learning and career advancement paths.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between align-items-start">
              <div className="icon">
                <IoTrophyOutline />
              </div>
              <div>
                <h5>Great Culture</h5>
                <p>Collaborative environment with talented professionals.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between align-items-start">
              <div className="icon">
                <MdOutlineAutoGraph />
              </div>
              <div>
                <h5>Competitive Benefits</h5>
                <p>
                  Comprehensive package including health and wellness benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <h3>
            Open Positions{" "}
            <span className="jobLen">({jobOpenings.length} Openings)</span>
          </h3>
        </div>
        <div className="col-md-12">
          {jobOpenings.map((job) => (
            <div key={job.id} className="jobCard mt-3">
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4>{job.title}</h4>
                <ButtonSecondry
                  text="Apply Now"
                  type="button"
                  dataBsToggle="modal"
                  dataBsTarget="#careersModal"
                  onClick={() => setJob(job.id, job.title)}
                />
              </div>
              <p className="text-muted">{job.location}</p>
              <div className="d-flex justify-content-start align-items-center">
                <div className="d-flex align-items-center meta">
                  <MdOutlineLocationOn className="icon" />
                  <p>{job.department}</p>
                </div>
                <div className="d-flex align-items-center meta">
                  <MdOutlineLocationOn className="icon" />
                  <p>{job.experience}</p>
                </div>
                <div className="d-flex align-items-center meta">
                  <MdOutlineLocationOn className="icon" />
                  <p>{job.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BotttomBanner
        title="Ready to Transform?"
        desc="Let's create innovative solutions together that drive your business forward."
      />
      <Apply post={selectedJob} />
    </div>
  );
};

export default Careers;
