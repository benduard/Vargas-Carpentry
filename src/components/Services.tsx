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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of handyman and carpentry services to help make your home more beautiful and functional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="mb-4">{getIcon(service.icon)}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
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