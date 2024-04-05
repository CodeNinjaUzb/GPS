import React, { useEffect, useState } from 'react';
import '../../styles/reportEvents.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function TripDevice() {

      const token = localStorage.getItem('token')
      const navigate = useNavigate()

      const [tripsData , setTripsData] = useState([])
      const [allDevices , setAllDevices] = useState([])
      const [data , setData] = useState({
            'name' : '',
            'startDate' : '',
            'endDate' : ''
      })
            
      useEffect(()=>{
        axios.get('/Devices/GetAll' , {
              headers : {
                  'ngrok-skip-browser-warning' : 'skip-browser-warning',
                  'Authorization' : 'Bearer' + ' ' + token
              }
        }).then(data => setAllDevices(data.data)).catch(err => toast.error('Xatolik yuz berdi ! Qaytadan urining !'))
      },[])

      function handle(e) {
            const newData = { ...data };
            newData[e.target.id] = e.target.value;
            setData(newData);
      } 

      function getTrips () {
            axios.get(`GPS/GetTrips?fromDate=${data.startDate}&toDate=${data.endDate}&name=${data.name}`,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {setTripsData(data.data)}).catch(err => toast.error('Xatolik yuz berdi ! Qaytadan urining!'))
      }

      return (
        <div className='trip w-100'>
                  <div className="back-route">
                        <i className="fa-solid fa-arrow-left text-primary" onClick={()=>navigate(-1)}></i>
                  </div>
                <div className="filter flex-wrap d-flex align-items-center gap-3">
                      <div className="coolinput">
                            <label htmlfor="input" className="text">Qurilma</label>
                            <select name="name" id="name" className="dropdown" onChange={(e)=> handle(e)}>
                              <option>Select an option</option>
                              {allDevices.map((item) => {return (
                                    <option>{item.name}</option>
                              )})}
                            </select>
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
                <div className="wrapper-table">
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
        </div>
      );
}

export default TripDevice;