import React, { useContext } from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFetch hook
import useFetch from '../hooks/useFetch';
// components
import RelatedProducts from '../components/RelatedProducts';
// context
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  if (!data) {
    return <div className='container mx-auto'>loading...</div>;
  }
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return (
    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
          <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
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
            <button
              onClick={(e) => addToCart(data, id)}
              className='btn btn-accent'
            >
              Add to cart
            </button>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
