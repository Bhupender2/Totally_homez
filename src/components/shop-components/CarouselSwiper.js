//import { Swiper, SwiperSlide } from 'swiper/react';



import React, { useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
const CarouselSLick = ({ slides }) => {
 

  return (
    <div className="swiperContainer">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container_4"
      >
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/d7157ffd4da088c4cddc448987631774?_a=AQADKdt"} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler  pt-100">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};


export default CarouselSLick