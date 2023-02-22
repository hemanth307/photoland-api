import React, { useState } from 'react';
// icons
import { FiSearch } from 'react-icons/fi';
// useNavigate hook
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchTerm}`);
    document.querySelector('input').value = '';
  };

  return (
    <form className='relative w-full' onSubmit={handleSubmit}>
      <input
        onChange={handleSearchInput}
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
