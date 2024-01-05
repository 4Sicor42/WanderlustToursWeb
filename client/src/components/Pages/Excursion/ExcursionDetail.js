import React from 'react';
import DetailHeader from '../../Common/DetailHeader';
import { Container } from 'react-bootstrap';
import Banner from '../../Assets/Images/Excursion/banner.png';
import Small from '../../Assets/Images/Excursion/small.png';
import Heading from '../../Common/Heading';

const ExcursionDetail = () => {
  return (
    <div className='flight_detail_wrapper'>
       <Container>
         <DetailHeader />
         <div className='detail_images_section'>
            <div className='detail_img_bannner'>
                <img src={Banner} alt="banner"></img>
            </div>
            <div className='small_images_container'>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
               <img src={Small} alt="small_img"></img>
            </div>
         </div>
          <div>
            <Heading title="Ovewview" desc = "DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1DESCRIPTION 1"/>
          </div>
       </Container>
    </div>
  )
}

export default ExcursionDetail