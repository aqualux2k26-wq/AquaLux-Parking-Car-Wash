import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { contactConfig } from "../config/contact";
import { contentConfig } from "../config/content";
import { siteConfig } from "../config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-grid">
          {/* Column 1: Brand & Logo */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4 text-decoration-none">
              <img
                src="/logo/logo.png"
                alt="AquaLux Parking Car Wash Logo"
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="footer-brand-title">AQUALUX</div>
                <div className="text-xs tracking-widest text-slate-400 font-semibold uppercase">
                  PARKING CAR WASH
                </div>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 font-serif">Quick Navigation</h3>
            <ul className="footer-nav-list">
              {contentConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="footer-nav-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 font-serif">Direct Contact</h3>
            <a href={`tel:${contactConfig.phoneNumberRaw}`} className="footer-contact-item">
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{contactConfig.phoneNumberDisplay}</span>
            </a>
            <a href={`mailto:${contactConfig.email}`} className="footer-contact-item">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>{contactConfig.email}</span>
            </a>
            <a
              href={`https://wa.me/${contactConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>WhatsApp: {contactConfig.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright Only */}
        <div className="footer-bottom-bar">
          <div>{siteConfig.copyright}</div>
          <div className="text-slate-500 font-medium">{siteConfig.domain}</div>
        </div>
      </div>
    </footer>
  );
};
