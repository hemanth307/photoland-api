import React from 'react';
import { Link } from 'react-router-dom';
// icons
import { FiSearch } from 'react-icons/fi';

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className='w-full h-[362px] bg-gradient-to-t from-[#1F2126] to-[#33363D] rounded-[8px] drop-shadow-2xl overflow-hidden group'>
        {/* image */}
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          <img
            className='w-[160px] h-[160px]'
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=''
          />
        </div>
        {/* text */}
        <div className='px-6 pb-8 flex flex-col'>
          {/* category title */}
          <div className='text-sm text-accent capitalize mb-2'>
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}

          <div className='text-[15px] mb-9'>
            {product.attributes.title.substring(0, 40)}...
          </div>

          {/* price */}
          <div className='text-lg text-accent'>${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
