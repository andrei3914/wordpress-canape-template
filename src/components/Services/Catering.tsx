import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import './Services.scss';

const Catering = () => {
  return (
    <div>
      <Navigation />
      <div className="catering-container">
        <div className="hero">
          <img src="https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=1180&h=530&crop=1" alt="dish"
            srcSet='https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/12/eating-601578_1920.jpg?w=1024&h=460&crop=1 1024w' />
        </div>

        <div className="catering-content">
          <h1 className='entry-title'>Catering</h1>
          <p>Canapé is offering catering at the highest level, regardless of the scale. Our speciality is finger-food and bite-sized treats, accompanied by a range of champagnes, wines, beers and soft drinks to choose from.</p>
          <p>Whether you’re planning an intimate gathering at home or a business event, we’ll create an unforgettable experience for you and your guests. Our goal is to exceed your expectations, whatever the occasion. </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Catering