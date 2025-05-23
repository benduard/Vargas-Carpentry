import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/Vargas Assets/Image26.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Expert Carpentry & Handyman Services in Houston
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8">
            We are a professional Carpentry and Handyman service with over 26 years of experience in Residential and Commercial work — delivering fast, reliable, high-quality service at fair prices in the Houston Greater Area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center">
              Get a Free Quote
            </a>
            <a href="#services" className="bg-white text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center">
              Our Services
            </a>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <span className="text-white text-sm">✅ Trusted by 200+ Happy Clients Across Houston</span>
            <span className="text-white text-sm">🕒 Same-day & Next-day Service Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;