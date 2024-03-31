import React, { useState } from 'react';
import '../../styles/reportEvents.css'
import axios from 'axios';

function TripDevice() {

      const token = localStorage.getItem('token')


      const [tripsData , setTripsData] = useState([])
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

      function getTrips () {
            axios.get(`GPS/GetTrips?fromDate=${data.startDate}&toDate=${data.endDate}&carNumber=${data.carNumber}`,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {console.log(data) ; setTripsData(data.data)}).catch(err => console.log(err))
      }

      return (
        <div className='trip w-100'>
                <div className="filter d-flex align-items-center gap-3 justify-content-center">
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
                              <button onClick={()=>getTrips()} className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
                <div className="trip-table pt-4">
                        <div className="trip-table-head bg-primary rounded-2 d-grid pt-1 pb-1">
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Boshlanish vaqti</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Tugash vaqti</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Boshlanish kengligi</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Boshlanish uzunligi</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Tugash kengligi</p>
                              </div>
                              <div className="head-item d-flex align-items-center justify-content-center">
                                    <p className='m-0 text-light fw-bold'>Tugash uzunligi</p>
                              </div>
                        </div>
                        <div className="trip-table-body d-flex flex-column gap-1 pt-1">
                              {tripsData.map((item)=>{return(
                                    <div className="trip-table-row d-grid rounded-2 pt-1 pb-1 border-1">
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.startTime.slice(0,10)} {item.startTime.slice(11,19)}</p>
                                          </div>
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.endTime.slice(0,10)} {item.endTime.slice(11,19)}</p>
                                          </div>
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.startLat}°</p>
                                          </div>
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.startLon}°</p>
                                          </div>
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.endLat}°</p>
                                          </div>
                                          <div className="row-item d-flex align-items-center justify-content-center">
                                                <p className="m-0 fw-bold">{item.endLon}°</p>
                                          </div>
                                    </div>
                              )})}
                        </div>
                </div>
        </div>
      );
}

export default TripDevice;