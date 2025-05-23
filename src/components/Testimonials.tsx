import { TestimonialsSection } from './ui/testimonials-with-marquee';
import { testimonials as rawTestimonials } from '../data/testimonials';

// Helper function to determine if a name is likely feminine
const isFeminineName = (name: string) => {
  const feminineNames = ['Sarah', 'Lisa', 'Emily', 'Maria', 'Sofia', 'Emma', 'Anna', 'Laura', 'Jessica', 'Jennifer'];
  return feminineNames.some(fName => name.toLowerCase().includes(fName.toLowerCase()));
};

export default function Testimonials() {
  const testimonials = rawTestimonials.map(testimonial => ({
    author: {
      name: testimonial.author,
      handle: testimonial.location,
      avatar: ''
    },
    text: testimonial.text
  }));

  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="Read testimonials from our satisfied clients throughout Houston."
      testimonials={testimonials}
    />
  );
}