import React from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(
    `/products?populate=*&filters[id][$eq]=${id}`
  );
  console.log(data);

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex gap-x-[30px] mb-16 pt-40 lg:pt-0'>
          <div className='flex-1 grad p-8 rounded-[8px]'>
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=''
            />
          </div>
          <div className='flex-1'>
            <h2>{data[0].attributes.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
