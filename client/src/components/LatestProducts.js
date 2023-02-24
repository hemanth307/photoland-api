import React from 'react';
import ProductSlider from './ProductSlider';

const LatestProducts = () => {
  return (
    <div className='mb-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
        <ProductSlider />
      </div>
    </div>
  );
};

export default LatestProducts;
