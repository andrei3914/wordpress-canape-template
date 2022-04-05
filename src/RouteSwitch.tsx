import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import News from './components/News/News'
import Readability from './components/Readability/Readability'
import Reservations from './components/Reservations/Reservations'
import App from './App';
import Catering from './components/Services/Catering'
import MenuDev from './components/Services/MenuDev'
import PrivateChef from './components/Services/PrivateChef'

const RouteSwitch = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/readability' element={<Readability />}/>
          <Route path='/reservations' element={<Reservations />}/>
          <Route path='/catering' element={<Catering />}/>
          <Route path='/menu-development' element={<MenuDev />}/>
          <Route path='/private-chef-services' element={<PrivateChef />}/>
        </Routes>
      </HashRouter>
  )
}

export default RouteSwitch