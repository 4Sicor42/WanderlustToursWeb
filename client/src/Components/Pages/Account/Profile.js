import React, { useContext, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import { Context } from '../../../index';
import Avatar from '@mui/material/Avatar';
import { Button, TextField } from '@mui/material';
import {update} from "../../../http/userAPI";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


export default function EditableUserProfile({
    stored,
    editCompleteCallback
}) {

    const { user } = useContext(Context);
    let navigate=useNavigate();
    const handleLogout = () => {
      user.logout();
      localStorage.removeItem('token');
      navigate('/');
    };


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const [name, setName] = useState(user.name);
    const [isNameEditing, setIsNameEditing] = useState(false);

    const [email, setEmail] = useState(user.email);
    const [isEmailEditing, setIsEmailEditing] = useState(false);

    const [phone, setPhone] = useState(user.phone);
    const [isPhoneEditing, setIsPhoneEditing] = useState(false);

    const [address, setAddress] = useState(user.address);
    const [isAddressEditing, setIsAddressEditing] = useState(false);

    const [date, setDate] = useState(user.date);
    const [isDateEditing, setIsDateEditing] = useState(false);
    

    const [password, setPassword] = useState(user.password);
    const [isPasswordEditing, setIsPasswordEditing] = useState(false);

    function handleEditClick(field) {
        switch (field) {
            case 'name':
                setIsNameEditing(true);
                break;
            case 'email':
                setIsEmailEditing(true);
                break;
            case 'phone':
                setIsPhoneEditing(true);
                break;
            case 'address':
                setIsAddressEditing(true);
                break;
            case 'date':
                setIsDateEditing(true);
                break;
            case 'password':
                setIsPasswordEditing(true);
                break;
            default:
                break;
        }
    }

    function handleSaveClick(field) {
        switch (field) {
          case 'name':
            setIsNameEditing(false);
            user.setName(name);
            break;
          case 'email':
            setIsEmailEditing(false);
            user.setEmail(email);
            break;
          case 'phone':
            setIsPhoneEditing(false);
            user.setPhone(phone);
            break;
          case 'address':
            setIsAddressEditing(false);
            user.setAddress(address);
            break;
          case 'date':
            setIsDateEditing(false);
            user.setDate(date);
            break;
          case 'password':
            setIsPasswordEditing(false);
            user.setPassword(password);
            break;
          default:
            break;
        }

        const today = new Date().toISOString().split('T')[0];

        const updatedUser = {
            name: user.name ,
            email: user.email ,
            phone: user.phone ,
            address: user.address,
            date: user.date || today,
            password: user.password ,
            role: user.role
          };

          try {
            // eslint-disable-next-line
            let data =  update(updatedUser.name,updatedUser.email,updatedUser.phone, updatedUser.address, updatedUser.date ,updatedUser.password,user.id,updatedUser.role);
            
        } catch (e) {
          alert(e.response.data.message);
          return;
        }
        
      }
    

    return (
        <div className="profile-page">
            <header className="profile-header">
                <Avatar src={user.img} />
                <h1>{user.name}</h1>
            </header>
            <section className="profile-info">
                <div className="profile-info-item">
                    <h2>Name</h2>
                    {isNameEditing ? (
                        <>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Button onClick={() => handleSaveClick('name')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                            <span>{name}</span>
                            <Button onClick={() => handleEditClick('name')} variant="outlined">Edit</Button>
                        </>
                    )}
                </div>
                <div className="profile-info-item">
                    <h2>Email</h2>
                    {isEmailEditing ? (
                        <>
                            <TextField
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button onClick={() => handleSaveClick('email')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                            <span>{email}</span>
                            <Button onClick={() => handleEditClick('email')} variant="outlined">Edit</Button>
                        </>
                    )}
                </div>
                <div className="profile-info-item">
                    <h2>Phone</h2>
                    {isPhoneEditing ? (
                        <>
                            <TextField
                                label="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Button onClick={() => handleSaveClick('phone')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                            <span>{phone}</span>
                            <Button onClick={() => handleEditClick('phone')} variant="outlined">Edit</Button>
                        </>
                    )}
                </div>
                <div className="profile-info-item">
                    <h2>Address</h2>
                    {isAddressEditing ? (
                        <>
                        <TextField
                            label="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <Button onClick={() => handleSaveClick('address')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                        {address ? (
                            <span>{address}</span>
                        ) : (
                            <span>No info</span>
                        )}
                        <Button onClick={() => handleEditClick('address')} variant="outlined">{address? (
                               <>Edit</>
                        ):(
                            <> Add address</>
                        )}</Button>
                        </>
                    )}
                    </div>
                    <div className="profile-info-item">
                    <h2>Date of Birth</h2>
                    {isDateEditing ? (
                        <>
                        <TextField
                            label="Date of Birth"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <Button onClick={() => handleSaveClick('date')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                        {date ? (
                            <span>{date.split('T')[0]}</span>
                        ) : (
                            <span>No info</span>
                        )}
                        <Button onClick={() => handleEditClick('date')} variant="outlined">
                            {date? (
                               <>Edit</>
                        ):(
                            <> Add date</>
                        )}
                        </Button>
                        </>
                    )}
                    </div>
                    <div className="profile-info-item">
                        <h2>Password</h2>
                        {isPasswordEditing ? (
                            <>
                                <div className='col-12'>
                  <div className='form_input_outer'>
                    <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                      <InputLabel htmlFor="OutlinedInput-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </div>
                </div>
                            <Button onClick={() => handleSaveClick('password')} variant="contained">Save</Button>
                        </>
                    ) : (
                        <>
                            <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        label="Password"
                      />
                            <Button onClick={() => handleEditClick('password')} variant="outlined">Edit</Button>
                        </>
                    )}
                </div>
                <div className='col-12'>
                    <Button className="exit-btn" variant="outlined" onClick={handleLogout} startIcon={<ExitToAppIcon />}>Exit</Button>
                </div>
                

            </section>
        </div>
    );
}