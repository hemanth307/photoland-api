import React, { useEffect, useState } from 'react';
// icons
import { FiSearch } from 'react-icons/fi';
// useNavigate hook
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value = '';
      setSearchTerm('');
    } else {
      setIsAnimating(true);
    }
  };

  return (
    <form
      className={`${
        isAnimating ? 'animate-shake' : 'animate-none'
      } relative w-full`}
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleSearchInput}
        type='text'
        placeholder='Search for a product...'
        className='input'
      />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-xl' />
      </button>
    </form>
  );
};

export default SearchForm;
