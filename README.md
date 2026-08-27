# Worksmith — Company Website

AI engineering for the way you actually work.

## About

Worksmith brings the FDE (Functional Design Engineer) model to small businesses. We embed with companies, understand their workflows, and build AI-powered systems that make them more efficient.

**Live site:** https://worksmith-psi.vercel.app

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/app/
├── layout.tsx      # Root layout with metadata & fonts
├── page.tsx        # Main page with all sections
└── globals.css     # Global styles & animations
```

## Website Sections

1. **Hero** — Value proposition + stats
2. **Problem** — Pain points for small businesses
3. **Process** — Discover → Build → Deploy → Improve (FDE model)
4. **Services** — Workflow Audit, Build, Operate, Expand
5. **Who We Serve** — Entrepreneurs, Startups, Small Businesses
6. **Why Worksmith** — Differentiation from consultants & SaaS
7. **Vision** — Services → Platform → SaaS trajectory
8. **CTA** — Contact & free audit booking
9. **Footer** — Navigation & contact info

## Deployment

Deployed to Vercel. To deploy:

```bash
npx vercel deploy --prod --yes
```

## Business Context

See `brainstorm.txt` and `business_model.txt` for the original business reasoning and financial model.
