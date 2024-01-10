import React from 'react';
import { useNavigate } from 'react-router-dom';

const TripCard = ({excursion}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/excursion/${excursion.id}`, {
      state: { excursion }
    });
  
  }
  return (
    <div 
    className='col-12 col-md-6 col-lg-4'
    onClick={handleClick}>
            <div className='trip_Card'>
                <div className='img_div'>
                <img src={excursion.img} alt={excursion.name}></img>
                </div>
                <div className='info_div'>
                    <h3>{excursion.country}</h3>
                    <div className='facility'>
                        <span>Rayting : {excursion.rating}</span>

                        <span>Date : {excursion.date}</span>
                    </div>
                </div>
            </div>
            </div> 
  )
}

export default TripCard