import React from 'react';
import { useContext } from 'react';
import { Context } from '../../../index';
import { useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
const Profile = () => {

  const { user } = useContext(Context);
  let navigate=useNavigate();
  const handleLogout = () => {
    user.logout();
    // сбросить токен
    localStorage.removeItem('token');
    
    // переход на страницу входа
    navigate('/');
  }
  return (
    <div>
        
      <h2>User Profile</h2>
      <Avatar  alt={user.name} src={user.img}/>
      <p>
        <b>ID:</b> {user.id} 
      </p>

      <p>
        <b>Name:</b> {user.name}
      </p>

      <p>
        <b>Email:</b> {user.email}  
      </p>

      <p>
        <b>Phone:</b> {user.phone}
      </p>

      <p> 
        <b>Address:</b> {user.address}
      </p>

      <p>
        <b>Registration Date:</b> {user.date}
      </p>

      <button onClick={handleLogout}> Выйти </button>
    </div>
  );

}

export default Profile;