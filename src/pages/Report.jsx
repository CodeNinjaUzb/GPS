import React from 'react';
import '../styles/report.css'
import MenuReports from '../components/menuReport';
import { Outlet } from 'react-router-dom';

function Report() {


  return (
    <div className='report d-flex flex-column gap-4 w-100'>
            <div className="top">
                  <MenuReports />
            </div>
            <div className="bottom">
                  <Outlet />
            </div>
    </div>
  );
}

export default Report;