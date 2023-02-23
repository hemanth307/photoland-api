import React from 'react';
import ProductSlider from './ProductSlider';

const LatestProducts = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <h2 className='h2 mb-4'>Latest Products</h2>
        <ProductSlider />
      </div>
    </div>
  );
};

export default LatestProducts;
