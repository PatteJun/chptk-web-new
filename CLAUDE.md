# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Christoph Paterok, a Product Owner specializing in Automotive IT and Digital Growth. The site is built with Astro and provides sections for showcasing professional services, case studies, and contact information.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build the production site
npm run build

# Preview the production build locally
npm run preview
```

## Architecture

- **Frontend Framework**: Astro 4.15.3 with static site generation
- **CSS**: Native CSS with global variables for consistent styling
- **Typography**: JetBrains Mono font
- **Analytics**: Plausible (privacy-focused analytics)
- **Form Handling**: Netlify forms

## Project Structure

The site follows Astro's component-based architecture with these main sections:

- **Layout**: Base layout with metadata, SEO, and global styling
- **Pages**: 
  - `index.astro`: Main landing page
  - `imprint.astro`: Legal information
  - `privacy.astro`: Privacy policy
  - `thank-you.astro`: Form submission confirmation

- **Key Components**:
  - Hero section (main landing area)
  - About section (professional background)
  - Services section (service offerings with cards)
  - Case studies section (portfolio showcase)
  - Contact section (with Netlify-powered form)

## SEO Implementation

The site implements SEO best practices:
- Structured JSON-LD data
- Meta tags for social sharing (Open Graph and Twitter)
- Canonical URLs
- Proper title and description meta tags

## Deployment

The site is configured to be deployed to Netlify with:
- Static site output
- Netlify Forms for contact form submissions
- Site URL: https://www.chptk.de