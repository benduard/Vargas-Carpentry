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
            src="/images/Chandalier1.jpeg" 
            alt="Chandelier Installation 1" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Chandalier1.jpeg')} 
            loading="lazy"
          />
          <img 
            src="/images/Chandalier3.jpeg" 
            alt="Chandelier Installation 2" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Chandalier3.jpeg')} 
            loading="lazy"
          />
          <img 
            src="/images/Chandalier4.jpeg" 
            alt="Chandelier Installation 3" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Chandalier4.jpeg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover1.jpg" 
            alt="Cover 1" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover1.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover2.1.jpg" 
            alt="Cover 2" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover2.1.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover3.jpg" 
            alt="Cover 3" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover3.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover4.jpg" 
            alt="Cover 4" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover4.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover5.jpg" 
            alt="Cover 5" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover5.jpg')} 
            loading="lazy"
          />
          <img 
            src="/images/Cover6.jpg" 
            alt="Cover 6" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
            onClick={() => openLightbox('/images/Cover6.jpg')} 
            loading="lazy"
          />
          {showAll && (
            <>
              <img 
                src="/images/Cover7.jpg" 
                alt="Cover 7" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover7.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover8.jpg" 
                alt="Cover 8" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover8.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover9.jpg" 
                alt="Cover 9" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover9.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover10.jpg" 
                alt="Cover 10" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover10.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover11.jpg" 
                alt="Cover 11" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover11.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover12.jpg" 
                alt="Cover 12" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover12.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover13.jpg" 
                alt="Cover 13" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover13.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover14.jpg" 
                alt="Cover 14" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover14.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover15.jpg" 
                alt="Cover 15" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover15.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover17.jpg" 
                alt="Cover 17" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover17.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover18.jpg" 
                alt="Cover 18" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover18.jpg')} 
                loading="lazy"
              />
              <img 
                src="/images/Cover19.jpg" 
                alt="Cover 19" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox('/images/Cover19.jpg')} 
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