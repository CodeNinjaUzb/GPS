import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/report.css'

function MenuReports() {
  return (
    <div className='side-menu'>
            <button className="btn btn-primary rounded-2">
                  <Link to='/reports/route' className='text-decoration-none text-light fw-bold'>Marshrut</Link>
            </button>
            <button className="btn btn-primary rounded-2">
                  <Link to='/reports/event' className='text-decoration-none text-light fw-bold'>Xodisalar</Link>
            </button>
            <button className="btn btn-primary rounded-2">
                  <Link to='/reports/trip' className='text-decoration-none text-light fw-bold'>Safarlar</Link>
            </button>
            <button className="btn btn-primary rounded-2">
                  <Link to='/reports/stop' className='text-decoration-none text-light fw-bold'>To'xtashlar</Link>
            </button>
            <button className="btn btn-primary rounded-2">
                  <Link to='/reports/summary' className='text-decoration-none text-light fw-bold'>Malumot</Link>
            </button>
            
    </div>
  );
}

export default MenuReports;