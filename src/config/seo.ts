import { siteConfig } from "./site";
import { contactConfig } from "./contact";

export const seoConfig = {
  title: `${siteConfig.name} | Premium On-Site Parking Car Wash & Valet`,
  description: `${siteConfig.description} Book via WhatsApp or call ${contactConfig.phoneNumberDisplay}.`,
  canonicalUrl: siteConfig.baseUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Executive Waterless Car Wash in Parking Garages`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.baseUrl}/images/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "AquaLux Executive Car Detailing in Parking Garage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Executive Car Wash`,
    description: siteConfig.description,
    image: `${siteConfig.baseUrl}/images/hero.jpg`,
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "name": siteConfig.name,
    "image": `${siteConfig.baseUrl}/logo/logo.svg`,
    "@id": siteConfig.baseUrl,
    "url": siteConfig.baseUrl,
    "telephone": contactConfig.phoneNumberRaw,
    "priceRange": "$$",
    "sameAs": [
      `https://wa.me/${contactConfig.whatsappNumber}`
    ],
    "description": siteConfig.description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Parking Car Wash Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Waterless Parking Car Wash"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Parking Management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Wash Stations Installation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Valet Parking with Car Wash"
          }
        }
      ]
    }
  },
};
