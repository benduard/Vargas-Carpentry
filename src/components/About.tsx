import React from 'react';
import { CheckCircle, Award, HeartHandshake, PenTool as Tool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Handyman working" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">26+ Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-center mb-4">Why Choose Vargas Carpentry?</h2>
            <p className="text-gray-600 text-center mb-8">
              At Vargas Carpentry & Handyman Services, we bring over 26 years of experience to every project. From basic repairs to full remodels, we take pride in doing clean, reliable work — always at affordable prices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Upfront Pricing</h3>
                <p className="text-gray-600">Free estimates and no surprise charges.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Clean Workmanship</h3>
                <p className="text-gray-600">We treat your space like it's our own.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Bilingual Service</h3>
                <p className="text-gray-600">English & Spanish spoken fluently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Reliable & Easygoing</h3>
                <p className="text-gray-600">No job too small.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">Same-day or next-day availability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">26+ Years Experience</h3>
                <p className="text-gray-600">Over two decades of delivering quality craftsmanship and reliable service.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;