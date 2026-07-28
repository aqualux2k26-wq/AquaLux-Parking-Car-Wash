# System Design & Software Architecture

## Architecture Principles

AquaLux Parking Car Wash is designed following clean, modular, and enterprise-grade frontend architecture.

### 1. One Point Change Configuration Pattern (`src/config/`)

To prevent duplicate code, scattered constants, and maintenance overhead, all dynamic data is driven by central TypeScript configuration modules:

- `site.ts`: Domain (`aqualuxparkingcarwash.com`), title, tagline, copyright notices.
- `theme.ts`: Strictly defined Blue & Silver color values, typography, border radius variables.
- `contact.ts`: Centralized phone numbers, email addresses, WhatsApp raw numbers, and garage locations.
- `content.ts`: Navigation arrays, Hero text, About statistical pillars, Services list, Why Us key points.
- `seo.ts`: Structured schema JSON-LD, OpenGraph defaults, Twitter Card meta definitions.

### 2. Modularity & CSS Separation

In strict adherence to styling constraints:
- Zero CSS inside components.
- Dedicated, section-specific CSS stylesheets inside `src/styles/`:
  - `navbar.css`
  - `home.css`
  - `about.css`
  - `services.css`
  - `why-us.css`
  - `contact.css`
  - `book-wash.css`
  - `footer.css`
  - `globals.css` (central import aggregator)

### 3. Serverless WhatsApp Direct Integration

For maximum conversion speed and zero backend maintenance costs, booking forms serialize user inputs into WhatsApp API URIs (`https://wa.me/18005552782?text=...`). This eliminates backend server dependencies, database latency, and security liabilities.

### 4. Touch & Pointer Drag State Engine

The `FloatingActionButtons` component uses high-performance Pointer Events (`onPointerDown`, `pointermove`, `pointerup`) to deliver smooth drag capabilities across desktop mice and mobile touchscreens without external heavy drag libraries.
