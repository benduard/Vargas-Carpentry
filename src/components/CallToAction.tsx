import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Next Home Improvement Project?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether it's a small repair or a custom carpentry project, we're here to help transform your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#contact" 
            className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a 
            href="tel:+8323711183" 
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium px-8 py-3 rounded-md inline-flex items-center justify-center transition-colors"
          >
            Call (832) 371-1183
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;