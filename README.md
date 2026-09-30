# ByteSpace

A responsive online course marketplace landing page — including bonus Login, Signup, and 404 pages — built from a Figma design using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

**🔗 Live Demo:** [https://bytespace-neww.vercel.app](https://bytespace-neww.vercel.app)

**🔀 Pull Request:**

- [https://github.com/sohelrana2002/bytespace/pull/1](https://github.com/sohelrana2002/bytespace/pull/1)
- [https://github.com/sohelrana2002/bytespace/pull/2](https://github.com/sohelrana2002/bytespace/pull/2)
- [https://github.com/sohelrana2002/bytespace/pull/3](https://github.com/sohelrana2002/bytespace/pull/3)

---

## ✨ Features

- **Landing Page** — hero section with course search, floating stat cards (Learning Progress, Happy Students, UI/UX Design), logo strip, course categories, course listings with filters, growth/creator CTA section, testimonials, and newsletter signup footer
- **Authentication (Bonus)** — Login and Signup pages with client-side form validation and social sign-in buttons
- **Custom 404 Page** — styled to match the overall design system
- **Fully Responsive** — optimized layouts for mobile, tablet, and desktop
- **Reusable Component Architecture** — UI primitives, section components, and layout components are cleanly separated for scalability

## 🛠️ Tech Stack

| Category  | Technology                                                          |
| --------- | ------------------------------------------------------------------- |
| Framework | [Next.js 14](https://nextjs.org/) (App Router)                      |
| Language  | TypeScript                                                          |
| Styling   | Tailwind CSS                                                        |
| Icons     | [lucide-react](https://lucide.dev/)                                 |
| Fonts     | Poppins (headings, via `next/font/google`) · Satoshi (body, self-hosted via `next/font/local`) |

## 📂 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx           # Root layout, fonts, metadata
│  ├─ page.tsx             # Landing page route
│  ├─ globals.css          # Global styles & Tailwind directives
│  ├─ not-found.tsx        # Custom 404 page
│  ├─ login/page.tsx       # Login route
│  └─ register/page.tsx    # Signup route
│
├─ components/
│  ├─ ui/                  # Button, Chip, Logo, Rating, TextField, AvatarStack, Shape, Stage...
│  ├─ cards/                # CourseCard, StatCards
│  ├─ layout/               # Header, Footer, NewsletterForm
│  ├─ sections/              # Hero, LogoStrip, CoursesSection, CategoriesSection, GrowthSection, Testimonials...
│  └─ auth/                  # AuthShell, AuthCard, LoginForm, RegisterForm, SocialButtons
│
├─ data/                     # Static content: courses, categories, testimonials, navigation
└─ lib/                      # Utility helpers (cn.ts, validation.ts)

public/
├─ images/                   # Figma-exported photos, icons, and illustrations
└─ logos/                    # Brand and partner logo assets
```

Design tokens — colors, type scale, and the 1200px content width — are defined centrally in `tailwind.config.ts`.

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/bytespace.git
cd bytespace
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Other scripts

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🗺️ Routes

| Route       | Description                     |
| ----------- | ------------------------------- |
| `/`         | Landing page (core requirement) |
| `/login`    | Sign in page (bonus)            |
| `/register` | Sign up page (bonus)            |
| any other   | Custom 404 page                 |

## 📝 Notes

- Login, Signup, and newsletter forms validate on the client side only — no backend/API integration is included in this scope.
- Decorative compositions use a small `Stage` helper component that proportionally scales the desktop layout down for smaller screens.
- No environment variables are required to run or deploy this project.

## 🌱 Git Workflow

Development followed a feature-branch workflow:

```bash
git checkout -b feat/landing-page
# ... commits for landing page + auth ...
git push origin feat/landing-page
# Pull Request opened: feat/landing-page → main
```

## ☁️ Deployment

Deployed on [Vercel](https://vercel.com/) — framework preset: **Next.js**. No environment variables are needed for deployment.

---

Converting a Figma design into a production-ready, component-driven web application.
