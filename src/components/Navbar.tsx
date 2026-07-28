import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { contactConfig } from "../config/contact";
import { contentConfig } from "../config/content";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = contentConfig.navigation.map((nav) => nav.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar-sticky-container">
      {/* Top Bar Right: Phone Number & Email */}
      <div className="navbar-top-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-2">
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-6">
            <a
              href={`mailto:${contactConfig.email}`}
              className="navbar-top-contact-item"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs sm:text-sm">{contactConfig.email}</span>
            </a>
            <a
              href={`tel:${contactConfig.phoneNumberRaw}`}
              className="navbar-top-contact-item"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-xs sm:text-sm">{contactConfig.phoneNumberDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left (Large) */}
          <a href="#home" className="navbar-brand-logo">
            <img
              src="/logo/logo.svg"
              alt="AquaLux Parking Car Wash Logo"
              className="navbar-logo-img"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="navbar-brand-text">AQUALUX</div>
              <div className="navbar-brand-subtext">PARKING CAR WASH</div>
            </div>
          </a>

          {/* Desktop Navigation Below / Right */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="navbar-nav-list">
              {contentConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`navbar-nav-link ${
                      activeSection === item.href.substring(1) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#book-wash" className="navbar-cta-btn">
              Book a Wash
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn md:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-700 px-4 pt-4 pb-6 space-y-3">
          {contentConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-800"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#book-wash"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center mt-4 w-full navbar-cta-btn py-3"
          >
            Book a Wash
          </a>
        </div>
      )}
    </header>
  );
};
