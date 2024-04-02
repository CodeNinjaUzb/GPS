import React from 'react';
import '../styles/deleteModal.css'
import axios from 'axios';

function Delete({closeDeleteModal , getDevices , info}) {

      const token = localStorage.getItem('token')

      function deleteDevice () {
            axios.delete(`Devices/Delete?id=${info.id}` , {
                  headers : {
                        'Authorization' : 'Bearer' + ' ' + token
                  }
            }).then(data => {console.log(data); getDevices() ; closeDeleteModal()}).catch(err => console.log(err))
      }

  return (
    <div className='delete'>
            <div className="delete-modal bg-light rounded-4 p-3">
                  <div className="delete-modal-title text-center">
                        <h1>Qurilmani o'chirish</h1>
                  </div>
                  <div className="delete-modal-body text-center pt-3">
                        <h4><span className="text-danger">{info.fullName}</span> qurilmasini o'chirishni hohlaysizmi ?</h4>
                  </div>
                  <div className="delete-modal-foot">
                        <div className="btns d-flex justify-content-center align-items-center gap-3">
                              <button className="btn btn-danger rounded-3 p-2 border-0 w-50" onClick={()=>deleteDevice()}>O'chirish</button>
                              <button className="btn btn-outline-primary rounded-3 p-2 w-50" onClick={()=>closeDeleteModal()}>Bekor qilish</button>
                        </div>
                  </div>
            </div>
    </div>
  );
}

export default Delete;