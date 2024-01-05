import React from 'react';
import { Container } from 'react-bootstrap';

const ExcursionBanner = () => {
  return (
    <div className='banner_section'>
    <div className='banner_overlay'>
        <Container>
            <div className='banner_text'>
                <h3>Make your travel whishlist,<br></br> we’ll do the rest</h3>
                <p>Special offers to suit your plan</p>
            </div>
        </Container>
    </div>
    </div>
  )
}

export default ExcursionBanner