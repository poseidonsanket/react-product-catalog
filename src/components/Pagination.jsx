import React from "react";
import { motion } from "framer-motion";
import {  ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({currentPage,totalPages,handlePageChange}) => {
  return (
    <div className="mt-8 flex justify-center items-center space-x-2">
      <motion.button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={20} />
      </motion.button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md ${
            currentPage === page
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {page}
        </motion.button>
      ))}
      <motion.button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={20} />
      </motion.button>
    </div>
  );
};

export default Pagination;
