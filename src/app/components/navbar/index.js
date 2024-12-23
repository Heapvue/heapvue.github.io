import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

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
        isHomePage ? (scrolled ? "scrolled" : "") : "scrolled"
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          heapvue.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <RiMenu3Fill className="menuIcon" />
        </button>
        <div
          className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`}
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
