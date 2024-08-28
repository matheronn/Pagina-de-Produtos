import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../services/apiService';
import ProductItem from '../components/Product';

export default function CategoryPage({ category }){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
    };
    getProducts();
  }, [category]);

  return (
    <div className='container my-10'>
      <div className="flex flex-wrap justify-center gap-5">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};