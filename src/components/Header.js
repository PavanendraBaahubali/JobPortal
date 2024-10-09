import React from 'react'
import "../styles/Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
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
            <p>Sign In</p>
        </div>

    </div>
  )
}

export default Header