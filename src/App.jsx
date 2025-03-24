import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'


function App() {
  

  return (
    <>
   
       <Routes>
            <Route path='/' element={<LandingScreen />} />
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
    </>
  )
}

export default App
