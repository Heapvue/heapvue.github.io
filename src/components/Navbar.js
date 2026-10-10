'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiChevronDown,
  FiChevronRight,
  FiLayers,
  FiRefreshCw,
  FiCpu,
  FiShoppingBag,
  FiSmartphone,
  FiShield,
  FiTrendingUp,
  FiCode,
  FiLock,
  FiActivity,
  FiDollarSign,
  FiBookOpen,
  FiZap,
  FiUsers,
  FiExternalLink
} from 'react-icons/fi';
import './Navbar.css';

const consultingSubmenus = [
  {
    name: 'Digital Transformation',
    path: '/consulting/digital-transformation',
    desc: 'Align technology investments with organizational goals & roadmaps.',
    icon: FiTrendingUp,
  },
  {
    name: 'Technology Consulting',
    path: '/consulting/technology-consulting',
    desc: 'Architecture advisory, tech stack evaluation, & cloud strategy.',
    icon: FiCode,
  },
  {
    name: 'Data & Compliance (DPDP, GDPR, HIPAA)',
    path: '/consulting/data-compliance',
    desc: 'Data privacy assessments, regulatory alignment, & security design.',
    icon: FiLock,
  },
  {
    name: 'AI Consulting',
    path: '/consulting/ai-consulting',
    desc: 'Practical AI strategy, RAG architecture, & automation roadmaps.',
    icon: FiCpu,
  },
];

const industriesSubmenus = [
  {
    name: 'Healthcare',
    path: '/industries/healthcare',
    desc: 'Digital platforms, legacy modernisations, & patient-facing apps.',
    icon: FiActivity,
  },
  {
    name: 'Retail & E-commerce',
    path: '/industries/retail-ecommerce',
    desc: 'Custom e-commerce platforms, inventory tools, & digital storefronts.',
    icon: FiShoppingBag,
  },
  {
    name: 'Finance',
    path: '/industries/finance',
    desc: 'Custom CRM platforms, financial data security, & workflow automation.',
    icon: FiDollarSign,
  },
  {
    name: 'Education',
    path: '/industries/education',
    desc: 'Student enrolment, course management, & interactive learning tools.',
    icon: FiBookOpen,
  },
  {
    name: 'Startups',
    path: '/industries/startups',
    desc: 'MVP development, scalable backend architectures, & product builds.',
    icon: FiZap,
  },
];

const solutionsSubmenus = [
  {
    name: 'Platform Development',
    path: '/solutions/platform-development',
    desc: 'Custom scalable digital platforms built for operational excellence.',
    icon: FiLayers,
  },
  {
    name: 'Legacy System Modernisation',
    path: '/solutions/legacy-system-modernisation',
    desc: 'Transform legacy applications into agile, cloud-ready systems.',
    icon: FiRefreshCw,
  },
  {
    name: 'AI & Intelligent Automation',
    path: '/solutions/ai-intelligent-automation',
    desc: 'Generative AI, automated workflows, and predictive analytics.',
    icon: FiCpu,
  },
  {
    name: 'E-commerce & Digital Experience',
    path: '/solutions/ecommerce-digital-experience',
    desc: 'Modern headless shopping platforms and digital customer journeys.',
    icon: FiShoppingBag,
  },
  {
    name: 'Mobile Applications',
    path: '/solutions/mobile-applications',
    desc: 'Native iOS & Android apps and cross-platform mobile solutions.',
    icon: FiSmartphone,
  },
  {
    name: 'System Integration & Security',
    path: '/solutions/system-integration-security',
    desc: 'Enterprise API integration, middleware, and zero-trust security.',
    icon: FiShield,
  },
];

const productsSubmenus = [
  {
    name: 'Vuecart',
    path: 'https://vuecart.heapvue.com/in-en',
    desc: 'High-speed headless e-commerce platform for modern brands.',
    icon: FiShoppingBag,
    isExternal: true,
  },
  {
    name: 'Heapsync',
    path: 'https://heapsync.heapvue.com/',
    desc: 'Unified customer relationship & pipeline management CRM.',
    icon: FiUsers,
    isExternal: true,
  },
  {
    name: 'Chatpress',
    path: 'https://chatpress.heapvue.com/',
    desc: 'RAG-powered conversational assistant for 24/7 lead qualification.',
    icon: FiCpu,
    isExternal: true,
  },
  {
    name: 'Apptuner',
    path: 'https://apptuner.dev/',
    desc: 'Mobile & web application optimization and performance analytics.',
    icon: FiZap,
    isExternal: true,
  },
  {
    name: 'Learnly',
    path: 'https://learnly.heapvue.com/',
    desc: 'Modern enterprise LMS for employee training & e-learning.',
    icon: FiBookOpen,
    isExternal: true,
  },
  {
    name: 'All Products Overview',
    path: '/products',
    desc: 'Explore all proprietary software platforms & pricing.',
    icon: FiLayers,
    isExternal: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const hoverTimeoutRef = useRef(null);

  // Scroll detection for navbar background on desktop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close offcanvas when route changes
  useEffect(() => {
    setIsOffcanvasOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOffcanvasOpen]);

  // Close offcanvas on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOffcanvasOpen) {
        setIsOffcanvasOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOffcanvasOpen]);

  const handleMouseEnter = (name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const navLinks = [
    {
      name: 'Consulting',
      path: '/consulting',
      hasDropdown: true,
      alignClass: 'dropdown-align-left',
      submenus: consultingSubmenus
    },
    {
      name: 'Industries',
      path: '/industries',
      hasDropdown: true,
      alignClass: 'dropdown-align-center',
      submenus: industriesSubmenus
    },
    {
      name: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      alignClass: 'dropdown-align-solutions',
      submenus: solutionsSubmenus
    },
    {
      name: 'Products',
      path: '/products',
      hasDropdown: true,
      alignClass: 'dropdown-align-products',
      submenus: productsSubmenus
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'About Us', path: '/about' },
  ];

  const isHome = pathname === '/';
  const headerClass = `site-header-wrapper fixed-top ${
    scrolled ? 'scrolled' : (isHome ? 'transparent-header' : 'white-header')
  }`;

  return (
    <>
      <header className={headerClass}>
        {/* 1. Top Announcement Bar */}
        <div className="announcement-banner">
          <Link href="/solutions" className="announcement-link">
            Power Modern Enterprises with Intelligent AI Workflows &amp; Cloud Architecture – Explore Solutions
          </Link>
        </div>

        {/* 2. Main Navigation Bar */}
        <nav className="navbar navbar-expand-lg w-100 site-navbar">
          <div className="container">
            {/* Brand Logo */}
            <Link href="/" className="navbar-brand d-flex align-items-center me-3 me-xl-4">
              <Image
                src="/images/Heapvue_Logo.png"
                alt="Heapvue Logo"
                width={181}
                height={43}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Mobile Offcanvas Toggle Button (triggers full-height drawer) */}
            <button
              className="navbar-toggler border-0 shadow-none p-1 d-lg-none"
              type="button"
              onClick={() => setIsOffcanvasOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <FiMenu size={28} className="text-dark" />
            </button>

            {/* Desktop Navigation Links and Right CTA (Visible on lg and up) */}
            <div className="d-none d-lg-flex flex-grow-1 align-items-center justify-content-between" id="navbarDesktop">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center nav-links-list">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path ||
                    (link.path === '/products' && (pathname === '/product' || pathname.startsWith('/products'))) ||
                    (link.path === '/consulting' && pathname.startsWith('/consulting')) ||
                    (link.path === '/industries' && pathname.startsWith('/industries')) ||
                    (link.path === '/solutions' && pathname.startsWith('/solutions')) ||
                    (link.path === '/about' && pathname === '/about-us');

                  if (link.hasDropdown) {
                    const isDropdownVisible = activeDropdown === link.name;

                    return (
                      <li
                        key={link.name}
                        className={`nav-item nav-item-dropdown-wrapper ${link.alignClass}`}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="d-flex align-items-center">
                          <Link
                            href={link.path}
                            onClick={() => setActiveDropdown(null)}
                            className={`nav-link site-nav-link d-flex align-items-center ${isActive ? 'active' : ''}`}
                          >
                            <span>{link.name}</span>
                            <span
                              className="dropdown-chevron-btn ms-1"
                              onClick={(e) => toggleDropdown(link.name, e)}
                              title={`Toggle ${link.name} menu`}
                            >
                              <FiChevronDown
                                size={13}
                                className="dropdown-chevron-icon"
                                style={{
                                  transform: isDropdownVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                                  transition: 'transform 0.2s ease'
                                }}
                              />
                            </span>
                          </Link>
                        </div>

                        {/* Desktop Dropdown Mega-Menu */}
                        {link.submenus && (
                          <div
                            className={`nav-dropdown-menu d-none d-lg-block ${isDropdownVisible ? 'show' : ''}`}
                            onMouseEnter={() => handleMouseEnter(link.name)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="nav-dropdown-grid">
                              {link.submenus.map((subItem) => {
                                const IconComponent = subItem.icon;
                                const isSubActive = pathname === subItem.path;

                                if (subItem.isExternal) {
                                  return (
                                    <a
                                      key={subItem.name}
                                      href={subItem.path}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setActiveDropdown(null)}
                                      className="nav-submenu-item"
                                    >
                                      <div className="submenu-icon-box">
                                        <IconComponent size={18} />
                                      </div>
                                      <div className="submenu-text-box">
                                        <span className="submenu-item-title">{subItem.name}</span>
                                        <span className="submenu-item-desc">{subItem.desc}</span>
                                      </div>
                                    </a>
                                  );
                                }

                                return (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.path}
                                    onClick={() => setActiveDropdown(null)}
                                    className={`nav-submenu-item ${isSubActive ? 'active' : ''}`}
                                  >
                                    <div className="submenu-icon-box">
                                      <IconComponent size={18} />
                                    </div>
                                    <div className="submenu-text-box">
                                      <span className="submenu-item-title">{subItem.name}</span>
                                      <span className="submenu-item-desc">{subItem.desc}</span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={link.name} className="nav-item">
                      <Link
                        href={link.path}
                        className={`nav-link site-nav-link ${isActive ? 'active' : ''}`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Right Side Actions: Contact Us & Book a Demo */}
              <div className="d-flex align-items-center gap-3 site-nav-actions">
                <Link
                  href="/contact"
                  className={`contact-link ${(pathname === '/contact' || pathname === '/contact-us') ? 'active' : ''}`}
                >
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="btn book-demo-btn"
                >
                  Book a demo <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 3. Offcanvas Mobile Drawer Backdrop */}
      <div
        className={`offcanvas-backdrop-custom ${isOffcanvasOpen ? 'show' : ''}`}
        onClick={() => setIsOffcanvasOpen(false)}
        aria-hidden="true"
      />

      {/* 4. Full-Height Offcanvas Mobile Drawer */}
      <aside
        className={`offcanvas-drawer ${isOffcanvasOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Offcanvas Header */}
        <div className="offcanvas-header-custom">
          <Link href="/" onClick={() => setIsOffcanvasOpen(false)} className="d-flex align-items-center">
            <Image
              src="/images/Heapvue_Logo.png"
              alt="Heapvue Logo"
              width={145}
              height={35}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <button
            type="button"
            className="offcanvas-close-btn"
            onClick={() => setIsOffcanvasOpen(false)}
            aria-label="Close navigation menu"
          >
            <FiX size={26} />
          </button>
        </div>

        {/* Offcanvas Body (Full Height, Smoothly Scrollable with all Menus Accessible) */}
        <div className="offcanvas-body-custom">
          <nav className="offcanvas-nav-list">
            {navLinks.map((link) => {
              const isActive = pathname === link.path ||
                (link.path === '/products' && (pathname === '/product' || pathname.startsWith('/products'))) ||
                (link.path === '/consulting' && pathname.startsWith('/consulting')) ||
                (link.path === '/industries' && pathname.startsWith('/industries')) ||
                (link.path === '/solutions' && pathname.startsWith('/solutions')) ||
                (link.path === '/about' && pathname === '/about-us');

              if (link.hasDropdown) {
                const isExpanded = mobileDropdownOpen === link.name;

                return (
                  <div key={link.name} className="offcanvas-nav-group">
                    <button
                      type="button"
                      className={`offcanvas-accordion-trigger ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => setMobileDropdownOpen(isExpanded ? null : link.name)}
                      aria-expanded={isExpanded}
                    >
                      <span className="offcanvas-trigger-text">{link.name}</span>
                      <FiChevronDown
                        size={17}
                        className={`offcanvas-accordion-chevron ${isExpanded ? 'rotated' : ''}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="offcanvas-submenu-list">
                        {/* Parent Page Overview Link */}
                        <Link
                          href={link.path}
                          onClick={() => setIsOffcanvasOpen(false)}
                          className="offcanvas-submenu-overview"
                        >
                          <span>Explore {link.name} Overview</span>
                          <FiArrowRight size={13} />
                        </Link>

                        {/* Submenu Items */}
                        {link.submenus.map((subItem) => {
                          const IconComponent = subItem.icon;
                          const isSubActive = pathname === subItem.path;

                          if (subItem.isExternal) {
                            return (
                              <a
                                key={subItem.name}
                                href={subItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOffcanvasOpen(false)}
                                className="offcanvas-sub-item"
                              >
                                <div className="offcanvas-sub-icon">
                                  <IconComponent size={16} />
                                </div>
                                <div className="offcanvas-sub-content">
                                  <div className="offcanvas-sub-title">
                                    {subItem.name}
                                    <FiExternalLink size={12} className="ms-1 text-muted" />
                                  </div>
                                  <div className="offcanvas-sub-desc">{subItem.desc}</div>
                                </div>
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={() => setIsOffcanvasOpen(false)}
                              className={`offcanvas-sub-item ${isSubActive ? 'active' : ''}`}
                            >
                              <div className="offcanvas-sub-icon">
                                <IconComponent size={16} />
                              </div>
                              <div className="offcanvas-sub-content">
                                <div className="offcanvas-sub-title">{subItem.name}</div>
                                <div className="offcanvas-sub-desc">{subItem.desc}</div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOffcanvasOpen(false)}
                  className={`offcanvas-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                  <FiChevronRight size={16} className="text-muted" />
                </Link>
              );
            })}

            {/* Contact Us direct link */}
            <Link
              href="/contact"
              onClick={() => setIsOffcanvasOpen(false)}
              className={`offcanvas-nav-link ${(pathname === '/contact' || pathname === '/contact-us') ? 'active' : ''}`}
            >
              <span>Contact Us</span>
              <FiChevronRight size={16} className="text-muted" />
            </Link>
          </nav>
        </div>

        {/* Offcanvas Footer (Fixed at bottom with exact square Book a Demo CTA) */}
        <div className="offcanvas-footer-custom">
          <Link
            href="/contact"
            onClick={() => setIsOffcanvasOpen(false)}
            className="offcanvas-demo-btn"
          >
            <span>Book a demo</span>
            <FiArrowRight size={15} />
          </Link>
          <div className="offcanvas-footer-info text-center">
            <a href="mailto:contact@heapvue.com" className="offcanvas-contact-email">
              contact@heapvue.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
