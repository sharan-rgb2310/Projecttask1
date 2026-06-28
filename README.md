# Pixora Studio — Design Agency Homepage

A modern, responsive design agency homepage built for the **Next.js Developer Internship** task-based assignment.

Sections: **Hero → Services → Portfolio → Contact**, plus a Navbar and Footer.

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** (functional components only)
- **Tailwind CSS** for styling and responsive layout
- **lucide-react** for all icons
- **next/image** for optimized, lazy-loaded images
- Tailwind `class`-strategy dark mode

No UI template or component library was used — every section is hand-built.

---

## Project Structure

\`\`\`
pixora-studio/
├── app/
│   ├── layout.js        # Root layout, SEO metadata, ThemeProvider wrapper
│   ├── page.js          # Composes all sections
│   └── globals.css      # Tailwind base + custom fonts/utilities
├── components/
│   ├── Navbar.jsx        # Sticky nav, dark mode toggle, mobile menu
│   ├── Hero.jsx          # Agency name, tagline, CTAs, hero image
│   ├── Services.jsx      # 4 service cards
│   ├── Portfolio.jsx     # 6-project responsive grid with hover effects
│   ├── Contact.jsx       # Form with validation + success state
│   ├── Footer.jsx        # Links + social icons
│   └── ThemeProvider.jsx # Dark/light mode context
├── public/images/        # Hero + 6 project thumbnails
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
\`\`\`

---

## Setup Instructions

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the dev server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Open [http://localhost:3000](http://localhost:3000)

3. **Production build**
   \`\`\`bash
   npm run build
   npm run start
   \`\`\`

---

## Live Demo

🔗 [projecttask1.vercel.app](https://projecttask1.vercel.app)

---

## Section-by-Section Coverage

| Requirement | Where |
|---|---|
| Agency name, tagline, CTA, gradient/image background | `Hero.jsx` |
| 3–4 service cards with icon, title, description | `Services.jsx` — 4 cards |
| Portfolio grid, 3–6 projects, image + title, hover effects | `Portfolio.jsx` — 6 projects |
| Contact form: name, email, message, submit | `Contact.jsx` — with validation + success message |

---

## Bonus Features Implemented

- ✅ Tailwind CSS throughout
- ✅ Dark mode toggle (persisted via localStorage)
- ✅ next/image for all images
- ✅ SEO metadata (title, description, OG tags)
- ✅ Basic animations (hover effects, smooth scroll)

---

## Assumptions & Additional Notes

- Contact form simulates submission (no backend was specified in the brief).
- Contact details are placeholder values for demonstration.
- Icons use lucide-react for visual consistency.
- Portfolio thumbnails are placeholder mockup images representing 6 sample projects.

---

## Author

Built by Sharan as part of the Next.js Developer Internship task-based evaluation.