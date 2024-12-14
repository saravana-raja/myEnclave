import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Building2 } from 'lucide-react';
import WhatsAppButton from "../components/ui/WhatsAppButton"; // WhatsApp Button Import

const About = () => {
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

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Additional Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We also specialize in furnishing unfurnished service apartments to meet the diverse needs of tenants. 
            Whether you own an unfurnished property or are looking for a hassle-free rental, we take care of 
            everything—from furnishing the space to renting it out, ensuring that your property is ready to go.
          </p>
        </div>

        {/* Now the "Why Choose Us" section is at the bottom */}
        <div className="mt-16">
  <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[ 
      {
        title: 'Personalized Service',
        description: 'As a new and dedicated platform, we focus on providing personalized attention to each client, ensuring a tailored experience.'
      },
      {
        title: 'Verified Listings',
        description: 'We thoroughly verify all properties to ensure quality and authenticity, giving you peace of mind.'
      },
      {
        title: 'Expert Support',
        description: 'Our passionate team is available to offer expert advice and support throughout your property journey.'
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
      {/* Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
