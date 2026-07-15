import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/hero_shrimps_bg_1784091843780.png',
    subtitle: 'MOST DELICIOUS',
    titleFirst: 'Vanamei',
    titleHighlight: 'HLSO',
    link: '/products/shrimps'
  },
  {
    id: 2,
    image: '/product_tiger.png',
    subtitle: 'INDIAN SEAFOOD',
    titleFirst: 'Black Tiger',
    titleHighlight: 'HLSO',
    link: '/products/shrimps'
  },
  {
    id: 3,
    image: '/prod_pink_hlso_1784091940904.png',
    subtitle: 'PREMIUM SEAFOOD',
    titleFirst: 'Pink',
    titleHighlight: 'SHRIMPS',
    link: '/products/shrimps'
  },
  {
    id: 4,
    image: '/hero_cephalopods_1784093040420.png',
    subtitle: 'EXPERTLY SOURCED',
    titleFirst: 'Quality',
    titleHighlight: 'CEPHALOPODS',
    link: '/products/cephalopods'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] md:h-[95vh] flex items-center pt-20 overflow-hidden bg-[#0a3161]">
      
      {/* Background Images - mapping all for crossfade effect */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          {/* Subtle Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3161]/80 via-[#0a3161]/40 to-transparent"></div>
        </div>
      ))}

      {/* Slider Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white transition-all z-20"
      >
        <ArrowLeft size={24} className="md:w-7 md:h-7" />
      </button>

      {/* Slider Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white/90 hover:text-white transition-all z-20"
      >
        <ArrowRight size={24} className="md:w-7 md:h-7" />
      </button>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 sm:px-20 lg:px-32 w-full pt-12 h-full flex items-center">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute w-full md:w-3/4 lg:w-[70%] transition-all duration-700 transform ${
              index === current 
                ? 'opacity-100 translate-y-0 relative' 
                : 'opacity-0 translate-y-8 absolute pointer-events-none'
            }`}
          >
            <div className="flex items-center text-[#f4c430] font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 drop-shadow-md">
              <span className="w-8 sm:w-10 h-[2px] bg-[#f4c430] mr-3 sm:mr-4"></span>
              <span>{slide.subtitle}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight drop-shadow-xl leading-[1.1]">
              {slide.titleFirst} <span className="text-[#f4c430]">{slide.titleHighlight}</span>
            </h1>

            <div className="inline-flex flex-col sm:flex-row shadow-2xl pointer-events-auto">
              <Link to={slide.link} className="bg-[#0a3161] hover:bg-blue-900 text-white px-6 py-3 sm:px-8 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase transition-colors text-center flex items-center justify-center">
                LEARN MORE
              </Link>
              <Link to="/contact" className="bg-[#f4c430] hover:bg-[#e0b020] text-white px-6 py-3 sm:px-8 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase transition-colors text-center flex items-center justify-center">
                CONTACT US
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-[#f4c430] w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
