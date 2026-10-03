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
  FiZap
} from 'react-icons/fi';
import './Navbar.css';

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

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileDropdown = (name, e) => {
    e.preventDefault();
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  const navLinks = [
    { 
      name: 'Solutions', 
      path: '/solutions', 
      hasDropdown: true, 
      submenus: solutionsSubmenus 
    },
    { 
      name: 'Consulting', 
      path: '/consulting', 
      hasDropdown: true, 
      submenus: consultingSubmenus 
    },
    { 
      name: 'Industries', 
      path: '/industries', 
      hasDropdown: true, 
      submenus: industriesSubmenus 
    },
    { name: 'Product', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg w-100 bg-white py-2"
      style={{ 
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1000,
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Brand Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/images/Heapvue_Logo.png" 
            alt="Heapvue Logo" 
            width={181} 
            height={43}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={24} className="text-dark" /> : <FiMenu size={24} className="text-dark" />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto gap-1 gap-lg-2 align-items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || 
                               (link.path === '/products' && (pathname === '/product' || pathname === '/products')) ||
                               (link.path === '/about' && pathname === '/about-us') ||
                               (link.path === '/consulting' && pathname.startsWith('/consulting')) ||
                               (link.path === '/industries' && pathname.startsWith('/industries')) ||
                               (link.path === '/solutions' && pathname.startsWith('/solutions'));

              if (link.hasDropdown) {
                const isDropdownVisible = activeDropdown === link.name;
                const isMobileSubOpen = mobileDropdownOpen === link.name;

                return (
                  <li 
                    key={link.name} 
                    className="nav-item nav-item-dropdown-wrapper"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="d-flex align-items-center">
                      <Link
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="nav-link px-3 py-2 rounded-2 fw-medium d-flex align-items-center gap-1 shadow-none"
                        style={{ 
                          fontSize: '0.95rem',
                          color: isActive ? '#0555FF' : '#1e293b',
                          fontWeight: isActive ? '700' : '500',
                          textDecoration: isActive ? 'underline' : 'none',
                          textUnderlineOffset: '6px'
                        }}
                      >
                        {link.name}
                        {link.submenus ? (
                          <span 
                            className="d-lg-none ms-1 cursor-pointer"
                            onClick={(e) => toggleMobileDropdown(link.name, e)}
                          >
                            <FiChevronDown 
                              size={14} 
                              style={{ 
                                transform: isMobileSubOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease' 
                              }} 
                            />
                          </span>
                        ) : null}
                        <FiChevronDown 
                          size={14} 
                          className="d-none d-lg-inline-block"
                          style={{ 
                            transform: isDropdownVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease' 
                          }} 
                        />
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

                    {/* Mobile Accordion Submenu */}
                    {link.submenus && isMobileSubOpen && (
                      <div className="mobile-submenu-container d-lg-none">
                        {link.submenus.map((subItem) => {
                          const IconComponent = subItem.icon;
                          const isSubActive = pathname === subItem.path;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className={`mobile-submenu-item ${isSubActive ? 'active' : ''}`}
                            >
                              <IconComponent size={16} className="mobile-submenu-icon" />
                              <span>{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={link.name} className="nav-item">
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="nav-link px-3 py-2 rounded-2 fw-medium"
                    style={{ 
                      fontSize: '0.95rem',
                      color: isActive ? '#0555FF' : '#1e293b',
                      fontWeight: isActive ? '700' : '500',
                      textDecoration: isActive ? 'underline' : 'none',
                      textUnderlineOffset: '6px'
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact & Book Demo CTA */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3 mt-3 mt-lg-0">
            <Link 
              href="/contact" 
              className="text-decoration-none fw-medium"
              style={{ 
                fontSize: '0.95rem',
                color: (pathname === '/contact' || pathname === '/contact-us') ? '#0555FF' : '#1e293b',
                fontWeight: (pathname === '/contact' || pathname === '/contact-us') ? '700' : '500',
                textDecoration: (pathname === '/contact' || pathname === '/contact-us') ? 'underline' : 'none',
                textUnderlineOffset: '6px'
              }}
            >
              Contact Us
            </Link>
            <Link 
              href="/contact" 
              className="btn d-inline-flex align-items-center gap-2 text-white px-3 py-2"
              style={{ 
                backgroundColor: 'var(--btn-blue)', 
                borderRadius: '4px',
                fontSize: '0.95rem',
                fontWeight: '600',
                transition: 'background-color 0.2s'
              }}
            >
              Book a demo <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

