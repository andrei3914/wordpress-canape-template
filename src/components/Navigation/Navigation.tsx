import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss';
import Icon from '../../assets/icon-hamburger.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navigation = () => {
  const [visibility, setVisibility] = useState('false');

  return (
    <nav className='navigation'>
        <div className='navigationLeft'>
          <h1><Link to='/' className='link'>CANAPÉ</Link></h1>
          <button className='toggle-nav'
              aria-controls='primary-navigation'
              onClick={() => {
                if (visibility === 'false') {
                  setVisibility('true');
                } else if (visibility === 'true') {
                  setVisibility('false');
                }
              }}>
            <img src={Icon} alt="menuIcon" />
            Menu
          </button>
        </div>

        <ul className='primary-navigation' id='primary-navigation'
            data-visible={visibility}>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/menu' className='link'>Menu</Link></li>
            <li><Link to='/news' className='link'>News</Link></li>
            <li className='hoverLi'><Link to='/readability' className='link dropDownLink'>
                Readability<span><RiArrowDropDownLine className='dropDownIcon'/></span>
                </Link>
                <ul className='hover-navigation'>
                  <li>Image Alignment</li>
                  <li>HTML Elements</li>
                </ul>
            </li>
            <li><Link to='/reservations' className='link'>Reservations</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation