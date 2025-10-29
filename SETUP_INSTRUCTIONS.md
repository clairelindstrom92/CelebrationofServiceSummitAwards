# Setup Instructions for Celebration of Service Summit Website

## Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Replace Stripe Payment Links

Open `app/page.tsx` and find these lines (around lines 285 and 296):

**For General Admission:**
```tsx
href="https://buy.stripe.com/YOUR-GA-LINK"
```

**For VIP:**
```tsx
href="https://buy.stripe.com/YOUR-VIP-LINK"
```

Replace `YOUR-GA-LINK` and `YOUR-VIP-LINK` with your actual Stripe payment links.

### 3. Logo Setup

Your logo is already in place at `public/logo.png`. If you want to use a different image:

1. Place your logo file in the `public` folder
2. Update the image reference in `app/page.tsx` (around line 110) if needed
3. Recommended size: 256x256 pixels or larger (square aspect ratio)

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to preview the site.

### 5. Build for Production

```bash
npm run build
```

### 6. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI globally (one time)
npm i -g vercel

# Deploy
vercel deploy
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel will auto-detect Next.js and deploy

## Customization Options

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `steel-blue`: #4682B4
- `navy`: #001F3F
- `silver`: #C0C0C0
- `metallic-gray`: #A9A9A9

### Fonts
Fonts are loaded from Google Fonts in `app/layout.tsx`:
- Headings: Montserrat
- Body: Lato

### Social Media Links
Update links in `app/page.tsx`:
- Instagram: Line ~50 and ~360
- LinkedIn: Line ~56 and ~365
- Email: Line ~357

### Event Details
Update event information in the Hero section of `app/page.tsx`:
- Date: Line ~143
- Location: Line ~144

## Troubleshooting

### Images not showing
- Check that images are in the `public` folder
- Use relative paths starting with `/` (e.g., `/logo.png`)

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check that all imports are correct
- Ensure TypeScript types are properly defined

### Deploy errors
- Make sure your `.env` files are properly configured (if using any)
- Check Vercel logs for specific errors
- Ensure `next.config.js` is properly configured

## Support

For issues or questions, contact:
- Email: inclusivesecuritycollectiveinitiative@isciaccess.org
- Built by Claire Lindstrom


