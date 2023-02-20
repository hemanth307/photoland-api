import React from 'react';
// components
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';

const Hero = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
          {/* category sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* slider */}
          <div className='w-full max-w-[734px] mx-auto'>
            <MainSlider />
          </div>
          <div className='flex flex-col gap-y-[30px] w-full max-w-sm mx-auto'>
            {/* promo 1 */}
            <div className='grad flex-1 rounded-[8px]'>promo 1</div>
            {/* promo 2 */}
            <div className='grad flex-1 rounded-[8px]'>promo 2</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
