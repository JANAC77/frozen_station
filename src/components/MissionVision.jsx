import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="bg-white p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary"></div>
            <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To connect global seafood buyers with India’s finest seafood products by delivering exceptional quality, professional service, and complete customer satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-brand-primary p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl"></div>
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 text-lg leading-relaxed relative z-10">
              To become one of the world’s most trusted seafood sourcing partners by continuously exceeding customer expectations through quality, reliability, integrity, and long-term business relationships.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
