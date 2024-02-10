import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Accueil from '../home/Accueil'
import Inscription from '../inscription/Inscription'
import Header from '../header/header'
import Dress from '../dress/Dress'
import User from '../user/user'
import Modify from '../modify/Modify'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='formlogin'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Accueil />} />
          <Route path='/inscription' element={<Inscription />} />
          <Route path='/dress' element={<Dress />} />
          <Route path='/user' element={<User />} />
          <Route path='/modify' element={<Modify />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
