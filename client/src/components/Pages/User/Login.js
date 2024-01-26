import React,{useState,useContext} from 'react';
import Logo from '../../Assets/Images/Logo.png';
import { Link, useNavigate} from 'react-router-dom';
import { Container,Row  } from 'react-bootstrap';
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import { Context } from '../../../index.js';

import AuthSlider from '../../Common/auth/AuthSlider';
import FormHeader from '../../Common/auth/FormHeader';
import {login} from "../../../http/userAPI";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    let navigate=useNavigate();
    const { user } = useContext(Context);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const handleLogin = async () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setEmailError(true);
          setEmailErrorMessage('Invalid email format');
          return;
        }
      
      
        try {
            let data= await login(email, password);
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
    <div className='auth_wrapper'>
        <div className='auth_form_container'>
            <div className='auth_form_container_inner'>
                <div className='auth_logo_container'>
                    <Link to='/'><img src={Logo} alt="logo"></img></Link>
                </div>
                <div className='auth_form'>
                    <Container>
                        <Row>
                            <div className='col-12'>
                                <FormHeader title="Login" desc="Login to access your Golobe account" />
                            </div>
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                <TextField
                                    sx={{ width: "100%" }}
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    className={`field-text-border ${emailError ? 'error' : ''}`}
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value);
                                        setEmailError(false);
                                    }}
                                    error={emailError}
                                    helperText={emailError ? emailErrorMessage  : ''}
                                    />
                                </div>
                            </div>
                            
                            <div className='col-12'>
                                <div className='form_input_outer'>
                                 <FormControl sx={{ width: "100%" }} variant="outlined" className='field-text-border'>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
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
                                        value={password}
                                        onChange={e => {
                                            setPassword(e.target.value);
                                        }}
                                        />

                                    </FormControl>
                                </div>
                            </div>
                            
                            <div className='col-12'>
                            <button 
                                type='submit'
                                className='auth_form_button'
                                onClick={() => {
                                    handleLogin();
                                }}
                            >
                               Login into account
                            </button>
                            </div>
                            <div className='col-12'>
                                <p className='forms_link'>Dont have an Account..? <Link to='/register'>Signup here</Link></p>
                            </div>
                        </Row>
                    </Container>                    
                </div>
                <div></div>
            </div>
            
        </div>
        <div className='auth_slider_container'>
             <AuthSlider />
        </div>
    </div>
  )
}

export default Login