import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../../Assets/Images/User/user1.png';
import Slide1 from '../../Assets/Images/User/user2.png';
import { Autoplay, Pagination, Navigation } from "swiper";


import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
const AuthSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Autoplay, Pagination, Navigation]}
      className="auth_slider"
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img className="slider_img" src={Slide} alt="slider_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slider_img" src={Slide1} alt="slider_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slider_img" src={Slide} alt="slider_img" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slider_img" src={Slide1} alt="slider_img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default AuthSlider;