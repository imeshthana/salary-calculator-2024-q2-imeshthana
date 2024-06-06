import React from 'react'
import './dashboard.css'
import Navbar from '../navbar/navbar'
import ContentBox from '../contentBox/contentBox'
import Content from '../content/content'

function Dashboard() {
  return (
    <div className='dashboard col-10'>
        <Navbar />
        <ContentBox />
        <Content />
    </div>
  )
}

export default Dashboard
