'use client'

import { ButtonLinkOrange } from '@/shared/ButtonLink'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiCalendar } from "react-icons/ci";
import { LuPoundSterling } from "react-icons/lu";
import  calendarIcon from '../../public/assets/img/calendar-icon.png'
import BookTicketModal from './BookTicketModal';


const data = [
    {
        id: 1,
        name: 'The Wedding  Fair ‘25',
        image: '/assets/img/ticket-img.png',
        amount: `60`,
        description: 'Experience the Ultimate Wedding Showcase at Wedding Fair 2025',
        link: '#',
        date: 'July 12th, 4pm',
        // endDate: '28-02-2025'
    }
]

const Bookticket = () => {
    const [show, setShow] = useState(false)
    // const [items, setItems] = useState()

    const OpenModal = () => {
        setShow(true)
        // setItems(item)
    }

  return (
    <>
        <div className='flex h-full md:h-[90vh] items-center'>
            {
                data.map((item) => (
                    <div key={item.id} className='flex flex-col md:flex-row w-full h-full justify-between'>
                        <div className='flex justify-center items-center h-60 sm:h-full w-full md:w-1/2 relative z-50 bg-primary'>
                            <span className='absolute inset-0 bg-darkgray/20 -z-10'></span>
                                <Image src={item.image} alt="ticket" width={500} height={500} className="rounded w-full h-full object-cover absolute inset-0 -z-20"/>
                            <p className='text-2xl md:text-[3rem] lg:text-[4rem] text-center  text-white  font-serif'>{item.name}</p>
                        </div>
                        <div className='w-full md:w-1/2 bg-[#F5E6CA] p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                            <div className='flex text-darkgray/70 text-sm gap-2'>
                                <span className='flex items-center gap-1 text-lg'>
                                    {/* <CiCalendar className='text-primary '/> */}
                                    <Image src={calendarIcon} alt="ticket" width={500} height={500} className="rounded w-6 h-6 ml-2"/>
                                    {item.date}
                                </span>
                            </div>
                            <p className='text-xl md:text-2xl lg:text-4xl font-semibold tracking-widest leading-snug text-neutral'>{item.description}</p>
                            <div className='flex items-center gap-4 justify-between py-5'>
                                <p className="flex items-center text-2xl font-bold text-neutral "> <LuPoundSterling />{item.amount}</p>
                                {/* <ButtonLinkOrange href={`${item.link}`} name={'Book Your Ticket'}/> */}
                                <button onClick={()=> OpenModal()} className='bg-primary text-white py-4 px-8 font-semibold rounded'>Get Your Ticket</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <BookTicketModal setShow={setShow} show={show}  />
    </>
  )
}

export default Bookticket