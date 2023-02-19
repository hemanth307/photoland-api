import React from 'react';
import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';

const Home = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-x-[30px]'>
          <div>
            <CategoryNav />
          </div>
          {/* slider */}
          <div className='w-full max-w-[734px]'>
            <MainSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
