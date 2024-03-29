import React from 'react';
import '../styles/postmodal.css'

function Post( { closePostModal }) {

      function PostDevice () {
            
      }



      return (
            <div className="post">
                  <div className="post-modal bg-light rounded-4 p-3">
                        <div className="edit-modal-title text-center">
                              <h1>Qurilma qo'shish</h1>
                        </div>
                        <div className="post-modal-body d-flex flex-wrap align-items-center justify-content-center gap-4">
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Qurilma IDsi:</label>
                                          <input type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Mashina raqami:</label>
                                          <input type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Haydovchining ismi:</label>
                                          <input type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                              <div className="input">
                                    <div class="coolinput">
                                          <label for="input" className="text">Telefon raqami:</label>
                                          <input type="text" placeholder="Write here..." name="input" className="input" />
                                    </div>
                              </div>
                        </div>
                        <div className="post-modal-foot pt-5">
                              <div className="btns d-flex align-items-center gap-3">
                                    <button className="btn btn-success rounded-3 p-2 border-0 w-50">Saqlash</button>
                                    <button className="btn btn-danger rounded-3 p-2 border-0 w-50" onClick={()=>closePostModal()}>Bekor qilish</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Post;