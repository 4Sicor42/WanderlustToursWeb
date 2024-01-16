import React,{useContext} from 'react';
import { Context } from '../../../index.js';
import Profile from './Profile.js'

const Account = () => {
  const { user } = useContext(Context);
  return (
    <div className='account_wrapper'>
      <Profile/>
      {console.log(user)}
    </div>
  )
}

export default Account