# Lakshya Kumar — Portfolio

Personal developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Designed around a technical drafting/blueprint aesthetic, featuring custom motion interactions, accessibility-first reduced-motion fallbacks, and a dark-mode-first theme.

---

## ⚡ Tech Stack & Architecture

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Typography**: Space Grotesk (UI / Headings) + IBM Plex Mono (Labels, Metadata, Code)
- **Animation**: Motion (`motion/react`) with spring physics and OS-level `prefers-reduced-motion` compliance
- **Theme**: `next-themes` (Dark mode default, persisted via localStorage)

---

## 🧭 Featured Projects Showcased

1. **credBase** (`In Development` — Featured)
   - AI-powered platform helping students cut through the confusion of courses, certifications, and career paths.
   - *Stack*: FastAPI, SQLite, Vanilla JS, Render
   - *Live*: [credbase.vercel.app](https://credbase.vercel.app)
2. **Campus Compass**
   - Campus navigation and routing platform combining interactive maps, locations, and campus information.
   - *Stack*: Python, Flask, SQLite, Folium, Leaflet
   - *Live*: [campus-compass-1-0tbt.onrender.com](https://campus-compass-1-0tbt.onrender.com)
3. **Formula One Lap Time Predictor**
   - Machine learning project exploring factors that shape lap time through regression and feature engineering.
   - *Stack*: Python, Pandas, NumPy, Scikit-learn

---

## 🎨 Design System & Palette

The visual language is inspired by architectural blueprints and technical drafting tables. Variables are defined in [`src/app/globals.css`](src/app/globals.css):

| Token | Dark (Default) | Light | Description |
|---|---|---|---|
| `--bg` | `#0c0c0a` | `#f0f0ed` | Page background with subtle grid overlay |
| `--panel` | `#131311` | `#fafaf8` | Card and container surface background |
| `--surface` | `rgba(232, 232, 226, 0.04)` | `rgba(14, 14, 12, 0.04)` | Subtle chip and badge fill |
| `--ink` | `#e8e8e2` | `#0e0e0c` | Primary text |
| `--muted` | `#888880` | `#6b6b63` | Secondary metadata and supporting copy |
| `--accent` | `#e8a03a` | `#b05c0a` | Warm amber highlight for status and active states |
| `--hair` | `rgba(232, 232, 226, 0.08)` | `rgba(14, 14, 12, 0.10)` | Hairline dividers and borders |

---

## 🕹️ Interaction & Motion System

- **Context-Aware Custom Cursor** ([`custom-cursor.tsx`](src/components/ui/custom-cursor.tsx)): Automatically detects pointer targets (links, buttons, inputs) and transitions smoothly between pill, square, and caret states. Disabled automatically on touchscreens.
- **Magnetic Pull** ([`magnetic.tsx`](src/components/ui/magnetic.tsx)): Adds subtle physical cursor magnetism to buttons, nav items, and social links.
- **Pulsing Status Indicators**: Radar ping on active live projects and sidebar availability badges.
- **Scroll Spy**: Sidebar nav tracks reading position across sections with animated rule indicators.
- **Reduced Motion Support**: When `prefers-reduced-motion` is active at the OS level, heavy transitions and loops bypass gracefully to clean static states.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout: fonts, metadata, providers
│   ├── page.tsx           # Main single-page grid layout (Sidebar + Main)
│   └── globals.css        # CSS variables, drafting grid, animations
├── components/
│   ├── providers.tsx      # ThemeProvider (Dark default), Motion & Cursor providers
│   ├── theme-toggle.tsx   # Dark / Light mode switcher with magnetic hover
│   ├── sections/
│   │   ├── sidebar.tsx    # Left sticky identity bar, navigation spy, social links
│   │   ├── log-line.tsx   # Hero section: Headline, typewriter subline, CTAs
│   │   ├── stack.tsx      # 01 — What I work with (Technical toolkit)
│   │   ├── work.tsx       # 02 — Selected work (Featured + Secondary projects)
│   │   ├── approach.tsx   # 03 — How I work (Engineering principles)
│   │   └── contact.tsx    # 04 — Get in touch (Availability status, direct channels)
│   └── ui/
│       ├── custom-cursor.tsx      # Dynamic cursor overlay
│       ├── magnetic.tsx           # Spring-physics magnetic hover wrapper
│       ├── motion-preferences.tsx # Reduced-motion context
│       ├── reveal.tsx             # Viewport scroll-reveal component
│       ├── scroll-progress.tsx    # Top reading progress indicator
│       └── section-head.tsx       # Numbered section header with hairline rule
└── lib/
    ├── motion-system.ts       # Spring transition tokens
    └── use-active-section.ts  # Intersection observer hook for section tracking
```

---

## 📝 Content Maintenance Cheat Sheet

All site copy is centralized and modular:

| What to Update | File Location | Key Variable / Location |
|---|---|---|
| **Identity & Socials** | [`src/components/sections/sidebar.tsx`](src/components/sections/sidebar.tsx) | Name, tagline, `CONTACT` array |
| **Hero Headline & CTAs** | [`src/components/sections/log-line.tsx`](src/components/sections/log-line.tsx) | Headline, `LINES` typewriter array |
| **Toolkit / Skills** | [`src/components/sections/stack.tsx`](src/components/sections/stack.tsx) | `STACK` array (tools & chips) |
| **Projects & Links** | [`src/components/sections/work.tsx`](src/components/sections/work.tsx) | Featured block & `MINOR_PROJECTS` array |
| **Philosophy / Principles** | [`src/components/sections/approach.tsx`](src/components/sections/approach.tsx) | `APPROACH` array |
| **Contact Info & Status** | [`src/components/sections/contact.tsx`](src/components/sections/contact.tsx) | Availability text & `CHANNELS` array |

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
