import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/home.css'

function Home() {
  return (
    <div className='home d-flex w-100'>
            <Sidebar />
            <div className="right w-100">
              <Navbar />
              <div className="menu">
                <div className="route-buttons">
                  <button className="btn d-flex align-items-center gap-3 btn-primary p-2 rounded-2 p-1">
                    <i className="fa-solid fa-location-crosshairs text-light"></i>
                    <Link to="/devices" className='text-decoration-none text-light fw-bold'>Qurilmalar</Link>
                  </button>
                  <button className="btn d-flex align-items-center gap-3 btn-primary p-2 rounded-2 p-1">
                    <i className="fa-solid fa-chart-simple text-light"></i>
                    <Link to="/reports" className='text-decoration-none text-light fw-bold'>Xisobotlar</Link>
                  </button>
                </div>
              </div>
              <div className="routes p-5">
                <Outlet />
              </div>
            </div>
    </div>
  );
}

export default Home;