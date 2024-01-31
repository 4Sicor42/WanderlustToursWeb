import React,{useContext} from 'react';
import { Container,Row } from 'react-bootstrap';
import Path from '../../Assets/Images/Excursion/overview.png';
import Code from '../../Assets/Images/code.png';
import Avatar from '@mui/material/Avatar';
import { Context } from '../../../index.js';
import { useLocation } from 'react-router-dom';
import UnauthorizedComponent from '../../Common/UnauthorizedComponent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotFound from '../NotFound';

const ExcursionOverview = () => {
  const {user} = useContext(Context);
  const location = useLocation();
  const excursion = location.state?.excursion;

  if (!user.isAuth) {
    return <UnauthorizedComponent/>;
  }

  if (excursion ==null){
    return <NotFound/>
}

  return (
    <div className='booking_overview_wrapper'>
        <Container>
            <Row>
                
                <div className='col-12'>
                    <div className='flight_banner'>
                         <div className='flight_banner_detail'>
                           <div className='in_out_time_container'>
                              <div className='time'>
                                 <h4>{excursion.date.split('T')[0]}</h4>
                                 <p>Chek in</p>
                              </div>
                           </div>
                           <div className='user_Detail'>
                              <div className='user_upper_header'>
                                 <div className='user_img_name'>
                                      <Avatar  alt={user.name} src={user.img}/>
                                        <p>{user.name}
                                          <span> Manager: {excursion.manager}</span>
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
                                            <span>{excursion.date}</span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className='Svg'>
                                            <CalendarMonthIcon />

                                          </div>
                                          <div className='detail_portion'>
                                            <p>Meet</p>
                                            <span>On {excursion.address}</span>
                                          </div>
                                        </li>
                                     </ul>
                                 </div>
                                 <div className='barcode'>
                                    <div className='flight_Code'>
                                      <p>{excursion.country}</p>
                                      <span>{excursion.name}</span>
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