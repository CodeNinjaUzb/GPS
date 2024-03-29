import React from 'react';
import '../styles/editmodal.css'



function Edit({closeEditModal , afterOpenEditModal , info}) {

      console.log(info);

      return (
            <div className="edit">
                  <div className="edit-modal bg-light rounded-4 p-3">
                        <div className="edit-modal-title text-center">
                              <h1>Tahrirlash</h1>
                        </div>
                        <div className="edit-modal-body d-flex flex-wrap align-items-center justify-content-center gap-4">
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Devide ID:</label>
                                          <input defaultValue={info.deviceId} type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Mashina raqami:</label>
                                          <input defaultValue={info.carNumber} type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Haydovchining ismi:</label>
                                          <input defaultValue={info.fullName} type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Telefon raqami:</label>
                                          <input defaultValue={info.phoneNumber} type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                        </div>
                        <div className="edit-modal-foot pt-5">
                              <div className="btns d-flex align-items-center gap-3">
                                    <button className="btn btn-success rounded-3 p-2 border-0 w-50">Saqlash</button>
                                    <button className="btn btn-danger rounded-3 p-2 border-0 w-50" onClick={closeEditModal}>Bekor qilish</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Edit;