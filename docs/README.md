# AquaLux Parking Car Wash

Official web portal for **aqualluxparkingcarwash.com** — The premier, eco-friendly waterless car wash and valet management platform for executive parking structures.

## Overview

AquaLux Parking Car Wash delivers high-end, 100% scratch-free vehicle detailing and parking management services directly in parking garages while vehicle owners work, shop, or travel.

## Key Features

- **Executive Blue & Silver Palette**: A luxury aesthetic designed specifically for high-end automotive brands.
- **Single-Point Configuration (`src/config/`)**: All business logic, contact info, phone numbers, WhatsApp numbers, content, theme colors, and SEO tags are centrally edited from config files.
- **Interactive Before & After Slider**: High-resolution image comparison widget allowing users to slide and compare dust-laden vs. mirror-shiny vehicles.
- **WhatsApp Direct Booking**: Frictionless booking form that formats customer details (Name, Phone Number, Address, Parking Spot, Service requested) and directly launches WhatsApp.
- **Draggable Floating Action Buttons**: Official WhatsApp and Call floating action controls visible on every section.
- **100% Mobile Responsive & Performance Engineered**: Sub-second fast loading with optimized SVG assets and zero heavy third-party bloat.

## Directory Structure

```text
aqualuxparkingcarwash.com/
├── public/
│   ├── images/          # Image & illustration assets
│   ├── logo/            # Vector logo assets
│   ├── favicon.svg      # SVG Favicon
│   ├── manifest.json    # PWA & web manifest
│   ├── robots.txt       # Search engine crawler directives
│   └── sitemap.xml      # XML Sitemap for search indexing
├── src/
│   ├── app/             # App layout & main page containers
│   ├── components/      # Reusable UI components (Navbar, Footer, BeforeAfterSlider, FloatingActionButtons)
│   ├── config/          # One-point configuration files (site.ts, theme.ts, contact.ts, content.ts, seo.ts)
│   ├── sections/        # Page sections (Home, About, Services, Why Us, Contact, Book Wash)
│   ├── styles/          # Section-specific CSS files
│   ├── App.tsx          # Main React Application
│   └── main.tsx         # React entry point
└── docs/                # Enterprise documentation (SYSTEM_DESIGN.md, SEO.md, DEPLOYMENT.md)
```

## Quick Start Development

```bash
# Install dependencies
npm install

# Start development server on port 3000
npm run dev

# Build for production
npm run build
```
