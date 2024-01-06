import React from 'react';
import { Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const DetailHeader = ({excursion}) => {
    let navigate=useNavigate();
    
    const handleClick = () => {
        navigate(`/excursion/${excursion.id}/booking`, {
          replace: true,
          state: { excursion } 
        });
      }
  return (
    <div className='detail_header'>
        <Row>
            <div className='col-12 col-md-6'>
                <div className='item_detail'>
                    <h3>{excursion.name}</h3>
                    <p className='address'> <LocationOnIcon /> {excursion.country},{excursion.adress}</p>
                    <div className='flight_review'>
                        <span className='review_btn'>{excursion.rating}</span>
                        <p className='review_status'>{[...Array(excursion.rating)].map((star, i) => (
                              <StarIcon key={i} />
                            ))}</p>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6'>
                <div className='price_Section'>
                    <h3 className='item_price'>{excursion.price} $</h3>
                    <div className='booking_btns'>
                        <button className='booking_btn' onClick={handleClick}>Book Now</button>
                     </div>
                </div>
                
            </div>
            
        </Row>
    </div>
  )
}

export default DetailHeader