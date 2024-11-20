import { useState } from "react";

import { Search, ArrowUpDown } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Category from "./Category";
import Pagination from "./Pagination";

export default function ProductList({
  products,
  categories,
  selectedCategories,
  onSearch,
  onCategoryChange,
  onSortChange,
  sortOrder,
  addToCart,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <motion.button
          onClick={onSortChange}
          className="flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sort by Price
          <ArrowUpDown
            className={`ml-2 ${sortOrder === "asc" ? "rotate-180" : ""}`}
          />
        </motion.button>
      </div>
      <Category categories={categories} selectedCategories={selectedCategories} onCategoryChange={onCategoryChange}/>
      <ProductCard currentProducts={currentProducts} addToCart={addToCart}/>
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange}/>
      )}
    </motion.div>
  );
}
