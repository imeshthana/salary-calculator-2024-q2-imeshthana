'use client'
import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className='navbar'>
        <h2 className='nav-brand'>Dashboard</h2>
        <div className='navbar-item-box'>
          <div className='image-box mt-2 mr-5 p-2'>
            <img className='h-6 w-6 mr-5 mt-1' src='/bellIcon.jpg' alt='icon'></img>
            <img className='h-7 w-7 mt-0' src='/person1.png' alt='icon'></img>
            <img className='h-3 w-4 mt-2 ml-3 mr-5' src='/downIcon.png' alt='icon' onClick={toggleDropdown}></img>
          </div>
          {dropdownVisible && (
          <div className='dropdown-menu'>
            <ul>
              <li><a href=''>Profile</a></li>
              <li><a href=''>Settings</a></li>
              <li><a href=''>Logout</a></li>
            </ul>
          </div>
        )}
        </div>
    </nav>
  )
}

export default Navbar
