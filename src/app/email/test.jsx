'use client'
import Logo from '@/shared/logo'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import image from '@/public/bana.png'
// import iconTicket from '@/public/iconT.png'
// import iconTime from '@/public/time-02.png'
// import iconLocation from '@/public/location-08.png'

const page = () => {
  return (
    <div>
        <p>PartyWithOTH</p>
        <p className='flex justify-between items-center flex-col '>
            <span><Logo/></span>
            <span>Your Ticket for  THE WEDDING FAIR'25</span>
        </p>
        <p className='text-start '>Hello Ggbenga</p>
        <p>This is a confirmation of your ticket for the wedding fairs'25</p>
        <div className='h-96'>
            {/* <Image src={image} alt='bana' width={500}  height={500}/> */}
        </div>
        <p>
            <span>Ticket ID: OTH-ER12343798</span>
            <span>January 13,2025</span>
        </p>

        <div>
            <p>Gbenga Johnson</p>
            <p>090********67</p>
            <p>Gb************@gmail.com</p>
        </div>

        <div>
            <p>Ticket Details</p>
            <div>
                <p>
                    {/* <Image src={iconLocation} alt='icon' width={500} height={500}/> */}
                </p>
                <p>
                    <span>1 x Ticket (General Access)</span>
                    <span>Order Total : $30</span>
                </p>
            </div>
            <div>
                <p>
                    {/* <Image src={iconTime} alt='icon' width={500} height={500}/> */}
                </p>
                <p>
                    <span>Saturday, July 12, 2025 at 4pm ( EST )</span>
                    <span>Add to <Link href="#"> Google</Link></span>
                </p>
            </div>
            <div>
                <p>
                    {/* <Image src={iconTicket} alt='icon' width={500} height={500}/> */}
                </p>
                <p>
                    <span>78 Essex Rd, Tarlscough. United Kingdom</span>
                    <Link href="#">View on Map</Link>
                </p>
            </div>
        </div>

    </div>
  )
}

export default page