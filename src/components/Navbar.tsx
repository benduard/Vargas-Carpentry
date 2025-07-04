import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-0' : 'bg-transparent py-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/favicon/Logo2.png" 
              alt="Vargas Handyman Logo" 
              className="h-16 sm:h-20 md:h-24 lg:h-32 rounded-full bg-transparent object-cover ml-0 mt-2 mb-2" 
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg md:text-xl`}>Home</a>
              <a href="#services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg md:text-xl`}>Services</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg md:text-xl`}>About</a>
              <a href="#gallery" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg md:text-xl`}>Gallery</a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg md:text-xl`}>Contact</a>
            </nav>
            
            <a href="tel:+8323711183" className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
              <Phone size={18} className="mr-2" />
              <span>(832) 371-1183</span>
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <a href="tel:+8323711183" className="flex items-center text-red-600 mr-4">
              <Phone size={20} />
            </a>
            <button onClick={toggleMenu} className="text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#services" onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors font-medium">Services</a>
              <a href="#about" onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors font-medium">About</a>
              <a href="#gallery" onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors font-medium">Gallery</a>
              <a href="#contact" onClick={toggleMenu} className="text-gray-800 hover:text-red-600 transition-colors font-medium">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;