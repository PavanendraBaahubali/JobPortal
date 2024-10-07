import React from 'react'
import '../styles/SideBarDetails.css'

const SideBarDetails = ({name, data}) => {
  return (
        <div className='sidebar-details'>
        <div className='detail-head'>
            <h4>{name}</h4>
        </div>
        <div className='detail-list'>
            {
                data.length > 0 ?
                data.map((item) => (
<>
                <div className='detail-list-item'>
                <input type='checkbox'></input>
                <p>{item}</p>
                </div>
                </>
                ))
                
                :
                <p></p>
            }
            
        </div>
    </div>
  )
}

export default SideBarDetails