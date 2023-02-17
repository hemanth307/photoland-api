import React from 'react';
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data, loading, error } = useFetch('/categories');
  return (
    <div className='flex flex-col'>
      {data?.map((category) => {
        return (
          <Link
            to={`/products/${category.id}`}
            className='cursor-pointer'
            key={category.id}
          >
            {category.attributes.title}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryNav;
