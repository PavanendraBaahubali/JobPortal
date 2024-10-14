import React from 'react'
import LineChart from './LineChart'
import '../styles/UserProfileGraph.css';

const UserProfileGraph = () => {
  return (
    <div className='line-graph'>
        <h2>Last Applied Jobs</ h2>
        <LineChart />
    </div>
  )
}

export default UserProfileGraph