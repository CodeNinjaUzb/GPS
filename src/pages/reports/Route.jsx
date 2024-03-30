import React, { useState } from 'react';
import '../../styles/reportEvents.css'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker';

function RouteDevice() {

      const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());
      const [carNumber , setCarNumber] = useState('')

      let date = new Date()
      let today = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()      

      function handleStartDate(e) {
            const newStartDate = { ...startDate };
            newStartDate = e.target.value;
            setStartDate(newStartDate);
            console.log(startDate);
          }

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
                            <ReactDatePicker dateFormat='dd-MM-YYYY' id='startDate' selected={startDate} onChange={(e) => handleStartDate(e)} className='datepicker' placeholderText={today}/>     
                      </div>   
                      <div className="cooldatepicker">
                            <label htmlFor="endDay" className='text'>Tugash sanasi</label> 
                            <ReactDatePicker dateFormat='dd-MM-YYYY' selected={endDate} onChange={(date) => setEndDate(date)} className='datepicker' placeholderText={today}/>     
                      </div>   
                      <div className="filter-button">
                              <button className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
                <div className="route-table pt-4">
                        <div className="route-table-head bg-primary rounded-2 d-grid pt-1 pb-1">
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Qurilma</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Fix Time</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Kordinatalar</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Tezlik</p>
                              </div>
                        </div>
                </div>
        </div>
      );
}

export default RouteDevice;