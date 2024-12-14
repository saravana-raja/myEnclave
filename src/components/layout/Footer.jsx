import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-[#72ac4f]" />
              <span className="text-xl font-bold text-white">myEnclave</span>
            </div>
            <p className="text-sm">
              Your trusted partner in finding the perfect property. Making property management simple and efficient.
            </p>
            {/*<div className="flex space-x-4">
              <a href="#" className="hover:text-[#72ac4f] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#72ac4f] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#72ac4f] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#72ac4f] transition-colors">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#72ac4f] transition-colors">Home</a></li>
              <li><a href="/properties" className="hover:text-[#72ac4f] transition-colors">Properties</a></li>
              <li><a href="/about" className="hover:text-[#72ac4f] transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#72ac4f] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#72ac4f] transition-colors">Property Listing</a></li>
              <li><a href="#" className="hover:text-[#72ac4f] transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-[#72ac4f] transition-colors">Rental Services</a></li>
              <li><a href="#" className="hover:text-[#72ac4f] transition-colors">Lease Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#72ac4f]" />
              <span>support@myenclave.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#72ac4f]" />
              <span>+91 9787518289</span>
            </div>
            <div className="flex items-center gap-2">
              {/*<MapPin size={16} className="text-[#72ac4f]" />
              <span>123 Property Street, Real Estate City, 12345</span>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} myEnclave. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-[#72ac4f] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#72ac4f] transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-[#72ac4f] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};