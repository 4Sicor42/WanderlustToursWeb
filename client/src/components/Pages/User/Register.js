import React, { useState, useContext } from 'react';
import AuthSlider from '../../Common/auth/AuthSlider';
import Logo from '../../Assets/Images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import { Context } from '../../../index.js';
import FormHeader from '../../Common/auth/FormHeader';

import { MuiTelInput } from 'mui-tel-input'

import { registration } from "../../../http/userAPI";

const Register = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { user } = useContext(Context);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [phone, setPhone] = React.useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegistration = async () => {
    try {
      if (!name || !lastname || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all the fields');
        return;
      }

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if(password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
        }
        if(phone.length < 6 ){
            alert('Phone must be at least 6 digits');
            return;
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(email)) {
            alert('Invalid email address');
            return;
            }

      let data;
      data = await registration(name, lastname, email, phone, password);
      user.setUserId(data.id);
        user.setEmail(data.email);
        user.setPhone(data.phone);
        user.setAddress(data.address);
        user.setDate(data.date);
        user.setName(data.name);
        user.setImg(data.img);
        user.setPassword(data.password);
        user.setRole(data.role)
        user.setIsAuth(true);
      

    } catch (e) {
      alert(e.response.data.message);
      return;
    }

    navigate('/account');
  }

  return (
    <div className='auth_wrapper register_wrapper'>
      <div className='auth_form_container'>
        <div className='auth_form_container_inner'>
          <div className='auth_logo_container'>
            <Link to='/'><img src={Logo} alt="logo"></img></Link>
          </div>
          <div className='auth_form'>
            <Container>
              <Row>
                <div className='col-12'>
                  <FormHeader title="Sign Up" desc="Let’s get you all set up so you can access your personal account." />

                </div>
                <div className='col-12 col-md-6'>
                  <div className='form_input_outer'>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-basic-first"
                      label="First Name"
                      variant="outlined"
                      className="field-text-border"
                      name="firstname"
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='form_input_outer'>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-basic-last"
                      label="Last Name"
                      variant="outlined"
                      className="field-text-border"
                      name="lasttname"
                      type="text"
                      value={lastname}
                      onChange={e => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='form_input_outer'>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      className="field-text-border"
                      name="email"
                      type="text"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='form_input_outer'>

                    <MuiTelInput value={phone} onChange={handleChange} />
                  </div>
                </div>

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
                <div className='col-12'>
                  <div className='form_input_outer'>
                    <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                      <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
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
                        label="Confirm Password"
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='col-12'>
                                <div className='remember_me_Container'>
                                <div className='checkmark_outer'>
                                        <Checkbox defaultChecked />
                                        <p>I agree to all the Terms and Privacy Policies</p>
                                    </div>
                                </div>
                            </div>
                <div className='col-12'>
                     <button 
                        type='submit'
                        className='auth_form_button'
                           onClick={() => {
                              handleRegistration();
                          }}
                    >
                          Create Account
                    </button>
                    </div>
                    <div className='col-12'>
                        <p className='forms_link'>Already have an Account..? <Link to='/login'>Login here</Link></p>
                    </div>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className='auth_slider_container'>
             <AuthSlider />
        </div>
    </div>
  );
}

export default Register;