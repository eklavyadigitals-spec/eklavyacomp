# Eklavya Computers — Static Website

A modern, fast-loading, mobile-optimized static website for **Eklavya Computers**, a computer training academy primarily teaching **MS-CIT** (Maharashtra State Certificate in Information Technology), **Tally / Accounting**, and **Programming Courses** (C, C++, Java, Advanced Java).

Built with semantic HTML5, modern CSS3 (custom properties, responsive grid, flexbox), and vanilla JavaScript. It requires zero backend, database, or heavy third-party framework dependencies, ensuring fast page loads, top Core Web Vitals, and effortless static hosting deployment.

---

## Table of Contents
1. [Core Features & Design Principles](#core-features--design-principles)
2. [Project Structure](#project-structure)
3. [Pre-Launch Business Configuration (`js/config.js`)](#pre-launch-business-configuration-jsconfigjs)
4. [Official Course Information & Verification](#official-course-information--verification)
5. [Local Development & Preview](#local-development--preview)
6. [Static Hosting & Deployment](#static-hosting--deployment)
7. [SEO, AIO, GEO, and AEO Foundations](#seo-aio-geo-and-aeo-foundations)
8. [Accessibility & Performance Standards](#accessibility--performance-standards)

---

## Core Features & Design Principles

- **Design System**: Light off-white canvas (`#F5F5F3` / `#FFFFFF`), deep charcoal typography (`#1F2933`), and vibrant orange CTA accents (`#EF6126`) with WhatsApp green (`#25D366`).
- **High-Conversion Inquiries**:
  - Direct `tel:` phone call links for immediate phone calls.
  - Direct WhatsApp links (`https://wa.me/...`) pre-configured with contextual enquiry messages for every course.
  - Mobile sticky bottom CTA bar offering 1-tap Call and WhatsApp actions.
- **Structured 8-Section Layout**:
  1. **Header**: Text wordmark logo, responsive navigation (Home, Courses, About, Contact), prominent "Enquire Now" CTA, and accessible mobile drawer.
  2. **Hero Section**: Headline *"Build Your Digital Skills. Shape Your Future."*, supporting value proposition, dual CTAs ("Enquire on WhatsApp", "Explore Courses"), and a clean vector tech education illustration.
  3. **Courses Section**:
     - **MS-CIT Featured Section**: Verified MKCL information, learning approach (ERA system + hands-on lab practice), 250+ digital skills, 125+ AI tools awareness, and direct enquiry CTA.
     - **Tally / Accounting Card**: Practical business accounting, vouchers, ledgers, inventory, and GST compliance.
     - **Programming Cards**: 4 distinct cards for **C Programming**, **C++ Programming**, **Java Programming**, and **Advanced Java**.
  4. **Why Choose Eklavya Computers**: Concise benefits focusing on individual computer practice, step-by-step guidance, and doubt resolution (without unverified stats or fake claims).
  5. **About Section**: Introduction to the academy's focus, student categories, and supportive local learning environment.
  6. **FAQ Section**: Compact, accessible accordion answering the 5 primary course, fee, and admission questions.
  7. **Contact Section**: Phone number, WhatsApp button, address placeholder, Google Maps embed, and business hours.
  8. **Footer**: Navigation links, full courses list, contact info, and copyright notice.

---

## Project Structure

```
eklavya-computers/
├── index.html               # Main homepage containing the complete 8-section experience
├── mscit.html               # Dedicated detailed page for MS-CIT course syllabus
├── tally.html               # Dedicated detailed page for Tally & accounting skills
├── coding.html              # Dedicated detailed page for Programming languages
├── robots.txt               # Search engine crawl directives & sitemap location
├── sitemap.xml              # XML Sitemap with page URLs, priority, and lastmod
├── server.js                # Lightweight Node.js static HTTP preview server
├── README.md                # Project documentation and deployment guide
├── css/
│   └── styles.css           # Complete responsive stylesheet & design system
├── js/
│   ├── config.js            # Centralized business config (phone, WhatsApp, address, messages)
│   └── main.js              # DOM bindings, mobile drawer toggle, FAQ accordion, scroll header
└── assets/
    └── images/
        ├── hero-tech-education.svg    # Hero workstation & coding illustration
        ├── lab-environment.svg        # Modern computer lab graphic
        ├── classroom-learning.svg     # Interactive classroom graphic
        └── practical-training.svg     # Practical training graphic
```

---

## Pre-Launch Business Configuration (`js/config.js`)

All institute-specific details (phone number, WhatsApp number, physical address, business hours, and prefilled messages) are isolated in `js/config.js`.

**Before going live, update the following fields in `js/config.js`:**

```javascript
const EKLAVYA_CONFIG = {
  INSTITUTE_NAME: "Eklavya Computers",
  TAGLINE: "Build Your Digital Skills. Shape Your Future.",

  // 1. Phone Numbers:
  PHONE_DISPLAY: "+91 98901 17281",       // Display format shown to visitors
  PHONE_TEL: "+919890117281",             // tel: URI format (no spaces or hyphens)

  // 2. WhatsApp Numbers:
  WHATSAPP_NUMBER: "+91 98901 17281",     // Display format
  WHATSAPP_RAW: "919890117281",           // Digits only with country code for wa.me link

  // 3. Physical Address:
  ADDRESS_DISPLAY: "63, Deshmukh Nagar, Shivaji Nagar Road, Garkheda Parisar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005",
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/Bx7hT397SziSuRh26",
  GOOGLE_MAPS_EMBED_URL: "https://maps.google.com/maps?q=Eklavya+Computers+Garkheda+Parisar+Aurangabad&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // 4. Business Hours:
  BUSINESS_HOURS: "Monday – Saturday: 8:00 AM – 8:00 PM (Batch timings on request)",

  // 5. Pre-configured WhatsApp Messages (Optional adjustments):
  WHATSAPP_MESSAGES: {
    default: "Hello, I would like to know more about the courses at Eklavya Computers.",
    mscit: "Hello, I would like to enquire about the MS-CIT course at Eklavya Computers.",
    tally: "Hello, I would like to enquire about the Tally / Accounting course at Eklavya Computers.",
    c_prog: "Hello, I would like to enquire about the C Programming course at Eklavya Computers.",
    cpp_prog: "Hello, I would like to enquire about the C++ Programming course at Eklavya Computers.",
    java_prog: "Hello, I would like to enquire about the Java Programming course at Eklavya Computers.",
    adv_java: "Hello, I would like to enquire about the Advanced Java course at Eklavya Computers.",
    fees: "Hello, I would like to enquire about the course fees at Eklavya Computers.",
    batches: "Hello, I would like to know about upcoming batches and admission at Eklavya Computers."
  }
};
```

---

## Official Course Information & Verification

### 1. MS-CIT (Official References: https://mscit.mkcl.org/)
- Initiated by **MKCL (Maharashtra Knowledge Corporation Limited)** in 2001.
- Joint Certification by **MSBTE (Maharashtra State Board of Technical Education)** and **MKCL**.
- Mandatory qualification recognized by the Government of Maharashtra for various state service recruitment processes.
- Learning Model: Self-paced e-learning via the MKCL **ERA** (eLearning Revolution for All) system combined with hands-on lab sessions on individual PCs.
- Covers 250+ digital skills and 125+ AI tools awareness (ChatGPT, Google Gemini, Copilot, prompt engineering basics for everyday productivity and study).
- Mediums: Marathi, Hindi, and English.

### 2. Tally / Accounting
- Focuses on practical business accounting, company setup, ledger management, voucher entry (Sales, Purchase, Payment, Receipt), inventory management, and GST workflow fundamentals.
- Factual and practical representation without unsupported syllabus claims.

### 3. Programming Languages
- **C Programming**: Structured procedural programming, control structures, loops, functions, pointers, arrays, and memory fundamentals.
- **C++ Programming**: Object-oriented programming (OOP), classes, objects, inheritance, polymorphism, encapsulation, and operator overloading.
- **Java Programming**: Core Java, OOP design, JVM mechanics, exception handling, collections framework, and multi-threading.
- **Advanced Java**: Server-side and enterprise concepts, JDBC database connectivity, Servlets, and JSP fundamentals.

---

## Local Development & Preview

This project requires only a static file server or standard web browser. A lightweight Node.js server is included:

```bash
# 1. Open the project folder
cd eklavya-computers

# 2. Run the preview server
node server.js

# 3. Open your browser
# Visit http://localhost:3000
```

Alternatively, you can use any static server such as Python's HTTP server:
```bash
python -m http.server 3000
```
Or use the VS Code Live Server extension.

---

## Static Hosting & Deployment

The website consists purely of static HTML, CSS, JavaScript, and SVG assets. It can be deployed in seconds to any static hosting platform:

### A. Vercel
1. Run `npx vercel` in the project root, or connect your Git repository in the Vercel dashboard.
2. Select default settings (Framework preset: `Other`).
3. Deploy!

### B. Netlify
1. Drag and drop the `eklavya-computers` folder directly into the Netlify Drop dashboard, or connect via Git.
2. Build command: None (leave blank).
3. Publish directory: `.`

### C. GitHub Pages
1. Push the code to a GitHub repository.
2. Navigate to **Settings > Pages**.
3. Under **Branch**, select `main` / `root` and click **Save**.

### D. Cloudflare Pages
1. Connect your repository to Cloudflare Pages.
2. Build command: None.
3. Build output directory: `/`

---

## SEO, AIO, GEO, and AEO Foundations

1. **Technical SEO**:
   - Unique title tag (50–60 characters) and meta description (150–160 characters).
   - Canonical URL tags on every page.
   - Clean URLs and hierarchical heading structure with exactly one `<h1>`.
   - Optimized SVG vector graphics with explicit `width`, `height`, and `alt` tags.
   - Configured `robots.txt` and `sitemap.xml`.
2. **Local SEO & Schema Markup**:
   - `EducationalOrganization` and `LocalBusiness` JSON-LD structured data.
   - `WebSite` JSON-LD structured data.
   - `FAQPage` JSON-LD structured data formatted for search engines.
   - Consistent institute name and contact placeholders throughout.
3. **AIO & AEO (Artificial Intelligence & Answer Engine Optimization)**:
   - Clear, self-contained definitions of courses and learning methodologies.
   - Distinct, structured course cards with explicit learning outcomes.
   - Verifiable answers to the 5 core student questions.

---

## Accessibility & Performance Standards

- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **ARIA & Keyboard Navigation**: Full keyboard tab accessibility, `aria-expanded` attributes on accordions and mobile drawers, and `Escape` key close handlers.
- **Contrast**: WCAG AA compliant contrast ratios between text and surfaces.
- **Mobile-First Layout**: Fluid layouts, responsive grids, touch-friendly tap targets (&ge;44px), and sticky mobile CTA bar with safe-area spacing.
