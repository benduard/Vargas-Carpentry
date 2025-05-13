import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Expert Handyman & Custom Carpentry Services in Houston
          </h1>
          
          <p className="text-xl text-white opacity-90 mb-8">
            From TV Mounting to Custom Woodwork – Quality Workmanship You Can Trust
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Request a Free Estimate
              <ArrowRight size={18} className="ml-2" />
            </a>
            
            <a 
              href="tel:+1234567890" 
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white text-lg font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-all"
            >
              Call (123) 456-7890
            </a>
          </div>
          
          <div className="mt-8 text-white flex items-center">
            <div className="flex -space-x-2 mr-3">
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3760822/pexels-photo-3760822.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/4989593/pexels-photo-4989593.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
              <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Customer" />
            </div>
            <span className="text-sm">Trusted by 200+ happy customers in Houston</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;