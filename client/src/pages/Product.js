import React from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';
// icons
import { FiPlus, FiMinus } from 'react-icons/fi';

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className='container mx-auto'>loading...</div>;
  }

  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px]'>
          <div className='flex-1 lg:max-w-[40%] grad rounded-lg flex justify-center items-center'>
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt=''
              className='w-full max-w-[65%]'
            />
          </div>
          <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg'>
            <div className='uppercase text-accent text-lg font-medium mb-2'>
              {data[0].attributes.categories.data[0].attributes.title} cameras
            </div>
            <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
            <p className='mb-4'>{data[0].attributes.description}</p>
            <div className='text-3xl text-accent font-semibold mb-6'>
              ${data[0].attributes.price}
            </div>
            {/* quantity & btn */}
            <div className='flex gap-x-4'>
              <div className='bg-white w-full max-w-[140px] h-[50px] rounded-lg text-primary flex justify-between items-center overflow-hidden'>
                {/* minus */}
                <button className='w-full h-full flex justify-center items-center border-r text-sm'>
                  <FiMinus />
                </button>
                {/* amount */}
                <div className='w-36 flex justify-center items-center text-lg'>
                  1
                </div>
                {/* plus */}
                <button className='w-full h-full flex justify-center items-center border-l text-sm'>
                  <FiPlus />
                </button>
              </div>
              <button className='btn btn-accent'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
