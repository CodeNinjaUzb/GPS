import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './styles/App.css'
import Home from './pages/Home'
import Devices from './pages/Devices'
import Report from './pages/Report'
import Edit from './components/DeviceEditModal'

function App() {

  const token = localStorage.getItem('token')


  function loadCheckUser() {
    axios.defaults.headers.common["Authorization"] = token;
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

  const id = 0

  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Home />}>
          <Route path='/devices' element={<Devices />}/>
          <Route path='/events' element={<Report />}/>
          <Route path={`/report/${id}`}/>
        </Route>
      </Routes>
        
    </div>
  )
}

export default App
