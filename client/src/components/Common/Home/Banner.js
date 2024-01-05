import React from 'react';
import { Typography } from "@mui/material";

const Banner = () => {

  return (
    <div className='Home_banner'>
        <div className='banner_overlay'>
            <div className='banner_text'>
            <Typography variant="h1">Explore the world</Typography>
            <Typography variant="h2">One tour at a time</Typography>
            <Typography variant="h4">Special Offers to suit your plan</Typography>
            </div>

        </div>
      </div>
  )
}

export default Banner
