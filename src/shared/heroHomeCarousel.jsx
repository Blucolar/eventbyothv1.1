'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const SplitScreenCarousel = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      {/* Left Carousel */}
      <div className="flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-xl font-bold mb-4">Left Carousel</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Delay in ms
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="p-6 bg-blue-200 rounded-lg">Left Slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-blue-300 rounded-lg">Left Slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-blue-400 rounded-lg">Left Slide 3</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SplitScreenCarousel;
