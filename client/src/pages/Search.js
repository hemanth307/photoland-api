import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  console.log(data);

  return <div>Search</div>;
};

export default Search;
