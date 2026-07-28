import React from "react";
import { Sparkles, Shield, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";
import { contentConfig } from "../config/content";
import { contactConfig } from "../config/contact";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

export const HomeSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Large Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="hero-badge">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Premium On-Site Detailing in Parking Garages</span>
            </div>
            <h1 className="hero-title">
              {contentConfig.hero.title}
            </h1>
            <p className="hero-subtitle">
              {contentConfig.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a href="#book-wash" className="btn-primary-blue text-lg">
                <span>{contentConfig.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-silver-outline text-lg">
                <span>{contentConfig.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/60">
              <div>
                <div className="text-2xl font-bold text-white font-serif">100%</div>
                <div className="text-xs text-slate-400 font-medium">Scratch-Free Wash</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sky-400 font-serif">50k+ L</div>
                <div className="text-xs text-slate-400 font-medium">Water Conserved</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl font-bold text-white font-serif">5.0 ★</div>
                <div className="text-xs text-slate-400 font-medium">Executive Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="hero-image-frame">
              <img
                src="/images/hero.svg"
                alt="AquaLux Executive Car Detailing in Parking Structure"
                className="w-full h-auto rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Highlight Section: One Large Before & After Car Wash Image Slider */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
              Transforming Vehicles While You Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Before &amp; After AquaLux Treatment
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              See the immediate difference as dusty parking garage vehicles are restored to mirror-like showroom perfection.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>

        {/* Feature Focus: Waterless Car Wash */}
        <div className="mt-24">
          <div className="waterless-feature-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="waterless-badge-icon">
                  <Droplets className="w-7 h-7 text-sky-300" />
                </div>
                <div className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-2">
                  {contentConfig.waterlessHighlight.tagline}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-4">
                  {contentConfig.waterlessHighlight.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {contentConfig.waterlessHighlight.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {contentConfig.waterlessHighlight.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-600 shadow-2xl">
                  <img
                    src="/images/waterless.svg"
                    alt="Eco Waterless Car Wash Technology"
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
