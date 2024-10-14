import React, { useEffect, useState } from 'react';
import '../styles/ProfileSidebarBottom.css';
import EditIcon from '@mui/icons-material/Edit';
import ProfileEdit from './ProfileEdit';
import axios from 'axios';

const ProfileSidebarBottom = () => {
    const userId = localStorage.getItem('userId');
    const [isOnClick, setOnClick] = useState(false);
    
    
    const [inputField, setInputField] = useState({
        name: '',
        emailId: '',
        password: '*************'
    });

    // Fetch the user data on mount
    useEffect(() => {
        axios.get(`https://jobportal-backend-0mls.onrender.com/profile/${userId}`)
            .then((res) => {
                const data = res.data[0];
                setInputField({
                    name: data.userName || '',
                    emailId: data.emailId || '',
                    password: '*************'  // Keep the password placeholder
                });
            })
            .catch(err => console.log(err.message));
    }, [userId]);

    console.log(inputField.name);  // To check if data is being updated

    return (
        <div className='ProfileSidebarBottom'>
            <div className='profile-edit'>
                <h5>Edit Profile</h5>
                <EditIcon />
            </div>

            <div className='profile-edit-wrapper'>
                <ProfileEdit 
                    name='Name' 
                    inputField={inputField} 
                    setInputField={setInputField} 
                    isOnClick={isOnClick} 
                    setOnClick={setOnClick} 
                />
                <ProfileEdit 
                    name='EmailId' 
                    inputField={inputField} 
                    setInputField={setInputField} 
                    isOnClick={isOnClick} 
                    setOnClick={setOnClick} 
                />
                <ProfileEdit 
                    name='Password' 
                    inputField={inputField} 
                    setInputField={setInputField} 
                    isOnClick={isOnClick} 
                    setOnClick={setOnClick} 
                />
                {isOnClick && <button>Update Profile</button>}
            </div>
        </div>
    );
};

export default ProfileSidebarBottom;
