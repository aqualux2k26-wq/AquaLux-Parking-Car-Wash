import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { contactConfig } from "../config/contact";

export const BookWashSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp Message
    const message = `*AQUALUX PARKING CAR WASH - NEW BOOKING REQUEST*
---------------------------------------
*Name:* ${formData.name}
*Phone Number:* ${formData.phoneNumber}
*Address / Garage Location:* ${formData.address}
*Comments:* ${formData.comments || "None"}
---------------------------------------
Please confirm my wash booking session!`;

    const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp URL directly with prefilled customer details
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book-wash" className="book-wash-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
            Fast On-Site Reservation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Book a Wash
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Submit your details below. Clicking submit will directly launch WhatsApp with your pre-formatted booking details.
          </p>
        </div>

        {/* Book a Wash Form */}
        <div className="book-wash-form-card">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Field 1: Name */}
              <div className="book-wash-field-group md:col-span-1">
                <label htmlFor="name" className="book-wash-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alexander Wright"
                  value={formData.name}
                  onChange={handleChange}
                  className="book-wash-input"
                />
              </div>

              {/* Field 2: Phone Number */}
              <div className="book-wash-field-group md:col-span-1">
                <label htmlFor="phoneNumber" className="book-wash-label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  placeholder="e.g. +1 (555) 234-5678"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="book-wash-input"
                />
              </div>

              {/* Field 3: Address / Garage Location */}
              <div className="book-wash-field-group md:col-span-2">
                <label htmlFor="address" className="book-wash-label">
                  Address / Garage Location *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="e.g. Financial Tower Garage, Level P2, 100 Main St"
                  value={formData.address}
                  onChange={handleChange}
                  className="book-wash-input"
                />
              </div>

              {/* Field 4: Comments */}
              <div className="book-wash-field-group md:col-span-2">
                <label htmlFor="comments" className="book-wash-label">
                  Comments / Special Instructions
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={3}
                  placeholder="e.g. Any special preferences or instructions for our team..."
                  value={formData.comments}
                  onChange={handleChange}
                  className="book-wash-textarea"
                />
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="book-wash-submit-btn">
                <Send className="w-5 h-5 text-white" />
                <span>Submit &amp; Open WhatsApp Booking</span>
              </button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sky-400" />
              <span>Instant response via WhatsApp. No credit card or registration required.</span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
