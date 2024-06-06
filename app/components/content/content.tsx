import React from 'react'
import BarChart from '../chart/chart'
import ActivityFeed from '../activityFeed/activityFeed'
import Table from '../table/table'
import ContentBox from '../contentBox/contentBox'

function Content() {
  return (
    <div className='row g-0 pl-3 pr-3'>
      <div className='col-12'>
        <ContentBox />
      </div>
      <div className='col-lg-8 col-md-12 col-sm-12 pr-0 mr-0'>
        <Table/>
      </div>
      <div className='col-lg-4 col-md-12 col-sm-12 pl-0 ml-0'>
        <BarChart />
        <ActivityFeed />
      </div>
    </div>
  )
}

export default Content
