import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Anchor, Truck } from 'lucide-react';

const GlobalMarketsPage = () => {
  return (
    <div className="w-full font-sans bg-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero_fishes_1784093049957.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3161]/90 via-[#0a3161]/70 to-[#0a3161]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="w-full md:w-2/3 lg:w-[60%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Global Markets
            </h1>
            <div className="flex items-center text-[#f4c430] font-bold text-sm tracking-widest uppercase drop-shadow-md">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-3 w-6 h-[2px] bg-[#f4c430]"></span>
              <span>GLOBAL MARKETS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#f4c430] font-bold tracking-widest uppercase text-sm mb-3">Worldwide Reach</h2>
            <h3 className="text-4xl md:text-[2.75rem] font-bold text-[#0a3161]">Exporting Excellence</h3>
            <div className="w-24 h-1 bg-[#f4c430] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Our premium seafood products are trusted by importers, distributors, and retailers across major global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#0a3161] rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                <Globe size={40} />
              </div>
              <h4 className="text-2xl font-bold text-[#0a3161] mb-4">Major Destinations</h4>
              <p className="text-gray-600">Exporting regularly to the European Union, Middle East, China, and Southeast Asia.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-[#0a3161] rounded-full flex items-center justify-center text-white mb-6 shadow-xl">
                <Truck size={40} />
              </div>
              <h4 className="text-2xl font-bold text-[#0a3161] mb-4">Customized Shipping</h4>
              <p className="text-gray-600">Flexible LCL and FCL shipping options tailored to your specific volume and schedule requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalMarketsPage;
