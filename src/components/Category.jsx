import React from 'react'
import { motion } from 'framer-motion'

const Category = ({categories,selectedCategories,onCategoryChange}) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategories.includes(category)
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
  )
}

export default Category