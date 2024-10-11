import React from 'react'
import "../styles/Header.css"
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/auth/login')
    }


  return (
    <div className='top-header'>
        <div className='top-head-nav'>
            <h1  className='logo'>JoFind
                <b className='logo-round'></b>
            </h1>
            <p><NavLink to="/">
            Find Jobs
                </ NavLink></p>
            <p>Companies</p>
            <p>About JoFind</p>
        </div>

        <div className='top-head-auth'>
            {
                token ?
                <>
                <p id = 'book-mark'><NavLink to="/bookmarks">
            Bookmarks
                </ NavLink></p>
            <p onClick={() => handleSignOut()}>Sign Out</p>
            <div className='profile'></div>
                </>

                :
                    <NavLink to = '/auth'><p>Sign In</p></NavLink>
            }
            
        </div>

    </div>
  )
}

export default Header