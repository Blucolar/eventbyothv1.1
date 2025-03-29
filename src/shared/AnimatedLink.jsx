'use client'
import React from 'react'
import {motion} from 'framer-motion';

const AnimatedLink = ({href,text}) => {
  return (
    <motion.a
    href={href}
    className="relative inline-block font-semibold text-primary"
    whileHover={{ scale: 1.1 }} // Scale the link on hover
    whileTap={{ scale: 0.95 }} // Scale down when clicked
  >
    {text}

      <motion.span
              className="absolute bottom-0 left-0 h-1 w-full bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />

  </motion.a>
  )
}

export default AnimatedLink