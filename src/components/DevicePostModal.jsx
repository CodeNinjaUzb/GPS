import React, { useState } from 'react';
import '../styles/postmodal.css'
import axios from 'axios';
import toast from 'react-hot-toast';

function Post( { closePostModal , getDevices }) {

      const token = localStorage.getItem('token')
      const [newDevice , setNewDevice] = useState({
            'fullName' : '',
            'phoneNumber' : '',
            'carNumber' : '',
            'deviceId' : 0
      })

      function handle(e) {
            const newData = { ...newDevice };
            newData[e.target.id] = e.target.value;
            setNewDevice(newData);
          } 

      function PostDevice () {
            axios.post('Devices/PostDevice', newDevice ,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {toast.success('Qurilma muvaffaqiyatli qo`shildi!') ; closePostModal() ; getDevices()})
                  .catch(err => toast.error('Xatolik yuz berdi ! Qayta urining!'))
      }



      return (
            <div className="post">
                  <div className="post-modal bg-light rounded-4 p-3">
                        <div className="edit-modal-title text-center">
                              <h1>Qurilma qo'shish</h1>
                        </div>
                        <div className="post-modal-body d-flex flex-wrap align-items-center justify-content-center gap-4">
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Qurilma IDsi:</label>
                                          <input 
                                                onChange={(e)=> handle(e)} 
                                                id='deviceId' 
                                                type="number" 
                                                placeholder="Write here..." 
                                                name="input" 
                                                className="post-input" 
                                                value={newDevice.deviceId}
                                          />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Mashina raqami:</label>
                                          <input 
                                                onChange={(e)=> handle(e)} 
                                                id='carNumber' 
                                                type="text" 
                                                placeholder="Write here..." 
                                                name="input" 
                                                className="post-input" 
                                                value={newDevice.carNumber}
                                          />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Haydovchi:</label>
                                          <input 
                                                onChange={(e)=> handle(e)} 
                                                id='fullName' 
                                                type="text" 
                                                placeholder="Write here..." 
                                                name="input" 
                                                className="post-input" 
                                                value={newDevice.fullName}      
                                          />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Telefon raqami:</label>
                                          <input 
                                                onChange={(e)=> handle(e)} 
                                                id='phoneNumber' 
                                                type="text" 
                                                placeholder="Write here..." 
                                                name="input" 
                                                className="post-input" 
                                                value={newDevice.phoneNumber}      
                                          />
                                    </div>
                              </div>
                        </div>
                        <div className="post-modal-foot pt-5">
                              <div className="btns d-flex align-items-center justify-content-center gap-3">
                                    <button className="btn btn-success rounded-3 border-0 w-50" onClick={()=>PostDevice()}>Saqlash</button>
                                    <button className="btn btn-danger rounded-3 border-0 w-50" onClick={()=>closePostModal()}>Bekor qilish</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Post;