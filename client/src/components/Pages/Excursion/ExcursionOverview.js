import React from 'react';
import { Container,Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Path from '../../Assets/Images/Excursion/overview.png';
import User from '../../Assets/Images/user.png';
import Code from '../../Assets/Images/code.png';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const ExcursionOverview = () => {
  return (
    <div className='booking_overview_wrapper'>
        <Container>
            <Row>
                <div className='col-12'>
                    <div className='overview_flight_header'>
                         <div className='name'>
                            <h3>Istanbul old house</h3>
                            <p> <LocationOnIcon /> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                         </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='flight_banner'>
                         <div className='flight_banner_detail'>
                           <div className='in_out_time_container'>
                              <div className='time'>
                                 <h4>12:00 Pm</h4>
                                 <p>Chek in</p>
                              </div>
                           </div>
                           <div className='user_Detail'>
                              <div className='user_upper_header'>
                                 <div className='user_img_name'>
                                        <img src={User} alt="user"></img>
                                        <p>Mohsin Ali 
                                          <span>Boarding Pass 123m</span>
                                        </p>
                                 </div>

                              </div>
                              <div className='user_bottom'>
                                 <div className='flights_detail_icons'>
                                     <ul className='flights_detail_icons_list'>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Check in time</p>
                                            <span>12:00 pm</span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Neet</p>
                                            <span>On arial</span>
                                          </div>
                                        </li>
                                     </ul>
                                 </div>
                                 <div className='barcode'>
                                    <div className='flight_Code'>
                                      <p>EK</p>
                                      <span>123aksjdh</span>
                                    </div>
                                    <img src={Code} alt="code"></img>
                                 </div>
                              </div>
                           </div>
                         </div>
                         <div className='flight_path_image'>
                            <img src={Path} alt="Company"></img>
                         </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default ExcursionOverview