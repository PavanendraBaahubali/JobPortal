import React, { useState } from 'react';
import "../styles/Login.css";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyIcon from '@mui/icons-material/Key';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false); // New loading state

    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        setError(false);
        setErrorMsg('');
        setLoading(true); // Set loading to true when form is submitted

        e.preventDefault();

        // Validation
        if (!emailId) {
            setError(true);
            setErrorMsg("Please provide your email");
            setLoading(false);
            return;
        }
        if (!password) {
            setError(true);
            setErrorMsg("Please enter your password");
            setLoading(false);
            return;
        }

        // Sending the login request
        try {
            const response = await axios.post("https://jobportal-backend-0mls.onrender.com/auth/login", {
                emailId,
                password
            });
            // Assuming the backend returns a token in response.data.token
            if (response.data.token) {
                // Store token in localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                
                console.log(response.data)
                console.log(localStorage.getItem('userId'));
            }

            setError(false);
            setLoading(false);
            navigate('/'); // Redirect to the homepage on success

        } catch (err) {
            setError(true);
            // Check if the error response from the server contains a message
            if (err.response && err.response.data && err.response.data.message) {
                setErrorMsg(err.response.data.message);
            } else {
                setErrorMsg("An error occurred during login. Please try again.");
            }
            setLoading(false);
        }
    };

    return (
        <div className='login'>
            <form onSubmit={onSubmitHandler}>
                <h2>LOGIN</h2>
                <div className='username'>
                    <input
                        value={emailId}
                        onChange={(e) => setEmailId(e.target.value)}
                        type='text'
                        placeholder='XYZ@gmail.com' 
                    />
                    <PersonOutlineIcon />
                </div>
                <div className='password'>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Enter your password' 
                    />
                    <KeyIcon />
                </div>
                <button className='login-btn'>
                    {loading ? "Loading..." : "Login"}
                </button>
                {isError && <p className='error-msg'>{errorMsg}</p>}
                <label className='account'>
                    <NavLink to="/auth/register">Don't have an Account?</NavLink>
                </label>
            </form>
        </div>
    );
};

export default Login;
