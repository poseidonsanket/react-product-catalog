import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({ cartItemCount }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <div className="flex items-center gap-2">
            <img src="/favicon.png" className="h-10 w-10 bg-gray-300 rounded-full p-1" />
            <div>ProductVista</div>
          </div>
        </Link>
        <Link to="/cart">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingCart className="w-6 h-6 text-indigo-600" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.div>
        </Link>
      </div>
    </motion.header>
  );
}
