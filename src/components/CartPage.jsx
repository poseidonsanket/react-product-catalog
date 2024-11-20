import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';


export default function CartPage({ cart, products, updateCartItemQuantity }) {
  const cartItems = cart.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return product ? { ...product, quantity: item.quantity } : null;
  })

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-fill rounded" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="text-gray-800 font-medium">{item.quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => updateCartItemQuantity(item.id, 0)}
                    className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
}