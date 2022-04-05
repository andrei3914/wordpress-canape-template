import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navigation.scss';
import Icon from '../../assets/icon-hamburger.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navigation = () => {
  const [visibility, setVisibility] = useState('false');

  return (
    <nav className='navigation'>
        <div className='navigationLeft'>
          <p className='navigation-title'><Link to='/' className='link'>CANAPÉ</Link></p>
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
            <li>
                <NavLink to='/' 
                 className={({ isActive }) => 
                 'link' + (isActive ? " selected" : "")}> 
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/menu'
                    className={({ isActive }) => 
                    'link' + (isActive ? " selected" : "")}>
                      Menu
                </NavLink>
            </li>
            <li>
              <NavLink to='/news'
                className={({ isActive }) => 
                'link' + (isActive ? " selected" : "")} 
                 >
                News
              </NavLink>
            </li>
            <li className='hoverLi'>
                <NavLink to='/readability'
                    className={({ isActive }) => 
                      'link dropDownLink' + (isActive ? " selected" : "")}>
                  Readability<span className='dropDownSpan'><RiArrowDropDownLine className='dropDownIcon'/></span>
                </NavLink>
                <ul className='hover-navigation'>
                  <li>Image Alignment</li>
                  <li>HTML Elements</li>
                </ul>
            </li>
            <li>
              <NavLink to='/reservations'
              className={({ isActive }) => 
              'link' + (isActive ? " selected" : "")} 
               >
                Reservations
              </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation