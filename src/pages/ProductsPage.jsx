import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';
import ProductItem from '../components/Product';
import Pagination from '../components/Pagination';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container my-10'>
      <div className="flex flex-wrap justify-center gap-5">
        {currentProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};