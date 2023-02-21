import React from 'react';
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';
// icons
import { FiX } from 'react-icons/fi';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories');
  return (
    <div className='w-full h-full bg-primary p-8'>
      <div
        className='flex justify-end mb-8'
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className='text-3xl' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className='uppercase font-medium'
              key={category.id}
            >
              {category.attributes.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
