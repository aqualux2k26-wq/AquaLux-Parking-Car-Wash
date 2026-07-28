import React from "react";
import { Clock, ThumbsUp, DollarSign, Shield, CalendarCheck, Award, Leaf } from "lucide-react";
import { contentConfig } from "../config/content";

export const WhyUsSection: React.FC = () => {
  const getWhyUsIcon = (title: string) => {
    switch (title) {
      case "Time Saving":
        return <Clock className="w-6 h-6 text-sky-400" />;
      case "Convenience":
        return <ThumbsUp className="w-6 h-6 text-sky-400" />;
      case "Affordable":
        return <DollarSign className="w-6 h-6 text-sky-400" />;
      case "Safe":
        return <Shield className="w-6 h-6 text-sky-400" />;
      case "Flexible":
        return <CalendarCheck className="w-6 h-6 text-sky-400" />;
      case "Trustworthy":
        return <Award className="w-6 h-6 text-sky-400" />;
      case "Eco Friendly":
        return <Leaf className="w-6 h-6 text-sky-400" />;
      default:
        return <Shield className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="why-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
            Why Executive Car Owners Choose AquaLux
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Why Us
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Uncompromising quality, ecological sustainability, and total peace of mind for high-value vehicles.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="why-us-grid">
          {contentConfig.whyUs.map((item, idx) => (
            <div key={idx} className="why-us-card">
              <div className="why-us-icon-wrapper">{getWhyUsIcon(item.title)}</div>
              <div>
                <h3 className="why-us-item-title">{item.title}</h3>
                <p className="why-us-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
