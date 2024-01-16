import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Common/Heading';
import ReviewsComponent from '../Common/ReviewsComponent';
import Banner from '../Common/Home/Banner';

import TripCard from '../Common/Home/TripCard';
import { Row } from 'react-bootstrap';
import { Context } from '../../index.js';


const Landing = () => {
  const {store} = useContext(Context);
  return (
    <div className='landing_wrapper'>
       <Banner />
      <div className='trip_Section'>
        <Container>
              <div className='landing_Sections_header'>
                <Heading title="Plan your Excursion" desc="Search Excursions to most popular destinations" />
              </div>
              <div className='Trip_section_inner'>
                <Row>
                 {
                  store._excursions.slice(0, 9).map(excursion => {
                    return <TripCard key={excursion.id} excursion={excursion} />;
                  })}

                </Row>
        
               </div>
          </Container>
      </div>
      <div className='Reviews_section'>
        <Container>
            <div className='landing_Sections_header'>
              <Heading title="Reviews" desc="What people says" />
            </div>
            <ReviewsComponent />
        </Container>
      </div>
    </div>
  )
}

export default Landing