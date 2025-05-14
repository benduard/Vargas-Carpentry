import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Read testimonials from our satisfied clients throughout Houston.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"Vargas Handyman installed our kitchen cabinets and they look amazing! On time, professional, and cleaned up after the job."</p>
            <p className="font-bold">— Sarah Johnson</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"I needed TVs mounted throughout my home. The team made sure every mount was clean and secure. Great service!"</p>
            <p className="font-bold">— Michael Rodriguez</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"The custom woodwork Vargas did for my store counter was top-notch. Highly recommend!"</p>
            <p className="font-bold">— Jennifer Williams</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-600 hover:underline block mt-4"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;