import React from 'react';
import { Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShrimpsPage = () => {
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
      id: 'black-tiger-hoso',
      name: 'Black Tiger',
      image: '/prod_black_tiger_hoso.jpg',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'vannamei-hlso-51-60',
      name: 'Vannamei HLSO',
      image: '/prod_vannamei_hlso_51_60.jpg',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'vannamei-pd',
      name: 'Vannamei PD',
      image: '/prod_vannamei_pd.jpg',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
    {
      id: 'pvpdto-16-20',
      name: 'Vannamei PDTO',
      image: '/prod_pvpdto_16_20.jpg',
      actionText: 'Contact Us',
      actionIcon: <Smartphone size={24} className="text-white opacity-90" strokeWidth={1.5} />
    },
  ];

  return (
    <div className="w-full font-sans bg-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/hero_shrimps_bg_1784091843780.png")' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a3161]/90 via-[#0a3161]/60 to-[#0a3161]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
          <div className="w-full md:w-2/3 lg:w-[60%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
              Shrimps
            </h1>
            <div className="flex items-center text-[#f4c430] font-bold text-sm tracking-widest uppercase drop-shadow-md">
              <Link to="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="mx-3 w-6 h-[2px] bg-[#f4c430]"></span>
              <span>SHRIMPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-[#f4c430]"></span>
              <span className="text-[#f4c430] font-bold tracking-widest text-sm uppercase">Our Seafood Products</span>
            </div>
            <h2 className="text-4xl md:text-[2.75rem] font-bold text-[#0a3161] tracking-tight">Shrimps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
            {specificProducts.map((prod) => (
              <div key={prod.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="relative bg-white pt-6 pb-2 px-8 -mt-12 z-10 w-[85%] shadow-sm min-h-[5rem] flex items-center">
                  <h3 className="text-[#0a3161] text-[1.3rem] font-bold whitespace-pre-line leading-tight">{prod.name}</h3>
                </div>
                <div className="bg-[#0a3161] p-5 mt-auto flex justify-between items-center text-white">
                  <Link to={`/contact?product=${prod.id}`} className="flex items-center gap-2 text-sm font-medium hover:text-[#f4c430] transition-colors tracking-wide">
                    {prod.actionText} <span className="text-lg leading-none">→</span>
                  </Link>
                  {prod.actionIcon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShrimpsPage;
