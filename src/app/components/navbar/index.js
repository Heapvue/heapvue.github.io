import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsHomePage(pathname === "/");

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

  useEffect(() => {
    setIsCollapsed(true);
  }, [pathname]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
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
          aria-controls="navbarText"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <RiMenu3Fill className="menuIcon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarText"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-item dropdown dropdown-fullwidth">
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
                  <Link href="/services/ai-ml">AI & Machine Learning</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/services/application-development">
                    Application Development
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/services/cloud-devops">Cloud & DevOps</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/services/enterprise-solutions">
                    Enterprise Solutions
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/services/generative-ai">Generative AI</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/services/iot">IoT</Link>
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
                  <a href="https://apnicareer.com" target="_blank">
                    Apnicareer
                  </a>
                </li>
                <li className="dropdown-item">
                  <a href="https://apptuner.dev" target="_blank">
                    Apptuner
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-item dropdown dropdown-fullwidth">
              <Link className="nav-link" href="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {/* <IoIosSearch className="navIcons" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
