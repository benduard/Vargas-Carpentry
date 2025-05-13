import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vargas Handyman & Custom Carpentry</h3>
            <p className="mb-4">Professional handyman and carpentry services you can trust. Licensed, insured, and committed to quality workmanship.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@vargashandyman.com" className="text-white hover:text-red-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>info@vargashandyman.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 flex-shrink-0" />
                <span>Serving Los Angeles County and surrounding areas</span>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p>Monday-Friday: 8am-6pm</p>
                  <p>Saturday: 9am-4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-red-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400">Licensed & Insured</p>
              <p className="text-sm text-gray-400">CA License #123456</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vargas Handyman & Custom Carpentry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;