'use client'

import AnimatedLink from '@/shared/AnimatedLink'
import Logo from '@/shared/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import CalendlyPopup from './CalendlyEmbed'

const Header = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // For hover effect
    const pathname = usePathname();
    const [showmenu, setShowMenu] = useState(false);


    const handleMobileHeader = ( ) => {
        setShowMenu(!showmenu)
    }

    const navLinks = [
        {
            name: 'Services',
            path: '/services'
        },
        {
            name: 'Rentals',
            path: '/rentals'
        },
        {
            name: 'About Us',
            path: '/about-us'
        },
        {
            name: 'Contact Us',
            path: '/contact-us'
        },{
            name: "The Wedding Fair '25",
            path: '/wedding-page'
        }
    ]

  return (
    <div className='flex justify-between items-center h-20 w-full bg-darkgray text-white px-5 md:px-20 mx-auto'>
        <div className='h-16 w-28 flex items-center'>
            <Link href={'/'} >
                <Logo />
            </Link>
        </div>


        <div className='hidden md:flex'>
            <ul className='flex items-center gap-8 font-sans'>
                {
                    navLinks.map((link, index) => {
                    return (
                        <Link key={index} href={link.path} className='relative '>
                            <motion.div
                                    className={`text-lg ${
                                    pathname === link.path ? "text-primary" : "text-lightgray"
                                    }`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {link.name}
                                        {/* Hover animation */}
                                        {hoveredIndex === index && (
                                        <motion.div
                                            layoutId="hover-underline"
                                            className="absolute left-0 right-0 h-1 bg-primary"
                                            style={{ bottom: -2 }}
                                            initial={{ opacity: 0, scaleX: 0 }}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            exit={{ opacity: 0, scaleX: 0 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        )}

                                        {/* Active state */}
                                        {pathname === link.path && (
                                        <motion.div
                                            layoutId="active-underline"
                                            className="absolute left-0 right-0 h-1 bg-primary"
                                            style={{ bottom: -2 }}
                                            initial={false}
                                            animate={{ opacity: 1, scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        )}
                                        
                            </motion.div>
                        </Link>
                        )
                    })
                }
            </ul>
        </div>

        <div className='hidden md:flex '>
            {/* <Link href={'#'} className='bg-primary text-white p-3 px-8 font-semibold rounded'>Book a call</Link> */}
            <CalendlyPopup title="Book a Call"/>
        </div>

        {/* mobile view */}
        <div className={'md:hidden flex relative'}>
            <HiMiniBars3BottomRight size={20} onClick={handleMobileHeader}/>
            {
                showmenu &&(
                    <motion.div 
                        initial={{ x: "100%" }}
                        animate={{ x: showmenu ? 0 : "100%" }}
                        transition={{ type: "keyframe", stiffness: 120, duration: 1 }}
                        className='fixed inset-0 z-[999] bg-white/20 h-screen flex justify-end '>
                        <ul className="bg-white space-y-8 text-black h-full w-full sm:w-2/3 p-5 text-center shadow-lg">
                            <li>
                                <TfiClose size={20} onClick={handleMobileHeader}/>
                            </li>
                            <li>
                               <Link href={'/'} onClick={handleMobileHeader} >Home</Link>
                            </li>
                            <li>
                                <Link href={'/services'} onClick={handleMobileHeader} >Services</Link>
                            </li>
                            <li>
                                <Link href={'/rentals'} onClick={handleMobileHeader} >Rentals</Link>
                            </li>
                            <li>
                                <Link href={'/about-us'} onClick={handleMobileHeader} >About Us</Link>
                            </li>
                            <li>
                                <Link href={'/contact-us'} onClick={handleMobileHeader} >Contact Us</Link>
                            </li>
                            <li>
                                <Link href={'/wedding-page'} onClick={handleMobileHeader} >Wedding Fair '25</Link>
                            </li>
                            {/* <li>
                                <Link href={'#'} className='bg-primary text-white p-3 rounded' onClick={handleMobileHeader} >Book a call</Link>
                            </li> */}
                            <CalendlyPopup title="Book a Call"/>
                        </ul>
                    </motion.div>
                )
            }
        </div>
    </div>
  )
}

export default Header