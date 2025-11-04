![Co-created with AI](https://raw.githubusercontent.com/JarlLyng/madebyhuman/main/public/badges/co-created-white.svg)

# Made by Human

**Made by Human** is a counterpart to "Not by AI" — an open project celebrating human creativity in an era where AI plays an increasing role.  
The project is not about rejecting technology, but about emphasizing that everything created with AI is still a human choice.

---

## 🎯 Purpose

The purpose of *Made by Human* is to create a positive movement around the use of AI in creative work.  
We believe that value arises when humans **choose**, **shape**, and **curate** their tools — even when those tools include AI.

---

## 🧩 The Badge Series

As a symbol of this philosophy, a series of badges is being developed for use on websites, products, music, apps, and art projects.  
Each badge represents a nuance in the interplay between human and machine.

Example badges:
- **Made by Human**  
- **Co-created with AI**  
- **Human in the Loop**  
- **Crafted by Human**  

---

## 🖼️ Badges

The project currently includes **six SVG badges** — three in white and three in black — located in the `public/badges` directory.

| Preview | Filename |
|----------|-----------|
| ![Co-created with AI (white)](public/badges/co-created-white.svg) | `co-created-white.svg` |
| ![Crafted by Human (white)](public/badges/crafted-white.svg) | `crafted-white.svg` |
| ![Human in the Loop (white)](public/badges/loop-white.svg) | `loop-white.svg` |
| ![Co-created with AI (black)](public/badges/co-created-black.svg) | `co-created-black.svg` |
| ![Crafted by Human (black)](public/badges/crafted-black.svg) | `crafted-black.svg` |
| ![Human in the Loop (black)](public/badges/loop-black.svg) | `loop-black.svg` |

## 🧠 Project Structure

This repository is a **Next.js** project that serves as the foundation for:
- A single-page website that explains the project philosophy
- An interactive badge viewer where users can browse and preview all available badges
- Direct download functionality for SVG badges
- Embed code generation for badges (for use in GitHub README files, websites, or other projects)

### Technology Stack

- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework (free and open source)
- **TypeScript** - Type-safe development
- **React 19** - UI library
- **Framer Motion** - Animation library for smooth interactions

### Embedding Badges

Badges can be embedded in multiple ways:

1. **GitHub README**: Use the raw GitHub URL or inline SVG
2. **Websites**: Use `<img>` tags or inline SVG for better control
3. **Markdown**: Standard markdown image syntax works with hosted URLs

The website will provide copy-paste embed code for each badge variant.

---

## 🚀 Development

To start the project locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The main page is located in `app/page.tsx` and will auto-update during development.

---

## 🧭 Website Structure

The website is a fully responsive single-page application featuring:

1. **Hero Section** - Large, impactful introduction with interactive grid pattern that responds to mouse movement
2. **Manifest** - Brief explanation of the philosophy with side-by-side layout
3. **Badge Gallery** - Interactive preview of all badges with download and embed functionality, smooth animations
4. **How to Use** - Instructions for downloading and embedding badges
5. **Contributing** - Information on how to contribute to the project

### Design Features

- **Style**: Minimalist and modern with subtle animations
- **Color Palette**: Zinc and black tones
- **Responsive**: Fully responsive design for all devices (mobile, tablet, desktop)
- **Interactive Elements**: 
  - Grid pattern that brightens near mouse cursor
  - Smooth scroll-triggered animations using Framer Motion
  - Hover effects on interactive elements
- **Layout**: Side-by-side layout for headings and content on desktop for better visual alignment  

---

## ❤️ Contributing

Everyone is welcome to contribute — with badges, ideas, text, design, or code.  
The goal is not to take a stance against AI, but to **recenter the human** in the creative process.

---

## 🌐 License

This project is open source under the MIT License.  
Share, remix, and build upon it — but remember to credit the humans behind it.
