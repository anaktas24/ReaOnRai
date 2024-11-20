'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const CategoryCard = ({ category, image, description }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="perspective-1000 w-64 h-80 cursor-pointer" onClick={handleClick}>
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.3)" }}
        >
          <img
            src={image}
            alt={category}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl font-bold">{category}</h2>
          </div>
        </motion.div>

        {/* Back of the card */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-white rounded-lg p-4 flex flex-col justify-between"
          style={{ rotateY: 180 }}
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">{category}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          <NavLink className="w-full mt-4">Learn More</NavLink>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CategoryCard