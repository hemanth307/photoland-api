import React, { useContext, useState } from 'react';
// images
import Logo from '../img/logo.png';
// icons
import { SlBag } from 'react-icons/sl';
import { FiMenu } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
// link
import { Link } from 'react-router-dom';
// components
import SearchForm from './SearchForm';
import CategoryNavMobile from './CategoryNavMobile';
import Cart from './Cart';
// context
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [catNavMobile, setCatNavMobile] = useState(false);
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]'>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 lg:mb-0'>
          {/* menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className='text-3xl xl:hidden cursor-pointer'
          >
            <FiMenu />
          </div>
          {/* category nav mobile */}
          <div
            className={`${
              catNavMobile ? 'left-0' : '-left-full'
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to={'/'}>
            <img src={Logo} alt='' />
          </Link>
          {/* searchform - show on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px]'>
            <SearchForm />
          </div>
          {/* phone & cart */}
          <div className='flex items-center gap-x-[10px]'>
            <div className='hidden xl:flex uppercase mx-2'>
              Need help <BiPhoneCall className='ml-2' size={24} /> 9100876163
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='relative cursor-pointer'
            >
              <SlBag className='text-2xl' />
              {/* cart amount */}
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>
                {itemsAmount}
              </div>
            </div>
            {/* cart */}
            <div
              className={`${
                isOpen ? 'right-0' : '-right-full'
              } bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full md:max-w-[500px] z-10 transition-all duration-300`}
            >
              <Cart />
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
