import React from 'react';
import { Header } from '../components/layout/Header';
import { SearchFilters } from '../components/search/SearchFilters';
import { PropertyGrid } from '../components/property/PropertyGrid';

const properties = [
  // ... (using the same sample properties from App.js)
];

const Properties = () => {
  const handleViewDetails = (id) => {
    console.log(`Viewing details for property ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Available Properties</h1>
        <SearchFilters/>
        <div className="mt-8">
          <PropertyGrid 
            properties={properties}
            onViewDetails={handleViewDetails}
          />
        </div>
      </main>
    </div>
  );
};

export default Properties;
