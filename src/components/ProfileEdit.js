import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';

const ProfileEdit = ({ name, inputField, setInputField, isOnClick, setOnClick }) => {
    const [isEditing, setIsEditing] = useState(false);  // Tracks if the user is editing the field

    const handleInputChange = (e) => {
        setInputField({
            ...inputField, 
            [name.toLowerCase()]: e.target.value  // Update inputField based on name (dynamic field update)
        });
    }

    const handleOnClick = () => {
        setIsEditing(true);  // Enable editing mode
        setOnClick(true);  // Trigger the parent handler if needed
    }

    const displayValue = () => {
        // Return appropriate value based on the `name` prop and provide fallback as ''
        if (name === 'Name') return inputField.name || ''; 
        if (name === 'EmailId') return inputField.emailId || '';
        if (name === 'Password') return inputField.password || '';
        return '';
    }

    return (
        <div className='profile-edit-data'>
            <div className='edit-data-head'>
                <h5>{name}</h5>
            </div>
            <div className='edit-data-content'>
                <input
                    type='text'
                    value={displayValue()}  // Dynamically set the value based on the `name` prop
                    onChange={(e) => isEditing && handleInputChange(e)}  // Only allow input when editing
                    disabled={!isEditing}  // Disable the input if not in editing mode
                />
                <label onClick={handleOnClick}>
                    <EditIcon />
                </label>
            </div>
        </div>
    );
};

export default ProfileEdit;
