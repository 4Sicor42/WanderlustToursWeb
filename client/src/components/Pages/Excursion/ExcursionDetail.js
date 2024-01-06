import React from 'react';
import DetailHeader from '../../Common/DetailHeader';
import { Container } from 'react-bootstrap';
import Heading from '../../Common/Heading';
import { useLocation } from 'react-router-dom';

const ExcursionDetail = () => {

  const location = useLocation();
  const excursion = location.state.excursion;
  return (
    <div className='flight_detail_wrapper'>
       <Container>
         <DetailHeader excursion = {excursion} />
         <div className='detail_images_section'>
            <div className='detail_img_bannner'>
                <img src={excursion.img} alt="banner"></img>
            </div>
            <div className='small_images_container'>
               <img src={excursion.img} alt={excursion.name}></img>
            </div>
         </div>
          <div>
            <Heading title="Ovewview" desc = {excursion.overview}/>
          </div>
       </Container>
    </div>
  )
}

export default ExcursionDetail