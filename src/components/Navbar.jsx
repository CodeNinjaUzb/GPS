import React from 'react';
import avatar from '../assets/avatar.png'
import '../styles/navbar.css'

function Navbar() {

      const date = new Date()
      const showTime = date.getHours() + ':' + date.getMinutes()
            

  return (
    <div className='navbar nav nav-light d-flex align-items-center justify-content-around pt-2 pb-2 ps-3 pe-3 border-bottom w-100'>
            <div className="title">
                  <p className='fst-italic fs-3 m-0'>Hurmatli Admin ! Kuningiz xayrli o'tsin !</p>      
            </div> 
            <div className="profile d-flex align-items-center gap-2">
                  <img className='avatar' src={avatar} alt="" />
                  <p className="name fst-italic fs-5 m-0">Admin</p>
            </div> 
            <div className="time">
                  <p className='fst-italic fs-3 m-0'>{showTime}</p>
            </div>
    </div>
  );
}

export default Navbar;