# Deployment Checklist

## Before Deploying

- [ ] Replace `YOUR-GA-LINK` in `app/page.tsx` with actual General Admission Stripe link
- [ ] Replace `YOUR-VIP-LINK` in `app/page.tsx` with actual VIP Stripe link
- [ ] Verify logo is correct in `public/logo.png`
- [ ] Test the site locally with `npm run dev`
- [ ] Check all links work correctly
- [ ] Verify responsive design on mobile/tablet/desktop
- [ ] Test smooth scroll navigation

## Deployment Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Project
```bash
npm run build
```

### 3. Deploy to Vercel

**Using Vercel CLI:**
```bash
vercel deploy
```

**Or push to Git and deploy via Vercel Dashboard:**
1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to GitHub/GitLab/Bitbucket
3. Import repository on Vercel dashboard
4. Vercel will auto-detect Next.js and deploy

### 4. Post-Deployment

- [ ] Test deployed site
- [ ] Verify Stripe payment links work
- [ ] Check email links work
- [ ] Test social media links
- [ ] Verify mobile responsiveness
- [ ] Check SEO metadata
- [ ] Test all navigation links

## Quick Commands Reference

```bash
# Development
npm run dev

# Build
npm run build

# Start production server (local)
npm start

# Lint
npm run lint

# Deploy
vercel deploy
```

## Important Notes

- Stripe links MUST be replaced before going live
- Logo is already set up in `public/logo.png`
- All social links are configured
- Email links use `inclusivesecuritycollectiveinitiative@isciaccess.org`
- Built by Claire Lindstrom


