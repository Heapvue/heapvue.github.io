'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Consulting', path: '/consulting', hasDropdown: true },
    { name: 'Industries', path: '/industries', hasDropdown: true },
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
        zIndex: 1000
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
                return (
                  <li key={link.name} className="nav-item">
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
                      {link.name} <FiChevronDown size={14} />
                    </Link>
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
