import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import '../styles/SideBarDetails.css';


const SideBarDetails = ({ name, data }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [checkedItems, setCheckedItems] = useState({});

   

    // Handle checkbox change
    const handleCheckboxChange = (item) => {
        setCheckedItems((prev) => {
            const newState = {
                ...prev,
                [item]: !prev[item], // Toggle the value of the clicked item
            };

            // Create a query string from the checked items
            console.log(Object.keys(newState))
            const queryString = Object.keys(newState)
                .filter(key => newState[key]) // Keep only checked items
                .map(key => `${encodeURIComponent(key)}=true`) // Encode for URL
                .join('&');

            // Update the URL with the new query string
            navigate(`?${queryString}`); // Use navigate instead of history.push

            console.log(`${item} is now ${!prev[item]}`); // Log the clicked item and its new value

            return newState; // Return the new state
        });
    };

    return (
        <div className='sidebar-details'>
            <div className='detail-head'>
                <h4>{name}</h4>
            </div>
            <div className='detail-list'>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className='detail-list-item'>
                            <input
                                type='checkbox'
                                checked={checkedItems[item] || false} // Check if the item is true
                                onChange={() => handleCheckboxChange(item)} // Pass the item name to the handler
                            />
                            <p>{item}</p>
                        </div>
                    ))
                ) : (
                    <p>No options available</p>
                )}
            </div>
        </div>
    );
};

export default SideBarDetails;
