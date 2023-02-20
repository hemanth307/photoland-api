import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

// import img
import CameraImg from '../img/camera.png';

const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop now',
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      autoplay={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-sm lg:max-w-none rounded-[8px] overflow-hidden'
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
                {/* text */}
                <div className='w-full lg:flex-1'>
                  <div className='uppercase mb-1 text-center lg:text-left'>
                    {slide.pretitle}
                  </div>
                  <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left'>
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                </div>
                {/* image */}
                <div className='flex-1'>
                  <img
                    className='xl:absolute xl:-right-16 xl:-bottom-12'
                    src={slide.img}
                    alt=''
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
