import React from 'react'
import '../styles/SalaryRange.css'

const SalaryRange = () => {
  return (
    <div className='salary-range'>
        <div className='range-head'>
            <h4>Salary</h4>
        </div>
        <div className='range-bounds'>
            <input className='range-start' 
            placeholder='$ 0' />
            <input className='range-end' 
            placeholder='$ 1000' />
        </div>
        <div className='range-bar'>
            <input type = "range" min="1"
            max = "100" 
            value= '10' 
            className='range' />
        </div>
    </div>
  )
}

export default SalaryRange