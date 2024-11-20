import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Hi");
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setFilteredProducts(data);

        const uniqueCategories = Array.from(
          new Set(data.map((product) => product.category))
        );
        console.log(uniqueCategories);
        setCategories(uniqueCategories);
      });
  }, []);

  useEffect(() => {
    let result = products;

    if (searchTerm) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    result.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategories, sortOrder]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) => {
      if (quantity === 0) {
        return prevCart.filter((item) => item.id !== productId);
      }
      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };


  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
        <Header cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    products={filteredProducts}
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onSearch={handleSearch}
                    onCategoryChange={handleCategoryChange}
                    onSortChange={handleSortChange}
                    sortOrder={sortOrder}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path="/product/:id"
                element={<ProductDetails products={products} addToCart={addToCart} />}
              />
              <Route
                path="/cart"
                element={
                  <CartPage
                    cart={cart}
                    products={products}
                    updateCartItemQuantity={updateCartItemQuantity}
                  />
                }
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
