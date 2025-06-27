import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vargas Carpentry & Handyman Services</h3>
            <p className="mb-4 text-sm md:text-base">Professional carpentry and handyman services you can trust, committed to quality workmanship.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@vargas-carpentry.com" className="text-white hover:text-red-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>(832) 371-1183</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>info@vargas-carpentry.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>Houston and surrounding areas</span>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="text-gray-400">Houston</li>
              <li className="text-gray-400">Katy</li>
              <li className="text-gray-400">Sugar Land</li>
              <li className="text-gray-400">The Woodlands</li>
              <li className="text-gray-400">And surrounding areas</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vargas Carpentry & Handyman Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;