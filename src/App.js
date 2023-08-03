import "./styles.css";
import React, { useState } from "react";
import BookList from "./BookList";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Inventory from "./Inventory";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Inventory setCartItems={setCartItems} cartItems={cartItems} />
              </Layout>
            }
          />
          <Route
            path="/search"
            element={
              <Layout>
                <SearchBar
                  searchResults={searchResults}
                  setSearchResults={setSearchResults}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
