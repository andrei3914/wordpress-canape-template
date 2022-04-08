import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

const PrivateChef = () => {
  return (
    <div>
        <Navigation />
        <div className="privateChef-container flex">
          <div className="hero-private background-center">
            <img src="https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=1180&h=530&crop=1" alt=""
            srcSet='https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/12/cutlery-865096_1280.jpg?w=1024&h=460&crop=1 1024w' />
          </div>

          <div className="private-content">
            <h1 className='entry-title'>Private Chef Services</h1>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default PrivateChef