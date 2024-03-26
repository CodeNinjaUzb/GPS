import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className='home d-flex w-100'>
            <Sidebar />
            <div className="right w-100">
              <Navbar />
              <div className="routes p-5">
                <Outlet />
              </div>
            </div>
    </div>
  );
}

export default Home;