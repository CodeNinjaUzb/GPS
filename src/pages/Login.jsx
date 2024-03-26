import React from 'react';
import '../styles/login.css'

function Login() {
  return (
      <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="login pt-4">
                  <h1 className='text-center fw-bolder fs-2'>Tizimga kirish</h1>
                  <form className='p-5 d-flex flex-column gap-4'>
                        <div className="email">
                              <label className='text-bolder'>Username</label>
                              <input
                              type="text"
                              className="form-control input_login"
                              placeholder="Username"
                              />
                        </div>
                        <div className="password">
                              <label className='text-bolder'>Password</label>
                              <input
                              type="password"
                              placeholder="Password"
                              className="form-control input_password"
                              />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                              Kirish
                        </button>
                  </form>
            </div>
      </div>
  );
}

export default Login;