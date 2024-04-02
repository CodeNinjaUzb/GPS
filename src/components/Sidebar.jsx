import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'

function Sidebar() {

      function Logout(){
            localStorage.clear()
      }

  return (
    <div className='sidebar bg-primary'>
            <div className="logo">
                  <Link className='text-light text-decoration-none fw-bold title' to="/">GPS Tracker</Link>      
            </div> 
            <div className="menu d-flex flex-column gap-3 ps-3 pe-3">
                  <Link to="/devices" className="item text-decoration-none d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-location-crosshairs text-primary"></i>
                        <p className='m-0 text-primary fw-bold' >Qurilmalar</p>      
                  </Link>
                 <Link to="/reports" className="item text-decoration-none d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-chart-simple text-primary "></i>
                        <p className='m-0 text-primary fw-bold' >Xisobot</p>     
                  </Link>
            </div> 
            <div className="log-out">
                  <Link to="/login"  onClick={()=>Logout()} className="item text-decoration-none d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-arrow-right-from-bracket text-primary"></i>
                        <p className='m-0 text-primary fw-bold' >Chiqish</p>
                  </Link>
            </div> 
    </div>
  );
}

export default Sidebar;