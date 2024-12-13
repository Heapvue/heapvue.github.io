import Link from 'next/link';
import Image from 'next/image';

const BlogHome = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Solutions",
      excerpt: "Explore how artificial intelligence is transforming business operations and decision-making processes.",
      category: "Technology",
      image: "/services.jpg",
      date: "Mar 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Cloud Architecture",
      excerpt: "Learn the best practices for designing cloud infrastructure that grows with your business.",
      category: "Cloud",
      image: "/services.jpg",
      date: "Mar 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Rise of IoT in Smart Manufacturing",
      excerpt: "Discover how IoT devices are revolutionizing the manufacturing industry with real-time monitoring.",
      category: "IoT",
      image: "/services.jpg",
      date: "Mar 10, 2024",
      readTime: "6 min read"
    }
  ];

  const categories = [
    {
      name: "Technology",
      icon: "bi-cpu",
      description: "Latest tech trends and innovations"
    },
    {
      name: "Cloud Computing",
      icon: "bi-cloud",
      description: "Cloud solutions and strategies"
    },
    {
      name: "Development",
      icon: "bi-code-square",
      description: "Programming and development insights"
    },
    {
      name: "Design",
      icon: "bi-palette",
      description: "UX/UI and design principles"
    }
  ];

  return (
    <div className="blog-home">
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="container py-6">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <span className="badge bg-primary mb-3">BLOG</span>
              <h1 className="display-4 fw-bold mb-4 animate-up">
                Insights for the Digital Age
              </h1>
              <p className="lead text-muted mb-4 animate-up-delay">
                Explore the latest trends in technology, development, and innovation. Stay ahead with expert insights and practical guides.
              </p>
              <div className="animate-up-delay-2">
                <Link href="/blog/latest" className="btn btn-primary btn-lg me-3">
                  Latest Articles
                </Link>
                <Link href="#categories" className="btn btn-outline-primary btn-lg">
                  Browse Topics
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative animate-fade-in">
                <Image
                  src="/services.jpg"
                  alt="Blog Hero"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape position-absolute bottom-0 start-0 w-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section bg-light py-6">
        <div className="container">
          <h2 className="text-center mb-5">Featured Articles</h2>
          <div className="row g-4">
            {featuredPosts.map((post) => (
              <div key={post.id} className="col-md-6 col-lg-4">
                <Link href={`/blog/${post.id}`} className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm blog-card">
                    <div className="position-relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="card-img-top"
                      />
                      <span className="badge bg-primary position-absolute top-0 end-0 m-3">
                        {post.category}
                      </span>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between text-muted small mb-2">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="h5 card-title">{post.title}</h3>
                      <p className="card-text text-muted">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="categories-section py-6">
        <div className="container">
          <h2 className="text-center mb-5">Explore Topics</h2>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm category-card">
                  <div className="card-body text-center p-4">
                    <i className={`bi ${category.icon} text-primary fs-1 mb-3`}></i>
                    <h3 className="h5 mb-2">{category.name}</h3>
                    <p className="text-muted mb-0">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section py-6 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src="/services.jpg"
                alt="Newsletter"
                width={500}
                height={300}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Stay Updated</h2>
              <p className="lead text-muted mb-4">
                Get the latest insights delivered directly to your inbox.
              </p>
              <form className="newsletter-form">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
                <small className="text-muted">
                  We respect your privacy. Unsubscribe at any time.
                </small>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default BlogHome;
