"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoMdArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); 
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed z-[99] bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0" }`}
      whileHover={{ scale: 1.1 }}
    >
  
       <IoMdArrowUp className="" size={20} />
    </motion.button>
  );
};

export default ScrollToTop;
