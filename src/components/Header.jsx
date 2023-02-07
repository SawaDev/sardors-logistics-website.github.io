import React from 'react'
import { motion } from "framer-motion"

const Header = ({ text }) => {
  return (
    <motion.div
      whileInView={{ x: [-150, 0], opacity: [0, 1] }}
      exit={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='header text-center py-6 relative'>
      <span>{text}</span>
      <h2 className='text-blue-800 pb-2'>{text}</h2>
    </motion.div>
  )
}

export default Header