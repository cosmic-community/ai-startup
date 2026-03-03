# AI Startup

![App Preview](https://imgix.cosmicjs.com/e5d1a650-16c0-11f1-8f19-f3dd3ee2f907-autopilot-photo-1531123897727-8f129e1688ce-1772515317010.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive company website for an AI startup focused on AI-powered content and media. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, with all content dynamically managed through **[Cosmic](https://www.cosmicjs.com)**.

## Features

- 🏠 **Dynamic Homepage** — Hero, features, pricing, testimonials, team, and blog sections
- 🚀 **Features Page** — Showcase AI-powered capabilities with icons and descriptions
- 💰 **Pricing Page** — Compare plans with feature lists and popular plan highlighting
- 👥 **Team Page** — Member profiles with headshots, bios, and social links
- 📝 **Blog** — Post listing with featured images, excerpts, and full article detail pages
- ⭐ **Testimonials Page** — Customer reviews with avatars and company information
- 📱 **Fully Responsive** — Mobile-first design that looks great on all devices
- ⚡ **Server-Side Rendering** — Blazing fast with Next.js App Router
- 🎨 **Modern UI** — Dark theme with glassmorphism, gradients, and smooth animations
- 🔒 **Type-Safe** — Full TypeScript with strict mode and comprehensive type definitions

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69a66f89e4be18d28269b199&clone_repository=69a670efe4be18d28269b1db)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a startup product website with features, pricing tiers, team members, blog posts, and customer testimonials. User instructions: AI startup focused on AI content and media"

### Code Generation Prompt

> "Build a Next.js application for a company website called 'AI Startup'. The content is managed in Cosmic CMS with the following object types: features, pricing-tiers, team-members, blog-posts, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: AI startup focused on AI content and media"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Strict type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))
- [@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk) — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket configured

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-startup

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic bucket credentials

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

| Variable | Description |
|---|---|
| `COSMIC_BUCKET_SLUG` | Your Cosmic bucket slug |
| `COSMIC_READ_KEY` | Your Cosmic read key |
| `COSMIC_WRITE_KEY` | Your Cosmic write key |

## Cosmic SDK Examples

### Fetching Objects

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all features
const { objects: features } = await cosmic.objects
  .find({ type: 'features' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single blog post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'blog-posts', slug: 'my-post' })
  .props(['id', 'title', 'slug', 'metadata', 'content'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses the following Cosmic object types:

| Object Type | Slug | Metafields |
|---|---|---|
| 🚀 Features | `features` | name, description, icon, display_order |
| 💰 Pricing Tiers | `pricing-tiers` | plan_name, price, billing_period, plan_features, is_popular, cta_text, display_order |
| 👤 Team Members | `team-members` | full_name, role, bio, headshot, linkedin_url, twitter_url |
| 📝 Blog Posts | `blog-posts` | content, featured_image, excerpt, author |
| ⭐ Testimonials | `testimonials` | quote, customer_name, company, role, avatar |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add your environment variables
5. Deploy!

<!-- README_END -->