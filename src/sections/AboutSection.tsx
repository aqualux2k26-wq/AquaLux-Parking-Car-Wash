import React from "react";
import { ShieldCheck, Droplets, Leaf, Star } from "lucide-react";
import { contentConfig } from "../config/content";

export const AboutSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "scratch-free":
        return <ShieldCheck className="w-8 h-8 text-sky-400" />;
      case "water-saved":
        return <Droplets className="w-8 h-8 text-sky-400" />;
      case "eco-friendly":
        return <Leaf className="w-8 h-8 text-sky-400" />;
      case "ratings":
        return <Star className="w-8 h-8 text-sky-400 fill-sky-400" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="about-header-tag">Executive On-Site Detailing Standards</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            {contentConfig.about.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            {contentConfig.about.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid: 100% Scratch Free, Water Saved, Eco Friendly, 5 Star Ratings */}
        <div className="about-stat-grid">
          {contentConfig.about.stats.map((stat) => (
            <div key={stat.id} className="about-stat-card">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center">
                  {getIcon(stat.id)}
                </div>
              </div>
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
              <p className="about-stat-desc">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
