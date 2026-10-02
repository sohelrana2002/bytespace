# ByteSpace — Requirements

> Version 1.0 · Scope: front-end implementation of the "ByteSpace New" Figma design
> Stack: Next.js 14 (App Router) · TypeScript · Tailwind CSS · lucide-react

---

## 1. Overview

**ByteSpace** is an online course marketplace. This project is the front-end of its public website: a marketing/landing page that lets visitors discover courses, plus (bonus) Login, Sign Up and 404 pages. The UI is a pixel-faithful conversion of a Figma design into a responsive, component-driven Next.js application.

### 1.1 Goals

| # | Goal |
|---|------|
| G1 | Match the Figma design closely on desktop (1440px reference width) and degrade gracefully on tablet and mobile. |
| G2 | Build the UI from small, reusable, typed components (UI primitives → cards → sections → pages). |
| G3 | Centralise design tokens (colors, type scale, layout width) so the look can be changed in one place. |
| G4 | Keep content separate from markup (static data files) so a real API can replace it later. |
| G5 | Ship a public, deployed site (Vercel) with a clean Git history (feature branches + Pull Requests). |

### 1.2 In scope

- Landing page (`/`) — required
- Login page (`/login`) — bonus
- Sign Up page (`/register`) — bonus
- Custom 404 page — extra
- Client-side form validation (login, sign up, newsletter)
- Responsive layout (mobile, tablet, desktop)

### 1.3 Out of scope (current version)

- Backend / API, database, real authentication, sessions
- Real course search, filtering, pagination, course detail pages
- Cart, checkout and payments
- Creator dashboard / Course Editor
- Internationalisation, dark mode, analytics, CMS

### 1.4 Users

| Persona | Needs |
|---------|-------|
| **Visitor / Learner** | Understand what ByteSpace offers, browse featured courses and categories, read social proof, sign in or register. |
| **Prospective Creator** | Learn about publishing courses and reach the registration flow ("Join as Creator"). |
| **Reviewer / Evaluator** | Open the live link, read the repo, check component reuse, Git workflow and responsiveness. |

---

## 2. Functional Requirements

Priority: **M** = must, **S** = should, **C** = could. Status reflects the code as delivered.

### 2.1 Global layout

| ID | Requirement | Pri | Status |
|----|-------------|-----|--------|
| FR-G1 | A transparent header sits on top of the blue hero with logo, main navigation (Home, Courses, Creators), Sign In, Join Us and a cart icon. | M | ✅ |
| FR-G2 | On screens below `lg`, the header collapses to a hamburger button that opens a menu containing the nav links, Sign In and Join Us. The menu closes on link click and on outside click. | M | ✅ |
| FR-G3 | Navigation links scroll to the matching landing-page sections (`/#courses`, `/#creators`, `/#categories`). | M | ✅ |
| FR-G4 | A footer shows the logo, newsletter signup, three link columns, copyright and legal links. | M | ✅ |
| FR-G5 | Page metadata (title, description, theme color, viewport) is defined for every route. | S | ✅ (no favicon / social image) |

### 2.2 Landing page (`/`)

| ID | Requirement | Pri | Status |
|----|-------------|-----|--------|
| FR-L1 | **Hero** — headline, sub-text, search bar (input + Search button), student photo with three floating cards (UI/UX Design topic, Learning Progress 55%, Happy Students), decorative 3D shapes and grid background. | M | ✅ |
| FR-L2 | Submitting the hero search navigates to the course section (`/#courses`). | S | ✅ (query text is not used yet) |
| FR-L3 | **Logo strip** — five partner logos on a neutral band. | M | ✅ |
| FR-L4 | **Courses** — section heading, category chip filters (3 rows + "+ More") and a grid of six course cards. | M | ✅ |
| FR-L5 | Exactly one filter chip is active at a time; the default is "Featured". | M | ✅ |
| FR-L6 | A course card shows image, lessons / duration / comments pills, title, author, rating, level badge, student avatar stack (+26), and price with "/lifetime". | M | ✅ |
| FR-L7 | Clicking a chip changes the displayed course list. | C | ❌ not implemented (chip state only changes highlight) |
| FR-L8 | **Categories** — six "learning path" tiles (Design, Development, IT & Software, Business, Marketing, Photography) that link to the courses section. | M | ✅ |
| FR-L9 | **Growth** — learner block (copy, stats 12K / 70+ / 16, composed visual) and creator block (copy, four benefits with check icons, revenue / year-to-date / happy-students cards). | M | ✅ |
| FR-L10 | **Creator CTA** — blue banner with shapes, headline, copy and a "Join as Creator" button linking to `/register`. | M | ✅ |
| FR-L11 | **Testimonials** — heading, intro paragraph and three testimonial cards (avatar, name, role, quote). | M | ✅ |
| FR-L12 | Newsletter form in the footer validates the email and shows an inline error or success message. | M | ✅ |

### 2.3 Login page (`/login`) — bonus

| ID | Requirement | Pri | Status |
|----|-------------|-----|--------|
| FR-A1 | Two-column layout: marketing panel (heading, description, floating course cards) and a white "Welcome Back" card. | M | ✅ |
| FR-A2 | Fields: Email and Password. | M | ✅ |
| FR-A3 | Validation on submit: email must be well-formed; password must be at least 8 characters. Errors appear under the offending field. | M | ✅ |
| FR-A4 | A valid submit shows a demo success message ("no backend connected"). | S | ✅ |
| FR-A5 | Social buttons for Facebook and Google (visual only). | S | ✅ (no action) |
| FR-A6 | A link to "Create an account" (`/register`). | M | ✅ |

### 2.4 Sign Up page (`/register`) — bonus

| ID | Requirement | Pri | Status |
|----|-------------|-----|--------|
| FR-R1 | Same shell as login with "Create an Account / Welcome to ByteSpace" card. | M | ✅ |
| FR-R2 | Fields: Full Name, Email, Password. | M | ✅ |
| FR-R3 | Validation on submit: name ≥ 2 characters, valid email, password ≥ 8 characters. | M | ✅ |
| FR-R4 | A valid submit shows a demo success message. | S | ✅ |
| FR-R5 | A link back to Login. | M | ✅ |

### 2.5 404 page

| ID | Requirement | Pri | Status |
|----|-------------|-----|--------|
| FR-N1 | Any unknown URL renders a styled page (giant gradient "404", message, "Back to Home" button) inside the standard header and footer. | M | ✅ |

### 2.6 Routes

| Route | Page | Type |
|-------|------|------|
| `/` | Landing | Static |
| `/login` | Sign In | Static |
| `/register` | Sign Up | Static |
| `*` | 404 | Static |

---

## 3. Non-Functional Requirements

### 3.1 Responsiveness

| ID | Requirement |
|----|-------------|
| NFR-R1 | Layouts must work from ~320px to 1440px+ with no horizontal scrolling (`overflow-x: hidden` on `html` and `body`). |
| NFR-R2 | Content is capped at **1200px** wide (`max-w-page`) with 20px / 32px / 0 side padding at base / `md` / `xl`. |
| NFR-R3 | Complex "floating card" compositions must scale proportionally rather than reflow (handled by the `Stage` helper: scale 0.55 → 0.75 → 0.95 → 0.78 → 1.0 across breakpoints). |
| NFR-R4 | Large decorative shapes are shown only at `xl` and above. |

### 3.2 Design fidelity

| ID | Requirement |
|----|-------------|
| NFR-D1 | **Colors** — neutral, primary (blue) and secondary (lime) 50–950 scales plus `ink` (#040819). |
| NFR-D2 | **Typography** — headings in Poppins SemiBold (120% line-height); body in Satoshi (160%); labels in Satoshi Medium (120%). Sizes: heading-l 72px, heading-m 44px, heading-s 36px, heading-xs 20px, body-l/m/s/xs 18/16/14/12px, label-l/m/s/xs 18/16/14/12px. |
| NFR-D3 | All tokens live in `tailwind.config.ts`; components use token class names instead of ad-hoc values wherever possible. |

### 3.3 Accessibility

| ID | Requirement |
|----|-------------|
| NFR-A1 | Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and one `h1` per page. |
| NFR-A2 | Every form control has a programmatic label; errors use `role="alert"` and `aria-invalid` / `aria-describedby`. |
| NFR-A3 | Interactive toggles expose state (`aria-expanded`, `aria-controls`, `aria-pressed`). |
| NFR-A4 | Visible `:focus-visible` outline on all interactive elements. |
| NFR-A5 | Decorative images and shapes are hidden from assistive tech (`aria-hidden`, empty `alt`). |
| NFR-A6 | `prefers-reduced-motion` disables smooth scrolling. |

### 3.4 Performance

| ID | Requirement |
|----|-------------|
| NFR-P1 | Use `next/image` for raster images (lazy loading, responsive `sizes`, modern formats). |
| NFR-P2 | Fonts loaded through `next/font` (Poppins from Google at build time, Satoshi self-hosted) with `display: swap` — no layout-shifting external font requests. |
| NFR-P3 | Keep the client JavaScript small: only interactive components are Client Components; all others render on the server. |
| NFR-P4 | Hero image and logos use `priority` loading. |

### 3.5 Code quality & maintainability

| ID | Requirement |
|----|-------------|
| NFR-Q1 | TypeScript in `strict` mode; shared types for data (`Course`, `Testimonial`, `NavLink`, `LearningPath`). |
| NFR-Q2 | Folder-by-role structure: `ui/`, `cards/`, `layout/`, `sections/`, `auth/`. |
| NFR-Q3 | No hard-coded content inside section components when it is list-like — content comes from `src/data/*`. |
| NFR-Q4 | ESLint with `next/core-web-vitals`; `npm run lint` and `npm run build` must pass. |
| NFR-Q5 | `@/*` path alias maps to `src/*`. |

### 3.6 Browser & platform support

Latest two versions of Chrome, Edge, Firefox and Safari (desktop and mobile). Node.js 18.17+ for development (Next.js 14 requirement).

### 3.7 Security & privacy

- No secrets, API keys or environment variables are required.
- Forms never send data anywhere; passwords are validated in the browser only and not stored or logged.
- No third-party scripts or trackers.

---

## 4. Delivery & Process Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| DR-1 | Source hosted in a **public GitHub repository**. | ✅ |
| DR-2 | Work done on **feature branches** with **Pull Requests** (no direct commits to `main`). Flow: `feat/auth` → `feat/landing-page` → `main`. | ✅ |
| DR-3 | **Reusable components** across pages (e.g. `CourseCard` on landing and auth preview; `Header` / `Footer` on landing and 404). | ✅ |
| DR-4 | Deployed on **Vercel** with a public live URL. | ✅ |
| DR-5 | README with features, stack, structure, run instructions, routes, notes, Git workflow and deployment. | ✅ |
| DR-6 | Submission: live URL + repo link + short notes. | — (done outside the repo) |

---

## 5. Constraints & Assumptions

- The Figma file is the single source of truth for layout, copy and tokens.
- The design's token names ("Electric Violet", "Crimson") do not match the actual hues (blue, lime); code uses neutral names `primary` / `secondary`.
- All courses, avatars and testimonials are placeholder data.
- The Satoshi font files are bundled in the repo (`src/app/fonts`).
- Authentication and commerce are intentionally mocked; the UI must make that clear ("demo – no backend connected").

---

## 6. Acceptance Criteria

1. `npm install && npm run build` completes without errors.
2. `/`, `/login`, `/register` render and an unknown URL renders the 404 page.
3. At 1440px the landing page visually matches the Figma frames section by section.
4. At 375px there is no horizontal scroll, the hamburger menu works, and all sections are readable.
5. Submitting empty or invalid login / sign-up / newsletter forms shows the correct error messages; valid input shows the success message.
6. Keyboard-only navigation reaches every link, button and field with a visible focus ring.
7. The live Vercel URL loads without console errors.

---

## 7. Known Gaps & Recommended Next Requirements

These are not defects against the original brief, but they are the most valuable follow-ups.

| # | Item | Why it matters |
|---|------|----------------|
| 1 | Make course filters and hero search actually filter `COURSES` (add a `category` field to each course). | Today the chips and search box are visual only. |
| 2 | Fix body font binding (see `system-architecture.md` §9, issue 1). | Satoshi may not be applied; text falls back to system fonts. |
| 3 | Add a favicon / app icon and Open Graph metadata. | No icon exists; links shared on social media have no preview. |
| 4 | Newsletter button label should read "Subscribe" (currently "Search") unless the design explicitly says otherwise. | Copy/UX consistency. |
| 5 | Replace `#` placeholder links (Affiliate, Contact, Help, About, legal pages) or create pages for them. | Dead links. |
| 6 | Make the cart reachable on mobile and wire it to a state store. | Cart icon is desktop-only and does nothing. |
| 7 | Add real authentication (e.g. Auth.js / backend API) and server-side validation. | Current validation is client-only. |
| 8 | Add tests (Vitest + React Testing Library for forms, Playwright for smoke/responsive checks) and a CI workflow (lint + build). | No automated safety net today. |
| 9 | Add course detail pages (`/courses/[id]`) and move `COURSES` to an API / CMS. | Course ids are already URL-friendly slugs. |