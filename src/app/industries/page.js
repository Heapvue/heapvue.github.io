import Image from "next/image";
import Link from "next/link";
import { industries } from "@/data/industries";

export const metadata = {
  title: 'Industries We Serve | Your Company',
  description: 'Explore the various industries we serve with our innovative solutions.',
};

const IndustriesPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="container-fluid hero-section text-center">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Industries We Serve</h1>
          <p className="lead">
            Delivering innovative solutions across diverse industry sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container py-5">
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div key={industry.id} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Link href={`/industries/${industry.slug}`}>
                  <div className="position-relative">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      width={800}
                      height={400}
                      className="card-img-top"
                      priority={index < 2} // Priority for first two images
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h3 className="card-title h4">{industry.title}</h3>
                  <p className="card-text">{industry.description}</p>
                  <Link 
                    href={`/industries/${industry.slug}`}
                    className="btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Transform Your Industry?</h2>
          <p className="mb-4">
            Let's discuss how our solutions can help your business thrive in the digital age.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage; 