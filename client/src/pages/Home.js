import React from 'react';
import Benefits from '../components/Benefits';
// components
import Hero from '../components/Hero';
import LatestProducts from '../components/LatestProducts';

const Home = () => {
  return (
    <section>
      <Hero />
      <Benefits />
      <LatestProducts />
    </section>
  );
};

export default Home;
