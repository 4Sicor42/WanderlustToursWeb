import React,{useContext} from 'react';

import { FreeMode, Pagination } from "swiper";
import ReviewItem from './ReviewItem';
import { Context } from '../../index.js';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



function ReviewsComponent() {
    const {reviews} = useContext(Context);
  return (
    <div className='reviews_Slider'>
                <Swiper
                  direction="horizontal"
                    spaceBetween={50}
                    freeMode={false}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      600:{
                        slidesPerView:2,
                      },                      
                      1100:{
                        slidesPerView:3
                      },
                      
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="reviewsslider"
                    >


                    {reviews.reviews.map(review => (
                      <SwiperSlide >
                        <ReviewItem
                          key={review.id}
                          review={review}
                        />
                      </SwiperSlide>  
                    ))}

                         
                  </Swiper>
            </div>
  )

}

export default ReviewsComponent;