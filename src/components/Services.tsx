import React from 'react';
import { services } from '../data/services';
import { Tv, Ruler, Hammer, Package, Scissors, Square } from 'lucide-react';

const Services: React.FC = () => {
  // Map service icon names to Lucide React components
  const getIcon = (iconName: string, size = 36) => {
    switch (iconName) {
      case 'tv':
        return <Tv size={size} className="text-red-600" />;
      case 'ruler':
        return <Ruler size={size} className="text-red-600" />;
      case 'hammer':
        return <Hammer size={size} className="text-red-600" />;
      case 'package':
        return <Package size={size} className="text-red-600" />;
      case 'scissors':
        return <Scissors size={size} className="text-red-600" />;
      case 'square':
        return <Square size={size} className="text-red-600" />;
      default:
        return <Hammer size={size} className="text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Services We Offer</h2>
          <p className="text-gray-600 text-center mb-8">
            We handle a wide range of handyman and carpentry services for homes and businesses. Whether it's TV mounting, custom cabinetry, or full remodels — we do it all with care and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">TV Wall Mounting</h3>
            <p className="text-gray-600">Hidden wires, safe mounting on all surfaces.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Furniture Assembly</h3>
            <p className="text-gray-600">Flat-pack or custom, done fast and right.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Mirror & Picture Hanging</h3>
            <p className="text-gray-600">Secure installs with a designer's touch.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Doors, Trim & Molding</h3>
            <p className="text-gray-600">Installations and repairs for perfect finishes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Drywall Repair & Installation</h3>
            <p className="text-gray-600">Patching, texture, and painting.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Custom Cabinetry & Woodworking</h3>
            <p className="text-gray-600">Built to fit and built to last.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Decks, Fences & Outdoor Projects</h3>
            <p className="text-gray-600">From privacy to curb appeal.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Store Displays & Counters</h3>
            <p className="text-gray-600">Commercial-grade custom installs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">General Repairs & Remodeling</h3>
            <p className="text-gray-600">Big or small, we get it done right.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Pressure Washing</h3>
            <p className="text-gray-600">Professional pressure washing services for your home or business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Window Cleaning</h3>
            <p className="text-gray-600">Expert window cleaning to ensure your windows are spotless.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Gutter Cleaning</h3>
            <p className="text-gray-600">Thorough gutter cleaning to prevent water damage and maintain your home.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Request a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;