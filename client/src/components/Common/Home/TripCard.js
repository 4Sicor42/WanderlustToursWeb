import React from 'react';
import Trip from '../../Assets/Images/Landing/trip.png';


const TripCard = () => {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
            <div className='trip_Card'>
                <div className='img_div'>
                    <img src={Trip} alt="trip"></img>
                </div>
                <div className='info_div'>
                    <h3>Istanbul, Turkey</h3>
                    <div className='facility'>
                        <span>Flights</span>
                        <span>Hotels</span>
                        <span>Resorts</span>

                    </div>
                </div>
            </div>
            </div> 
  )
}

export default TripCard