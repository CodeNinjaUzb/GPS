import React, { useState } from 'react';
import '../../styles/reportEvents.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function RouteDevice() {

      const token = localStorage.getItem('token')
      const navigate = useNavigate()


      const [routeData , setRouteData] = useState([])
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

      function getRoute () {
            axios.get(`GPS/GetRoute?fromDate=${data.startDate}&toDate=${data.endDate}&carNumber=${data.carNumber}`,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {console.log(data) ; setRouteData(data.data)}).catch(err => toast.error('Xatolik yuz berdi ! Qaytadan urining!'))
      }

      return (
        <div className='route'>
                  <div className="back-route">
                        <i className="fa-solid fa-arrow-left text-primary" onClick={()=>navigate(-1)}></i>
                  </div>
                <div className="filter w-100 d-flex flex-wrap align-items-center gap-3">
                      <div className="coolinput">
                            <label htmlFor="input" className="text">Mashina raqami</label>
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
                              <button onClick={()=> getRoute()} className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
                <div className="wrapper-table">
                  <div className="route-table pt-4">
                              <div className="route-table-head bg-primary rounded-2 d-grid pt-1 pb-1">
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Qurilma</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Fix Time</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Kenglik</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Uzunlik</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Tezlik</p>
                                    </div>
                              </div>
                              <div className="route-table-body d-flex flex-column gap-1 pt-1">
                                    {routeData.map((item)=>{return(
                                          <div className="route-table-row d-grid rounded-2 pt-1 pb-1 border-1">
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.deviceId}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.fixTime.slice(0,10)} {item.fixTime.slice(11,19)}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.latitude}°</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.longitude}°</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.speed} km/s</p>
                                                </div>
                                          </div>
                                    )})}
                              </div>
                  </div>
                </div>
        </div>
      );
}

export default RouteDevice;