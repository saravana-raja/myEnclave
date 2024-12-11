import React from 'react';
import { Header } from '../components/layout/Header';
import { Building2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-[#72ac4f] mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">About myEnclave</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At myEnclave, we're committed to revolutionizing the way people find and manage properties. 
              Our platform connects property owners with potential tenants and buyers, making the process 
              seamless and efficient.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a future where finding your dream property or managing your real estate 
              investments is straightforward and stress-free. Through innovation and dedication, 
              we're making this vision a reality.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extensive Network',
                description: 'Access to thousands of properties and verified owners'
              },
              {
                title: 'Verified Listings',
                description: 'All properties are verified for authenticity and quality'
              },
              {
                title: 'Expert Support',
                description: '24/7 support from our experienced team of professionals'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};