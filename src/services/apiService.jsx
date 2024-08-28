import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com', 
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createProduct = async (product) => {
  const response = await api.post('/products', product);
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id) => {
  await api.delete(`/products/${id}`);
};

export const fetchProductsByCategory = async (categoryId) => {
  const response = await api.get(`/products/category/${categoryId}`);
  return response.data;
};
