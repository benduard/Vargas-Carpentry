# Vargas Carpentry & Handyman Services

A professional website for Vargas Carpentry & Handyman Services in Houston, Texas. Built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Quick Deploy to Netlify

### Method 1: Direct GitHub Integration (Recommended)

1. **Push to GitHub**: Make sure all your code is pushed to your GitHub repository
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Netlify will auto-detect the settings from `netlify.toml`

3. **Add Environment Variables** in Netlify Dashboard:
   ```
   VITE_SUPABASE_URL = https://gfdkfwdnlwapniehgytp.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZGtmd2RubHdhcG5pZWhneXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzkyMzksImV4cCI6MjA2NDExNTIzOX0.CFMuHlCPB_duFJxJBGRFXQ1uQKVujs5t-MIDBRxkuXE
   ```

### Method 2: Manual Deploy

If GitHub integration isn't working:

1. **Build locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `dist` folder** directly to Netlify by dragging it to netlify.com

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Deployment**: Netlify
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📋 Features

- Responsive design optimized for all devices
- Contact form with Supabase integration
- Image gallery with lightbox functionality
- Testimonials carousel
- Service showcase
- Professional business information
- SEO optimized with meta tags and structured data

## 🚀 Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vargas-carpentry
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your Supabase credentials (already configured):
```env
VITE_SUPABASE_URL=https://gfdkfwdnlwapniehgytp.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmZGtmd2RubHdhcG5pZWhneXRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MzkyMzksImV4cCI6MjA2NDExNTIzOX0.CFMuHlCPB_duFJxJBGRFXQ1uQKVujs5t-MIDBRxkuXE
```

5. Start the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

The Supabase database is already configured and ready to use. The contact form will automatically save submissions to the `Vargas-Carpentry` table.

### Database Schema

```sql
-- Contact form submissions table
CREATE TABLE "Vargas-Carpentry" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);
```

## 🚨 Common Deployment Issues & Solutions

### Issue 1: Build Fails
**Solution**: Make sure you have Node.js 18+ and all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 2: Environment Variables Not Working
**Solution**: In Netlify dashboard, go to Site Settings > Environment Variables and add:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Issue 3: 404 Errors on Page Refresh
**Solution**: The `netlify.toml` file includes redirects to handle this automatically.

### Issue 4: Images Not Loading
**Solution**: Make sure all images in the `public/` folder are committed to your repository.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Gallery.tsx     # Image gallery
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation
│   ├── Services.tsx    # Services showcase
│   └── ...
├── data/               # Static data
├── lib/                # Utilities and configurations
├── types/              # TypeScript type definitions
└── App.tsx             # Main app component
```

## 📞 Contact Information

- **Phone**: (832) 371-1183
- **Email**: info@vargas-carpentry.com
- **Service Area**: Houston and surrounding areas

## 📄 License

This project is proprietary and confidential. All rights reserved.