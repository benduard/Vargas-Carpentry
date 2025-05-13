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
                <p className="font-bold text-xl">15+ Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Vargas?</h2>
            
            <p className="text-lg text-gray-600 mb-8">
              At Vargas Handyman & Custom Carpentry, we pride ourselves on delivering exceptional craftsmanship and reliable service. Our team brings over 15 years of experience to every project, ensuring your home improvements are completed to the highest standards.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-red-600 flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Licensed & Insured</h3>
                  <p className="text-gray-600">Fully licensed and insured for your complete peace of mind.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-red-600 flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Upfront Pricing</h3>
                  <p className="text-gray-600">Clear, honest pricing with no hidden fees or surprise charges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-red-600 flex-shrink-0">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Bilingual Service</h3>
                  <p className="text-gray-600">English and Spanish speaking staff available to better serve our community.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-red-600 flex-shrink-0">
                  <Tool size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Clean Workmanship</h3>
                  <p className="text-gray-600">We leave your home as clean as we found it, with exceptional results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;