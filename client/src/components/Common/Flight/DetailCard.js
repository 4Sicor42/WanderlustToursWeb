import React from 'react';
import Dubai from '../../Assets/Images/Flight/dubai.png';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import WifiIcon from '@mui/icons-material/Wifi';
import TimerIcon from '@mui/icons-material/Timer';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import AccessibleIcon from '@mui/icons-material/Accessible';
import Rightarrow from '../../Assets/Images/icons/right.png';
import Leftarrow from '../../Assets/Images/icons/left.png';

const DetailCard = () => {
  return (
    <div className='flight_detail_card'>
        <div className='flight_card_header'>
            <h4>Return Wed, Dec 8</h4>
            <p>2h 48m</p>
        </div>    
        <div className='flight_name_icons'>
            <div className='name_img'>
                <img src={Dubai} alt="dubai"></img>
                <div className='name'>
                    <h5>Emirates</h5>
                    <p>Airbus 432</p>
                </div>
            </div>
            <div className='facilities_icon'>
                <span><AirplanemodeActiveIcon /></span>
                <span><WifiIcon /></span>
                <span> <TimerIcon /></span>
                <span><LunchDiningIcon /> </span>
                <span><AccessibleIcon /></span>

            </div>

        </div>
        <div className='in_out_time_container'>
            <div className='time_Div'><span>12:00 Pm</span> <p>Newyark(EWR)</p> </div>
            <div className='plane_icons'>
                <img src={Leftarrow}></img>
                    <AirplanemodeActiveIcon className='plane' />
                <img src={Rightarrow}></img>

            </div>
            <div className='time_Div'><p>Newyark(EWR)</p> <span>12:00 Pm</span> </div>

        </div>
    </div>
  )
}

export default DetailCard