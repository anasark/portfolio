# Portfolio

Personal portfolio website — Vue 3 + Vite + Tailwind CSS. A single page with dark mode, scroll reveal animations, and all content separated into one data file.

**Live demo:** [https://anasabdur.com/](https://me.anasabdur.com/) · **Author:** Anas Abdur Rohim

## Tech Stack

| | |
|---|---|
| Framework | Vue 3 (`<script setup>` SFC) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 3 |
| Routing | Vue Router 4 |

## Running Locally

Requires **Node.js 18+** (developed on Node 24) and npm.

```bash
npm install
```

```bash
npm run dev
```

Open `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing Content

**Almost all content lives in a single file: [`src/data/data.js`](src/data/data.js).** You do not need to touch any `.vue` file to change what the site says.

That file exports three things:

### 1. `profile` — identity and introduction

Used by Hero, About, and Footer.

| Field | Description |
|---|---|
| `name` | Name displayed large in the hero section |
| `profession` | Job title, e.g. `"Full Stack Web Developer"` |
| `email` | Contact email address |
| `location` | Location, e.g. `"Indonesia"` |
| `linkedin` | Object shaped `{ link, user }` |
| `github` | GitHub username only, without the URL |
| `repository` | Full URL to this project's source repo, linked from the footer |
| `summary` | Array of paragraphs shown in the About section |
| `points` | Array of `{ title, description, icon }` — services and strengths |

> The `icon` field inside `points` is **not rendered** by any component right now. Filling it in or leaving it out makes no visual difference.

### 2. `resume` — experience, education, skills

Used by Experience and Skills.

| Field | Description |
|---|---|
| `education` | Array of `{ date, level, school, location }` |
| `experience` | Array of `{ date, company, position, location, description[] }` |
| `skill` | Array of strings — primary programming languages |
| `skills` | Object mapping category → string, e.g. `{ "Database": "MySql, Redis" }` |
| `knowledge` | Array of strings — tools and technologies, rendered as a slash-separated list |

`skill` and `skills` are **both in use** and serve different purposes: `skill` renders the language list, `skills` renders the categorized table. Do not delete either one.

The order of the `experience` array determines display order — put the most recent role first.

### 3. `portfolio` — project list

An array of objects. Every field is required:

```js
{
  name: "Media Monitoring Dashboard",
  url: "https://example.com",
  status: "live",                    // "live" or "archived"
  type: "Laravel",
  project: "Web Application",
  framework: "Laravel, VueJs, Tailwind",
  images: [
    "/images/portfolio/monitoring/1.png",
    "/images/portfolio/monitoring/2.png"
  ],
  description: [
    "A short description of the project."
  ]
}
```

`status` only accepts `"live"` or `"archived"` — any other value is not recognized by the component.

### Adding Project Images

1. Create a folder at `public/images/portfolio/<project-name>/`
2. Put the images there (`.png` or `.jpeg`)
3. Reference them from `data.js` using a path that **starts with `/` and omits `public`**:

   ```js
   images: ["/images/portfolio/project-name/1.png"]
   ```

Paths written as `public/images/...` or `./images/...` will fail to load in production.

## What Is Not in `data.js`

These four values are still hardcoded and need to be changed by hand — important if you fork this repo:

| Location | Content |
|---|---|
| [`src/components/Navbar.vue:45`](src/components/Navbar.vue) | Name in the navbar logo |
| [`src/components/Hero.vue:55`](src/components/Hero.vue) | Resume button link (`anasabdur.com/data/resume.pdf`) |
| [`index.html:10-18`](index.html) | SEO meta — description, author, keywords |
| [`index.html:20-27`](index.html) | Google Analytics ID (`G-X1NGD9GXX5`) |

That Analytics tag points at the repo owner's property. **If you fork this, replace or remove that script block** — otherwise traffic to your site will be reported into someone else's analytics account.

## Project Structure

```
src/
├── data/data.js         ← all content lives here
├── components/          Navbar, Hero, About, Experience, Skills, Portfolio, Footer
├── composables/
│   ├── useDarkMode.js   theme toggle, persisted in localStorage
│   └── useReveal.js     scroll reveal animation
├── views/Home.vue       composes every component into one page
├── router/index.js      a single route (`/`) plus smooth scroll to anchors
└── style.css            Tailwind base styles
```

## Theming

Colors and fonts are defined in [`tailwind.config.js`](tailwind.config.js):

| Token | Value | Usage |
|---|---|---|
| `surface` | `#F7F6F3` | Light mode background |
| `ink` | `#0E0E0E` | Dark mode background / primary text |
| `accent` | `#5B4CFF` | Accent color |
| `muted` | `#999999` | Secondary text |
| `faint` | `#E5E5E5` | Borders and dividers |

Dark mode uses Tailwind's `class` strategy, driven by `useDarkMode.js` and persisted in `localStorage`.

## Deployment

```bash
npm run build
```

The output lands in `dist/` — a static folder you can upload to any host (Netlify, Vercel, GitHub Pages, cPanel).

Because the app uses `createWebHistory`, the server must rewrite all requests to `index.html`. Netlify and Vercel handle this automatically. On Apache or cPanel, add an `.htaccess` file with a rewrite rule pointing to `index.html`.

## License

Copyright (c) 2026 Anas Abdur Rohim. Released under the [MIT License](LICENSE) — free for anyone to use, modify, and distribute, as long as the copyright notice above is included.
