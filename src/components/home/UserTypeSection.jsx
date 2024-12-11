import React from 'react';
import { Home, Building } from 'lucide-react';

export const UserTypeSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow order-first">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-[#f0f7ec] rounded-full">
            <Building className="h-8 w-8 text-[#72ac4f]" />
          </div>
          <h3 className="text-2xl font-semibold">For Property Owners</h3>

           <p className="text-gray-600"> <strong>List your property and reach thousands of potential tenants or buyers. Easy management and quick responses.</strong></p>


          <p className="text-gray-600">
            Owning a flat and struggling to rent it?
          </p>
          <p className="text-gray-600">
            We are here to take over with above market rent
          </p>
          <p className="text-gray-600">
            Assured rental</p>
          
          <p className="text-gray-600">
           Free Maintainance
          </p><p className="text-gray-600">
            Contract from 2 to 10 years
          </p>
          <button className="mt-4 text-[#72ac4f] font-semibold hover:text-[#5f9341] transition-colors">
            List Your Property →
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-[#f0f7ec] rounded-full">
            <Home className="h-8 w-8 text-[#72ac4f]" />
          </div>
          <h3 className="text-2xl font-semibold">For Tenants</h3>
          <p className="text-gray-600">
            <strong>Find your perfect service apartment. Browse through our extensive collection of apartments, houses, and condos.</strong>
          </p>
          <p className="text-gray-600">
            Struggling to find a stay?
          </p>
          <p className="text-gray-600">
            We are here to help you find a good service apartment
           </p>
          <p className="text-gray-600">
           Affordable rent
          </p>
        <p className="text-gray-600">
            Various properties as per your needs
          </p>
            <p className="text-gray-600">
            Prime locations
          </p>
          <button className="mt-4 text-[#72ac4f] font-semibold hover:text-[#5f9341] transition-colors">
            Start Browsing →
          </button>
        </div>
      </div>
    </div>
  );
};