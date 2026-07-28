import React from "react";
import { Car, Building2, Wrench, Key, CheckCircle } from "lucide-react";
import { contentConfig } from "../config/content";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "parking-wash":
        return <Car className="w-6 h-6 text-white" />;
      case "parking-management":
        return <Building2 className="w-6 h-6 text-white" />;
      case "car-wash-stations":
        return <Wrench className="w-6 h-6 text-white" />;
      case "valet-parking":
        return <Key className="w-6 h-6 text-white" />;
      default:
        return <Car className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">
            Tailored On-Site Automotive Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Our Premium Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Designed specifically for executive office garages, residential parking hubs, and valet centers.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="service-card-grid">
          {contentConfig.services.map((service) => (
            <div key={service.id} className="service-card">
              <div>
                <div className="service-icon-box">{getServiceIcon(service.id)}</div>
                <h3 className="service-title">{service.title}</h3>
                <div className="service-subtitle">{service.subtitle}</div>
                <p className="service-desc">{service.description}</p>

                <ul className="service-feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#book-wash"
                className="btn-silver-outline w-full text-center text-sm font-bold py-2.5 mt-2"
              >
                Book {service.title}
              </a>
            </div>
          ))}
        </div>

        {/* Large Before & After Comparison Widget */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Visual Transformation Showcase
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Slide to compare dust-laden parking grime vs. AquaLux mirror-reflectivity.
            </p>
          </div>

          <BeforeAfterSlider />
        </div>
      </div>
    </section>
  );
};
