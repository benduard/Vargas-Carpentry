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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Top row with centered logo */}
          <div className="flex justify-center items-center py-2">
            <img 
              src="/favicon/Logo2.png" 
              alt="Vargas Handyman Logo" 
              className="h-20 sm:h-24 rounded-full bg-transparent object-cover" 
            />
          </div>
          
          {/* Bottom row with phone and menu */}
          <div className="flex justify-between items-center pb-2">
            <div></div> {/* Empty div for spacing */}
            <div className="flex items-center space-x-3">
              <a href="tel:+8323711183" className={`flex items-center ${isScrolled ? 'text-red-600' : 'text-white'} hover:text-red-500 transition-colors`}>
                <Phone size={20} />
              </a>
              <button 
                onClick={toggleMenu} 
                className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-red-600 transition-colors`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="hidden md:flex justify-between items-center min-h-[90px]">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/favicon/Logo2.png" 
              alt="Vargas Handyman Logo" 
              className="h-28 lg:h-32 xl:h-36 rounded-full bg-transparent object-cover" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <nav className="flex items-center space-x-4 xl:space-x-6">
              <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg whitespace-nowrap`}>Home</a>
              <a href="#services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg whitespace-nowrap`}>Services</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg whitespace-nowrap`}>About</a>
              <a href="#gallery" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg whitespace-nowrap`}>Gallery</a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-lg whitespace-nowrap`}>Contact</a>
            </nav>
            
            <a href="tel:+8323711183" className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap ml-4">
              <Phone size={18} className="mr-2" />
              <span className="text-sm lg:text-base">(832) 371-1183</span>
            </a>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="flex lg:hidden items-center space-x-4">
            <nav className="flex items-center space-x-3">
              <a href="#" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap`}>Home</a>
              <a href="#services" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap`}>Services</a>
              <a href="#about" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap`}>About</a>
              <a href="#gallery" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap`}>Gallery</a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors font-medium text-base whitespace-nowrap`}>Contact</a>
            </nav>
            
            <a href="tel:+8323711183" className="flex items-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">(832) 371-1183</span>
            </a>
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