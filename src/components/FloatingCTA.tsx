import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Only render on mobile and tablet
  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 md:hidden transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="flex space-x-3">
        <a 
          href="tel:+1234567890" 
          className="bg-red-600 text-white flex items-center justify-center px-5 py-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
        >
          <Phone size={20} className="mr-2" />
          <span className="font-medium">Call Now</span>
        </a>
        <a 
          href="#contact" 
          className="bg-gray-900 text-white flex items-center justify-center px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <span className="font-medium">Get Quote</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;