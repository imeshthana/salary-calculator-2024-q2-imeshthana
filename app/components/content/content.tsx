import React from 'react'
import BarChart from '../chart/chart'
import ActivityFeed from '../activityFeed/activityFeed'

function Content() {
  return (
    <div className='row'>
      <div className='col-4'>
        <BarChart />
        <ActivityFeed />
      </div>
    </div>
  )
}

export default Content
