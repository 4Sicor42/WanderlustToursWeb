import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../Heading';
import StarIcon from '@mui/icons-material/Star';


const ExcursionItemCard = ({excursion}) => {
    let navigate=useNavigate();

  return (

    <div className='flight_card_inner'>
        <div className='card_img'>
            <img src={excursion.img} alt={excursion.name}></img>
        </div>
        <div className='detail_container'>
            <div className='review_price_container'>
                <div>
                <Heading title={excursion.name} desc={excursion.country} />
                </div>
                <div className='reviews'>
                    <span className='rating_number'>{[...Array(excursion.rating)].map(() => 
                                <StarIcon />
                              )}</span>
                </div>                
                <div className='price'>
                    <p>starting from</p>
                    <span>{excursion.price}$</span>

                </div>
            </div>
            <div className='detail_fav_container'>
            <button 
            className="detail_btn"
            onClick={() => navigate(`/flight/list/${excursion.id}`, {replace: true})}
            >
            View Detail
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default ExcursionItemCard