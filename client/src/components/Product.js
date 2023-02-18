import React from 'react';
import { Link } from 'react-router-dom';
// background: linear-gradient(180deg, #363941 0%, rgba(62, 66, 75, 0) 100%);
const Product = ({ product }) => {
  // console.log(product.attributes.price);
  return (
    <div className='w-full h-[362px] bg-gradient-to-t from-[#1F2126] to-[#33363D] rounded-[8px] drop-shadow-2xl overflow-hidden mx-auto'>
      {/* image */}
      <div className='w-full h-[200px] flex items-center justify-center'>
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
        <Link to={`/product/${product.id}`} className='mb-9'>
          <div className='text-[15px]'>
            {product.attributes.title.substring(0, 40)}...
          </div>
        </Link>
        {/* price */}
        <div className='text-lg text-accent'>${product.attributes.price}</div>
      </div>
    </div>
  );
};

export default Product;
