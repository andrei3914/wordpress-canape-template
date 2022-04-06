import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const MenuDev = () => {
  return (
    <div>
        <Navigation />
        <div className="menuDev-container">
          <div className="hero-menuDev">
            <img src="https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=1180&h=530&crop=1" alt=""
            srcSet='https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/12/kitchen-731351_1920.jpg?w=1024&h=460&crop=1 1024w' />
          </div>

          <div className="menuDev-content">
            <h1 className='entry-title'>Menu Development</h1>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default MenuDev