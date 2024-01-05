import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import UserStore from "./store/UserStore";
import ExcursionStore from './store/ExcurionStore';
import ReviewsStore from './store/ReviewsStore';

export const Context = React.createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      store:new ExcursionStore(),
      reviews: new ReviewsStore()
      }}>
      <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

