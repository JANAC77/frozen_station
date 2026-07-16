import React, { useState } from 'react';
import { Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [activeTab, setActiveTab] = useState('shrimp');

  const oldCategories = [
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
      image: "/prod_tuna_whole.jpg",
      title: "Finest Catch Fish",
      description: "Our comprehensive range of fish products is sourced fresh and frozen rapidly to lock in quality.",
      items: ["Skipjack Tuna", "Mahi Mahi", "Swordfish", "Indian Mackerel", "Leather Jacket", "And many other Fish Products"],
    },
    cephalopods: {
      image: "/product_cephalopod.png",
      title: "Quality Cephalopods",
      description: "Expertly sourced and processed cephalopods ensuring tender texture and supreme taste.",
      items: ["Squid", "Octopus"],
    }
  };

  const activeData = productsData[activeTab];

  const categories = [
    {
      id: 'shrimps',
      name: 'Shrimps',
      image: '/category_shrimps_1784091855313.png',
      link: '/products/shrimps'
    },
    {
      id: 'fishes',
      name: 'Fishes',
      image: '/category_fishes_1784091868850.png',
      link: '/products/fishes'
    },
    {
      id: 'crustaceans',
      name: 'Crustaceans &\nCephalopods',
      image: '/category_crustaceans_1784091896139.png',
      link: '/products/cephalopods'
    }
  ];

  const specificProducts = [
    {
      id: 'vanamei-hlso',
      name: 'Vanamei HLSO',
      image: '/prod_vanamei_hlso_1784091909375.png',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'vanamei-pdto',
      name: 'Vanamei Blanched\nPDTO',
      image: '/prod_vanamei_blanched_1784091920472.png',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'pink-hlso',
      name: 'Pink HLSO',
      image: '/prod_pink_hlso_1784091940904.png',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'scampi-hlso',
      name: 'Scampi HLSO',
      image: '/prod_scampi_hlso_1784091950349.png',
      actionText: 'More Details',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'pud-karikkadi',
      name: 'PUD Karikkadi',
      image: '/prod_pud_karikkadi_1784091960941.png',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'pud-poovalan',
      name: 'PUD Poovalan',
      image: '/prod_pud_poovalan_1784091981251.png',
      actionText: 'More Details',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    }
  ];

  return (
    <div className="w-full font-sans">
      
      {/* Our Seafood Categories Section */}
      <section className="py-12 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#f4c430]"></span>
              <span className="text-[#f4c430] font-bold tracking-widest text-sm uppercase">Categories</span>
            </div>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#0a3161] tracking-tight leading-tight">Our Seafood Categories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="relative bg-white pt-6 pb-2 px-8 -mt-12 z-10 w-4/5 shadow-sm min-h-[5rem] flex items-center">
                   <h3 className="text-[#0a3161] text-xl font-bold whitespace-pre-line leading-tight">{cat.name}</h3>
                </div>
                <div className="bg-[#0a3161] p-6 mt-auto flex justify-between items-center text-white">
                  <Link to={cat.link} className="flex items-center gap-2 text-sm font-medium hover:text-[#f4c430] transition-colors tracking-wide">
                    More Details <span className="text-lg leading-none">→</span>
                  </Link>
                  <Database size={28} className="opacity-90" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Detailed Information Section */}
      <section className="py-24 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#0a3161] tracking-tight leading-tight">Detailed Information</h2>
          </div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {oldCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition-all duration-300 ${
                  activeTab === cat.id 
                  ? 'bg-[#0a3161] text-white shadow-xl shadow-[#0a3161]/30 transform -translate-y-1' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#0a3161] border border-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Display Area */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 flex flex-col md:flex-row">
            
            <div className="md:w-1/2 relative h-56 md:h-auto overflow-hidden group">
              <img 
                src={activeData.image} 
                alt={activeData.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a3161]/80 to-transparent"></div>
              <h4 className="absolute bottom-4 left-6 md:bottom-8 md:left-8 text-2xl md:text-3xl font-bold text-white">{activeData.title}</h4>
            </div>

            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">{activeData.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {activeData.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f4c430]"></div>
                    <span className="text-[#0a3161] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {activeData.styles && (
                <div className="mt-2 pt-6 border-t border-gray-200">
                  <h5 className="font-bold text-[#0a3161] mb-4">{activeData.stylesTitle}</h5>
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

    </div>
  );
};

export default Products;
