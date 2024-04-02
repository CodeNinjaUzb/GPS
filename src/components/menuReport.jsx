import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/report.css'

function MenuReports() {
  return (
    <div className='side-menu'>
            <Link to='/reports/route' className="btn btn-primary rounded-2">
                  <p  className='m-0 text-decoration-none text-light fw-bold'>Marshrut</p>
            </Link>
            <Link to='/reports/event' className="btn btn-primary rounded-2">
                  <p  className='m-0 text-decoration-none text-light fw-bold'>Xodisalar</p>
            </Link>
            <Link to='/reports/trip' className="btn btn-primary rounded-2">
                  <p  className='m-0 text-decoration-none text-light fw-bold'>Safarlar</p>
            </Link>
            <Link to='/reports/stop' className="btn btn-primary rounded-2">
                  <p  className='m-0 text-decoration-none text-light fw-bold'>To'xtashlar</p>
            </Link>
            <Link to='/reports/summary' className="btn btn-primary rounded-2">
                  <p  className='m-0 text-decoration-none text-light fw-bold'>Malumot</p>
            </Link>
            
    </div>
  );
}

export default MenuReports;