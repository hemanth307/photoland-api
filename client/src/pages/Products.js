import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// components
import CategoryNav from '../components/CategoryNav';
import Product from '../components/Product';

const Products = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );
  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });
  console.log(data);
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex gap-x-[30px]'>
          <div className='hidden xl:flex'>
            <CategoryNav />
          </div>
          {/* category nav */}
          <main>
            {/* title */}
            <div className='py-3 text-xl uppercase text-center lg:text-left'>
              {title} cameras
            </div>
            {/* products grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
