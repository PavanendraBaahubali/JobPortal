import React from 'react'
import "../styles/Please.css"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '../reduxSlices/PopupSlice';
import { useNavigate } from 'react-router-dom';
const Please = () => {
    const showPopup = useSelector((state) => state.please)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Close the popup first
        dispatch(setPopup(false));
        // Then navigate to login page
        navigate('/auth');
    }
  return (
   <div className='please-container'>
     <div className='please'>
       <div className='please-head'>
            <div onClick={() => dispatch(setPopup(!showPopup))} className='please-close'>
                    <CloseIcon  />
            </div>
            <h3>Please Login</h3>
       </div>
            <button className='please-login' onClick={() => handleLogin()}>Login</button>
    </div>
   </div>
  )
}

export default Please