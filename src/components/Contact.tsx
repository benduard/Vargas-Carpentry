import React, { useState } from 'react';
import { services } from '../data/services';
import { Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const { error: submitError } = await supabase
        .from('Vargas-Carpentry')
        .insert([
          {
            full_name: formData.full_name,
            email: formData.email,
            phone_number: formData.phone_number,
            service: formData.service,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({
        full_name: '',
        phone_number: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Fill out the form below and we'll get back to you as soon as possible with a free quote.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-600 text-white p-4 rounded-md mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : null}

            {error && (
              <div className="bg-red-600 text-white p-4 rounded-md mb-6">
                <p className="font-medium">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="full_name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone_number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium mb-1">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Get a Free Quote'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone size={24} className="text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+8323711183" className="text-xl text-white hover:text-red-500 transition-colors">(832) 371-1183</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:info@vargas-carpentry.com" className="text-white hover:text-red-500 transition-colors">info@vargas-carpentry.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={24} className="text-red-500 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Service Area</p>
                    <p>Houston and surrounding areas</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-8">
                <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <span className="bg-green-500 h-3 w-3 rounded-full mr-2"></span>
                  <span className="text-white">Available for emergency services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;