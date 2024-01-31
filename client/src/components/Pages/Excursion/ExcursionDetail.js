import React from 'react';
import DetailHeader from '../../Common/DetailHeader';
import { Container } from 'react-bootstrap';
import Heading from '../../Common/Heading';
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound';

const ExcursionDetail = () => {

  const location = useLocation();

  const excursion = location.state?.excursion;
  //console.log(excursion.excursionInfos[0].overview);
  if (excursion ==null){
    return <NotFound/>
  }
  return (
    <div className='flight_detail_wrapper'>
       <Container>
         <DetailHeader excursion = {excursion} />
         <div className='detail_images_section'>
            <div className='detail_img_bannner'>
                <img src={process.env.REACT_APP_API_URL + excursion.img} alt="banner"></img>
            </div>
            <div className='small_images_container'>
               <img src={process.env.REACT_APP_API_URL + excursion.img} alt={excursion.name}></img>
            </div>
         </div>
          <div>
            <Heading title="Ovewview" desc = {excursion.excursionInfos[0].overview}/>
          </div>
       </Container>
    </div>
  )
}

export default ExcursionDetail