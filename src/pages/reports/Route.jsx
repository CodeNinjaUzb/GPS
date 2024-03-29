import React from 'react';
import '../../styles/reportEvents.css'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';

function RouteDevice() {

      let date = new Date()
      let today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()      


      return (
        <div className='route w-100'>
                <div className="filter d-flex align-items-center gap-3 justify-content-center">
                      <div className="coolinput">
                            <label htmlfor="input" className="text">Mashina raqami</label>
                            <input 
                                  // onChange={(e)=> handle(e)} 
                                  id='carNumber' 
                                  type="text" 
                                  placeholder="Write here..." 
                                  name="input" 
                                  className="input" 
                                  // value={newDevice.phoneNumber}      
                            />
                      </div>
                      <div className="cooldatepicker">
                            <label htmlFor="startDay" className='text'>Boshlanish sanasi</label> 
                            <ReactDatePicker className='datepicker' placeholderText={today}/>     
                      </div>   
                      <div className="cooldatepicker">
                            <label htmlFor="endDay" className='text'>Tugash sanasi</label> 
                            <ReactDatePicker className='datepicker' placeholderText={today}/>     
                      </div>   
                      <div className="filter-button">
                              <button className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
        </div>
      );
}

export default RouteDevice;