import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(pathname === "/");

    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg ps-1 pe-1 p-3 fixed-top ${
        isHomePage ? (scrolled ? "scrolled" : "") : "scrolled"
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="https://heapvue.com">
          heapvue.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <RiMenu3Fill className="menuIcon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
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
              <a className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
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
              <Link className="nav-link" href="blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <IoIosSearch className="navIcons" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
