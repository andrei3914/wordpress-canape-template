import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import './Reservations.scss';

const Reservations = () => {
  return (
    <div>
      <Navigation />
      <div className="reservations-container">
        <div className="entry-thumbnail background-center">
          <img src="https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1180&h=530&crop=1" alt="dish" 
          srcSet='https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/11/restaurant-646678_1920.jpg?w=1024&h=460&crop=1 1024w'/>
        </div>

        <div className="reservations-content">
          <header className='entry-header'>
            <h1 className='entry-title'>Reservations</h1>
            <p>
              Canape comes with OpenTable widget, to provide instant online reservations. Reservations widget can be added to any of the widget areas.
              You can also add <a href="https://en.support.wordpress.com/contact-form/">custom contact form</a> to allow your customers make reservations directly.
            </p>
            <div className="contact-form">
              <form action="" method='post'>
                <fieldset>
                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' name='name' required
                        maxLength={40} minLength={1}/>
                </fieldset>
                <fieldset>
                  <label htmlFor="email">Email</label>
                  <input type="email" id='email' name='email' required
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'/>
                </fieldset>
                <fieldset>
                  <label htmlFor="party_size">Party Size</label>
                  <select name='party_size' id='party_size'>
                    <option value="1 person">1 person</option>
                    <option value="2 people">2 people</option>
                    <option value="3 people">3 people</option>
                    <option value="4 people">4 people</option>
                    <option value="5 people">5 people</option>
                    <option value="6 people">6 people</option>
                    <option value="Larger party">Larger party</option>
                  </select>
                </fieldset>
                <fieldset>
                  <label htmlFor="telephone">Telephone</label>
                  <input type="tel" name='telephone' id='telephone' required pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$' placeholder='e.g. 123-456-7890'/>
                </fieldset>
                <fieldset>
                  <label htmlFor="date">Reservation Date</label>
                  <input type="date" id='date' name='date'/>
                </fieldset>
                <fieldset>
                  <label htmlFor="time">Reservation Time</label>
                  <input type="time" id='time' name='time'/>
                </fieldset>
                <fieldset>
                  <label htmlFor="special">Special Requests</label>
                  <textarea name="special" id="special" cols={30} rows={10}></textarea>
                </fieldset>
                <fieldset>
                  <input type="submit" value='SUBMIT'/>
                </fieldset>
              </form>
            </div>
          </header>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reservations