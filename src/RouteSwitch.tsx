import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import News from './components/News/News'
import Readability from './components/Readability/Readability'
import Reservations from './components/Reservations/Reservations'
import App from './App';

const RouteSwitch = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/readability' element={<Readability />}/>
          <Route path='/reservations' element={<Reservations />}/>
        </Routes>
      </HashRouter>
  )
}

export default RouteSwitch