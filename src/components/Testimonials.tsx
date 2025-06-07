import React from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialCard } from './ui/testimonial-card';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Read testimonials from our satisfied clients throughout Houston.
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-6">
            <div className="flex animate-marquee-mobile md:animate-marquee-desktop">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[300px] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            <div className="flex animate-marquee-mobile md:animate-marquee-desktop">
              {testimonials.map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="w-[300px] flex-shrink-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;