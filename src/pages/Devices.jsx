import React, { useEffect, useState } from 'react';
import '../styles/devices.css'
import axios from 'axios';
import Edit from '../components/DeviceEditModal';
import Post from '../components/DevicePostModal';
import Delete from '../components/DeviceDeleteModal';

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
                        'Authorization' : 'Bearer' + ' ' + token
                  }
            })
                  .then(data => {setDevices(data.data) ; })
                  .catch(err => console.log(err))
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
                        <button onClick={()=>{openPostModal()}} className="btn btn-primary rounded-2 p-2">Qurilma qo'shish</button>
                  </div>
                  <div className="table w-100">
                        <div className="table-head rounded-3 bg-primary d-grid pt-2 pb-2 ps-3 pe-3">
                                    <th className='text-light text-center'>Device ID</th>
                                    <th className='text-light text-center'>Mashina raqami</th>
                                    <th className='text-light text-center'>Haydovchi</th>
                                    <th className='text-light text-center'>Telefon raqami</th>
                                    <th className='text-light text-center'>Tahrirlash</th>
                        </div>
                        <div className="table-body d-flex flex-column gap-2 pt-2 pb-2">
                              {devices.map((item)=>{
                                    return(
                                          <div className="table-row border rounded-4 d-grid pt-2 pb-2 ps-3 pe-3 w-100">
                                                <th className='text-center'>{item.deviceId}</th>
                                                <th className='text-center'>{item.carNumber}</th>
                                                <th className='text-center'>{item.fullName}</th>
                                                <th className='text-center'>{item.phoneNumber}</th>
                                                <th className='text-center d-flex align-items-center justify-content-center gap-4'>
                                                      <i onClick={()=>{openEditModal(), getDeviceInfo(item)}} class="fa-solid fa-pen-to-square text-warning"></i>
                                                      <i onClick={()=>{openDeleteModal() , getDeviceInfo(item)}} class="fa-solid fa-trash text-danger"></i>
                                                </th>
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