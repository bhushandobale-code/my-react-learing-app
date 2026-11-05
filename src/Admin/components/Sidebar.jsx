import React from 'react'

import './Sidebar.css'; 
function Sidebar() {
  return (
    <div className="sidebar-container">
       <h1>Sidebar</h1>
       <div className="sidebar-container-box">
        <div className="sidebar-item">Dashboard</div>
        <div className="sidebar-item">Jobs</div>
        <div className="sidebar-item">Applicant</div>
        <div className="sidebar-item">Company</div>
        <div className="sidebar-item">Settings</div>
        <div className="sidebar-item">Logout</div>

        
       </div>
       
     </div>
  )
}
export default Sidebar;