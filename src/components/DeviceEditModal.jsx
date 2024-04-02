import React, { useState } from 'react';
import '../styles/editmodal.css'
import axios from 'axios';
import toast from 'react-hot-toast';



function Edit({closeEditModal , getDevices , info}) {

      const token = localStorage.getItem('token')
      const [editDevice , setEditDevice] = useState({
            'fullName' : '',
            'phoneNumber' : '',
            'carNumber' : '',
            'deviceId' : 0
      })

      function handle(e) {
            const newData = { ...editDevice };
            newData[e.target.id] = e.target.value;
            setEditDevice(newData);
            console.log(editDevice);
          } 

          function EditDevice () {
            axios.put(`Devices/Update?id=${info.id}`, editDevice ,
                  {
                        headers : {
                              'Authorization' : 'Bearer' + ' ' + token
                        },
                        
                  }).then(data => {toast.success('Qurilma muvaffaqiyatli tahrirlandi !') ; closeEditModal() ; getDevices()})
                  .catch(err => toast.error('Xatolik yuz berdi ! Qaytadan urining !'))
      }    

      return (
            <div className="edit">
                  <div className="edit-modal bg-light rounded-4 p-3">
                        <div className="edit-modal-title text-center">
                              <h1>Tahrirlash</h1>
                        </div>
                        <div className="edit-modal-body d-flex flex-wrap align-items-center justify-content-center gap-4">
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Devide ID:</label>
                                          <input id='deviceId' onChange={(e)=>handle(e)} defaultValue={info.deviceId} type="text" placeholder="Write here..." name="input" className="edit-input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Mashina raqami:</label>
                                          <input id='carNumber' onChange={(e)=>handle(e)} defaultValue={info.carNumber} type="text" placeholder="Write here..." name="input" className="edit-input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Haydovchi:</label>
                                          <input id='fullName' onChange={(e)=>handle(e)} defaultValue={info.fullName} type="text" placeholder="Write here..." name="input" className="edit-input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div className="coolinput">
                                          <label htmlFor="input" className="text">Telefon raqami:</label>
                                          <input id='phoneNumber' onChange={(e)=>handle(e)} defaultValue={info.phoneNumber} type="text" placeholder="Write here..." name="input" className="edit-input" />
                                    </div>
                              </div>
                        </div>
                        <div className="edit-modal-foot pt-5">
                              <div className="btns d-flex justify-content-center align-items-center gap-3">
                                    <button className="btn btn-success rounded-3 p-2 border-0 w-50" onClick={()=>EditDevice()}>Saqlash</button>
                                    <button className="btn btn-danger rounded-3 p-2 border-0 w-50" onClick={closeEditModal}>Bekor qilish</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Edit;