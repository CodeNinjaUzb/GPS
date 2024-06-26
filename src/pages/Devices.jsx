import React, { useEffect, useState } from 'react';
import '../styles/devices.css'
import axios from 'axios';
import Edit from '../components/DeviceEditModal';
import Post from '../components/DevicePostModal';
import Delete from '../components/DeviceDeleteModal';
import toast from 'react-hot-toast';

function Devices() {

      const [edit , setEdit] = useState(false)
      const [post , setPost] = useState(false)
      const [remove , setRemove] = useState(false)
      const [devices , setDevices] = useState([]);
      const [deviceInfo , setDeviceInfo] = useState('')
      const token = localStorage.getItem('token')

      function openEditModal(){
            setEdit(!edit)
      }
      function closeEditModal(){
            setEdit(false)
      }

      function openPostModal(){
            setPost(!post)
      }
      function closePostModal(){
            setPost(false)
      }

      function openDeleteModal(){
            setRemove(!remove)
      }
      function closeDeleteModal(){
            setRemove(false)
      }

      function getDevices () {
            axios.get('/Devices/GetAll' , {
                  headers : {
                        'ngrok-skip-browser-warning' : 'skip-browser-warning',
                        'Authorization' : 'Bearer' + ' ' + token,
                        'Accept': 'application/json',
                  }
            })
                  .then(data => {setDevices(data.data)})
                  .catch(err => toast.error('Xatolik yuz berdi ! Qayta urining !'))
      }

      useEffect(()=>{
            getDevices()
      },[])

      function getDeviceInfo(item){
            setDeviceInfo(item)
      }


  return (
      <>
      {edit ? <Edit closeEditModal={closeEditModal} info={deviceInfo} getDevices={getDevices}/> : ''}
      {post ? <Post closePostModal={closePostModal} getDevices={getDevices}/> : ''}
      {remove ? <Delete closeDeleteModal={closeDeleteModal} info={deviceInfo} getDevices={getDevices}/> : ''}
      <div className='devices d-flex flex-column gap-2'>
                  <div className="add-device d-flex justify-content-end">
                        <button onClick={()=>{openPostModal()}} className="btn btn-primary rounded-2 p-1">Qurilma qo'shish</button>
                  </div>
                  <div className="table overflow-x-auto">
                        <div className="table-head rounded-3 bg-primary d-grid">
                                    <p className='m-0 text-center text-light fw-bold'>IMEI</p>
                                    <p className='m-0 text-center text-light fw-bold'>Name</p>
                                    <p className='m-0 text-center text-light fw-bold'>Model</p>
                                    <p className='m-0 text-center text-light fw-bold'>Telefon raqami</p>
                                    <p className='m-0 text-center text-light fw-bold'>Tahrirlash</p>
                        </div>
                        <div className="table-body d-flex flex-column gap-2 pt-2 pb-2">
                              {devices.map((item , idx)=>{
                                    return(
                                          <div key={idx} className="table-row border d-grid">
                                                <p className='m-0 text-center'>{item.uniqueId}</p>
                                                <p className='m-0 text-center'>{item.name}</p>
                                                <p className='m-0 text-center'>{item.model}</p>
                                                <p className='m-0 text-center'>{item.phone}</p>
                                                <p className='m-0 text-center d-flex align-items-center justify-content-center gap-4'>
                                                      <i onClick={()=>{openEditModal(), getDeviceInfo(item)}} className="fa-solid fa-pen-to-square text-warning"></i>
                                                      <i onClick={()=>{openDeleteModal() , getDeviceInfo(item)}} className="fa-solid fa-trash text-danger"></i>
                                                </p>
                                          </div>
                                    )
                              })}
                        </div>
                  </div>
                  
                  
      </div>
      </>
  );
}

export default Devices;