import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-black text-white p-4">
      <div className="container flex items-center justify-between">
          <Link to="/">
            <img src="/lv.png" alt="" width="100"/>
          </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <button className="focus:outline-none">Categorias</button>
              {dropdownOpen && (
                <ul className="absolute bg-white text-gray-800 shadow-lg right-0 rounded mt-0 w-48">
                  <li className="hover:bg-gray-200">
                    <Link to="/category/jewelery" className="block px-4 py-2">
                      Joias
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/category/mens-clothing"
                      className="block px-4 py-2"
                    >
                      Roupas Masculinas
                    </Link>
                  </li>
                  <li className="hover:bg-gray-200">
                    <Link
                      to="/category/electronics"
                      className="block px-4 py-2"
                    >
                      Eletronicos
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
