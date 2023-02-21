import React from 'react';
// icons
import { FiSearch } from 'react-icons/fi';

const SearchForm = () => {
  return (
    <form className='relative w-full'>
      <input
        type='text'
        placeholder='Search products...'
        className='h-[50px] rounded-[8px] w-full outline-none px-6 text-primary'
      />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-xl' />
      </button>
    </form>
  );
};

export default SearchForm;
