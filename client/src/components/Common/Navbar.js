import React,{useState,useEffect, useContext} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from '../Assets/Images/Logo.png';
import NavLogo from '../Assets/Images/Navlogo.png';
import MenuIcon from '@mui/icons-material/Menu';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { Context } from '../../index.js';
import { observer } from 'mobx-react';



const Navbar = observer(() => {
  const { user } = useContext(Context);
  const [navbartogle, setToggler] = useState(false);

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 70);
   });
 }, []);
  let location=useLocation();
  const excursionClass = location.pathname.includes("/flight") ? "flight_active_link" : "";
 

const handleToggler=()=>{
  setToggler(!navbartogle);
}



  return (
    <div className={`app_navbar ${location.pathname === "/" ? "home_Navbar" : ""} ${scroll ? "scroll_navbar" : ""}`}>
      <div className='mobile_nav'>
          <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
          <button onClick={()=>handleToggler()}><MenuIcon /></button>
      </div>
      <div className={`navbar_inner ${navbartogle ? "toggle_navbar" : ""} `}>
        <button className='navbar_close_btn' onClick={()=>setToggler(false)}><MenuIcon /></button>
        <div className='navbar_links'>
           <Link to="flight/list" className={excursionClass}> <AirportShuttleIcon className='aeroplane' /> Find Flight</Link>
           

         </div>
         <div className='logo'>
          
           <Link to="/"><img src={Logo} alt="navbar_logo"></img></Link>
           
         </div>
         <div className='landing_logo'>
           <Link  to="/"><img   src={scroll ? Logo : NavLogo} alt="navbar_logo"></img></Link>
         </div>
         {user.isAuth?
          <div className='navbar_auth_buttons'>
          <Link to="/account" className='login_link'>Name</Link>

          </div>
          :
          <div className='navbar_auth_buttons'>
          <Link to="/login" className='login_link'>Login</Link>
          <Link to="/register" className='register_link'>Register</Link>
          </div> 
        }
         
      </div>
         
    </div>
  )

})

export default Navbar