import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { contactConfig } from "../config/contact";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
            Get In Touch Instantly
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Contact AquaLux
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Reach our executive customer concierge for instant spot bookings, garage management inquiries, or corporate fleet rates.
          </p>
        </div>

        {/* Contact Cards: Phone Number, Email, WhatsApp */}
        <div className="contact-card-container">
          {/* Phone Number */}
          <a
            href={`tel:${contactConfig.phoneNumberRaw}`}
            className="contact-card group"
          >
            <div className="contact-icon-circle group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="contact-title">Phone Number</h3>
            <div className="contact-detail-text">{contactConfig.phoneNumberDisplay}</div>
            <p className="contact-sub-text">Direct Call Line &amp; Concierge</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contactConfig.email}`}
            className="contact-card group"
          >
            <div className="contact-icon-circle group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="contact-title">Email</h3>
            <div className="contact-detail-text">{contactConfig.email}</div>
            <p className="contact-sub-text">Inquiries &amp; Support Responses</p>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
              contactConfig.whatsappDefaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group border-blue-500/40"
          >
            <div className="contact-icon-circle group-hover:scale-110 transition-transform bg-blue-600">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="contact-title">WhatsApp Chat</h3>
            <div className="contact-detail-text">{contactConfig.whatsappDisplay}</div>
            <p className="contact-sub-text">Instant WhatsApp Concierge &amp; Booking</p>
          </a>
        </div>
      </div>
    </section>
  );
};
