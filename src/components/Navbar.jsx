import React from 'react';
import avatar from '../assets/avatar.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {

      const date = new Date()
      const showTime = date.getHours() + ':' + date.getMinutes()
            

  return (
    <div className='navbar nav nav-light d-flex align-items-center justify-content-around pt-2 pb-2 ps-3 pe-3 border-bottom w-100'>
            <div className="title">
                  <p className='fst-italic m-0'>Hurmatli Admin ! Kuningiz xayrli o'tsin !</p>      
            </div> 
            <div className="profile">
                  <img className='avatar' src={avatar} alt="" />
                  <p className="name fst-italic fs-5 m-0">Admin</p>
            </div> 
            <div className="logout">
                  <button className="logout-btn rounded-2 p-2">
                          <Link className='text-decoration-none text-dark' to="/login"><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                    </button>
            </div>
            <div className="time">
                  <p className='fst-italic m-0'>{showTime}</p>
            </div>
    </div>
  );
}

export default Navbar;