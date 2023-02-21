import React from 'react';
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';
// icons
import { FiX } from 'react-icons/fi';

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch('/categories');
  return (
    <div className='w-full h-full bg-accent'>
      <div onClick={() => setCatNavMobile(false)}>
        <FiX className='text-primary text-3xl' />
      </div>
      <div className='flex flex-col gap-y-5'>
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              className='text-primary capitalize text-lg font-semibold'
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
