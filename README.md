# 🏥 Dr. Mohamed Ahmed Sharaf El-deen — Orthopedic Surgeon Clinic Website

> **Live Demo:** [https://mohamedsharaf.netlify.app/](https://mohamedsharaf.netlify.app/)

A modern, fully bilingual single-page application for an orthopedic surgery clinic, built with React and Vite. The site defaults to Arabic with full RTL layout support and switches seamlessly to English LTR.

---

## ✨ Features

- **Bilingual** — Arabic (RTL, default) and English (LTR) with a one-click language switcher
- **Fully responsive** — mobile-first design across mobile, tablet, and desktop
- **WhatsApp integration** — contact form delivers directly to the clinic's WhatsApp, no backend required
- **Smooth UX** — sticky frosted-glass navbar, smooth section scrolling, hover animations, and fade-in transitions
- **Custom design system** — built entirely with CSS variables, no Tailwind or UI frameworks
- **Accessible** — semantic HTML, sufficient color contrast, keyboard-navigable

---

## 🖥️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Doctor name, title, value proposition, CTA buttons, key stats |
| 2 | **About** | Professional bio, certifications, affiliated hospitals |
| 3 | **Services** | Six service cards — knee surgery, sports injuries, spine, fractures, hip, general orthopedics |
| 4 | **Testimonials** | Patient testimonial cards with star ratings |
| 5 | **Health Tips** | Educational article cards for injury prevention and recovery |
| 6 | **Clinic Info** | Address, phone, WhatsApp number, working hours, and map |
| 7 | **CTA Banner** | Full-width appointment booking call-to-action |
| 8 | **Contact** | Validated form that opens WhatsApp with the patient's message pre-filled |
| 9 | **Footer** | Quick navigation links, contact details, and social media icons |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool & development server |
| [lucide-react](https://lucide.dev) | SVG icon library |
| [Google Fonts](https://fonts.google.com) — Cairo & DM Sans | Arabic and English typography |
| Vanilla CSS with CSS Variables | Custom design system |

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#0A2540` | Headings, navbar, footer background |
| `--accent` | `#00AEEF` | Buttons, icons, active states |
| `--bg` | `#F8FAFC` | Page background |
| `--radius-md` | `14px` | Cards, inputs, buttons |
| `--radius-lg` | `20px` | Section containers |
| `--shadow-md` | `0 8px 24px rgba(10,37,64,0.10)` | Card elevation |

---

## 📁 Project Structure

```
ortho-clinic/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── doctor.jpg
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── Hero.jsx + Hero.css
│   │   ├── About.jsx + About.css
│   │   ├── Services.jsx + Services.css
│   │   ├── Testimonials.jsx + Testimonials.css
│   │   ├── Blog.jsx + Blog.css
│   │   ├── ClinicInfo.jsx + ClinicInfo.css
│   │   ├── CtaBanner.jsx + CtaBanner.css
│   │   ├── Contact.jsx + Contact.css
│   │   └── Footer.jsx + Footer.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── translations.js
├── index.html
├── vite.config.js
└── package.json
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1024px` | Desktop — full navigation, multi-column grids |
| `768px – 1024px` | Tablet — hamburger menu, 2-column grids |
| `< 768px` | Mobile — single column, stacked CTAs |
| `< 480px` | Small mobile — compact spacing, full-width buttons |

---

## 📄 License

© 2026 Dr. Mohamed Ahmed Sharaf El-deen. All rights reserved. This codebase is proprietary and was built exclusively for this client. Redistribution or reuse without written permission is not permitted.