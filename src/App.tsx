import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <div className='home-container'>
        home
      </div>
      <Footer />
    </div> 
  );
}

export default App;
