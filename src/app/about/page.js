import Link from 'next/link';
import Image from 'next/image';
import '@/components/about/About.css';
import AboutHero from '@/components/about/AboutHero';
import OurMissionSection from '@/components/about/OurMissionSection';
import OurStorySection from '@/components/about/OurStorySection';
import OurCoreValuesSection from '@/components/about/OurCoreValuesSection';
import OurFoundersSection from '@/components/about/OurFoundersSection';
import WhyChooseSection from '@/components/about/WhyChooseSection';
import FaqSection from '@/components/home/FaqSection';
import { FiCalendar, FiUsers, FiMapPin, FiAward, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const metadata = {
  title: 'About Us | Heapvue - Innovating for a Better Tomorrow',
  description: 'Learn about Heapvue’s leadership, history, engineering team, and culture. Founded in 2021 in Kochi, India, engineering custom software and SaaS products.',
};

const aboutFaqs = [
  {
    id: 1,
    question: 'Where is Heapvue headquartered and where are your teams located?',
    answer: 'Heapvue is headquartered in Kochi (Palarivattom, Ernakulam), Kerala, India. We operate our core engineering and product development hub from Kochi with strategic growth and advisory partners supporting clients across North America and the APAC region.',
  },
  {
    id: 2,
    question: 'When was Heapvue founded and how large is the organization?',
    answer: 'Heapvue was established in 2021. Our team consists of 30+ dedicated full-stack software engineers, cloud architects, AI specialists, and UI/UX designers.',
  },
  {
    id: 3,
    question: 'How do you balance proprietary products and client consulting?',
    answer: 'We operate dedicated teams for product development and client engineering services. Insights from custom client implementations inform our product roadmaps, while our proprietary platforms serve as powerful accelerators for client projects.',
  },
  {
    id: 4,
    question: 'How can developers or designers join the Heapvue team?',
    answer: 'We are continually seeking exceptional problem-solvers. You can explore open roles or send your resume, GitHub profile, or portfolio directly to careers@heapvue.com.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <AboutHero />

      {/* Operational Facts & Headcount Band */}
      <section className="py-4 bg-white border-bottom">
        <div className="container" style={{ maxWidth: '1140px' }}>
          <div className="row g-3 text-center">
            <div className="col-6 col-md-3">
              <div className="p-3">
                <FiCalendar className="text-primary mb-2" size={24} />
                <h4 className="fw-bold mb-0 text-dark">2021</h4>
                <small className="text-muted">Founded in Kochi, India</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <FiUsers className="text-primary mb-2" size={24} />
                <h4 className="fw-bold mb-0 text-dark">30+ Engineers</h4>
                <small className="text-muted">Full-Time Builders</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <FiMapPin className="text-primary mb-2" size={24} />
                <h4 className="fw-bold mb-0 text-dark">Kochi · Ernakulam</h4>
                <small className="text-muted">Global Delivery Hub</small>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-3">
                <FiAward className="text-primary mb-2" size={24} />
                <h4 className="fw-bold mb-0 text-dark">5 Products</h4>
                <small className="text-muted">Proprietary Software Platforms</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <OurMissionSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Company Timeline */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="text-center mb-5">
            <span className="badge bg-primary-subtle text-primary fw-semibold px-3 py-2 rounded-pill mb-2">
              Our Journey
            </span>
            <h2 className="fw-bold" style={{ fontSize: '2.2rem', color: '#0F172A' }}>
              Heapvue Milestones &amp; Evolution
            </h2>
          </div>

          <div className="d-flex flex-column gap-4">
            <div className="p-4 bg-white rounded-3 border d-flex gap-4 align-items-start">
              <span className="badge bg-primary fs-6 p-2 px-3 rounded-pill">2021</span>
              <div>
                <h5 className="fw-bold text-dark mb-1">Company Founded in Kochi</h5>
                <p className="text-muted small mb-0">Established as a high-velocity software engineering studio focused on modern cloud architecture, scalable web systems, and custom client platforms.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3 border d-flex gap-4 align-items-start">
              <span className="badge bg-primary fs-6 p-2 px-3 rounded-pill">2022</span>
              <div>
                <h5 className="fw-bold text-dark mb-1">Expansion into IoT &amp; Modernisation</h5>
                <p className="text-muted small mb-0">Delivered complex legacy migrations from monoliths to microservices; expanded capabilities into hardware telemetry and real-time data processing.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3 border d-flex gap-4 align-items-start">
              <span className="badge bg-primary fs-6 p-2 px-3 rounded-pill">2023</span>
              <div>
                <h5 className="fw-bold text-dark mb-1">Incubation of Proprietary Products</h5>
                <p className="text-muted small mb-0">Developed and released our core software accelerators: VueCart for headless commerce, HeapSync for CRM, and Learnly for modern learning management.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3 border d-flex gap-4 align-items-start">
              <span className="badge bg-primary fs-6 p-2 px-3 rounded-pill">2024-2026</span>
              <div>
                <h5 className="fw-bold text-dark mb-1">AI Practice &amp; Global Enterprise Footprint</h5>
                <p className="text-muted small mb-0">Launched dedicated generative AI, speech NLP, and data compliance advisory practices, partnering with enterprises across North America, APAC, and India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founders Section (Re-enabled with real founders and photos) */}
      <OurFoundersSection />

      {/* Our Core Values Section */}
      <OurCoreValuesSection />

      {/* Why Choose Heapvue */}
      <WhyChooseSection />

      {/* Merged Careers Pitch Section */}
      <section className="py-5 bg-white border-top">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="p-5 rounded-4" style={{ background: 'linear-gradient(135deg, #040D21 0%, #0F172A 60%, #1E3A8A 100%)', color: '#ffffff' }}>
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-8">
                <span className="badge bg-info-subtle text-info fw-semibold px-3 py-1 rounded-pill mb-3">
                  Careers at Heapvue
                </span>
                <h3 className="fw-bold text-white mb-2" style={{ fontSize: '1.8rem' }}>
                  Build the Future of Enterprise Software with Us
                </h3>
                <p className="text-light opacity-75 mb-3" style={{ lineHeight: 1.6 }}>
                  We believe in craftsmanship, engineering rigor, and empowering practitioners. Whether you are a cloud architect, distributed systems engineer, or UX designer, there is a place for your ambition at Heapvue.
                </p>
                <div className="d-flex flex-wrap gap-3 small text-light opacity-90">
                  <span className="d-flex align-items-center gap-1"><FiCheckCircle className="text-info" /> High-autonomy engineering culture</span>
                  <span className="d-flex align-items-center gap-1"><FiCheckCircle className="text-info" /> Continuous learning &amp; conference sponsorship</span>
                  <span className="d-flex align-items-center gap-1"><FiCheckCircle className="text-info" /> Direct ownership of shipping software</span>
                </div>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                <Link href="/careers" className="btn btn-light px-4 py-3 fw-bold text-dark" style={{ borderRadius: '8px' }}>
                  View Open Roles &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored About FAQ */}
      <FaqSection customFaqs={aboutFaqs} />
    </div>
  );
}
