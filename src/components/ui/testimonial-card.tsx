import React from 'react';
import { TestimonialType } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <p className="text-gray-600 mb-4 flex-grow">{testimonial.text}</p>
      <div>
        <p className="font-semibold text-gray-900">{testimonial.author}</p>
        <p className="text-gray-500 text-sm">{testimonial.location}</p>
      </div>
    </div>
  );
}; 