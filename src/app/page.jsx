'use client'

import React, {Fragment, useEffect, useState} from 'react'
import { motion, m } from 'framer';
import { Link as ScrollTo } from "react-scroll";
import { AiOutlineDown } from "react-icons/ai";
import Image from 'next/image';
import icon from '../../public/assets/img/services_icon.png'
import frame1 from '../../public/assets/img/frame1.png'
import frame2 from '../../public/assets/img/frame2.png'
import frame3 from '../../public/assets/img/frame3.png'
import { ButtonLinkWhite } from '@/shared/ButtonLink';
import SplitScreenCarousel from '@/components/OurExpertiseCarousel';
import contactImg from '../../public/assets/img/contact-us.png'
import Bookticket from '@/components/Bookticket';
import Link from 'next/link';
import useFadeIn, { fadeIn } from '@/shared/GlobalAnimation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import CalendlyPopup from '@/components/CalendlyEmbed';

import  c1 from '../../public/assets/img/coporate-event1.webp'
import  c2 from '../../public/assets/img/coporate-event2.webp'

import  b1 from '../../public/assets/img/birthday-01.webp'
import  b2 from '../../public/assets/img/birthday-02.webp'
import  testifyImg from '../../public/assets/img/wale ojo.png'
import { TfiQuoteLeft, TfiQuoteRight } from 'react-icons/tfi';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import toast from 'react-hot-toast';
import axios from 'axios';


export const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const heroDisplay = [
    // {
    //     id: 1,
    //     title: "Wedding Planning",
    //     desc: "From elegant weddings to corporate galas, we bring your vision to life.",
    //     image: hero1,
    //     image2: hero3
    // },
    {
        id: 2,
        title: "Corporate Events",
        desc: "From elegant weddings to corporate galas, we bring your vision to life.",
        image: c1,
        image2: c2
    },
    {
        id: 3,
        title: "Birthday Parties",
        desc: "From elegant weddings to corporate galas, we bring your vision to life.",
        image: b1,
        image2: b2
    },
]


const initialState = {
    name: '',
    email: "",
    content: ""
}

const HeroHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const fadeIn = useFadeIn(0.5);
    const [formState, setFormState] = useState(initialState);
    const [loading, setLoading] = useState(false)
        
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const payload = {
                name: formState.name,
                email: formState.email,
                content: formState.content
            }
            console.log(payload)
           const response = await axios.post('https://backend.eventsbyoth.com/api/v1/contact', payload)

            if (response.data.status) {
                toast.success(`${response.data.message}`)
                setFormState(initialState)
            }
            console.log(response.data.message)

        } catch (error) {
            console.log(error)
            toast.error(`${error}`)
        }finally{
            setLoading(false)
            // setShow(false)
        }
    }

  return (
    <Fragment>
        {/* hero section */}
        <section
            className='relative h-[70vh] md:h-[90vh] bg-homeBg bg-cover bg-no-repeat bg-center z-50'>
            
            <span className='bg-linear-to-r bg-darkgray/20 absolute inset-0 -z-10'></span>

            <motion.div
                {...fadeIn}
                className='text-white flex justify-center  h-full flex-col space-y-10 pl-3 md:pl-5 lg:pl-20'
                >
                <p className='text-2xl sm:text-4xl md:text-5xl font-bold font-serif'>
                    Make Every Event Unforgettable, <br className="hidden md:flex"/> with EventsByOTH!
                </p>
                <p className='sm:text-2xl'>From elegant weddings to corporate galas, <br/> we bring your vision to life.</p>
                <div className='flex items-center gap-4'>
                    <motion.div className='' whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
                        {/* <Link href={'#'} className='bg-primary text-white py-4 px-6 md:px-8 font-semibold rounded'>Book a call</Link> */}
                        <CalendlyPopup title="Book a Call"/>
                    </motion.div>
                    <motion.div className=''  whileHover={{ scale: 1.05 }} transition={{duration: 0.5}}>
                        <Link href={'rentals'} className='bg-white text-primary py-4 px-6 md:px-8 font-semibold rounded'>Explore Rentals</Link>
                    </motion.div>
                    
                    {/* <ButtonLinkOrange href={"#"} name={'Book A Call'}/>
                    <ButtonLinkWhite href={"#"} name={'Explore Rentals'}/> */}
                </div>
            </motion.div>

             {/* scroll top */}
            <div className='absolute bottom-4  md:bottom-5 justify-center flex  items-center w-full'>
                <ScrollTo
                    to="about"
                    offset={0}
                    delay={0}
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="bg-darkgray/60 animate-bounce p-5 rounded-full w-auto inline-block -translate-x-1/2 cursor-pointer"
                > 
                    <AiOutlineDown size={20} className=' text-white' />
                </ScrollTo>
            </div>
   

            {/* carousel */}
            <div className='absolute bottom-10 right-5 w-1/2 h-auto z-10 overflow-hidden hidden lg:flex'>
                <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={20} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }} 
                navigation 
                loop={true} 
                className="mySwiper"


                >
                    {
                        heroDisplay.map((slide, index) => (
                            <SwiperSlide key={index}>
                                < div className=" h-full  relative overflow-hidden text-center justify-center items-center flex flex-col">

                                    <div className="h-[40vh] text-lightgray bg-darkgray/40 w-full flex justify-center items-center gap-4 px-4 ">
                                        <div className=' w-1/2'>
                                            <p className="text-3xl font-bold font-serif">{slide.title}</p>
                                            <p className="py-2 text-lg">{slide.desc}</p>
                                        </div>
                                        <div className="w-1/2 gap-2 flex rounded p-2">
                                            <p className=" w-full h-40 rounded-lg">
                                                <Image src={slide.image} alt={'image'} className='h-full w-full object-cover rounded-lg'/>
                                            </p>
                                            <p className="w-full h-40 rounded-lg">
                                                <Image src={slide.image2} alt={'image'} className='h-full w-full object-cover rounded-lg'/>
                                            </p>
                                        </div>
                                    </div>
                                
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </section>
        

        {/* about us */}
        <motion.section  className='px-5 md:px-10 lg:px-20 py-10 md:py-30' id='about'>
            <motion.div  
                
                {...fadeIn}
                className='flex flex-col md:flex-row justify-center items-center mx-auto gap-7 lg:gap-10'>
                <m.div 
                    
                    className='space-y-4 md:w-1/2'>
                    <p className='text-2xl md:text-4xl font-bold'>At EventsByOTH</p>
                    <Image src={icon} alt='serviceicon'/>
                    <p className='text-lg py-5 text-justify ld:text-start'>we specialize in curating exceptional events and offering premium rentals. Whether you're planning a wedding, birthday, or corporate event, we handle the details so you can enjoy the moment.</p>
                    
                    <div className='hidden md:flex '>
                        <Link href={'about-us'} className='bg-primary text-white p-3 px-8 font-semibold rounded'>Learn More</Link>
                    </div>
                </m.div>
                <div className='md:w-1/2 w-full py-5'>
                    <m.div className='flex gap-3 sm:gap-4'>
                        <div className='flex flex-col gap-3 sm:gap-4 w-3/4'>
                                <span className='w-full h-30 sm:h-56 overflow-hidden rounded'>
                                    <Image src={frame1} alt='frame' className='h-full w-full object-cover rounded'/>
                                </span>
                                <span className='w-full h-30 sm:h-56 overflow-hidden rounded'>
                                    <Image src={frame2} alt='frame' className='h-full w-full object-cover rounded'/>
                                </span>
                            
                        </div>
                        <div className=' h-60 sm:h-96 w-3/4 relative overflow-hidden rounded-lg'>
                            
                            <Image src={frame3} alt='frame' className='h-full w-full absolut object-cover rounded-lg'/> 
                        </div>
                    </m.div>
                </div>
            </motion.div>
        </motion.section>
        

        {/* our expertise */}
        <motion.section 

            {...fadeIn}
            className='px-5 md:px-10 lg:px-20 py-10 md:py-30'
            >
            <h1 className="text-2xl lg:text-4xl  font-bold mb-4 py-5">
                Our Expertise
            </h1>
            <SplitScreenCarousel/>
        </motion.section>

        {/* book ticket */}
        <motion.section 
            {...{ ...fadeIn, transition: { delay: 0.5 } }}
            className=' pt-30'>

           <Bookticket/>
           
        </motion.section>

        {/* contact us */}
        <motion.section 
            {...fadeIn}
            className='h-full md:min-h-[90vh] bg-darkgray overflow-hidden p-5 md:p-10 lg:p-20'>
            <p className=' text-lg sm:text-2xl pb-6 lg:pb-16 text-white md:text-4xl font-bold '>Will You love to reach out to us?</p>
            <div className=' h-full flex flex-col lg:flex-row justify-center items-center mx-auto gap-4 md:gap-20 py-10'>
                <div className='md:w-1/2 w-full'>
                    <div className='h-[70vh] w-full overflow-hidden rounded-lg relative'>
                        <Image src={contactImg} alt='contact' className='w-full h-full object-cover object-button rounded-lg'/>
                        <div className='bg-black/40 h-1/2 absolute inset-0 top-1/2  md:left-1/4 md:bottom-4 lg:bottom-0  rounded-lg'>
                            <p className='text-normal md:text-base p-5 text-[#FAF9F6]'>
                                <TfiQuoteLeft className='text-primary'/>
                                Attending The Wedding Fair '24 was an unforgettable experience! From stunning bridal showcases to top-tier vendors, everything was beautifully curated.
                                <TfiQuoteRight className='text-primary'/>
                            </p>
                            <div className='flex items-center gap-2 px-4 justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p>
                                        <Image src={testifyImg} alt='testify-image' className='w-10 h-10 rounded-full object-cover object-button'/>
                                    </p>
                                    <p className='text-white flex flex-col'>
                                        <span>Wale Ojo</span>
                                        <span>Event Planner</span>
                                    </p>
                                </div>
                                <div className='flex gap-2 text-primary'>
                                    <MdKeyboardArrowLeft />
                                    <MdKeyboardArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='space-y-4 w-full md:w-1/2 '>
                    <p className='tex3t-lg md:text-2xl text-white'>Tell us what you have in mind</p>
                    <form className='space-y-5' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor=""></label>
                            <input className='border border-primary p-3 w-full rounded' 
                                onChange={handleChange} 
                                name="name" 
                                value={formState.name} 
                                required 
                                type="text" 
                                placeholder='Enter your name' 
                            />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input 
                                className='border border-primary p-3 w-full rounded' 
                                onChange={handleChange} 
                                name="email" 
                                value={formState.email} 
                                type="text" 
                                required 
                                placeholder='Enter your email'
                            />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <textarea 
                                className='border border-primary p-3 w-full h-full rounded' 
                                onChange={handleChange} 
                                name="content" 
                                value={formState.content} 
                                required rows={5} cols={5}
                                id="" 
                                placeholder='How do you want us to help you?'
                            ></textarea>
                        </div>
                        <div className='overflow-hidden rounded' >
                            <button type="submit" disabled={loading} className={`text-white bg-primary text-center w-auto font-semibold p-3 rounded  ${loading? "bg-opacity-80 " : null}`}>{loading? "Sending..." : "Get InTouch"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </motion.section>

    </Fragment>
  )
}

export default HeroHome;