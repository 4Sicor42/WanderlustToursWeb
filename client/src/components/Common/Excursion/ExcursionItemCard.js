import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../Heading';
import StarIcon from '@mui/icons-material/Star';


const ExcursionItemCard = ({excursion}) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/excursion/${excursion.id}`, {
          state: { excursion }
        });
      
      }
  return (

    <div className='flight_card_inner'>
        <div className='card_img'>
            <img src={process.env.REACT_APP_API_URL + excursion.img} alt={excursion.name}></img>
        </div>
        <div className='detail_container'>
            <div className='review_price_container'>
                <div>
                <Heading title={excursion.name} desc={excursion.country} />
                </div>
                <div className='reviews'>
                    <span className='rating_number'>{[...Array(excursion.averageRating)].map((star, i) => (
                              <StarIcon key={i} />
                            ))}</span>
                </div>                
                <div className='price'>
                    <p>starting from</p>
                    <span>{excursion.price}$</span>

                </div>
            </div>
            <div className='detail_fav_container'>
            <button 
            className="detail_btn"
            onClick={handleClick}
            >
            View Detail
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default ExcursionItemCard