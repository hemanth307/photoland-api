import React from 'react';
// background: linear-gradient(180deg, #363941 0%, rgba(62, 66, 75, 0) 100%);
const Product = ({ product }) => {
  console.log(product);
  return (
    <div className='w-full h-[362px] bg-gradient-to-t from-[#1F2126] to-[#33363D] rounded-[8px] drop-shadow-2xl overflow-hidden mx-auto'>
      {/* image */}
      <div className='bg-pink-50/20 w-full h-[200px]'>
        {/* {product.attributes.image.data} */}
      </div>
      {/* title */}
      <div>{product.attributes.title}</div>
    </div>
  );
};

export default Product;
// drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
