import React, { useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../Assets/Images/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Context } from '../../index.js';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  const { user } = useContext(Context);
  const [navbartogle, setToggler] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const excursionClass = location.pathname.includes("/excursion") ? "flight_active_link" : "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 70);
    });
  }, []);

  useEffect(() => {
    setToggler(false); // Reset the navbar toggle state when the authentication status changes
  }, [user.isAuth]);

  const handleToggler = () => {
    setToggler(!navbartogle);
  };

  return (
    <div className={`app_navbar ${location.pathname === "/" ? "home_Navbar" : ""} ${scroll ? "scroll_navbar" : ""}`}>
      <div className='mobile_nav'>
        <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
        <button onClick={handleToggler}><MenuIcon /></button>
      </div>
      <div className={`navbar_inner ${navbartogle ? "toggle_navbar" : ""} `}>
        <button className='navbar_close_btn' onClick={() => setToggler(false)}>X</button>
        <div className='navbar_links'>
          <Link to="excursion/list" className={excursionClass}><AirportShuttleIcon className='aeroplane' /> Find excursion</Link>
        </div>
        <div className='logo'>
          <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
        </div>
        <div className='landing_logo'>
          <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
        </div>
        {user.isAuth ?
          <div className='navbar_auth_buttons'>
            <Link to="/account" className='login_link'><Avatar  alt={user.name} src={user.img}/></Link>
          </div>
          :
          <div className='navbar_auth_buttons'>
            <Link to="/login" className='login_link'>Login</Link>
            <Link to="/register" className='register_link'>Register</Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;