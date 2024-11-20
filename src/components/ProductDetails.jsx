import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';


export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
    >
      <Link to="/" className="flex items-center text-indigo-500 hover:text-indigo-600 mb-6">
        <ArrowLeft className="mr-2" /> Back to Products
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 md:h-auto object-fill rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <div className="flex flex-col justify-between">
          <div>
            <motion.h1
              className="text-3xl font-bold mb-4 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {product.title}
            </motion.h1>
            <motion.p
              className="text-gray-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {product.description}
            </motion.p>
            <motion.p
              className="text-2xl font-semibold mb-4 text-indigo-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              ${product.price.toFixed(2)}
            </motion.p>
            <motion.p
              className="text-gray-500 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Category: {product.category}
            </motion.p>
          </div>
          <motion.button
            onClick={() => addToCart(product.id)}
            className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}