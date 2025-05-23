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
            src="./Vargas Assets/Cover1.jpg" 
            alt="Cover 1" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover1.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover2.1.jpg" 
            alt="Cover 2" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover2.1.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover3.jpg" 
            alt="Cover 3" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover3.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover4.jpg" 
            alt="Cover 4" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover4.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover5.jpg" 
            alt="Cover 5" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover5.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover6.jpg" 
            alt="Cover 6" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover6.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover7.jpg" 
            alt="Cover 7" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover7.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover8.jpg" 
            alt="Cover 8" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover8.jpg')} 
          />
          <img 
            src="./Vargas Assets/Cover9.jpg" 
            alt="Cover 9" 
            className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
            onClick={() => openLightbox('./Vargas Assets/Cover9.jpg')} 
          />
          {showAll && (
            <>
              <img 
                src="./Vargas Assets/Cover10.jpg" 
                alt="Cover 10" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover10.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover11.jpg" 
                alt="Cover 11" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover11.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover12.jpg" 
                alt="Cover 12" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover12.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover13.jpg" 
                alt="Cover 13" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover13.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover14.jpg" 
                alt="Cover 14" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover14.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover15.jpg" 
                alt="Cover 15" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover15.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover17.jpg" 
                alt="Cover 17" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover17.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover18.jpg" 
                alt="Cover 18" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover18.jpg')} 
              />
              <img 
                src="./Vargas Assets/Cover19.jpg" 
                alt="Cover 19" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Cover19.jpg')} 
              />
              <img 
                src="./Vargas Assets/Image26.jpg" 
                alt="Image 26" 
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer" 
                onClick={() => openLightbox('./Vargas Assets/Image26.jpg')} 
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