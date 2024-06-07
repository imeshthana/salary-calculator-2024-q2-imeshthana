import React from 'react';
import './sidebar.css'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className="sidebar col-2">
      <div className='brand-box'>
        <h1 className='brand pr-6'>Acmy Solutions</h1>
      </div>
      <div className='nav-item-box'>
        <img className='w-6 h-5 pt-2 pl-3' src='/Icon.jpg' alt='icon'></img>
      <h3 className='nav-item'>Dashboard</h3>
      </div>
    </div>
  );
};

export default Sidebar;
