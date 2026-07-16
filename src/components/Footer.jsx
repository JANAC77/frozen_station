import React from 'react';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10 border-t-4 border-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center justify-center mb-6 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img src="/logo.png" alt="Frozen Station Logo" className="h-20 w-auto mix-blend-multiply" style={{ objectFit: 'contain' }} />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We don’t simply supply seafood—we build lasting partnerships by delivering confidence, consistency, and quality with every shipment.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[17px] font-bold text-white mb-6 border-b border-white/10 pb-3 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors text-[15px]">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors text-[15px]">About Us</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Products</Link></li>
              <li><Link to="/why-choose-us" className="text-slate-400 hover:text-white transition-colors text-[15px]">Why Choose Us</Link></li>
              <li><Link to="/quality-assurance" className="text-slate-400 hover:text-white transition-colors text-[15px]">Quality Assurance</Link></li>
              <li><Link to="/global-markets" className="text-slate-400 hover:text-white transition-colors text-[15px]">Global Markets</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[17px] font-bold text-white mb-6 border-b border-white/10 pb-3 inline-block">Our Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Vannamei Shrimp</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Black Tiger Shrimp</Link></li>

              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Mahi Mahi</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Cephalopods</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-secondary shrink-0 mt-1" size={20} />
                <span className="text-gray-400 leading-relaxed">
                  Cochin, Kerala<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-secondary shrink-0" size={20} />
                <span className="text-gray-400">+91 90365 25993</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-brand-secondary shrink-0 mt-1" size={20} />
                <div className="flex flex-col gap-1">
                  <a href="mailto:sales.frozenstation@gmail.com" className="text-gray-400 hover:text-brand-secondary transition-colors">sales.frozenstation@gmail.com</a>
                  <a href="mailto:enquiry@frozenstation.com" className="text-gray-400 hover:text-brand-secondary transition-colors">enquiry@frozenstation.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Frozen Station. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm text-center md:text-right">
            Powered by{' '}
            <a href="https://www.innomatricstech.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 font-bold transition-colors">
              INNOMATRICS TECH
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
