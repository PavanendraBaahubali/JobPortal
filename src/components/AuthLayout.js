import React from 'react'
import "../styles/AuthLayout.css"
import Login from '../components/Login'
import { useLocation, useNavigate } from 'react-router-dom'
import Register from './Register'

const AuthLayout = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const navigate = useNavigate()
  return (
    <div className='AuthLayout'>
        <div className='job-logo' onClick={() => navigate('/')}>
            <h3>JoFind</h3>
            <div className='job-logo-round'></div>
        </div>
        {
            pathName === "/auth/register" ? <Register /> : <Login />
        }
    </div>
  )
}

export default AuthLayout