import React, { useState } from 'react';
import '../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

      const navigate = useNavigate()

      const [data, setData] = useState({
            email: "",
            password: "",
          });


      function submit(e) {
            e.preventDefault();
            axios
              .post("/Auth/Login", {
                  userName: data.email,
                  password: data.password,
              })
              .then((data) => {
                if (data?.status === 200) {
                  console.log(data);
                  localStorage.setItem("token", data?.data?.accessToken);
                  navigate("/");
                }
              })
              .catch((err) => {
                console.log(err);
                if (err?.message == "Network Error") {
                  console.log('network error');
                  return;
                }
                });
          }
      
      function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
      }    

  return (
      <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="login pt-4">
                  <h1 className='text-center fw-bolder fs-2'>Tizimga kirish</h1>
                  <form className='p-5 d-flex flex-column gap-4'>
                        <div className="email">
                              <label className='text-bolder'>Username</label>
                              <input
                                    onChange={(e) => handle(e)}
                                    id="email"
                                    value={data.email}
                                    type="text"
                                    className="form-control input_login"
                                    placeholder="Username"
                              />
                        </div>
                        <div className="password">
                              <label className='text-bolder'>Password</label>
                              <input
                                    onChange={(e) => handle(e)}
                                    id="password"
                                    value={data.password}
                                    type="password"
                                    placeholder="Password"
                                    className="form-control input_password"
                              />
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={submit}>
                              Kirish
                        </button>
                  </form>
            </div>
      </div>
  );
}

export default Login;