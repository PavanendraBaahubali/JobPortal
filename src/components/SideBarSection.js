import React from 'react'
import '../styles/SideBarSection.css'
import SalaryRange from './SalaryRange'
import SideBarDetails from './SideBarDetails'

const SideBarSection = () => {
    const jobType = ["Full Time", "Part Time", "Internship", "Contract"]
    const workSetting = ["On Site", "Remote", "Hybrid"]
    const careers = ["Entry Level", "Intermediate", "Advanced"];
  return (
    <div className='side-bar'>
        <SalaryRange />
        <SideBarDetails name = "Job Type" data = {jobType} />
        <SideBarDetails name = "Work Settings" data = {workSetting} />
        <SideBarDetails name = "Careers Goals" data = {careers} />
    </div>
  )
}

export default SideBarSection