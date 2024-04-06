import React, { useEffect, useState } from 'react';
import '../../styles/reportEvents.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function EventsDevice() {

      const token = localStorage.getItem('token')
      const navigate = useNavigate()

      const [eventData , setEventData] = useState([])
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

      function getEvents () {
             axios.get(`GPS/GetEvents?fromDate=${data.startDate}&toDate=${data.endDate}&name=${data.name}`,
                  {
                        headers : {
                              'ngrok-skip-browser-warning' : 'skip-browser-warning',
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(response => {setEventData(response.data)})
                  .catch(err => toast.error('Xatolik yuz berdi ! Qaytadan urining!'))
      }

      return (
        <div className='event w-100'>
                  <div className="back-route">
                        <i className="fa-solid fa-arrow-left text-primary" onClick={()=>navigate(-1)}></i>
                  </div>
                <div className="filter flex-wrap d-flex align-items-center gap-3">
                      <div className="coolinput">
                            <label htmlFor="input" className="text">Qurilma</label>
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
                              <button onClick={()=>getEvents()} className="btn btn-primary rounded-2 ps-5 pe-5 pt-2 pb-2 mt-3 fw-bold">Ko'rsatish</button>
                      </div>
                </div>
                <div className="wrapper-table">
                  <div className="event-table pt-4">
                              <div className="event-table-head bg-primary rounded-2 d-grid pt-1 pb-1">
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>ID</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Xodisa vaqti</p>
                                    </div>
                                    <div className="head-item d-flex align-items-center justify-content-center">
                                          <p className='m-0 text-light fw-bold'>Xodisa holati</p>
                                    </div>
                              </div>
                              <div className="event-table-body d-flex flex-column gap-1 pt-1">
                                    {eventData.map((item)=>{return(
                                          <div className="event-table-row d-grid rounded-2 pt-1 pb-1 border-1">
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.id}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item?.eventTime?.slice(0,10)} {item?.eventTime?.slice(11,19)}</p>
                                                </div>
                                                <div className="row-item d-flex align-items-center justify-content-center">
                                                      <p className="m-0 fw-bold">{item.type}</p>
                                                </div>
                                          </div>
                                    )})}
                              </div>
                  </div>
                </div>
        </div>
      );
}

export default EventsDevice;