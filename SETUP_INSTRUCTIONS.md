# AfriCyberCore Website - Setup Instructions

## Overview
This is a complete AfriCyberCore website project that can be deployed to any Manus environment.

## What's Included
- ✅ Complete React + Vite project structure
- ✅ All components (Hero, Header, Footer, Contact Form, etc.)
- ✅ Tailwind CSS configuration
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme support
- ✅ Security headers and best practices
- ✅ Professional animations (Framer Motion)
- ✅ Contact form with validation
- ✅ Training Academy page
- ✅ All dependencies configured

## Quick Start in New Manus Environment

### Step 1: Extract the ZIP file
```bash
unzip africybercore_complete_project.zip
cd africybercore_dev_env
```

### Step 2: Install Dependencies
```bash
pnpm install
```

### Step 3: Start Development Server
```bash
pnpm run dev
```

The website will be available at `http://localhost:3000`

### Step 4: Build for Production
```bash
pnpm run build
```

## Project Structure
```
africybercore_dev_env/
├── client/
│   ├── public/              # Static files (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── assets/          # Images and media
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilities
│   │   ├── App.jsx          # Main app
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                  # Backend (placeholder)
├── shared/                  # Shared types
├── package.json             # Dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
└── pnpm-lock.yaml          # Dependency lock file
```

## Key Features

### Hero Section
- Two-division layout (60% text, 40% image)
- Professional fonts (Poppins/Montserrat)
- Rotating tagline ("Secure. Fast. Smart.")
- Animated image slideshow (4 diverse professional images)
- Tech-textured background pattern
- Solid colors (no gradients)

### Navigation
- Responsive header with logo
- Dark/Light theme toggle
- Contact button

### Sections
- **Four Pillars**: Cybersecurity, Business Automation, No-Code Web Dev, Training Academy
- **How We Do It**: Interactive 5-step timeline (clickable + scroll animated)
- **What We Do**: Services overview
- **About**: Company mission
- **Products**: AI-powered tools
- **Blog**: Tech insights
- **Consulting**: Contact section
- **Contact Form**: Professional form with validation
- **Training Academy**: Separate page with courses

## Security Features
- ✅ Security headers (X-UA-Compatible, X-Content-Type-Options, X-Frame-Options, etc.)
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Input validation
- ✅ Error handling
- ✅ No sensitive data exposure
- ✅ Updated dependencies (patched vulnerabilities)

## Mobile Responsive
- ✅ Mobile (320px - 640px)
- ✅ Tablet (641px - 1024px)
- ✅ Desktop (1025px+)
- ✅ Touch-friendly interface
- ✅ Proper viewport configuration

## Environment Variables
The following environment variables are automatically injected by Manus:
- VITE_ANALYTICS_ENDPOINT
- VITE_ANALYTICS_WEBSITE_ID
- VITE_APP_ID
- VITE_APP_LOGO
- VITE_APP_TITLE
- VITE_FRONTEND_FORGE_API_KEY
- VITE_FRONTEND_FORGE_API_URL
- VITE_OAUTH_PORTAL_URL
- JWT_SECRET
- OAUTH_SERVER_URL
- OWNER_NAME
- OWNER_OPEN_ID

## Contact Form
The contact form includes:
- Name, Email, Phone, Company fields
- Service selection dropdown
- Message textarea
- Validation and success message
- Hardcoded contact information (email, phone, location)

## Customization

### Update Colors
Edit `client/src/index.css` to change the color palette

### Update Content
Edit individual components in `client/src/components/` to update text and messaging

### Update Images
Replace image URLs in components with your own CDN URLs

### Add New Pages
Create new files in `client/src/pages/` and add routes in `client/src/App.jsx`

## Troubleshooting

### Port Already in Use
```bash
pnpm run dev -- --port 3001
```

### Clear Cache
```bash
rm -rf dist node_modules
pnpm install
```

### TypeScript Errors
```bash
pnpm run check
```

## Support
For issues or questions about the website, refer to the component files in `client/src/components/`

---

**Last Updated**: March 25, 2026
**Version**: 2b2720ff (Latest Checkpoint)
