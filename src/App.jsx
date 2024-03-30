import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Devices from './pages/Devices'
import Report from './pages/Report'
import './styles/App.css'
import RouteDevice from './pages/reports/Route'
import TripDevice from './pages/reports/Trip'
import EventDevice from './pages/reports/Event'
import StopDevice from './pages/reports/Stop'
import SummaryDevice from './pages/reports/Summary'

function App() {

  const token = localStorage.getItem('token')


  function loadCheckUser() {
    axios
      .get("/check-user", {
        headers: {
          Authorization: "Bearer" + " " + token,
        },
      })
      .then((data) => {
        if (data?.status === 200) {
          if (data?.data.ok) {
            setExistToken(true);
          }
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  }

  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}>
          <Route path='/devices' element={<Devices />}/>
          <Route path='/reports' element={<Report />}>
            <Route path='/reports/route' element={<RouteDevice />}/>
            <Route path='/reports/event' element={<EventDevice />}/>
            <Route path='/reports/trip' element={<TripDevice />}/>
            <Route path='/reports/stop' element={<StopDevice />}/>
            <Route path='/reports/summary' element={<SummaryDevice />}/>
          </Route>
        </Route>
      </Routes>
        
    </div>
  )
}

export default App
