import React from "react";
import { useEffect, useState } from "react";
import { ButtonSecondary } from "../button";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg p-3 fixed-top ${
      scrolled ? "scrolled" : ""
    }`}>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item nav-item dropdown dropdown-fullwidth">
              <a className="nav-link" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item nav-item dropdown dropdown-fullwidth">
              <a className="nav-link" aria-current="page" href="#">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Industries
              </a>
            </li>
            <li className="nav-item nav-item dropdown dropdown-fullwidth">
              <a className="nav-link" aria-current="page" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
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
