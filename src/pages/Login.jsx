import React, { useState } from 'react';
import '../styles/login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Input } from 'antd';

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
                  toast.success('Tizimga muvaffaqiyatli kirildi !')
                  localStorage.setItem("token", data?.data?.accessToken);
                  navigate("/");
                }
              })
              .catch((err) => {
                toast.error('Xatolik yuz berdi ! Qaytadan urining !')
                if (err?.message == "Network Error") {
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
                  <form className='d-flex flex-column gap-4'>
                        <div className="email">
                              <label className='text-bolder'>Username</label>
                              <Input
                                    onChange={(e) => handle(e)}
                                    id="email"
                                    value={data.email}
                                    type="text"
                                    className="input_login"
                                    placeholder="Username"
                              />
                        </div>
                        <div className="password">
                              <label className='text-bolder'>Password</label>
                              <Input.Password
                                    onChange={(e) => handle(e)}
                                    id="password"
                                    value={data.password}
                                    type="password"
                                    placeholder="Password"
                                    className="input_password"
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