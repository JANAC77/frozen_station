import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Features />
    </main>
  );
};

export default HomePage;
