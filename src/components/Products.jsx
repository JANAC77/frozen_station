import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('shrimp');

  const categories = [
    { id: 'shrimp', name: 'Shrimp Products' },
    { id: 'fish', name: 'Fish Products' },
    { id: 'cephalopods', name: 'Cephalopods' },
  ];

  const productsData = {
    shrimp: {
      image: "/product_tiger.png",
      title: "Premium Shrimp",
      description: "Carefully processed to meet international quality and food safety standards.",
      items: ["Vannamei (Whiteleg Shrimp)", "Black Tiger Shrimp"],
      stylesTitle: "Available Processing Styles:",
      styles: ["HOSO (Head-On Shell-On)", "HLSO (Headless Shell-On)", "PD (Peeled & Deveined)", "PDTO (Peeled Deveined Tail-On)", "EZ Peel", "IQF & Block Frozen", "Custom packing as per requirements"]
    },
    fish: {
      image: "/product_tuna.png",
      title: "Finest Catch Fish",
      description: "Our comprehensive range of fish products is sourced fresh and frozen rapidly to lock in quality.",
      items: ["Yellowfin Tuna", "Skipjack Tuna", "Mahi Mahi", "Swordfish", "Indian Mackerel", "Leather Jacket", "And many other Fish Products"],
    },
    cephalopods: {
      image: "/product_cephalopod.png",
      title: "Quality Cephalopods",
      description: "Expertly sourced and processed cephalopods ensuring tender texture and supreme taste.",
      items: ["Cuttlefish", "Squid", "Octopus"],
    }
  };

  const activeData = productsData[activeTab];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-3">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-primary">Our Products</h3>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            We specialize in a comprehensive range of frozen seafood products, carefully processed to meet international quality and food safety standards.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeTab === cat.id 
                ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/30 transform -translate-y-1' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-brand-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Display Area */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 flex flex-col md:flex-row">
          
          <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden group">
            <img 
              src={activeData.image} 
              alt={activeData.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
            <h4 className="absolute bottom-8 left-8 text-3xl font-bold text-white">{activeData.title}</h4>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-gray-600 text-lg mb-8">{activeData.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activeData.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-secondary"></div>
                  <span className="text-brand-primary font-medium">{item}</span>
                </div>
              ))}
            </div>

            {activeData.styles && (
              <div className="mt-2 pt-6 border-t border-gray-200">
                <h5 className="font-bold text-brand-primary mb-4">{activeData.stylesTitle}</h5>
                <div className="flex flex-wrap gap-2">
                  {activeData.styles.map((style, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-gray-700 text-sm px-4 py-2 rounded-lg shadow-sm">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;
