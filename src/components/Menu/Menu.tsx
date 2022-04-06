import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import './Menu.scss';
import MenuItem from './MenuItem';
import menu_entries from './menu_entries.json';

const Menu = () => {
  return (
    <div>
      <Navigation />
      <div className="menu-container">
        <div className="hero">
          <img src="https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=1180&h=530&crop=1" alt=""
            srcSet='https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=1180&h=530&crop=1 1180w, https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=150&h=67&crop=1 150w, https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=300&h=135&crop=1 300w, https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=768&h=345&crop=1 768w, https://canapedemo.files.wordpress.com/2015/11/meal-918639_1920.jpg?w=1024&h=460&crop=1 1024w' />
        </div>

        <div className="the-container">
          <div className="menu-content">
            <header className='menu-content-header'>
              <h1 className="entry-title">Menu</h1>
              <p>The menu is a mix of French regional cuisines, and the menu changes with the seasons. Be sure to ask about the daily specials!</p>
            </header>

            {
              menu_entries.map(entry => {
                return(
                  <MenuItem 
                    id={entry.id}
                    title={entry.title}
                    content={entry.content}
                    items={entry.items}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu