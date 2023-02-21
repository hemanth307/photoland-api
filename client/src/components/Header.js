import React, { useState } from 'react';
// images
import Logo from '../img/logo.png';
// icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
// link
import { Link } from 'react-router-dom';
// components
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';

const Header = () => {
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className='bg-primary xl:mb-[30px] py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0'>
          {/* menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className='text-3xl lg:hidden cursor-pointer'
          >
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? 'left-0' : '-left-full'
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-300`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to={'/'}>
            <img src={Logo} alt='' />
          </Link>
          {/* searchform - show on desktop */}
          <div className='hidden lg:flex w-full lg:max-w-[640px] xl:max-w-[734px]'>
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div className='flex items-center gap-x-[10px]'>
            <div className='hidden xl:flex'>Need help? 1234 567 8910</div>
            <div className='relative cursor-pointer'>
              <SlBag className='text-2xl' />
              {/* cart amount */}
              <div className='bg-accent text-primary absolute w-4 h-4 rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold'>
                3
              </div>
            </div>
          </div>
        </div>
        {/* searchform - show on mobile */}
        <div className='lg:hidden'>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
