import React, { useState } from 'react';
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

  // All images from public/images folder
  const allImages = [
    {
      src: "/images/chandelier-installation-houston.jpg",
      alt: "Custom chandelier installation in Houston home - Vargas Carpentry"
    },
    {
      src: "/images/modern-chandelier-mounting-houston.jpg",
      alt: "Modern chandelier mounting service - Houston lighting install"
    },
    {
      src: "/images/elegant-chandelier-vargas-carpentry-houston.jpg",
      alt: "Elegant chandelier installation by Vargas Carpentry in Houston"
    },
    {
      src: "/images/tv-wall-mounting-houston.jpg",
      alt: "TV wall mounting service - Houston home entertainment install"
    },
    {
      src: "/images/trim-molding-carpentry-houston.jpg",
      alt: "Custom trim and molding work - Houston carpentry"
    },
    {
      src: "/images/drywall-repair-painting-houston.jpg",
      alt: "Drywall repair and painting - Houston handyman service"
    },
    {
      src: "/images/cabinet-building-houston.jpg",
      alt: "Custom cabinet building and installation - Houston carpentry"
    },
    {
      src: "/images/woodworking-shelving-home-improvement-houston.jpg",
      alt: "Custom woodworking and shelving - Houston home improvement"
    },
    {
      src: "/images/framing-carpentry-residential-houston.jpg",
      alt: "Framing and carpentry project - Houston residential service"
    },
    {
      src: "/images/pressure-washing-exterior-cleaning-houston.jpg",
      alt: "Pressure washing service - Houston exterior cleaning"
    },
    {
      src: "/images/trim-molding-residential-carpentry-houston.jpg",
      alt: "Custom trim and molding - Houston residential carpentry"
    },
    {
      src: "/images/office-renovation-drywall-commercial-houston.jpg",
      alt: "Office renovation and drywall repair - Houston commercial service"
    },
    {
      src: "/images/gutter-cleaning-home-maintenance-houston.jpg",
      alt: "Gutter cleaning service - Houston home maintenance"
    },
    {
      src: "/images/window-cleaning-residential-commercial-houston.jpg",
      alt: "Window cleaning service - Houston residential and commercial"
    },
    {
      src: "/images/curtain-room-remodel.jpg",
      alt: "Curtain room remodel project - Houston home improvement"
    },
    {
      src: "/images/deck-outdoor-carpentry-backyard-houston.jpg",
      alt: "Deck and outdoor carpentry project - Houston backyard improvement"
    },
    {
      src: "/images/store-display-counter-commercial-carpentry-houston.jpg",
      alt: "Store display and counter installation - Houston commercial carpentry"
    },
    {
      src: "/images/kitchen-island-cabinetry-carpentry-houston.jpg",
      alt: "Custom kitchen island and cabinetry - Houston carpentry"
    },
    {
      src: "/images/general-repairs-remodeling-handyman-houston.jpg",
      alt: "General repairs and remodeling - Houston handyman"
    },
    {
      src: "/images/Image26.jpg",
      alt: "Vargas Carpentry project showcase - Houston carpentry and handyman services"
    },
    {
      src: "/images/Dining-room-remodel.jpg",
      alt: "Dining room remodel project - Houston home renovation"
    },
    {
      src: "/images/TV-Television-Installation.jpg",
      alt: "TV and television installation service - Houston home entertainment"
    },
    {
      src: "/images/handyman-services-home-repairs-houston.jpg",
      alt: "Expert handyman services - Houston home repairs"
    }
  ];

  // Show first 9 images by default, rest when "Show More" is clicked
  const displayedImages = showAll ? allImages : allImages.slice(0, 9);

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
          {displayedImages.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => openLightbox(image.src)} 
              loading="lazy"
            />
          ))}
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