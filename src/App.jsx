import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
import Properties from './pages/properties'; // Import Properties page
import { SearchFilters } from './components/search/SearchFilters';
import { UserTypeSection } from './components/home/UserTypeSection';
import { PropertyGrid } from './components/property/PropertyGrid';
import { usePropertySearch } from './hooks/usePropertySearch';


const sampleProperties = [
  {
    id: '1',
    title: 'Gem Groves',
    description: 'Luxurious 2-bedroom apartment with stunning city views and modern amenities.',
    price: 15000,
    location: 'Padur, OMR',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    imageUrl: 'https://images.nobroker.in/images/8a9fe182845b671601845bb40e7035b6/8a9fe182845b671601845bb40e7035b6_43831_340664_large.jpg',
    type: 'rent',
    features: ['Parking', 'Gym', 'Pool']
  },
  {
    id: '2',
    title: 'Hiranandani Gardens',
    description: 'Spacious 4-bedroom house with a large backyard and modern kitchen.',
    price: 70000000,
    location: 'Thaiyur, OMR',
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    type: 'sale',
    features: ['Garden', 'Garage', 'Fireplace']
  },
  {
    id: '3',
    title: 'Azure The Oceanic',
    description: 'Premium 3-bedroom condo with oceanfront views and high-end finishes.',
    price: 100000,
    location: 'Mandavelipakkam, Chennai',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800',
    type: 'rent',
    features: ['Beach Access', 'Security', 'Balcony']
  }
];

function App() {
  const { filters, updateFilters, filteredProperties } = usePropertySearch(sampleProperties);

  const handleViewDetails = (id) => {
    console.log(`Viewing details for property ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Find Your Perfect Property
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive collection of properties for rent and sale
            </p>
          </div>

          {/* Search Filters */}
          <SearchFilters 
            filters={filters}
            onFilterChange={updateFilters}
          />
          
          {/* User Type Section */}
          <UserTypeSection />

          {/* Property Grid Display */}
          <PropertyGrid 
            properties={filteredProperties}
            onViewDetails={handleViewDetails}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// SEO optimization: Head component
function Head() {
  return (
    <head>
      <title>Property Management Services | Find Your Perfect Property</title>
      <meta name="description" content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations." />
      <meta name="keywords" content="property, real estate, house, apartments for rent, apartments for sale, property management" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Property Management Services | Find Your Perfect Property" />
      <meta property="og:description" content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations." />
      <meta property="og:image" content="https://www.example.com/image.jpg" />
      <meta property="og:url" content="https://www.example.com" />
    </head>
  );
}

function AppWithRouting() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </Router>
  );
}

export default AppWithRouting;
