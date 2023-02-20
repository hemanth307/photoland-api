import React from 'react';
// images
import Logo from '../img/logo.png';
// icons
import { FiSearch } from 'react-icons/fi';
import { SlBag } from 'react-icons/sl';

// link
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-primary mb-[30px] py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-4 lg:items-center justify-between'>
          {/* logo */}
          <Link to={'/'}>
            <img src={Logo} alt='' />
          </Link>
          {/* search */}
          <form className='relative w-full max-w-[734px]'>
            <input
              type='text'
              placeholder='Search products...'
              className='h-[50px] rounded-[8px] w-full outline-none px-6 text-primary'
            />
            <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
              <FiSearch className='text-xl' />
            </button>
          </form>
          {/* phone & cart */}
          <div className='flex items-center gap-x-[10px]'>
            <div>Need help? 1234 567 8910</div>
            <div>
              <SlBag className='text-2xl' />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
