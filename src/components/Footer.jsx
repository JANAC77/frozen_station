import React from 'react';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Call to Action Banner */}
        <div className="bg-brand-primary rounded-3xl p-10 mb-16 shadow-2xl transform -translate-y-1/2 mt-[-80px] flex flex-col md:flex-row items-center justify-between border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">Ready to partner with us?</h3>
            <p className="text-brand-secondary font-medium text-lg">Delivering confidence, consistency, and quality with every shipment.</p>
          </div>
          <Link to="/contact" className="relative z-10 bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg whitespace-nowrap">
            Contact Our Team
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 mt-[-40px]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center justify-center mb-6 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="/logo.png" alt="Frozen Station Logo" className="h-20 w-auto mix-blend-multiply" style={{ objectFit: 'contain' }} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We don’t simply supply seafood—we build lasting partnerships by delivering confidence, consistency, and quality with every shipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-brand-secondary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-brand-secondary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-brand-secondary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-sm font-medium text-gray-400 hover:text-brand-secondary transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Products</Link></li>
              <li><Link to="/#features" className="text-gray-400 hover:text-brand-secondary transition-colors">Why Choose Us</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-secondary transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Our Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Vannamei Shrimp</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Black Tiger Shrimp</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Yellowfin Tuna</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Mahi Mahi</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-brand-secondary transition-colors">Cephalopods</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-secondary shrink-0 mt-1" size={20} />
                <span className="text-gray-400 leading-relaxed">
                  Cochin (Kochi), Kerala<br />
                  Seafood Capital of India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-secondary shrink-0" size={20} />
                <span className="text-gray-400">+91 000 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-secondary shrink-0" size={20} />
                <span className="text-gray-400">info@frozenstation.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Frozen Station. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
