import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import './News.scss';
import news_entries from './news_entries.json';
import NewsItem from './NewsItem';

const News = () => {
  return (
    <div>
      <Navigation />
      <div className="news-container">
        <div className="news">
          {
            news_entries.map(entry => {
              return (
                <NewsItem 
                  id={entry.id}
                  title={entry.title}
                  content={entry.content}
                  image={entry.image}
                  image_set={entry.image_set}
                  video={entry.video}
                  comments={entry.comments}
                  written={entry.written}
                />
              );
            })
          }
        </div>
        
        <div className="info">
          <div className="hours">
            <h3 className='card-title'>{`HOURS & INFO`}</h3>
            <div>
              <div className="google-map">
                <p>map placeholder</p>
              </div>
              <a href="/"><p>3999 Mission Boulevard,</p>
              <p>San Diego CA 92109</p></a>
              <p>1-202-555-1212</p>
              <p>Lunch: 11am - 2pm</p>
              <p>Dinner: M-Th 5pm - 11pm, Fri-Sat: 5pm - 1am</p>
            </div>
          </div>

          <div className="reservations">
            <h3 className='card-title'>RESERVATIONS</h3>
            
          </div>

          <div className="about">
            <h3 className='card-title'>ABOUT</h3>
            <p>{`Canapé is a bold and refined theme, designed to help you 
              create a beautiful online presence for your restaurant. 
              Integrated with food menus, testimonials, and the 
              Open Table widget, it's the perfect choice for any 
              food-related business.`}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default News