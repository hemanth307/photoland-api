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
  return (
    <div>
      <div>
        <CategoryNav />
      </div>
      <main>
        <div className='capitalize'>{title} cameras</div>
      </main>
    </div>
  );
};

export default Products;
