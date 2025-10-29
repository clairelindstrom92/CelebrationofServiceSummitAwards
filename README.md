# Celebration of Service Summit & Awards Reception

A responsive single-page event website for the Celebration of Service™ Summit & Awards Reception, hosted by Inclusive Security Collective Initiative (iSCI) LLC.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📋 Setup Instructions

1. **Replace Stripe Links**: Edit `app/page.tsx` and replace the placeholders:
   - `YOUR-GA-LINK` with your General Admission Stripe link
   - `YOUR-VIP-LINK` with your VIP Stripe link

2. **Add Logo**: Place your iSCI logo in the `public` folder as `logo.png` (optional, currently using placeholder)

3. **Build and Deploy**:
   ```bash
   npm run build
   vercel deploy
   ```

## 🎨 Design Features

- **Color Palette**: Steel Blue (#4682B4), Navy (#001F3F), Silver (#C0C0C0), Metallic Gray (#A9A9A9)
- **Fonts**: Montserrat (headings), Lato (body)
- **Metallic gradient dividers** and subtle patriotic textures
- **Responsive design** with mobile hamburger menu
- **Smooth scroll animations** using Framer Motion
- **Section fade-ins** on scroll

## 📱 Sections

- Hero with event details and CTA
- About the Celebration of Service Series
- Event Schedule (3-column timeline)
- Tickets (GA & VIP tiers)
- Sponsorship Opportunities (4-tier grid)
- Honorees & Speakers (responsive grid)
- Reception Circle membership
- Past Events Gallery
- Contact & Social Links

## 🛠️ Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion


