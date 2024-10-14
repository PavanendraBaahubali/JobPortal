import React, {  useState } from 'react';
import "../styles/Register.css";
import { NavLink, useNavigate } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../reduxSlices/UserSlice';

const Register = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        emailId: '',
    });


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Check if any field is empty
        for (const field in formData) {
            if (!formData[field]) {
                setLoading(false)
                setError(true);
                setErrorMsg(`*${field.replace(/([A-Z])/g, ' $1').toUpperCase()} shouldn't be empty`); // Custom message formatting
                return;
            }
        }

        // Check if password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setLoading(false)
            setError(true);
            setErrorMsg("Password and Confirm Password should be the same");
            return;
        }

        // If validation passes
       
        const response = await axios.post("https://jobportal-backend-0mls.onrender.com/auth/register", formData);
        localStorage.setItem('token', response.data.token);
        dispatch(addUser(response.data))
        navigate('/');

        setFormData({
            userName: '',
            password: '',
            confirmPassword: '',
            emailId: '',
        });
        setError(false);
        setErrorMsg('');
        setLoading(false)

    };

    return (
        <div className='register'>
            <form onSubmit={onSubmitHandler}>
                <h2>REGISTER</h2>

                {/* Username Input */}
                <div className='first-name'>
                    <input
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                        type='text'
                        placeholder='Enter your name'
                    />
                    <PersonOutlineIcon />
                </div>

                {/* Email Input */}
                <div className='register-email'>
                    <input
                        value={formData.emailId}
                        onChange={(e) => setFormData({ ...formData, emailId: e.target.value })}
                        type='text'
                        placeholder='Email@gmail.com'
                    />
                    <AlternateEmailIcon />
                </div>

                {/* Password Input */}
                <div className='register-password'>
                    <input
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        type='password'
                        placeholder='Create your password'
                    />
                    <KeyIcon />
                </div>

                {/* Confirm Password Input */}
                <div className='confim-password'>
                    <input
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        type='password'
                        placeholder='Confirm your password'
                    />
                    <KeyIcon />
                </div>

                {/* Error Message Display */}
                {isError && <p className='error-msg'>{errorMsg}</p>}

                {/* Register Button */}
                <button className='register-btn'>{!isLoading ?  "Register" : "Loading..."}</button>

                {/* Navigation to Login Page */}
                <label className='account'>
                    <NavLink to="/auth">Already have an account?</NavLink>
                </label>
            </form>
        </div>
    );
};

export default Register;
