import React from 'react';
import useFetch from '../hooks/useFetch';
// components
import ProductSlider from './ProductSlider';

const LatestProducts = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true');
  return (
    <div className='mb-16' id="latest">
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Latest Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default LatestProducts;
