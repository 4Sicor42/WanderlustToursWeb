import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import Dubai from '../../Assets/Images/Excursion/dubai.png';
import Leftarrow from '../../Assets/Images/icons/left.png';
import Small from '../../Assets/Images/Excursion/small.png';

// icons 
import ApartmentIcon from '@mui/icons-material/Apartment';

const ExcursionBooking = () => {
    let navigate=useNavigate();   
  return (
    <div className='flightBooking_wrapper'>
        
        <Container>
            <Row>
                <div className='col-12 col-lg-8'>
                    <div className='flight_detail_card'>
                        <div className='flight_booking_card_name'>
                            <h4>Emirates A380 Airbus</h4>
                            <p>$ 32</p>
                        </div>
                            <div className='flight_name_icons'>
                                <div className='name_img'>
                                    <img src={Dubai} alt="dubai"></img>
                                    <div className='name'>
                                        <h5>Emirates</h5>
                                        <p>Airbus 432</p>
                                    </div>
                                </div>
                                

                            </div>
                            <div className='in_out_time_container'>
                                <div className='time_Div'><span>12:00 Pm</span> <p>Check In</p> </div>
                                <div className='plane_icons'>
                                    <img src={Leftarrow} alt='left'></img>
                                        <ApartmentIcon className='plane' />
                                </div>
                            </div>
                    </div>
                    
                    
                </div>
                <div className='col-12 col-lg-4'>
                    <div className='flight_overview_Card' >
                        <div className='header'>
                            <img src={Small} alt="flight"></img>
                            <div className='header_info'>
                                <p>Economy</p>
                                <h4>Emirates A30 Bus</h4>
                                <div className='review'>
                                    <span className='review_number'>4.5</span>
                                    <p>Very Good<span> 54 reviews</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='price_info'>
                            <h4  className='price_heading'>Price</h4>
                            <div className='prices'>
                                <p>Base Free</p>
                                <span>32$</span>
                            </div>
                           
                        </div>
                        <div className='total_price'>
                            <p>Total</p>
                            <span>32$</span>
                        </div>
                    </div>
                </div>
                <button onClick={()=>navigate("/flight/list/1/overview", {replace: true})} className="overview_btn">Overview your booking</button>
            </Row>
        </Container>
    </div>
  )
}

export default ExcursionBooking