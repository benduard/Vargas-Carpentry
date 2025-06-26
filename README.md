# Vargas Carpentry & Handyman Services

A professional website for Vargas Carpentry & Handyman Services in Houston, Texas. Built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 Live Site

Visit the live website: [https://luminous-kleicha-1cdc27.netlify.app](https://luminous-kleicha-1cdc27.netlify.app)

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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vargas-carpentry.git
cd vargas-carpentry
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

## 🗄️ Database Setup

### Supabase Configuration

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Create the contact form table by running this SQL in the Supabase SQL editor:

```sql
-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS "Vargas-Carpentry" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text NOT NULL,
  service text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE "Vargas-Carpentry" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for contact form submissions)
CREATE POLICY "Allow contact form submissions"
  ON "Vargas-Carpentry"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated users to read submissions
CREATE POLICY "Allow authenticated users to read submissions"
  ON "Vargas-Carpentry"
  FOR SELECT
  TO authenticated
  USING (true);
```

## 🚀 Deployment

### Netlify Deployment

This project is configured for automatic deployment on Netlify.

#### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set the following build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

4. Add environment variables in Netlify dashboard:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon key

#### Option 2: Manual Deploy

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Environment Variables for Production

Make sure to set these environment variables in your Netlify dashboard:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

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

## 🎨 Customization

### Colors
The primary color scheme uses red (#D32F2F) and can be customized in `tailwind.config.js`.

### Content
- Update business information in the components
- Replace images in the `public/` directory
- Modify services in `src/data/services.ts`
- Update testimonials in `src/data/testimonials.ts`

### SEO
- Update meta tags in `index.html`
- Modify structured data for local business
- Update sitemap and robots.txt as needed

## 📞 Contact Information

- **Phone**: (832) 371-1183
- **Email**: info@vargas-carpentry.com
- **Service Area**: Houston and surrounding areas

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical support or questions about the website, please contact the development team.