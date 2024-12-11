import React, { useState } from 'react';
import { Building2, Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-[#72ac4f]" />
            <span className="text-xl font-bold">myEnclave</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a href="/" className="text-gray-700 hover:text-[#72ac4f]">Home</a>
              <a href="/properties" className="text-gray-700 hover:text-[#72ac4f]">Properties</a>
              <a href="/about" className="text-gray-700 hover:text-[#72ac4f]">About</a>
              <a href="/contact" className="text-gray-700 hover:text-[#72ac4f]">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button variant="primary" size="sm">
                List Property
              </Button>
            </div>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
};