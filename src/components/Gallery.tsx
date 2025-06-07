import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Work</h2>
          <p className="text-lg text-gray-600">
            Browse through our portfolio of completed projects and see the quality of our craftsmanship.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <img 
            src="/images/chandelier-installation-houston.jpg" 
            alt="Custom chandelier installation in Houston home - Vargas Carpentry" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/chandelier-installation-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/modern-chandelier-mounting-houston.jpg" 
            alt="Modern chandelier mounting service - Houston lighting install" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/modern-chandelier-mounting-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/elegant-chandelier-vargas-carpentry-houston.jpg" 
            alt="Elegant chandelier installation by Vargas Carpentry in Houston" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/elegant-chandelier-vargas-carpentry-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/tv-wall-mounting-houston.jpg" 
            alt="TV wall mounting service - Houston home entertainment install" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/tv-wall-mounting-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/trim-molding-carpentry-houston.jpg" 
            alt="Custom trim and molding work - Houston carpentry" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/trim-molding-carpentry-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/drywall-repair-painting-houston.jpg" 
            alt="Drywall repair and painting - Houston handyman service" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/drywall-repair-painting-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/cabinet-installation-storage-houston.jpg" 
            alt="Cabinet installation and custom storage - Houston carpentry" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/cabinet-installation-storage-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/woodworking-shelving-home-improvement-houston.jpg" 
            alt="Custom woodworking and shelving - Houston home improvement" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/woodworking-shelving-home-improvement-houston.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/framing-carpentry-residential-houston.jpg" 
            alt="Framing and carpentry project - Houston residential service" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/framing-carpentry-residential-houston.jpg')} 
            loading="lazy"
          />
          {showAll && (
            <>
              <img 
                src="/images/pressure-washing-exterior-cleaning-houston.jpg" 
                alt="Pressure washing service - Houston exterior cleaning" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/pressure-washing-exterior-cleaning-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/gutter-cleaning-home-maintenance-houston.jpg" 
                alt="Gutter cleaning service - Houston home maintenance" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/gutter-cleaning-home-maintenance-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/window-cleaning-residential-commercial-houston.jpg" 
                alt="Window cleaning service - Houston residential and commercial" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/window-cleaning-residential-commercial-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/deck-outdoor-carpentry-backyard-houston.jpg" 
                alt="Deck and outdoor carpentry project - Houston backyard improvement" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/deck-outdoor-carpentry-backyard-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/store-display-counter-commercial-carpentry-houston.jpg" 
                alt="Store display and counter installation - Houston commercial carpentry" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/store-display-counter-commercial-carpentry-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/general-repairs-remodeling-handyman-houston.jpg" 
                alt="General repairs and remodeling - Houston handyman" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/general-repairs-remodeling-handyman-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/kitchen-island-cabinetry-carpentry-houston.jpg" 
                alt="Custom kitchen island and cabinetry - Houston carpentry" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/kitchen-island-cabinetry-carpentry-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/bathroom-remodel-tile-home-improvement-houston.jpg" 
                alt="Bathroom remodel and tile work - Houston home improvement" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/bathroom-remodel-tile-home-improvement-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/office-renovation-drywall-commercial-houston.jpg" 
                alt="Office renovation and drywall repair - Houston commercial service" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/office-renovation-drywall-commercial-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/trim-molding-residential-carpentry-houston.jpg" 
                alt="Custom trim and molding - Houston residential carpentry" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/trim-molding-residential-carpentry-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/handyman-services-home-repairs-houston.jpg" 
                alt="Expert handyman services - Houston home repairs" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/handyman-services-home-repairs-houston.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/carpentry-handyman-project-vargas-carpentry-houston.jpg" 
                alt="Houston carpentry and handyman project - Vargas Carpentry" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/carpentry-handyman-project-vargas-carpentry-houston.jpg')} 
                loading="lazy"
              />
            </>
          )}
                </div>
        
        <div className="text-center mt-8">
          <button onClick={toggleShowAll} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;