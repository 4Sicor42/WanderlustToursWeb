import React,{useEffect} from 'react';
import { Outlet,useLocation } from 'react-router';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return (
    <div className='layout_Wrapper'>
        <Navbar />
        <Outlet /> 
        <Footer />
    </div>
  )
}

export default Layout