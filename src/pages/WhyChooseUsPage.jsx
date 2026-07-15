import React from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';

const WhyChooseUsPage = () => {
  return (
    <div className="w-full font-sans bg-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero_seafood.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3161]/90 via-[#0a3161]/70 to-[#0a3161]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="w-full md:w-2/3 lg:w-[60%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Why Choose Us
            </h1>
            <div className="flex items-center text-[#f4c430] font-bold text-sm tracking-widest uppercase drop-shadow-md">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-3 w-6 h-[2px] bg-[#f4c430]"></span>
              <span>WHY CHOOSE US</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-20">
        <Features />
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
