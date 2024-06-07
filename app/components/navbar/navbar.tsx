import React from 'react'
import './navbar.css'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2 className='nav-brand'>Dashboard</h2>
        <div className='navbar-item-box'>
          <div className='image-box mt-2 mr-5 p-2'>
          <img className='h-6 w-6 mr-5' src='/bellIcon.jpg' alt='icon'></img>
          <img className='h-6 w-6' src='/person1.png' alt='icon' width={3} height={3}></img>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
