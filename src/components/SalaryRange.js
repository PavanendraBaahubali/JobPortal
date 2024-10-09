import React, {  useState } from 'react';
import '../styles/SalaryRange.css';
import {  useNavigate } from 'react-router-dom';

const SalaryRange = () => {
    const [minSalary, setMinSalary] = useState(0); // State for minimum salary
    const [maxSalary, setMaxSalary] = useState(100); // State for maximum salary
    const [rangeValue, setRangeValue] = useState(100); // State for range slider value

    const navigate = useNavigate();
    const getUrl = () => {

        let url = ""
        if(minSalary){
            url += `?${encodeURIComponent("minSalary")}=${minSalary}&`
        }
        if(maxSalary){
            url += `?${encodeURIComponent("maxSalary")}=${maxSalary}`
        }
        navigate(url);
    }

   

    // Handle changes in the start input
    const handleMinSalaryChange = (e) => {
        const value = Math.min(e.target.value, maxSalary); // Ensure min salary does not exceed max salary
        setMinSalary(value);
        setRangeValue(value); // Update range value to reflect the min salary
    };

    // Handle changes in the end input
    const handleMaxSalaryChange = (e) => {
        const value = Math.max(e.target.value, minSalary); // Ensure max salary does not go below min salary
        setMaxSalary(value);
    };

    // Handle changes in the range slider
    const handleRangeChange = (e) => {
        const value = e.target.value;
        setRangeValue(value);
        setMinSalary(value); // Update min salary based on range slider value
        getUrl();
    };

    return (
        <div className='salary-range'>
            <div className='range-head'>
                <h4>Salary</h4>
            </div>
            <div className='range-bounds'>
                <input
                    className='range-start'
                    type='number'
                    value={minSalary} // Bind the input to minSalary state
                    onChange={handleMinSalaryChange} // Update state on change
                    placeholder='$ 0'
                />
                <input
                    className='range-end'
                    type='number'
                    value={maxSalary} // Bind the input to maxSalary state
                    onChange={handleMaxSalaryChange} // Update state on change
                    placeholder='$ 100'
                />
            </div>
            <div className='range-bar'>
                <input
                    type="range"
                    min="1"
                    max="100" // Set appropriate maximum for the range
                    value={rangeValue} // Bind the slider to rangeValue state
                    className='range'
                    onChange={handleRangeChange} // Update state on change
                />
            </div>
        </div>
    );
};

export default SalaryRange;
