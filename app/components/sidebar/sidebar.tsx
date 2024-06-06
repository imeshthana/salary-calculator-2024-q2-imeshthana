import React from 'react';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar col-2">
      <div className='brand-box'>
        <h1 className='brand pr-6'>Acmy Solutions</h1>
      </div>
      <div className='nav-item-box'>
        {/* <img src='../../assets/Icon.jpg' alt='icon'/> */}
        <i></i>
        <h3 className='nav-item'>Dashboard</h3>
      </div>
    </div>
  );
};

export default Sidebar;
