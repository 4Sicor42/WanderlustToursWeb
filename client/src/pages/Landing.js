import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Common/Heading';
import Reviews from '../Common/Home/Reviews';
import Banner from '../Common/Home/Banner';
import LandingTab from '../Common/Home/LandingTab';
import TripSection from '../Common/Home/TripSection';



const Landing = () => {
  return (
    <div className='landing_wrapper'>
       <Banner />
       <LandingTab className="landing_tab_component" />
      <div className='trip_Section'>
        <Container>
              <div className='landing_Sections_header'>
                <Heading title="Plan your Perfect Trip" desc="Search Flights & Places Hire to our most popular destinations" />
              </div>
              <TripSection />
          </Container>
      </div>
      <div className='Reviews_section'>
        <Container>
            <div className='landing_Sections_header'>
              <Heading title="Reviews" desc="What people says about Golobe facilities" />
            </div>
            <Reviews />
        </Container>
      </div>
    </div>
  )
}

export default Landing