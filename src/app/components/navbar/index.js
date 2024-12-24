import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdCode, IoMdCloud, IoMdBusiness, IoMdFlash, IoMdGitNetwork } from "react-icons/io";
import { RiMenu3Fill, RiCloseFill, RiBrainLine, RiWhatsappFill } from "react-icons/ri";
import { SiMoodle } from "react-icons/si";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import { ButtonSecondry } from "../button";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");

    setIsOffcanvasOpen(false);

    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ps-1 pe-1 p-3 fixed-top ${
        isHomePage ? (scrolled || isMenuHovered ? "scrolled" : "") : "scrolled"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          heapvue.
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <RiMenu3Fill className="menuIcon" />
        </button>

        <div 
          className="collapse navbar-collapse d-none d-lg-block"
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu mega-menu w-100">
                <div className="container-fluid">
                  <div className="row p-4">
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Development Services</h5>
                      <div className="mega-menu-item">
                        <Link href="/services/ai-ml">
                          <div className="d-flex align-items-center">
                            <RiBrainLine className="mega-menu-icon" />
                            <div>
                              <h6>AI & Machine Learning</h6>
                              <p>Advanced AI solutions for your business needs</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mega-menu-item">
                        <Link href="/services/application-development">
                          <div className="d-flex align-items-center">
                            <IoMdCode className="mega-menu-icon" />
                            <div>
                              <h6>Application Development</h6>
                              <p>Custom software solutions for web and mobile</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Infrastructure</h5>
                      <div className="mega-menu-item">
                        <Link href="/services/cloud-devops">
                          <div className="d-flex align-items-center">
                            <IoMdCloud className="mega-menu-icon" />
                            <div>
                              <h6>Cloud & DevOps</h6>
                              <p>Cloud solutions and DevOps automation</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mega-menu-item">
                        <Link href="/services/enterprise-solutions">
                          <div className="d-flex align-items-center">
                            <IoMdBusiness className="mega-menu-icon" />
                            <div>
                              <h6>Enterprise Solutions</h6>
                              <p>Scalable solutions for enterprises</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Emerging Tech</h5>
                      <div className="mega-menu-item">
                        <Link href="/services/generative-ai">
                          <div className="d-flex align-items-center">
                            <IoMdFlash className="mega-menu-icon" />
                            <div>
                              <h6>Generative AI</h6>
                              <p>Next-gen AI content generation</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mega-menu-item">
                        <Link href="/services/iot">
                          <div className="d-flex align-items-center">
                            <IoMdGitNetwork className="mega-menu-icon" />
                            <div>
                              <h6>IoT</h6>
                              <p>Connected device solutions</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solutions
              </a>
              <div className="dropdown-menu mega-menu w-100">
                <div className="container-fluid">
                  <div className="row p-4">
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Products</h5>
                      <div className="mega-menu-item">
                        <a href="https://apnicareer.com" target="_blank">
                          <div className="d-flex align-items-center">
                            <FaLaptopCode className="mega-menu-icon" />
                            <div>
                              <h6>Apnicareer</h6>
                              <p>Career development platform</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="mega-menu-item">
                        <a href="https://apptuner.dev" target="_blank">
                          <div className="d-flex align-items-center">
                            <FaRocket className="mega-menu-icon" />
                            <div>
                              <h6>Apptuner</h6>
                              <p>Application performance optimization</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Integrations</h5>
                      <div className="mega-menu-item">
                        <Link href="/solutions/lms">
                          <div className="d-flex align-items-center">
                            <SiMoodle className="mega-menu-icon" />
                            <div>
                              <h6>LMS Integration</h6>
                              <p>Custom learning management solutions</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mega-menu-item">
                        <Link href="/solutions/whatsapp">
                          <div className="d-flex align-items-center">
                            <RiWhatsappFill className="mega-menu-icon" />
                            <div>
                              <h6>WhatsApp Integration</h6>
                              <p>Business messaging automation</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <h5 className="mega-menu-title">Why Choose Us</h5>
                      <div className="mega-menu-features">
                        <ul className="list-unstyled">
                          <li>✓ Enterprise-grade solutions</li>
                          <li>✓ 24/7 Technical support</li>
                          <li>✓ Customizable integrations</li>
                          <li>✓ Scalable architecture</li>
                        </ul>
                        <div className="mt-3">
                          <Link href="/contact">
                            <ButtonSecondry text="Get Started"/>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/careers">Careers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Offcanvas Menu - Keep existing code */}
        <div
          className={`offcanvas offcanvas-end d-lg-none ${isOffcanvasOpen ? 'show' : ''}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" href="/" onClick={() => setIsOffcanvasOpen(false)}>
              heapvue.
            </Link>
            <button
              onClick={() => setIsOffcanvasOpen(false)}
              aria-label="Close"
            >
              <RiCloseFill className="closeIcon" />
            </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown dropdown-fullwidth">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <Link href="/services/ai-ml" onClick={() => setIsOffcanvasOpen(false)}>
                      AI & Machine Learning
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/services/application-development" onClick={() => setIsOffcanvasOpen(false)}>
                      Application Development
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/services/cloud-devops" onClick={() => setIsOffcanvasOpen(false)}>
                      Cloud & DevOps
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/services/enterprise-solutions" onClick={() => setIsOffcanvasOpen(false)}>
                      Enterprise Solutions
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/services/generative-ai" onClick={() => setIsOffcanvasOpen(false)}>
                      Generative AI
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link href="/services/iot" onClick={() => setIsOffcanvasOpen(false)}>
                      IoT
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item dropdown dropdown-fullwidth">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="https://apnicareer.com" target="_blank" onClick={() => setIsOffcanvasOpen(false)}>
                      Apnicareer
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="https://apptuner.dev" target="_blank" onClick={() => setIsOffcanvasOpen(false)}>
                      Apptuner
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item nav-item dropdown dropdown-fullwidth">
                <Link className="nav-link" href="/blog" onClick={() => setIsOffcanvasOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/careers" onClick={() => setIsOffcanvasOpen(false)}>
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact" onClick={() => setIsOffcanvasOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
