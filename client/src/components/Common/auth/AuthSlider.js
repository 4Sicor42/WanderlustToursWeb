import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Slide from '../../Assets/Images/User/user1.png';
import Slide1 from '../../Assets/Images/User/user2.png';



const AuthSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      };
  return (
    
        <Swiper pagination={pagination} modules={[Pagination]} className="auth_slider" >
    
            <SwiperSlide>
                <img className='slider_img' src={Slide} alt="slider_img"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src={Slide1} alt="slider_img"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src={Slide} alt="slider_img"></img>
            </SwiperSlide>
            <SwiperSlide>
                <img className='slider_img' src={Slide1} alt="slider_img"></img>
            </SwiperSlide>
        
      </Swiper>
  )
}

export default AuthSlider