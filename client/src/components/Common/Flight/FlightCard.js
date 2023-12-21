import React from 'react';
import Company from '../../Assets/Images/Flight/company.png';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate, useLocation } from 'react-router-dom';

const FlightCard = () => {
    let navigate=useNavigate();
    const location = useLocation()
  return (
    <div className='flight_card_inner'>
        <div className='card_img'>
            <img src={Company} alt="company _img"></img>
        </div>
        <div className='detail_container'>
            <div className='review_price_container'>
                <div className='reviews'>
                    <span className='rating_number'>4.5</span>
                    <p className='review_text'><span>Very Good</span> 54 reviews</p>
                </div>                
                <div className='price'>
                    <p>starting from</p>
                    <span>$104</span>

                </div>
            </div>
            <div className='time_div_outer_Container'>
                <div className='time_div'>
                    <div className='checkmark_outer'>
                        <Checkbox  defaultChecked />
                    </div>
                    <div className='flight_time'>
                        <h2><span>12:00 pm</span>-<span>01:28 pm</span></h2>
                        <p>Emirates</p>
                    </div>
                    <div className='flight_status'>
                        <p>non-stop</p>
                    </div>
                    <div className='flight_travel_time'>
                        <h4>2h 48m</h4>
                        <p>EWR-BA</p>
                    </div>
                </div>
                <div className='time_div'>
                    <div className='checkmark_outer'>
                    <Checkbox  defaultChecked />
                    </div>
                    <div className='flight_time'>
                        <h2><span>12:00 pm</span>-<span>01:28 pm</span></h2>
                        <p>Emirates</p>
                    </div>
                    <div className='flight_status'>
                        <p>non-stop</p>
                    </div>
                    <div className='flight_travel_time'>
                        <h4>2h 48m</h4>
                        <p>EWR-BA</p>
                    </div>
                </div>
            </div>
            {console.log(location.pathname, 'pathname')}
            <div className='detail_fav_container'>
                <button className='fav_button'><FavoriteBorderIcon /></button>
                <button className='detail_btn' onClick={()=>navigate("/flight/list/1", {replace: true})}>View Detail</button>
            </div>
            
        </div>
    </div>
  )
}

export default FlightCard