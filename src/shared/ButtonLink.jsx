'use client'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion';


const ButtonLinkOrange = ({link, name}) => {
  return (
    // <motion.div className='overflow-hidden p-3' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}} >
    //     <Link href={`${link}`} className='p-3 bg-primary text-white rounded'>{name}</Link>
    // </motion.div>
    <motion.div className='' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
    <Link href={`${link}`} className='bg-primary text-white py-4 px-8 font-semibold rounded'>{name}</Link>
</motion.div>
  )
}


const ButtonLinkWhite = ({link, name}) => {
    return (
        // <motion.div className='overflow-hidden p-3' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
        //     <Link href={`${link}`} className='p-3 bg-white text-primary border-primary rounded'>{name}</Link>
        // </motion.div>

        <motion.div className=''  whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
            <Link href={`${link}`} className='bg-white text-primary py-4 px-8 font-semibold rounded'>{name}</Link>
        </motion.div>
            
    )
  }


  const Button = ({name}) => {
    return (
        <motion.div className='overflow-hidden p-3 w-full' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
            <p className='p-3 bg-white text-primary border-primary rounded border text-base cursor-pointer'>{name}</p>
        </motion.div>   
    )
  }

export {ButtonLinkOrange, ButtonLinkWhite, Button};