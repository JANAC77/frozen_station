import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero_seafood.png")'
        }}
      >
        {/* Subtle Gradient Overlay for basic text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-primary to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
        <div className="w-full md:w-2/3 lg:w-3/5 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in-up">
            <span className="text-brand-secondary font-semibold tracking-wider text-sm uppercase">Premium Quality Seafood</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Your Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-200">
              Global Seafood
            </span> Partner
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Delivering exceptional quality, competitive pricing, and reliable service to customers worldwide with over 3 decades of experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/products" className="bg-brand-secondary hover:bg-white hover:text-brand-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-brand-secondary/30">
              Explore Products
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
