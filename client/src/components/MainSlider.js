import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import '../swiper.css';

// import required modules
import { Pagination } from 'swiper';

// import img
import CameraImg from '../img/camera.png';

const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer',
    title: 'Save 20% first service',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    title: 'Save 20% first service',
    btnText: 'Shop now',
  },
  {
    img: CameraImg,
    pretitle: 'Special offer',
    title: 'Save 20% first service',
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
      className='h-full bg-mainSlider bg-no-repeat overflow-hidden'
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex items-start h-full p-[70px]'>
                {/* image */}
                <div className='absolute -bottom-16 -right-24'>
                  <img src={slide.img} alt='' />
                </div>
                <div className='text-[46px] font-semibold uppercase leading-none'>
                  Save 20% <br /> First Service
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
