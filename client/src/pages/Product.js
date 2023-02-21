import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  // console.log(data);
  return (
    <div>
      <div className='container mx-auto'>Product</div>
    </div>
  );
};

export default Product;
