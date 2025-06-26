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

**✅ No manual environment variable setup required!** All configuration is included in the project.

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
- **Auto-deployment ready** - no manual configuration needed

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

3. Start the development server:
```bash
npm run dev
```

**Note**: Environment variables are pre-configured in the project for seamless deployment.

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

## 🚨 Deployment Notes

### ✅ What's Included
- All environment variables are configured in `netlify.toml`
- Supabase connection settings are embedded
- Build configuration is optimized
- Security headers are pre-configured
- SPA routing is handled automatically

### 🔧 No Manual Setup Required
Unlike typical deployments, this project includes all necessary configuration:
- ✅ Environment variables in `netlify.toml`
- ✅ Build settings configured
- ✅ Database connection ready
- ✅ Security headers included

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

## 🔒 Environment Variables

All environment variables are pre-configured in the project:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

These are set in both `.env` (for local development) and `netlify.toml` (for deployment).

## 📄 License

This project is proprietary and confidential. All rights reserved.