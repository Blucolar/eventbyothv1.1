'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image';



const HeroComponent = ({title, image}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300)
    });

  return (
    <section
            className='relative  h-[50vh] md:h-[90vh] z-50'>
            
            <span className='bg-darkgray/20 absolute inset-0 -z-10'></span>

            <span className='absolute inset-0 -z-20'>
                <Image src={image} alt={image} className='h-full w-full object-cover'/>
            </span>
            <motion.div
                initial={{ x: "-100%", opacity: 0 }} 
                animate={{ x: isVisible ? "0%" : "-100%", opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='text-white flex justify-center items-center h-full font-serif'
                >
                <p className='text-2xl sm:text-3xl md:text-5xl font-bold text-center'>
                {title}
                </p>
               
            </motion.div>

            {/* scroll top */}
            <div className='absolute rounded-full w-10 h-10 inset-0 right-0 left-0 bg-white hidden'>
                {/* <ScrollTo
                    to="about"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="absolute bottom-[ top-40 inset-0  w-auto inline-block -translate-x-1/2 cursor-pointer"
                >
                    <AiOutlineDown className=' p-3 rounded-full' />
                </ScrollTo> */}
            </div>

            {/* carousel */}
            <div className='hidden'>
                {/* <HeroHomeCarousel/> */}
            </div>

        </section>
  )
}

export default HeroComponent