import React from 'react';
import { Ship, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Ship className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-bold">CruiseMS</span>
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Luxury cruise management system with comprehensive services for an unforgettable voyage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catering" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Catering</Link>
              </li>
              <li>
                <Link to="/stationery" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Stationery</Link>
              </li>
              <li>
                <Link to="/bookings/movie" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Resort-Movie</Link>
              </li>
              <li>
                <Link to="/bookings/salon" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Beauty Salon</Link>
              </li>
              <li>
                <Link to="/bookings/fitness" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Fitness Center</Link>
              </li>
              <li>
                <Link to="/bookings/party" className="text-neutral-300 hover:text-accent-500 transition-colors text-sm">Party Hall</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">123 Cruise Lane, Ocean City, OC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-accent-500 mr-2 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">info@cruisems.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">© {currentYear} CruiseMS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-neutral-400 hover:text-accent-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-neutral-400 hover:text-accent-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};