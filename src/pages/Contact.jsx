import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/layout/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL = 'https://docs.google.com/forms/d/e/1Mm-QARN3Sq21ay8Lg7_zXXAg0z0shxFOV7yugbncx7M/formResponse'; // Replace FORM_ID with your Google Form's ID
    const formBody = new URLSearchParams({
      'entry.1711080598': formData.name, // Replace with actual Google Form field entry IDs
      'entry.1075641019': formData.email,
      'entry.1058915316': formData.message,
    });

    fetch(googleFormURL, {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again later.');
      });
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#72ac4f]"
                  required
                ></textarea>
              </div>
              <Button variant="primary" className="w-full" type="submit">
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
                  <span>+91 9787518289</span>
                </div>
              </div>
            </div>

            {/*<div>
              <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div> */}
          </div>
        </div>
      </main>
      {/* Footer */}
 <Footer />
    </div>
  );
};

 

export default Contact;
