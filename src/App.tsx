import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import News from './components/News/News'
import Readability from './components/Readability/Readability'
import Reservations from './components/Reservations/Reservations'
import Home from './components/Home/Home';
import Catering from './components/Services/Catering'
import MenuDev from './components/Services/MenuDev'
import PrivateChef from './components/Services/PrivateChef'
import ImageAlignment from './components/Readability/ImageAlignment'
import HtmlElements from './components/Readability/HtmlElements'
import './App.scss'

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/news' element={<News />}/>
          <Route path='/readability' element={<Readability />} />
          <Route path='/image-alignment' element={<ImageAlignment />} />
          <Route path='/html-elements' element={<HtmlElements />} />
          <Route path='/reservations' element={<Reservations />}/>
          <Route path='/catering' element={<Catering />}/>
          <Route path='/menu-development' element={<MenuDev />}/>
          <Route path='/private-chef-services' element={<PrivateChef />}/>
          
        </Routes>
      </HashRouter>
  )
}

export default App