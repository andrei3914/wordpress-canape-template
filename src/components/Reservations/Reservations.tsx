import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import './Reservations.scss';

const Reservations = () => {
  return (
    <div>
      <Navigation />
      <div className="reservations-container">
        <div className="entry-thumbnail">
          <img src="https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1180&h=530&crop=1" alt="dish" 
          srcSet='https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1024&h=460&crop=1 1024w'/>
        </div>

        <div className="reservations-content">
          <header className='entry-header'>
            <h1 className='entry-title'>Reservations</h1>
            <p>
              Canape comes with OpenTable widget, to provide instant online reservations. Reservations widget can be added to any of the widget areas. You can also add custom contact form to allow your customers make reservations directly.
            </p>
            <form action="">
            
            </form>
          </header>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reservations