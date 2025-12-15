![Co-created with AI](https://jarllyng.github.io/madebyhuman/badges/co-created-white.svg)

# Made by Human

**Made by Human** celebrates human creativity — not by rejecting AI, but by honoring the intention, judgement, and personal touch that humans bring to every creative project.

Created with heart, intent, and sometimes AI — but always by a human.

---

## 🎯 Purpose

*Made by Human* celebrates human creativity and the meaningful choices we make in our creative work.  
True value emerges when humans **choose**, **shape**, and **curate** their tools. Whether working entirely by hand or in collaboration with AI, the creative vision and decisions remain fundamentally human.

---

## 🧩 The Badge Series

Our badges represent this philosophy. They're free to use on websites, products, music, apps, and art projects — each one acknowledging a different nuance in how humans and machines work together.

Example badges:
- **Made by Human**  
- **Co-created with AI**  
- **Human in the Loop**  
- **Crafted by Human**  

---

## 🖼️ Badges

The project currently includes **eight SVG badges** — four in white and four in black — located in the `public/badges` directory.

### Badge Descriptions

- **Made by Human** - A general badge celebrating human creativity in all forms
- **Co-created with AI** - For projects created in collaboration with AI tools
- **Crafted by Human** - For projects created entirely by human hands
- **Human in the Loop** - For projects where humans guide and curate the creative process

### Badge Files

| Preview | Filename | Description |
|----------|-----------|-------------|
| ![Made by Human (white)](public/badges/made-white.svg) | `made-white.svg` | General badge celebrating human creativity |
| ![Co-created with AI (white)](public/badges/co-created-white.svg) | `co-created-white.svg` | For AI collaboration projects |
| ![Crafted by Human (white)](public/badges/crafted-white.svg) | `crafted-white.svg` | For entirely human-made projects |
| ![Human in the Loop (white)](public/badges/loop-white.svg) | `loop-white.svg` | For human-guided creative processes |
| ![Made by Human (black)](public/badges/made-black.svg) | `made-black.svg` | General badge celebrating human creativity |
| ![Co-created with AI (black)](public/badges/co-created-black.svg) | `co-created-black.svg` | For AI collaboration projects |
| ![Crafted by Human (black)](public/badges/crafted-black.svg) | `crafted-black.svg` | For entirely human-made projects |
| ![Human in the Loop (black)](public/badges/loop-black.svg) | `loop-black.svg` | For human-guided creative processes |

---

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

The website provides copy-paste embed code for each badge variant (Markdown, HTML, or direct URL).

#### Badge URLs

All badges are hosted at: `https://jarllyng.github.io/madebyhuman/badges/[filename]-[variant].svg`

Examples:
- `https://jarllyng.github.io/madebyhuman/badges/made-white.svg`
- `https://jarllyng.github.io/madebyhuman/badges/co-created-black.svg`

---

## 🚀 Development

To start the project locally:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The main page is located in `src/app/page.tsx` and will auto-update during development.

---

## 🧭 Website Structure

The website is a fully responsive single-page application featuring:

1. **Hero Section** - Large, impactful introduction with interactive grid pattern that responds to mouse movement
2. **Manifest** - Brief explanation of the philosophy with side-by-side layout
3. **Select your badge** - Interactive preview of all badges with download and embed functionality, smooth animations
4. **How to Use** - Instructions for downloading and embedding badges
5. **Contributing** - Information on how to contribute to the project

### Design Features

- **Style**: Minimalist and modern with subtle animations
- **Color Palette**: Zinc and black tones with accent color (#F59898) for badge previews
- **Responsive**: Fully responsive design for all devices (mobile, tablet, desktop)
- **Interactive Elements**: 
  - Grid pattern that brightens near mouse cursor (desktop only)
  - Smooth scroll-triggered animations using Framer Motion
  - Hover effects on interactive elements
  - Touch device detection for optimal performance
- **Layout**: Side-by-side layout for headings and content on desktop for better visual alignment
- **Badge Display**: 2-column grid layout on desktop, 1-column on mobile

### Accessibility & User Experience

- **Keyboard Navigation**: Full keyboard support including ESC to close modals and Tab navigation
- **Focus Management**: Focus trap in modals for better accessibility
- **ARIA Labels**: Proper ARIA attributes for screen readers
- **Error Handling**: Graceful error handling for clipboard operations and downloads
- **Touch Support**: Optimized experience for touch devices with disabled mouse tracking
- **Feedback**: Clear visual feedback for user actions (copy, download, etc.)  

---

## 🚢 Deployment

The website is automatically deployed to **GitHub Pages** using GitHub Actions. Every push to the `main` branch triggers a build and deployment.

### Live Site

The website is available at: **https://jarllyng.github.io/madebyhuman/**

### Deployment Process

1. Code is pushed to the `main` branch
2. GitHub Actions workflow builds the Next.js static export
3. The built site is deployed to GitHub Pages
4. The site is available at the GitHub Pages URL

### Build Configuration

- **Base Path**: `/madebyhuman` (configured for GitHub Pages subdirectory)
- **Output**: Static export (`output: 'export'`)
- **Images**: Unoptimized (required for static export)

---

## 🔍 SEO & Metadata

The website includes comprehensive SEO optimization:

- **Open Graph** tags for social media sharing
- **Twitter Card** metadata
- **Structured metadata** for search engines
- **Canonical URLs** for proper indexing
- **Favicon** and icon files for all platforms
- **Accessibility** features (ARIA labels, keyboard navigation)

---

## ❤️ Contributing

Everyone is welcome to contribute — bring your badges, ideas, text, design, or code.  
Our goal is to **celebrate the human** in every creative process, whether that process includes AI or not.

---

## 🌐 License

This project is open source under the MIT License.  
Share, remix, and build upon it — but remember to credit the humans behind it.
