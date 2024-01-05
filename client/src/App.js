import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Components/Assets/Style/user.scss';
import './Components/Assets/Style/App.scss';
import './Components/Assets/Style/Excursion.scss';
import './Components/Assets/Style/Account.scss';
import './Components/Assets/Style/Custom.scss';
import CircularProgress from '@mui/material/CircularProgress';

const User = lazy(() => import("./Components/layout/User"));
const Layout = lazy(() => import("./Components/layout/Layout"));
const Landing =lazy(() => import("./Components/Pages/Landing"));
const Login =lazy(() => import("./Components/Pages/User/Login"));
const Register =lazy(() => import("./Components/Pages/User/Register"));


const FlightsList =lazy(() => import("./Components/Pages/Excursion/ExcursionList"));
const FlightDetail =lazy(() => import("./Components/Pages/Excursion/ExcursionDetail"));
const FlightOverview =lazy(() => import("./Components/Pages/Excursion/ExcursionOverview"));
const FlightBooking =lazy(() => import("./Components/Pages/Excursion/ExcursionBooking"));

const Account =lazy(() => import("./Components/Pages/Account/Account"));
const AccountHistory =lazy(() => import("./Components/Pages/Account/AccountHistory"));

function App() {
  return (
    <>
      <Suspense fallback={<div className='loader'><h2 className='loader_text'>L<CircularProgress color="success" />ading</h2></div>}>
        <Routes>
          <Route element={<User />}>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
          </Route>
          <Route element={<Layout />}>
              <Route path='/' element={<Landing />} />
              <Route path="flight/list" element={<FlightsList />} />
              <Route path="flight/list/:id" element={<FlightDetail />} />
              <Route path="flight/list/:id/booking" element={<FlightBooking />} />
              <Route path="flight/list/:id/overview" element={<FlightOverview />} />
              <Route path='/account' element={<Account />}/>
              <Route path='/account/history' element={<AccountHistory />}/>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
