import React from 'react';
import { PropertyCard } from './PropertyCard';

export const PropertyGrid = ({ properties, onViewDetails }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onViewDetails={onViewDetails}  // Pass onViewDetails to PropertyCard
        />
      ))}
    </div>
  );
};
