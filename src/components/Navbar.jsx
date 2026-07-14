import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Frozen Station Logo" className="h-16 md:h-20 w-auto mix-blend-multiply" style={{ objectFit: 'contain' }} />
            <div className="flex flex-col hidden sm:flex">
              <span className="text-brand-primary font-bold text-2xl md:text-3xl leading-none tracking-tight">FROZEN STATION</span>
              <span className="text-brand-secondary text-[10px] md:text-xs uppercase tracking-widest font-semibold mt-1">FROM INDIA TO THE WORLD</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-brand-secondary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-primary hover:bg-brand-accent text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-primary/30 hover:shadow-brand-accent/40 transform hover:-translate-y-0.5 inline-block text-center">
              ENQUIRY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-primary hover:text-brand-accent focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-brand-secondary/10 hover:text-brand-primary rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full mt-4 bg-brand-primary text-white px-6 py-3 rounded-md font-medium">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
