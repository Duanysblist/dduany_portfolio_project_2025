# danielduany.dev — Personal Portfolio

My personal portfolio and blog built with **Next.js** and **React**, deployed on **Vercel**.

🔗 **Live:** [dduany-portfolio-project-2025.vercel.app](https://dduany-portfolio-project-2025.vercel.app/)

## About

A responsive, server-rendered portfolio site showcasing my software engineering work, projects, and writing. Built to serve as a central hub for my professional presence alongside LinkedIn and GitHub.

## Features

- **Home** — Hero section with quick links to projects and downloadable resume
- **Projects** — Showcase of engineering work (in progress)
- **Blog** — Technical writing and career reflections (in progress)
- **Contact** — Get in touch
- **Resume** — Downloadable PDF resume
- **Uses / Snippets** — Dev setup and reusable code patterns

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) (React) |
| Language | JavaScript |
| Styling | CSS |
| Deployment | [Vercel](https://vercel.com/) |
| Version Control | Git / GitHub |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Duanysblist/dduany_portfolio_project_2025.git
cd dduany_portfolio_project_2025

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Project Structure

```
├── app/                # Next.js App Router pages
│   ├── page.js         # Home page
│   ├── projects/       # Projects showcase
│   ├── blog/           # Blog posts
│   ├── contact/        # Contact page
│   ├── uses/           # Dev setup & tools
│   └── snippets/       # Reusable code patterns
├── public/             # Static assets (resume PDF, images)
├── components/         # Reusable React components
├── next.config.js      # Next.js configuration
└── package.json
```

## Roadmap

- [x] Site scaffolding and deployment
- [x] Home page with hero and resume download
- [x] Navigation with Projects, Blog, Contact, Uses, Snippets
- [x] Projects page — featuring NutriPlan AI, Bionic Apocalypse, Cloud-Native REST API, and Event-Driven Microservices Platform
- [x] Blog — MDX-powered blog with first post on AWS CCP certification journey
- [x] Contact form integration (EmailJS)
- [x] Dark mode toggle (with system preference detection and localStorage persistence)
- [x] SEO optimization and Open Graph meta tags

## Author

**Daniel Duany** — Software Engineer | [LinkedIn](https://www.linkedin.com/in/danielduany) | [GitHub](https://github.com/Duanysblist)
