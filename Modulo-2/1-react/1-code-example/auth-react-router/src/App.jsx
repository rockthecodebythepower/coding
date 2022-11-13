
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { FreeLayout } from './layouts/FreeLayout'
import { ProtectedLayout } from './layouts/ProtectedLayout'


import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Profile } from './pages/Profile'
import { Setting } from './pages/Setting'


function App() {


  return (
    <Routes>
      <Route element={<FreeLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>


      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Setting />} />
      </Route>
    </Routes>
  )
}

export default App
