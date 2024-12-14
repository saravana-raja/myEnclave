import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/properties';
import PropertyDetails from './pages/PropertyDetails';
import { SearchFilters } from './components/search/SearchFilters';
import { UserTypeSection } from './components/home/UserTypeSection';
import { PropertyGrid } from './components/property/PropertyGrid';
import { usePropertySearch } from './hooks/usePropertySearch';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { sampleProperties } from './data/sampleProperties';
import { Helmet } from 'react-helmet';
import { Home, Building } from 'lucide-react';


function App() {
  const { filters, updateFilters, filteredProperties } = usePropertySearch(sampleProperties);

  const handleViewDetails = (id) => {
    // Navigate to the property details page
    window.location.href = `/properties/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-6 px-4 py-12 bg-gradient-to-r from-[#72ac4f] to-[#5f9341] rounded-lg shadow-lg">
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
              Find Your Perfect Property
            </h1>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Browse through our exclusive collection of premium properties for rent and sale. Find the perfect home or investment today.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => window.scrollTo({ top: document.getElementById('properties').offsetTop, behavior: 'smooth' })}
                className="px-8 py-3 bg-[#f4f4f4] text-[#5f9341] text-lg font-semibold rounded-lg hover:bg-[#e0e0e0] transition-colors"
              >
                Start Browsing
              </button>
            </div>
            <div className="flex justify-center mt-8 space-x-8">
              <div className="flex items-center text-white space-x-2">
                <Home className="h-6 w-6" />
                <span className="text-lg">Browse from exclusive listings</span>
              </div>
              <div className="flex items-center text-white space-x-2">
                <Building className="h-6 w-6" />
                <span className="text-lg">Find your dream home or investment</span>
              </div>
            </div>
          </div>

          {/* Search Filters */}
          <SearchFilters filters={filters} onFilterChange={updateFilters} />

          {/* User Type Section */}
          <UserTypeSection />

          {/* Property Grid Display */}
          <PropertyGrid properties={filteredProperties} onViewDetails={handleViewDetails} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

// SEO optimization using react-helmet
function Head() {
  return (
    <Helmet>
      <title>Property Management Services | Find Your Perfect Property</title>
      <meta
        name="description"
        content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations."
      />
      <meta
        name="keywords"
        content="property, real estate, house, apartments for rent, apartments for sale, property management"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Property Management Services | Find Your Perfect Property"
      />
      <meta
        property="og:description"
        content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations."
      />
      <meta property="og:image" content="https://www.example.com/image.jpg" />
      <meta property="og:url" content="https://www.example.com" />
    </Helmet>
  );
}

function PropertyDetailsPage() {
  const { id } = useParams(); // Get the id from URL parameters
  const property = sampleProperties.find((p) => p.id === id); // Find the property by id

  const handleClose = () => {
    window.history.back(); // Close and go back to the previous page
  };

  if (!property) {
    return <div>Property not found</div>;
  }

  return <PropertyDetails property={property} onClose={handleClose} />;
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
        <Route path="/properties/:id" element={<PropertyDetailsPage />} /> {/* Dynamic route for PropertyDetails */}
      </Routes>
    </Router>
  );
}

export default AppWithRouting;
