import DefaultLayout from "./components/DefaultLayout";
import "./css/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/category/jewelery" element={<CategoryPage category="jewelery" />} />
          <Route path="/category/mens-clothing" element={<CategoryPage category="men's clothing" />} />
          <Route path="/category/electronics" element={<CategoryPage category="electronics" />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
