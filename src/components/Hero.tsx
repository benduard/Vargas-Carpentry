import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url("Vargas Assets/HeroCover4x.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Handyman & Carpentry Services
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Need help now? I'm Ruben, a professional handyman and carpenter with over 26 years of experience in residential and commercial work — delivering fast, reliable, high-quality service at fair prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="tel:+17135555555" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={20} />
            (713) 555-5555
          </a>
          <a 
            href="mailto:info@vargascarpentry.com" 
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Mail size={20} />
            info@vargascarpentry.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;