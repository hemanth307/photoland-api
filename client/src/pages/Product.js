import React from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          <div className='flex-1 lg:max-w-[40%] grad rounded-lg flex justify-center items-center'>
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=''
              className='w-full max-w-[80%]'
            />
          </div>
          <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg'>
            <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
            <p>{data[0].attributes.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
