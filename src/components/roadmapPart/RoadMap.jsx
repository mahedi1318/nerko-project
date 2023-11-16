import React, { useRef, useState }  from 'react'
import { Container } from 'react-bootstrap'
import "../../assets/styles/roadmap.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const RoadMap = () => {
  return (
    <div className='roadmap_part'>
        <Container>
            <div className="roadmap_title">
                <h3 className='roadmap_h3'>Nerko's Roadmap</h3>
            </div>
        </Container>
        <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="swiper_item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_item"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper_item"></div></SwiperSlide>   
      <SwiperSlide>
        <div className="swiper_item"></div></SwiperSlide>   
      <SwiperSlide>
        <div className="swiper_item"></div></SwiperSlide>   
    </Swiper>
    </div>
  )
}

export default RoadMap