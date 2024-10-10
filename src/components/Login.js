import React, { useState } from 'react'
import "../styles/Login.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyIcon from '@mui/icons-material/Key';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../reduxSlices/UserSlice';
const Login = () => {
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmitHanlder = (e) => {
        e.preventDefault();
        console.log(emailId, password);
        dispatch(addUser(emailId));
        navigate("/")
    }

  return (
    <div className='login'>
        <form onSubmit={(e) => onSubmitHanlder(e)}>
            <h2>LOGIN</h2>
            <div className='username'>
                <input
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                 type = 'text' placeholder='XYZ@gmail.com' ></input>
                <PersonOutlineIcon />
            </div>
            <div className='password'>
                <input 
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                type = 'password' placeholder='Enter your password'></input>
                <KeyIcon />
            </div>
            <button className='login-btn'>Login</button>
            <label className='account'>
                <NavLink to="/auth/register">Don't you have an Account?</NavLink>
            </label>
        </form>
    </div>
  )
}

export default Login