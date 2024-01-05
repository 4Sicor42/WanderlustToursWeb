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


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    let navigate=useNavigate();
    const { user } = useContext(Context);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    

  const handleLogin = () => {
    //const loggedInUser = { name: 'John' }; логика
    // Обновите состояние пользователя в хранилище
    user.setIsAuth(true);
  };

  
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
                                        className="field-text-border"
                                        name="email"                                       
                                        type="email" 
                                       
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
                                    navigate('/account');
                                }}
                            >
                                Create Account
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