import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import Google from './Assets/Images/icons/google.png';
import Review from './Assets/Images/Landing/review.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Reviews = () => {
  return (
    <div className='reviews_Slider'>
                <Swiper
                    spaceBetween={50}
                    freeMode={true}
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
                        <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                         <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                         <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                         <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                         <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                         <SwiperSlide>
                          <div className='box'>
                            <div className='header'>
                             <span className='heading'>“A real sense of community, nurtured”</span>
                              <p className='desc'>Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.
                              </p>
                              <Link to="">View More</Link>
                            </div>
                            <div className='rating_stars'>
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                              <StarIcon />
                            </div>
                            <div className='company_name'>
                               <h4>Olga</h4>
                               <p>Weave Studios – Kai Tak</p>
                               <Link to=""><img src={Google} alt="img"></img>Google</Link>
                            </div>
                            <div className='bottom_img'>
                              <img src={Review} alt="img"></img>
                            </div>
                          </div>
                         </SwiperSlide>
                        
                        
                  </Swiper>
            </div>
  )
}

export default Reviews