import React from 'react';
import { ShieldCheck, TrendingDown, Clock, MessageSquare, Package, Handshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Premium Quality",
      description: "Products sourced only from trusted and certified processing facilities."
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Competitive Pricing",
      description: "Getting you the best value without compromising on quality."
    },
    {
      icon: <Clock size={32} />,
      title: "Timely Shipments",
      description: "Efficient supply chain management ensuring on-time delivery globally."
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Transparent Communication",
      description: "Clear and honest updates throughout the entire process."
    },
    {
      icon: <Package size={32} />,
      title: "Flexible Packaging",
      description: "Product specifications and packaging tailored to your unique requirements."
    },
    {
      icon: <Handshake size={32} />,
      title: "Long-term Partnerships",
      description: "Building relationships based on trust, integrity, and reliability."
    }
  ];

  return (
    <section id="features" className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-3">The Frozen Station Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Why Choose Us?</h3>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            We understand that every customer has unique business requirements. Our experienced team works closely with buyers to provide the right products with consistent quality and dependable logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-brand-secondary hover:border-brand-secondary transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center text-brand-secondary group-hover:bg-white group-hover:text-brand-primary transition-colors mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
              <p className="text-gray-300 group-hover:text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
