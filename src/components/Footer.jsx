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
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-secondary transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
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
              <li><Link to="/products" className="text-slate-400 hover:text-white transition-colors text-[15px]">Yellowfin Tuna</Link></li>
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
              <li className="flex items-center gap-3">
                <Mail className="text-brand-secondary shrink-0" size={20} />
                <span className="text-gray-400">sales.frozenstation@gmail.com</span>
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
