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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Expert Carpentry & Handyman Services in Houston</h1>
          
          <p className="text-xl text-white mb-8">
            We are a professional Carpentry and Handyman service with over 26 years of experience in Residential and Commercial work — delivering fast, reliable, high-quality service at fair prices in the Houston Greater Area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-red-600 text-white text-lg font-medium px-8 py-3 rounded-md inline-flex items-center justify-center hover:bg-red-700 transition-colors">
              Request a Free Estimate
            </a>
            <a href="tel:+8323711183" className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white text-lg font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-all">
              Call or Text: (832) 371-1183
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