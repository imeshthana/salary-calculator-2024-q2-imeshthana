import React from 'react'
import './chart.css'

function LegendBox() {
  return (
    <div className='legend-box'>
    <div className='legend-item'>
      <div className='color-box' style={{ backgroundColor: '#EB5757' }}></div>
      <span>High</span>
    </div>
    <div className='legend-item'>
      <div className='color-box' style={{ backgroundColor: '#F2C94C' }}></div>
      <span>Medium</span>
    </div>
    <div className='legend-item'>
      <div className='color-box' style={{ backgroundColor: '#2F80ED' }}></div>
      <span>Low</span>
    </div>
  </div>
  )
}

export default LegendBox
