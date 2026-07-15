import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Shrimps', href: '/products/shrimps' },
    { name: 'Fishes', href: '/products/fishes' },
    { name: 'Crustaceans & Cephalopods', href: '/products/cephalopods' },
  ];

  // Force dark text/white background style if we are not on a page with a dark hero image at the top.
  const hasDarkHero = ['/', '/why-choose-us', '/quality-assurance', '/global-markets'].includes(location.pathname) || location.pathname.startsWith('/products/');
  const isDarkStyle = isScrolled || !hasDarkHero;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkStyle ? 'bg-white shadow-md py-4' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo in a protruding white box */}
          <Link to="/" className="absolute left-0 top-0 bg-white shadow-md px-5 md:px-6 pb-2 pt-2 rounded-b-lg z-10 flex items-center justify-center" style={{ transform: isDarkStyle ? 'translateY(-10px)' : 'translateY(-16px)' }}>
            <img src="/logo.png" alt="Amigo Seafood Logo" className="h-14 md:h-20 w-auto mix-blend-multiply object-contain" />
          </Link>

          {/* Spacer for the absolute logo */}
          <div className="w-40 md:w-56"></div>

          <div className="hidden lg:flex flex-1 justify-end items-center space-x-4 lg:space-x-5 xl:space-x-8">
            <Link to="/" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-[#f4c430]'}`}>
              HOME
            </Link>
            <Link to="/about" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
              ABOUT US
            </Link>

            {/* Products Dropdown */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className={`whitespace-nowrap flex items-center font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
                PRODUCTS <ChevronDown size={14} className="ml-1" />
              </button>
              {/* Invisible area to bridge gap */}
              <div className="absolute left-0 w-full h-4"></div>
              <div className={`absolute left-0 mt-6 w-72 bg-white shadow-xl py-2 z-50 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {productCategories.map((cat, idx) => (
                  <Link key={idx} to={cat.href} className="block px-8 py-4 text-[#0a3161] font-bold text-[13px] xl:text-sm tracking-normal hover:text-[#f4c430] hover:bg-gray-50 transition-colors">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/why-choose-us" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
              WHY CHOOSE US
            </Link>
            <Link to="/quality-assurance" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
              QUALITY ASSURANCE
            </Link>
            <Link to="/global-markets" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
              GLOBAL MARKETS
            </Link>

            <Link to="/contact" className={`whitespace-nowrap font-bold text-[11px] xl:text-xs tracking-widest transition-colors leading-tight ${isDarkStyle ? 'text-[#0a3161] hover:text-[#f4c430]' : 'text-white hover:text-gray-200'}`}>
              CONTACT US
            </Link>
            <Link to="/contact" className="whitespace-nowrap bg-[#f4c430] hover:bg-[#e0b020] text-white px-6 py-2.5 rounded-full font-bold text-[11px] xl:text-xs tracking-widest transition-colors shadow-lg ml-2">
              ENQUIRY
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end flex-1">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`${isDarkStyle ? 'text-[#0a3161]' : 'text-white'} focus:outline-none bg-black/20 p-2 rounded`}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
            <Link to="/about" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>

            <div className="px-3 py-3">
              <span className="block text-[#0a3161] hover:text-[#f4c430] font-bold mb-2">PRODUCTS</span>
              <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                {productCategories.map((cat, idx) => (
                  <Link key={idx} to={cat.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-600 hover:text-[#f4c430]">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/why-choose-us" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>WHY CHOOSE US</Link>
            <Link to="/quality-assurance" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>QUALITY ASSURANCE</Link>
            <Link to="/global-markets" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>GLOBAL MARKETS</Link>

            <Link to="/contact" className="block px-3 py-2 text-[#0a3161] hover:text-[#f4c430] font-bold" onClick={() => setMobileMenuOpen(false)}>CONTACT US</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full mt-4 bg-[#f4c430] text-white px-6 py-3 font-bold">
              ENQUIRY
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
