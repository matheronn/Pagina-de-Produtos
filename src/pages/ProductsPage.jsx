import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';
import ProductItem from '../components/Product';
import Pagination from '../components/Pagination';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [sortOption, setSortOption] = useState('price-asc');

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setSortedProducts(data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const sortProducts = (products, sortOption) => {
      let sorted = [...products];
      switch (sortOption) {
        case 'price-asc':
          sorted.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          sorted.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sorted.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          sorted.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
      return sorted;
    };

    setSortedProducts(sortProducts(products, sortOption));
  }, [products, sortOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='container my-10'>
      <h2>Todos os produtos</h2>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">Filtro:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="price-asc">Preço: Ascendente</option>
          <option value="price-desc">Preço: Descendente</option>
          <option value="name-asc">Nome: Ascendente</option>
          <option value="name-desc">Nome: Descendente</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {currentProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={sortedProducts.length}
        paginate={paginate}
      />
    </div>
  );
};
