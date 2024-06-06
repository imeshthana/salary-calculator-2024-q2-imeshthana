import React from 'react'
import './dashboard.css'
import Navbar from '../navbar/navbar'
import Content from '../content/content'

function Dashboard() {
  return (
    <div className='dashboard col-10'>
        <Navbar />
        <Content />
    </div>
  )
}

export default Dashboard
