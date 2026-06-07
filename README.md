# MP Electric Works (MPEW)

Production website for **MP Electric Works** — electrical & mechanical engineering
solutions in Dewas, Madhya Pradesh, since 2008.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**,
**Framer Motion**, **Lucide Icons**, **React Hook Form** and **Nodemailer**.

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | Next.js App Router (RSC + client components)      |
| Language       | TypeScript (strict)                               |
| Styling        | Tailwind CSS v4 + a ported design-system layer    |
| Animation      | Framer Motion (scroll reveals, animated counters) |
| Icons          | lucide-react                                      |
| Forms          | React Hook Form + a Nodemailer API route          |
| Fonts          | Archivo / Hanken Grotesk / IBM Plex Mono (next/font) |

## Pages

Home · About Us · Services · Industries · Infrastructure · Gallery · Clients · Contact Us

## Project structure

```
src/
  app/
    layout.tsx            Root layout — fonts, metadata, JSON-LD, chrome
    page.tsx              Home
    about/ services/ industries/ infrastructure/ gallery/ clients/ contact/
    api/contact/route.ts  Nodemailer email endpoint
    sitemap.ts robots.ts manifest.ts
    globals.css           Design system (navy + orange, tokens, components)
  components/             Header, Footer, Banner, CTABand, Reveal, Counter, …
  lib/
    site.ts               Central business data, nav, services
    structured-data.ts    Organization / LocalBusiness / WebSite JSON-LD
public/images/            Workshop & product photography
```

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in SMTP credentials
npm run dev                  # http://localhost:3000
```

## Contact form email

The contact form (`/contact`) posts to `app/api/contact/route.ts`, which sends an
email via **Nodemailer** to `CONTACT_TO` (default `mp.elect.w@gmail.com`).

Set these environment variables (see `.env.example`):

| Variable      | Description                                          |
| ------------- | ---------------------------------------------------- |
| `SMTP_HOST`   | SMTP server (e.g. `smtp.gmail.com`)                  |
| `SMTP_PORT`   | `587` (STARTTLS) or `465` (SSL)                      |
| `SMTP_SECURE` | `true` for port 465, otherwise `false`              |
| `SMTP_USER`   | SMTP username                                        |
| `SMTP_PASS`   | SMTP password / Gmail **App Password**               |
| `CONTACT_TO`  | Inbox that receives enquiries                        |
| `CONTACT_FROM`| Optional friendly `From` header                      |
| `NEXT_PUBLIC_SITE_URL` | Public URL for canonical/OG/sitemap        |

> For Gmail, enable 2FA and generate an **App Password** — regular passwords are rejected.

## WhatsApp

A floating WhatsApp button is present on every page, linking to
`https://wa.me/919009926010` with a prefilled enquiry message.

## SEO

- Per-page `title` / `description` / canonical metadata
- Open Graph + Twitter card tags
- JSON-LD structured data: `Organization`, `LocalBusiness`, `WebSite`
- `sitemap.xml`, `robots.txt`, web manifest
- `next/image` with priority/lazy loading and responsive `sizes`

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```
