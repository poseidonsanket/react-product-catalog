import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({currentProducts,addToCart}) => {
  return (
    <div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {currentProducts.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative pt-[100%]">
              <img
                src={product.image}
                alt={product.title}
                className="absolute top-0 left-0 w-full h-full object-fill"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 h-14">
                {product.title}
              </h2>
              <p className="text-indigo-600 font-bold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <Link
                  to={`/product/${product.id}`}
                  className="text-indigo-500 hover:text-indigo-600 font-medium"
                >
                  View Details
                </Link>
                <motion.button
                  onClick={() => addToCart(product.id)}
                  className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCard;
