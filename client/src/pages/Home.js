import React from 'react';
import Benefits from '../components/Benefits';
// components
import Hero from '../components/Hero';
import LatestProducts from '../components/LatestProducts';
// import useFetch from '../hooks/useFetch';

const Home = () => {
  // const {data} = useFetch('/products?populate=*');
  // console.log(data);
  return (
    <section>
      <Hero />
      <Benefits />
      <LatestProducts />
    </section>
  );
};

export default Home;
