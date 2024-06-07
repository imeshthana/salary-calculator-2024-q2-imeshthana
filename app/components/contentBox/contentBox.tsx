'use client'
import React, {useState} from 'react'
import './contentBox.css'

function ContentBox() {
  const [visible, setVisible] = useState(true);

  const handleHideContentBox = () => {
    setVisible(false);
  };

  return (
    visible && (<div className='content-box'>
        <img className='cross-image' src='/crossIcon.jpg' alt='icon' onClick={handleHideContentBox}></img>
        <div className='p-3'>
          <h1>Welcome back, John Doe</h1>
          <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
          <a href=''>Look here for more information</a>
        </div>
    </div>)
  )
}

export default ContentBox
