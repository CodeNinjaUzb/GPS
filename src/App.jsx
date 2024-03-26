import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import './styles/App.css'
import Home from './pages/Home'
import Devices from './pages/Devices'
import Report from './pages/Report'

function App() {

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
