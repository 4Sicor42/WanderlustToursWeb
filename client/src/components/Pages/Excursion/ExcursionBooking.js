import React from 'react';
import { Container,Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Leftarrow from '../../Assets/Images/icons/left.png';

// icons 
import ApartmentIcon from '@mui/icons-material/Apartment';

const ExcursionBooking = () => {
    const location = useLocation();
    const excursion = location.state.excursion;

    const handleClick = () => {
        navigate(`/excursion/${excursion.id}/overview`, {
          replace: true,
          state: { excursion } 
        });
      }

    let navigate=useNavigate();   
  return (
    <div className='flightBooking_wrapper'>
        
        <Container>
            <Row>
                <div className='col-12 col-lg-8'>
                    <div className='flight_detail_card'>
                        <div className='flight_booking_card_name'>
                            <h4>{excursion.name}</h4>
                            <p>{excursion.price}$</p>
                        </div>
                            <div className='flight_name_icons'>
                                <div className='name_img'>
                                    <img src={excursion.img} alt={excursion.name}></img>
                                    <div className='name'>
                                        <h5>{excursion.country}</h5>
                                        <p>{excursion.adress}</p>
                                    </div>
                                </div>
                                

                            </div>
                            <div className='in_out_time_container'>
                                <div className='time_Div'><span>{excursion.date}</span> <p>Check In</p> </div>
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
                            <img src={excursion.img} alt={excursion.name}></img>
                            <div className='header_info'>
                                <p>{excursion.manager}</p>
                                <h4>{excursion.name}</h4>
                                <div className='review'>
                                    <span className='review_number'>{excursion.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className='price_info'>
                            <h4  className='price_heading'>Price</h4>
                            <div className='prices'>
                                <span>{excursion.price}$</span>
                            </div>
                           
                        </div>
                        <div className='total_price'>
                            <p>Total</p>
                            <span>{excursion.price}$</span>
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="overview_btn">Overview your booking</button>
            </Row>
        </Container>
    </div>
  )
}

export default ExcursionBooking