'use client'
import React from 'react'
// import rent1Img from '../../../public/assets/img/rent1.png'
// import rent2Img from '../../../public/assets/img/rent2.png'
// import rent3Img from '../../../public/assets/img/rent3.png'
import { motion } from 'framer-motion';
import { Button, ButtonLinkOrange } from '@/shared/ButtonLink'
import Image from 'next/image'
import HeroComponent from '@/components/HeroComponent';
import heroImg from '../../../public/assets/img/about-us.webp'
import  planImg from '../../../public/assets/img/about-2.png'
import aboutImg from '../../../public/assets/img/aboutUs.png'

import icon1 from '../../../public/assets/img/p1.png'
import icon2 from '../../../public/assets/img/p2.png'
import icon3 from '../../../public/assets/img/p3.png'
import icon4 from '../../../public/assets/img/p4.png'
import icon5 from '../../../public/assets/img/p5.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { TfiQuoteRight, TfiQuoteLeft } from "react-icons/tfi";
import useFadeIn from '@/shared/GlobalAnimation'
import CalendlyPopup from '@/components/CalendlyEmbed'
import ReadMoreLess from '@/components/Readless'


// export const rentalData = [
//     {
//         id: 1,
//         image: rent1Img,
//         title: "Crockeries",
//         price: '20,303',
//         btnText: 'rent now'
//     },
//     {
//         id: 2,
//         image: rent2Img,
//         title: "Sashes",
//         price: '20,039',
//         btnText: 'rent now'
//     },
//     {
//         id: 3,
//         image: rent3Img,
//         title: 'Magazine Photo booth',
//         price: '400,303',
//         btnText: 'rent now'
//     },
//     {
//         id: 4,
//         image: rent3Img,
//         title: 'Magazine Photo booth',
//         price: '400,303',
//         btnText: 'rent now'
//     },
//     {
//         id: 5,
//         image: rent2Img,
//         title: 'Magazine Photo booth',
//         price: '400,303',
//         btnText: 'rent now'
//     },
//     {
//         id: 6,
//         image: rent1Img,
//         title: 'Magazine Photo booth',
//         price: '400,303',
//         btnText: 'rent now'
//     }
// ]

const slides = [
    {
        id: 1,
        title: 'Mission',
        description: "To provide seamless event planning and high-quality rental services, ensuring stress-free and memorable celebrations for every client.",
    },
    {
        id: 2,
        title: 'Vision',
        description: "To be the go-to brand for event excellence, known inovation, prfessionalism and customer satisfaction",
    },

]

const partners = [
    {id: 1, icon: icon1},
    {id: 2, icon: icon2},
    {id: 3, icon: icon3},
    {id: 4, icon: icon4},
    {id: 5, icon: icon5},
]



const page = () => {
    const fadeIn = useFadeIn(0.5);
  return (
    <>
        <section>
            <HeroComponent title={'Creating Unforgettable Events with Passion & Precision'} image={heroImg}/>
        </section>

        <motion.section
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants} 
            {...fadeIn}
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30' id='about'>
            <div className='flex flex-col lg:flex-row justify-center items-center mx-auto gap-10'>
                <div className='space-y-4 md:w-1/2'>
                    <h1 className="text-2xl lg:text-4xl  font-bold md:mb-4 md:y-5">ABOUT TWF'25 </h1>
                    <p className=' sm:text-lg lg:text-2xl leading-8 py-5 text-justify lg:text-start text-neutral tracking-wider'>
                        At EventsByOTH, we specialize in crafting unforgettable events, handling every detail so you can enjoy the moment. From weddings to corporate functions, our expert team ensures seamless planning and execution.
                        
                        {/* <ReadMoreLess text={aboutUs} wordLimit={50}/> */}
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <div className='w-auto h-[60vh] rounded-lg'>
                        <Image src={aboutImg} alt='about' className='h-full w-full object-cover rounded-lg'/>
                    </div>
                </div>
            </div>
        </motion.section>

        <motion.section
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ amount: 0.3 }} 
            // variants={fadeInVariants}  

        className='px-5 md:px-10 lg:px-20 py-10 md:py-30'>
            <div className="w-full">
            <Swiper
            spaceBetween={20} 
            // slidesPerView={1} 
            centeredSlides={true}
            // breakpoints={{
            //     640: { slidesPerView: 1.2 }, 
            //     1024: { slidesPerView: 1.5 },
            // }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true} 
            pagination={{ clickable: true }} 
            modules={[Autoplay, Pagination]}
            className='mySwipper'


            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            < div className="rounded-lg text-center justify-center items-center flex flex-col h-80 bg-[#F5E6CA]">
                                
                                <p className="text-2xl lg:text-4xl  font-bold mb-4 py-5">
    
                                        {slide.title}
                                
                                </p>
                                <p className="pb-2 md:py-4 sm:text-2xl flex px-5 md:px-20 text-neutral"><TfiQuoteLeft className='text-orange-300'/>{slide.description}<TfiQuoteRight className='text-orange-300'/></p>
                            
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </motion.section>

        {/* partnership */}
        <motion.section
        {...fadeIn}
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30'
        >
            <div className="text-xl md:text-4xl font-bold">Our Partner and Collaborators</div>
            <div className="flex justify-center items-center py-5 md:gap-8">
                {
                    partners.map(item => {
                        return (
                            <span key={item.id} className=" md:w-[150px] pt-5">
                                <Image src={item.icon} alt='about' className='h-full w-full object-cover rounded-lg'/>
                            </span>
                        )
                    })
                }
            </div>
        </motion.section>

        {/* next event */}
        <motion.section
            {...fadeIn}
            className='pt-10 md:pt-30 h-full'>
            {/* <div className='flex h-full items-center'> */}
                <div className='flex flex-col md:flex-row w-full h-full justify-between'>  
                    <div className='h-[70vh] w-full md:w-1/2 bg-white p-5 md:p-10 lg:p-20 flex flex-col justify-center space-y-5'>
                        <p className=' text-3xl md:text-4xl font-semibold tracking-widest leading-snug'>Ready to Plan Your Next Event?</p>
                        <p className='text-neutral'>Let’s make it extraordinary. Connect with us today!</p>
                        {/* <ButtonLinkOrange href={`#`} name={'Book a Call'}/> */}
                        <CalendlyPopup title="Book a Call"/>
                    </div>

                    <div className='px-5 md:px-10 lg:px-20 flex justify-center items-center w-full md:w-1/2 h-[70vh] relative'>
                        {/* <span className='absolute inset-0 bg-darkgray/30 -z-10'></span> */} 
                        <Image src={planImg} alt="ticket" width={500} height={500} className=" w-full h-full object-cover absolute inset-0"/>
                    </div>
                </div>
            {/* </div> */}
        </motion.section> 
    </>
  )
}

export default page