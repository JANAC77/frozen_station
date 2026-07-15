import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Award, Activity } from 'lucide-react';

const QualityAssurancePage = () => {
  return (
    <div className="w-full font-sans bg-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/about_seafood.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3161]/90 via-[#0a3161]/70 to-[#0a3161]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="w-full md:w-2/3 lg:w-[60%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Quality Assurance
            </h1>
            <div className="flex items-center text-[#f4c430] font-bold text-sm tracking-widest uppercase drop-shadow-md">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-3 w-6 h-[2px] bg-[#f4c430]"></span>
              <span>QUALITY ASSURANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#f4c430] font-bold tracking-widest uppercase text-sm mb-3">Commitment to Excellence</h2>
            <h3 className="text-4xl md:text-[2.75rem] font-bold text-[#0a3161]">Uncompromising Quality</h3>
            <div className="w-24 h-1 bg-[#f4c430] mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Food safety and supreme quality are the cornerstones of our operations. We adhere to the strictest international standards to deliver the best seafood to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#fafafa] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <Shield size={48} className="text-[#0a3161] mb-6" />
              <h4 className="text-xl font-bold text-[#0a3161] mb-3">HACCP Certified</h4>
              <p className="text-gray-600">Strict implementation of Hazard Analysis Critical Control Points in all processing units.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <Award size={48} className="text-[#0a3161] mb-6" />
              <h4 className="text-xl font-bold text-[#0a3161] mb-3">BRC & BAP</h4>
              <p className="text-gray-600">Sourced from globally recognized facilities maintaining Best Aquaculture Practices.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <Activity size={48} className="text-[#0a3161] mb-6" />
              <h4 className="text-xl font-bold text-[#0a3161] mb-3">Laboratory Tested</h4>
              <p className="text-gray-600">Rigorous microbiological and chemical testing at every stage of the supply chain.</p>
            </div>
            <div className="bg-[#fafafa] p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <CheckCircle size={48} className="text-[#0a3161] mb-6" />
              <h4 className="text-xl font-bold text-[#0a3161] mb-3">Traceability</h4>
              <p className="text-gray-600">Complete farm-to-fork tracking systems ensuring origin transparency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityAssurancePage;
