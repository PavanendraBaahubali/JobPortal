import React, { useState } from 'react'
import '../styles/ProfileSidebarBottom.css';
import EditIcon from '@mui/icons-material/Edit';
import ProfileEdit from './ProfileEdit';

const ProfileSidebarBottom = () => {
    const [isOnClick, setOnClick] = useState(false);
    const [inputField, setInputField] = useState({
        name : 'Walter White',
        emailId : 'walter@gmail.com',
        password : "*************"
    })

    console.log(inputField.name)
  return (
    <div className='ProfileSidebarBottom'>
        <div className='profile-edit'>
            <h5>Edit Profile</h5>
            <EditIcon />
        </div>

        <div className='profile-edit-wrapper'>
            <ProfileEdit name = 'Name'   inputField = {inputField} setInputField = {setInputField}       isOnClick = {isOnClick} setOnClick={setOnClick} />
            <ProfileEdit name = 'EmailId'   inputField = {inputField} setInputField = {setInputField}     isOnClick = {isOnClick} setOnClick={setOnClick} />
            <ProfileEdit name = 'Password'   inputField = {inputField} setInputField = {setInputField}    isOnClick = {isOnClick} setOnClick={setOnClick} />
           {isOnClick ?  <button>Save</button> : <></>}
        </div>

    </div>
  )
}

export default ProfileSidebarBottom