"use client"; 
// let isMobile = false;

// if (typeof window !== "undefined") {
//   isMobile = window.innerWidth < 768;
// }


// const fadeIn = !isMobile
//   ? {
//     initial: { opacity: 0 },
//     whileInView: { opacity: 1 },
//     // viewport: { once: true },
//     transition: { delay: 0.4 },
//   }
//   : {};


// export { fadeIn, };




import { useState, useEffect } from "react";

const useFadeIn = (delay = 0.4) => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  if (!isClient) return {}; 

  return !isMobile
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay },
      }
    : {};
};

export default useFadeIn;