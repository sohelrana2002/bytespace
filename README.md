# ByteSpace New

Landing page (plus bonus Login, Register and 404 pages) built from the ByteSpace Figma design.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Routes

| Route       | Description                         |
| ----------- | ----------------------------------- |
| `/`         | Landing page (required)             |
| `/login`    | Sign in page (bonus)                |
| `/register` | Sign up page (bonus)                |
| any other   | Custom 404 page from the design     |

## Project structure

```
src/
  app/                 routes, layout, global styles
  components/
    ui/                Button, Chip, Logo, AvatarStack, Rating, TextField, Shape, Stage...
    cards/             CourseCard, stat cards (progress, revenue, happy students...)
    layout/            Header, Footer, NewsletterForm
    sections/          Hero, LogoStrip, Courses, Categories, Growth, CreatorCta, Testimonials
    auth/              AuthShell, AuthCard, LoginForm, RegisterForm, SocialButtons
  data/                courses, categories, testimonials, navigation content
  lib/                 cn helper, form validation
public/
  images/ logos/       assets exported from the Figma file
```

Design tokens (colors, type scale, 1200px content width) live in `tailwind.config.ts`.
Body font **Satoshi** is loaded from Fontshare; headings use **Poppins** via `next/font`.

## Notes

- Login / Register / newsletter forms validate on the client only (no backend).
- Decorative compositions use a small `Stage` helper that scales the desktop layout down on smaller screens.

## Git workflow

```bash
git init
git checkout -b feat/bytespace-landing
git add . && git commit -m "feat: build ByteSpace landing, auth and 404 pages"
git remote add origin <your-public-repo-url>
git push -u origin feat/bytespace-landing   # then open a Pull Request into main
```

## Deploy

Import the repository in Vercel (framework preset: Next.js) and deploy. No environment variables are needed.
