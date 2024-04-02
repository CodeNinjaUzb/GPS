import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Devices from './pages/Devices'
import Report from './pages/Report'
import './styles/App.css'
import RouteDevice from './pages/reports/Route'
import TripDevice from './pages/reports/Trip'
import StopDevice from './pages/reports/Stop'
import SummaryDevice from './pages/reports/Summary'
import { useEffect, useState } from 'react'
import axios from 'axios'
import EventsDevice from './pages/reports/Event'
import toast, { Toaster } from 'react-hot-toast'

function App() {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(()=>{
      loadCheckUser()
      if(!token){
        toast.error('Tizimga qayta kiring!')
        navigate('/login')
      }
  },[token])

  function loadCheckUser() {
    axios
      .get("/Auth/CheckUser", {
        headers: {
          Authorization: "Bearer" + " " + token,
        },
      })
      .then((data) => {
        if (data?.status === 200) {
          if (data?.data.ok) {
            return true;
          }
        }
      })
      .catch((err) => {
        toast.error('Tizimga qayta kiring!')
        navigate("/login");
      });
  }

  return (
    <div className='App'>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}>
          <Route path='/devices' element={<Devices />}/>
          <Route path='/reports' element={<Report />} />
          <Route path='/reports/route' element={<RouteDevice />}/>
          <Route path='/reports/event' element={<EventsDevice />}/>
          <Route path='/reports/trip' element={<TripDevice />}/>
          <Route path='/reports/stop' element={<StopDevice />}/>
          <Route path='/reports/summary' element={<SummaryDevice />}/>
        </Route>
      </Routes>
        
    </div>
  )
}

export default App
