import React, {useContext} from 'react';
import { Container,Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Leftarrow from '../../Assets/Images/icons/left.png';
import { Context } from '../../../index.js';
import UnauthorizedComponent from '../../Common/UnauthorizedComponent';
import NotFound from '../NotFound';
import { bookExcursion } from '../../../http/ExcursionAPI';
// icons 
import ApartmentIcon from '@mui/icons-material/Apartment';

const ExcursionBooking = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const excursion = location.state?.excursion;

    const handleClick = async () => {
        try {
            var code =excursion.id^excursion.averageRating*user.id^excursion.averageRating*excursion.averageRating*excursion.count^excursion.averageRating/24;
            const date = new Date(excursion.date);
            const hours = date.getUTCHours();
            const minutes = date.getUTCMinutes();
            const formattedTime = `${hours}:${minutes}`;
            const data = await bookExcursion(user.id, excursion.id,formattedTime,code,excursion.name);
            
            if (data.history.excursionId == null){
                alert("Error: excursionId is "+data.history.excursionId  )
            }
            else{
                navigate(`/excursion/${excursion.id}/overview`, {
                    replace: true,
                    state: { excursion },
                });  
            }
            

        } catch (error) {
            alert("Error:"+error)
        }
      };


    if (!user.isAuth) {
        return <UnauthorizedComponent/>;
      }
    
    if (excursion ==null){
        return <NotFound/>
    }

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
                                    <img src={process.env.REACT_APP_API_URL + excursion.img} alt={excursion.name}></img>
                                    <div className='name'>
                                        <h5>{excursion.country}</h5>
                                        <p>{excursion.address}</p>
                                    </div>
                                </div>
                                

                            </div>
                            <div className='in_out_time_container'>
                                <div className='time_Div'><span>{excursion.date.split('T')[0]}</span> <p>Check In</p> </div>
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
                            <img src={process.env.REACT_APP_API_URL + excursion.img} alt={excursion.name}></img>
                            <div className='header_info'>
                                <p>{excursion.manager}</p>
                                <h4>{excursion.name}</h4>
                                <div className='review'>
                                    <span className='review_number'>{excursion.averageRating}</span>
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
                <button onClick={handleClick} className="overview_btn">Book trip</button>
            </Row>
        </Container>
    </div>
  )
}

export default ExcursionBooking