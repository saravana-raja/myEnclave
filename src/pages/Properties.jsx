import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { sampleProperties } from '../data/sampleProperties';
import { PropertyGrid } from '../components/property/PropertyGrid';
import { Button } from '../components/ui/Button'; 
import { Home, Bath, BedDouble, MapPin } from 'lucide-react';

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null); // Track selected property

  const handleViewDetails = (propertyId) => {
    const property = sampleProperties.find((p) => p.id === propertyId); // Find the selected property by ID
    setSelectedProperty(property); // Set the selected property to show in the modal
  };

  const closeModal = () => {
    setSelectedProperty(null); // Close the modal
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
        <PropertyGrid properties={sampleProperties} onViewDetails={handleViewDetails} />

        {/* Show modal if a property is selected */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 max-w-3xl w-full transition-transform transform scale-[1.02]">
              {/* Close button (X) */}
              <button 
  onClick={closeModal} 
  className="absolute top-2 right-2 text-3xl font-bold text-gray-500 hover:text-gray-800"
>
  &times;
</button>


              {/* Display property details inside a modal */}
              <div className="relative h-48">
                <img
                  src={selectedProperty.imageUrl}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#72ac4f] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedProperty.type === 'sale' ? 'For Sale' : 'For Rent'}
                </div>
              </div>

              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{selectedProperty.title}</h2>
                <p className="text-gray-600 mb-4">{selectedProperty.description}</p>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <BedDouble size={18} />
                      <span>{selectedProperty.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={18} />
                      <span>{selectedProperty.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Home size={18} />
                      <span>{selectedProperty.area}m²</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-[#72ac4f] font-bold text-xl">
                    ₹ {selectedProperty.price.toLocaleString()}
                    {selectedProperty.type === 'rent' && '/month'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
