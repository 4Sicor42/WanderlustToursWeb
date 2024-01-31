import notFoundImage from '../Assets/Images/404.png';
import Button from '@mui/joy/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img  src={notFoundImage} alt="404" className="not-found-image"/>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">Oops! The page you are looking for could not be found.</p>
      <Button component={Link} to="/" color="neutral" variant="soft"  size="lg">Go back to Home</Button>
    </div>
  );
};

export default NotFound;