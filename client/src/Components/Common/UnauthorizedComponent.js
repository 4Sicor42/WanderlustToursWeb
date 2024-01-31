import React from 'react';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';

const UnauthorizedComponent = () => {
  return (
    <div className="unauthorized-component">
      <h3 className="unauthorized-component__title">You are not authorized</h3>
      <p className="unauthorized-component__description">Please register or log in to access this page.</p>
      <div className="unauthorized-component__button-container">
      <Button component={Link} to="/register" color="neutral" variant="soft"  size="lg">Sing up</Button>

      <Button component={Link} to="/login" color="neutral" variant="soft"  size="lg">Log in</Button>
      </div>
    </div>
  );
};

export default UnauthorizedComponent;