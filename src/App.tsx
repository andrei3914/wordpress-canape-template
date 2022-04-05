import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <div className='home-container'>
        <div className="hero">
          <img className='hero-img' 
            srcSet="https://canapedemo.files.wordpress.com/2015/11/food-918743_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/11/food-918743_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/11/food-918743_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/11/food-918743_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/11/food-918743_1920.jpg?w=1024&h=460&crop=1 1024w" alt="dish" />
        </div>

        {/* WELCOME SECTION*/}
        <div className="home-welcome-div">
          <div className="welcome-header">
            <p className='welcome-title'>WELCOME TO CANAPÉ</p> 
            <p className='welcome-body'>
              Welcome to Canapé, where our specialty is delicious cuisine created with the ingenuity and passion inspired by the fantastic flavors of France itself. We take great pride in improving upon your favorite French dishes in new and creative ways. Come and experience French cooking our way!
            </p> 
          </div>

          <div className="welcome-cards">
            <Link to="/menu" className='link'>
              <div className="card first">
                <img src="https://canapedemo.files.wordpress.com/2015/12/appetizer.jpg" alt="" />
                <div className="card-content">
                  <p className="card-title">Hors d'œuvre</p>
                  <p className="card-body">A French phrase meaning out of the work, used to mean food served as an appetizer before a meal.</p>
                </div>
              </div>
            </Link>
          
            <Link to="/menu" className='link'>
              <div className="card second">
                <img src="https://canapedemo.files.wordpress.com/2015/12/main-courses.jpg" alt="" />
                <div className="card-content">
                  <p className="card-title">Mains</p>
                  <p className="card-body">From light sole meunière to a hearty Bouillabaisse, there is something for everyone. Always made with fresh, local-sourced ingredients.</p>
                </div>
              </div>
            </Link>
          
            <Link to='/menu' className='link'>
              <div className="card third">
                <img src="https://canapedemo.files.wordpress.com/2015/12/dessert.jpg" alt="" />
                <div className="card-content">
                  <p className="card-title">Desserts</p>
                  <p className="card-body">A collection of classic French desserts. These will make an elegant, not to mention delicious ending to any meal.</p>
                </div>
              </div>
            </Link>
          </div>
        </div> 

        {/* THANK YOU section */}
        <div className="thankYou">
          <h2>Thank you's</h2>
          <ul>
    
            <li id='post-1'>
              <div className="entry-content">
                <p>My business and Canapé are like salt and pepper, peanut butter and jelly, Batman and Robin, The Fonz and cool, rainbows and pots of gold, Santa and cookies, Pete and Pete – they’re just perfect together.</p>
              </div>
              <header className="entry-author">
                <p><em>- Takashi</em></p>
              </header>
            </li>
          
            <li id='post-2'>
              <div className="entry-content">
                <p>Canapé made my business what it is today — outstanding, wildly successful, ahead of its time. My products are flying off the shelves, and I truly believe I have Canapé to thank for that.</p>
              </div>
              <header className="entry-author">
                <p><em>- Caroline</em></p>
              </header>
            </li>
              
          </ul>
        </div>

        {/* CONTACT, SERVICES AND FOLLOW US SECTION*/}
        <div className="endpage-container">
          <div className="contact">
            <h3 className='card-title'>CONTACT</h3>
            <div>
              <p>Please get in touch with us for more information or to schedule catering for your next event.</p>
              <p><a href="mailto:#">contact@example.com</a></p>
            </div>
          </div>
          <div className="services">
            <h3 className='card-title'>SERVICES</h3>
            <ul className='services-list'>
              <li><a href="/">Catering</a></li>
              <li><a href="/">Private Chef Services</a></li>
              <li><a href="/">Menu Development</a></li>
            </ul>
          </div>
          <div className="follow-us">
            <h3 className='card-title'>FOLLOW US VIA EMAIL</h3>
            <form action="" className='follow-us-form'>
              <p>Enter your email address to follow this blog and receive notifications of new posts by email.</p>
              <p>Join 1,118 other followers</p>
              <input type="text" placeholder="Enter your email adress"/>
              <input type="submit" value='FOLLOW'/>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div> 
  );
}

export default App;
