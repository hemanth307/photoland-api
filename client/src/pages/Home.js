import React from 'react';
// components
import CategoryNav from '../components/CategoryNav';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-x-[30px]'>
          <CategoryNav />
          {/* banner */}
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default Home;
