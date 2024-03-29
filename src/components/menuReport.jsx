import React from 'react';
import { Link } from 'react-router-dom';

function MenuReports() {
  return (
    <div className='side-menu d-flex w-100 gap-3 justify-content-center'>
            <button className="btn btn-primary ps-5 pe-5 pt-1 pb-1 rounded-2">
                  <Link to='/reports/route' className='text-decoration-none text-light fw-bold'>Marshrut</Link>
            </button>
            <button className="btn btn-primary ps-5 pe-5 pt-1 pb-1 rounded-2">
                  <Link to='/reports/event' className='text-decoration-none text-light fw-bold'>Xodisalar</Link>
            </button>
            <button className="btn btn-primary ps-5 pe-5 pt-1 pb-1 rounded-2">
                  <Link to='/reports/trip' className='text-decoration-none text-light fw-bold'>Safarlar</Link>
            </button>
            <button className="btn btn-primary ps-5 pe-5 pt-1 pb-1 rounded-2">
                  <Link to='/reports/stop' className='text-decoration-none text-light fw-bold'>To'xtashlar</Link>
            </button>
            <button className="btn btn-primary ps-5 pe-5 pt-1 pb-1 rounded-2">
                  <Link to='/reports/summary' className='text-decoration-none text-light fw-bold'>Malumot</Link>
            </button>
            
    </div>
  );
}

export default MenuReports;