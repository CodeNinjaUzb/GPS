import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar bg-primary d-flex flex-column align-items-center justify-content-around p-3'>
            <div className="logo">
                  <Link className='text-light text-decoration-none fw-bold title' to="/">GPS Tracker</Link>      
            </div> 
            <div className="menu d-flex flex-column gap-3 ps-3 pe-3">
                  <div className="item d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-location-crosshairs text-primary"></i>
                        <Link className='text-primary text-decoration-none fw-bold' to="/devices">Qurilmalar</Link>      
                  </div>
                 <div className="item d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-chart-simple text-primary "></i>
                        <Link className='text-primary text-decoration-none fw-bold' to="/reports">Xisobot</Link>     
                  </div>
            </div> 
            <div className="log-out">
                  <div className="item d-flex align-items-center gap-3 bg-light ps-5 pe-5 pt-1 pb-1 rounded-3">
                        <i className="fa-solid fa-arrow-right-from-bracket text-primary"></i>
                        <Link className='text-primary text-decoration-none fw-bold' to="/login">Chiqish</Link>
                  </div>
            </div> 
    </div>
  );
}

export default Sidebar;