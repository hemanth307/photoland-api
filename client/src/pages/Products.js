import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNav from '../components/CategoryNav';
import useFetch from '../hooks/useFetch';

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
          {/* category nav */}
          <CategoryNav />
          <main>
            {/* title */}
            <div className='py-3 text-xl uppercase'>{title} cameras</div>
            {/* prodcuts grid */}
            <div className='grid grid-cols-4 gap-[30px]'>
              {data?.map((product) => {
                return (
                  <div className='h-[362px] bg-black/20'>
                    {product.attributes.title}
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
