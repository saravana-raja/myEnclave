import React from 'react';
import { Header } from '../components/layout/Header';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for any inquiries or support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                ></textarea>
              </div>
              <Button variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#72ac4f]" />
                  <span>support@myenclave.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#72ac4f]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-[#72ac4f]" />
                  <span>123 Property Street, Real Estate City, 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
