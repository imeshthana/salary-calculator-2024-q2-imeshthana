import React from 'react'
import './dashboard.css'
import Navbar from '../navbar/navbar'
import ContentBox from '../contentBox/contentBox'

function Dashboard() {
  return (
    <div className='dashboard col-10'>
        <Navbar />
        <ContentBox />
    </div>
  )
}

export default Dashboard
