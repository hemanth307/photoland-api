import React from 'react';
// components
import CategoryNav from './CategoryNav';
import MainSlider from './MainSlider';
// images
import PromoImg1 from '../img/promo_img1.png';
import PromoImg2 from '../img/promo_img2.png';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Hero = () => {
  const { data } = useFetch('/categories');
  return (
    <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* slider */}
          <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
            <MainSlider />
          </div>
          <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
            {/* promo 1 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='max-w-[144px] h-full flex flex-col justify-center'>
                <div className='text-[20px] font-medium leading-tight mb-4'>
                  SAVE 35% ALL DSLR CAMERAS
                </div>
                  <button className='btn btn-accent w-fit h-auto'>
                    <Link
                      to={`/products/1`}
                      className='cursor-pointer uppercase text-black'
                      >
                      Shop
                    </Link>
                  </button>
                </div>
              <img
                className='absolute z-20 -top-2 -right-4'
                src={PromoImg1}
                alt=''
              />
            </div>
            {/* promo 2 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              {/* text */}
              <div className='max-w-[144px] h-full flex flex-col justify-center'>
                <div className='text-[20px] font-medium leading-tight mb-4'>
                  SAVE 25% MIRRORLESS CAMERAS
                </div>
                  <button className='btn btn-accent w-fit h-auto'>
                      <Link
                        to={`/products/2`}
                        className='cursor-pointer uppercase text-black'
                        >
                        Shop
                      </Link>
                  </button>
              </div>
              <img
                className='absolute z-20 top-4 -right-6'
                src={PromoImg2}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
