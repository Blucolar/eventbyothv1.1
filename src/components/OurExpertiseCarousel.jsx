'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import truncateString from "@/utils/truncateString";
import Image from "next/image";
import slide1 from '../../public/assets/img/try2.jpg'
import slide2 from '../../public/assets/img/ourexpertise2.png'
import slide3 from '../../public/assets/img/after-party.webp'
// import frame1 from '../../public/assets/img/frame1.png'
// import frame2 from '../../public/assets/img/frame2.png'


const slides = [
    {
        id: 1,
        title: 'Event Planning',
        image: slide1,
        description: 'From elegant weddings to corporate galas, we bring your vision to life.',
        link:'services'
    },
    {
        id: 2,
        title: 'Rental Service',
        image: slide2,
        description: 'From elegant weddings to corporate galas, we bring your vision to life.',
        link:'services'
    },
    {
        id: 3,
        title: 'After Party',
        image: slide3,
        description: 'From elegant weddings to corporate galas, we bring your vision to life.',
        link:'services'
    },
]
const SplitScreenCarousel = () => {
  return (
    <div className="w-full">
        <Swiper
        spaceBetween={20} 
        slidesPerView={1} 
        // freeMode={2}
        centeredSlides={true}
        breakpoints={{
            640: { slidesPerView: 1.2 }, 
            1024: { slidesPerView: 1 },
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true} 
        pagination={{ clickable: true }} 
        modules={[Autoplay, Pagination,Navigation, FreeMode ]}
        
        
        >
            {
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-lg text-center justify-between border border-gray-100/80 flex flex-col md:flex-row h-96 sm:h-80 w-full">
                            <div className="text-start p-2 md:p-5 lg:p-10 space-y-5 w-full h-1/2 md:h-full md:w-1/2 order-last md:order-first bg-white">
                                <p className="flex  md:text-xl font-semibold p-1 ">
                                    <span className="text-primary border-r border-r-primary p-1 md:p-3">
                                        {slide.id}
                                    </span>
                                    <span className=" p-1 md:p-3 text-lg md:text-3xl font-serif">
                                        {slide.title}
                                    </span>
                                </p>
                                <p className="pb-2 md:py-4 text-base md:text-xl">{truncateString(slide.description, 100)}</p>
                                <a href={slide.link} className="text-primary" >View More</a>
                            </div>
                            <div className="w-full md:w-1/2 h-1/2 md:h-full ">
                                <Image src={slide.image} alt="image" className="rounded w-full h-full object-cover"/>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
};

export default SplitScreenCarousel;
