import './App.css';
import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Components/Assets/Style/user.scss';
import './Components/Assets/Style/App.scss';
import './Components/Assets/Style/Excursion.scss';
import './Components/Assets/Style/Account.scss';
import './Components/Assets/Style/Custom.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { check } from "./http/userAPI";
import { Context } from './index.js';
import NotFound from './Components/Pages/NotFound'

const User = lazy(() => import("./Components/layout/User"));
const Layout = lazy(() => import("./Components/layout/Layout"));
const Landing = lazy(() => import("./Components/Pages/Landing"));
const Login = lazy(() => import("./Components/Pages/User/Login"));
const Register = lazy(() => import("./Components/Pages/User/Register"));
const ExcursionList = lazy(() => import("./Components/Pages/Excursion/ExcursionList"));
const ExcursionDetail = lazy(() => import("./Components/Pages/Excursion/ExcursionDetail"));
const ExcursionOverview = lazy(() => import("./Components/Pages/Excursion/ExcursionOverview"));
const ExcursionBooking = lazy(() => import("./Components/Pages/Excursion/ExcursionBooking"));
const Account = lazy(() => import("./Components/Pages/Account/Account"));

function App() {
  const { user } = useContext(Context);

  useEffect(() => {
    check()
      .then(data => {
        user.setUserId(data.id);
        user.setEmail(data.email);
        user.setPhone(data.phone);
        user.setAddress(data.address);
        user.setDate(data.date);
        user.setName(data.name);
        user.setImg(data.img);
        user.setPassword(data.password);
        user.setRole(data.role);
        user.setIsAuth(true);
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          user.setIsAuth(false);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Suspense fallback={<div className='loader'><h2 className='loader_text'>L<CircularProgress color="success" />ading</h2></div>}>
        <Routes>
        
          <Route element={<User />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<Layout />}>
            <Route path='/' element={<Landing />} />
            <Route path="excursion/list" element={<ExcursionList />} />
            <Route path="/excursion/:id" element={<ExcursionDetail />} />
            <Route path="/excursion/:id/booking" element={<ExcursionBooking /> } />
            <Route path="/excursion/:id/overview" element={<ExcursionOverview /> } />
            <Route path='/account' element={<Account /> } />

          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;