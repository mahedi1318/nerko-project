import React, { useEffect, useRef, useState }  from 'react'
import { Container } from 'react-bootstrap'
import "../../assets/styles/roadmap.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RoadMapData } from '../../middleware/Api';
import { FaRegCheckCircle } from "react-icons/fa";

const RoadMap = () => {

  let [roadmap, setRoadMap] = useState([])

  useEffect(()=>{
    setRoadMap(RoadMapData)
  },[])

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
      {roadmap.map((item, index)=>(
      <SwiperSlide>
        <div className="swiper_item">
          <span className='map_span'>{item.span}</span>
          <h3 className='map_h3'>{item.tagh3}</h3>
          <p className='map_p'>{item.pera}</p>
          <ul className='road_list_ul'>
            <li className='road_list_li'><FaRegCheckCircle className='road_i' /> {item.list1}</li>
            <li className='road_list_li'><FaRegCheckCircle className='road_i' /> {item.list2}</li>
            <li className='road_list_li'><FaRegCheckCircle className='road_i' /> {item.list3}</li>           
          </ul>
        </div>
      </SwiperSlide>
      ))}      
    </Swiper>
    </div>
  )
}

export default RoadMap