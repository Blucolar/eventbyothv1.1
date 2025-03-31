'use client'

import Logo from '@/shared/logo'
import Link from 'next/link'
import React from 'react'
import CalendlyPopup from './CalendlyEmbed'
import { BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import ScrollToTop from './ScrollToTop'
import { AiFillTikTok } from 'react-icons/ai'
const Footerview = () => {
  return (
    <div className='bg-darkgray lg:h-[40v border-t border-grey p-5'>
        <div className='flex flex-wrap gap-5 justify-between text-white w-full items-center space-y-4'>
            <Logo/>
            
            <div className='flex flex-col gap-4'>
                <p className="font-semibold uppercase">Nav Menu</p>
                <Link href="about-us">About us</Link>
                <Link href="services">Services</Link>
                <Link href="wedding-page">The Wedding Fair '25</Link>
                <Link href="rentals">Rental Services</Link>
                {/* <Link href="rentals">Rental Services</Link> */}
            </div>
            <div className='flex flex-col gap-4'>
                <span>Contact us</span>
                <span className='text-grey text-sm '>Email</span>
                <span>info@eventsbyoth.com</span>
                <span className='text-grey text-sm'>Phone</span>
                <span>+447884603969</span>
            </div>
            <div>
                {/* <ButtonLinkOrange href={'#'} name={'Book a Call'}/> */}
                <CalendlyPopup title="Book a Call"/>
            </div>
        </div>

        <div className='flex text-white justify-between py-5'>
            <div>
                {/* <IoMdArrowUp className="bg-primary rounded-full p-2" size={40} /> */}
                <ScrollToTop/>
            </div>
            <div className='flex gap-8'>
                <a href="https://www.instagram.com/partywith_oth/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className='bg-white text-darkgray rounded-full p-2' size={40}/>
                </a>
                <a href="https://x.com/partywith_oth?s=21&t=SFiM9uXJaONxTCKXlT7eXw" target="_blank" rel="noopener noreferrer">
                    <BsTwitterX className='bg-white text-darkgray rounded-full p-2' size={40}/>
                </a>
                <a href="https://www.tiktok.com/@partywithoth?_t=ZN-8uBBn57lh5S&_r=1" target="_blank" rel="noopener noreferrer">
                    <AiFillTikTok className='bg-white text-darkgray rounded-full p-2' size={40}/>
                </a>
                
                <a href="https://wa.me/447884603969" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className='bg-white text-darkgray rounded-full p-2' size={40}/>
                </a>
            </div>
        </div>

        <div className="flex text-[#808080] justify-between border-t border-[#808080] pt-5">
            <span>© 2025 — Copyright</span>
            <span>
                <a href="https://treendit.com/" target="_blank" rel="noopener noreferrer">Powered By Treendit</a>
            </span>
        </div>
    </div>
  )
}

export default Footerview