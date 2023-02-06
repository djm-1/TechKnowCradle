import React from 'react'
import './Gallary.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
export default function Gallary() {
  return (
    <div id="gallery">
        <h1 className='hero text-center' style={{color:'#DA4167'}}>past events gallery</h1>
      <div className='mx-auto w-75 mt-4'>
    <Swiper
            
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 70,
              stretch: 0,
              depth: 600,
              modifier: 1,
              slideShadows: true,
            }}
            
            loop={true}
            modules={[EffectCoverflow, Pagination,Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt="" src="/p1.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p2.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p3.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p4.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p5.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p6.JPG" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src="/p7.JPG" />
            </SwiperSlide>
          </Swiper>
    </div>
    </div>
  )
}
