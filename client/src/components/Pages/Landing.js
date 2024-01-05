import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Common/Heading';
import Reviews from '../Common/Home/Reviews';
import Banner from '../Common/Home/Banner';

import TripCard from '../Common/Home/TripCard';
import { Row } from 'react-bootstrap';

const Landing = () => {
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
                  <TripCard />
                  <TripCard />
                  <TripCard />

                </Row>
        
               </div>
          </Container>
      </div>
      <div className='Reviews_section'>
        <Container>
            <div className='landing_Sections_header'>
              <Heading title="Reviews" desc="What people says" />
            </div>
            <Reviews />
        </Container>
      </div>
    </div>
  )
}

export default Landing