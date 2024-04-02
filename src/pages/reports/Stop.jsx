import React, { useState } from 'react';
import '../../styles/reportEvents.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function StopDevice() {

      const token = localStorage.getItem('token')
      const navigate = useNavigate()

      const [stopData , setStopData] = useState([])
      const [data , setData] = useState({
            'carNumber' : '',
            'startDate' : '',
            'endDate' : ''
      })

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
            console.log(data);
      } 

      function getStops () {
            axios.get(`GPS/GetStops?fromDate=${data.startDate}&toDate=${data.endDate}&carNumber=${data.carNumber}`,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {console.log(data) ; setStopData(data.data)}).catch(err => console.log(err))
      }

      return (
        <div className='stop w-100'>
                  <div className="back-route">
                        <i className="fa-solid fa-arrow-left text-primary" onClick={()=>navigate(-1)}></i>
                  </div>
                <div className="filter flex-wrap d-flex align-items-center gap-3 justify-content-center">
                      <div className="coolinput">
                            <label htmlfor="input" className="text">Mashina raqami</label>
                            <input 
                              required
                              onChange={(e)=>handle(e)}
                              id='carNumber' 
                              type="text" 
                              placeholder="Write here..." 
                              name="carNumber" 
                              className="input"  
                            />
                      </div>
                      <div className="cooldatepicker">
                              <label htmlFor="startDay" className='text'>Boshlanish sanasi</label> 
                              <input onChange={(e)=>handle(e)} required type="date" id='startDate' className='datepicker' name='startDate'/>
                      </div>   
                      <div className="cooldatepicker">
                            <label htmlFor="endDay" className='text'>Tugash sanasi</label> 
                            <input onChange={(e)=>handle(e)} required type="date" id='endDate' className='datepicker' name='endDate'/>     
                      </div>   
                      <div className="filter-button">
                              <button onClick={()=>getStops()} className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
                <div className="wrapper-table">
                  <div className="stop-table pt-4">
                              <div className="stop-table-head bg-primary rounded-2 d-grid pt-1 pb-1">
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Boshlanish vaqti</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Tugash vaqti</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Kenglik</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Uzunlik</p>
                                    </div>
                              </div>
                              <div className="stop-table-body d-flex flex-column gap-1 pt-1">
                                    {stopData.map((item)=>{return(
                                          <div className="stop-table-row d-grid rounded-2 pt-1 pb-1 border-1">
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.startTime.slice(0,10)} {item.startTime.slice(11,19)}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.endTime.slice(0,10)} {item.endTime.slice(11,19)}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.latitude}°</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.longitude}°</p>
                                                </div>
                                          </div>
                                    )})}
                              </div>
                  </div>
                </div>
        </div>
      );
}

export default StopDevice;