import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { contactConfig } from "../config/contact";
import { contentConfig } from "../config/content";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = contentConfig.navigation.map((nav) =>
        nav.href.substring(1)
      );

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
      {/* ===================== Top Bar ===================== */}
      <div className="navbar-top-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6">
            <a
              href={`mailto:${contactConfig.email}`}
              className="navbar-top-contact-item"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{contactConfig.email}</span>
            </a>

            <a
              href={`tel:${contactConfig.phoneNumberRaw}`}
              className="navbar-top-contact-item"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span className="font-semibold">
                {contactConfig.phoneNumberDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ===================== Main Navbar ===================== */}
      <div className="navbar-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* ===================== Logo ===================== */}
          <a href="#home" className="navbar-brand-logo">
            <div className="navbar-logo-wrapper">
              <img
                src="/logo/logo.png"
                alt="AQUALUX Parking Car Wash"
                className="navbar-logo-img"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="navbar-brand-content">
              <div className="navbar-brand-text">AQUALUX</div>

              <div className="navbar-brand-subtext">
                PARKING CAR WASH
              </div>
            </div>
          </a>

          {/* ===================== Desktop Menu ===================== */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="navbar-nav-list">
              {contentConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`navbar-nav-link ${
                      activeSection === item.href.substring(1)
                        ? "active"
                        : ""
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

          {/* ===================== Mobile Menu Button ===================== */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn md:hidden"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ===================== Mobile Drawer ===================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-700 px-5 py-5 space-y-3">
          {contentConfig.navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-semibold text-slate-200 transition-all duration-300 hover:bg-slate-800 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#book-wash"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center navbar-cta-btn mt-5 py-3"
          >
            Book a Wash
          </a>
        </div>
      )}
    </header>
  );
};