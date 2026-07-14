import React from 'react';
import { MapPin, Award, Anchor } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-secondary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/about_seafood.png"
                alt="State-of-the-art seafood processing port"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs border-l-4 border-brand-secondary">
              <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
                <Award size={32} />
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-primary">30+</p>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Anchor className="text-brand-secondary" size={20} />
              <h2 className="text-brand-secondary font-bold tracking-widest uppercase text-sm">About Frozen Station</h2>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              India's Finest Seafood, <br /> Delivered Globally.
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Frozen Station is a trusted global supplier of premium frozen seafood, committed to delivering exceptional quality, competitive pricing, and reliable service to customers worldwide.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With the experience of over 3 decades in the Indian seafood industry, we have built a strong reputation for sourcing high-quality seafood products that meet the stringent standards of international markets.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-secondary/10 p-3 rounded-full text-brand-secondary mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-primary mb-2">Based in the Seafood Capital</h4>
                <p className="text-gray-600">
                  Our office is based in <strong>Cochin (Kochi), Kerala</strong>. We are strategically positioned to source the finest seafood directly from India’s leading processing plants and exporters.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
