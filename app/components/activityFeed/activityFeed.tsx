import React from 'react'
import './activityFeed.css'

function ActivityFeed() {
  return (
    <div className='content-box'>
        <div className='title-box'>
            <h2>Acitivity Feed</h2>
        </div>
        <div className='line'></div>
        <div className='activity-item1 pr-2 pl-2 pt-3 pb-3'>
            <div className='person-icon'>
                <img src='/person1.png' alt='person'></img>
            </div>
            <div className='activity-text'>
                <p className='text'><span className='name'>Kushantha Charuka</span> created <span className='special-text'>Contract need John Beiges signature</span></p>
                <p className='date'>Sep 16, 2022 at 11.30 AM</p>
            </div>
        </div>
        <div className='activity-item2 pr-2 pl-2 pt-3 pb-3'>
            <div className='person-icon'>
                <img src='/person2.png' alt='person'></img>
            </div>
            <div className='activity-text'>
                <p className='text'>Lorem ipsum <span className='name'>dolor sit amet</span>, consectetur adipiscing elit. <span className='name'>Maecenas</span> pretium neque</p>
                <p className='date'>Sep 16, 2022 at 11.45 AM</p>
            </div>
        </div>
        <div className='activity-item3 pr-2 pl-2 pt-3 pb-3'>
            <div className='person-icon'>
                <img src='/person2.png' alt='person'></img>
            </div>
            <div className='activity-text'>
                <p className='text'>Lorem ipsum <span className='name'>dolor sit amet</span>, consectetur adipiscing elit. <span className='name'>Maecenas</span> pretium neque</p>
                <p className='date'>Sep 16, 2022 at 11.45 AM</p>
            </div>
        </div>
    </div>
  )
}

export default ActivityFeed
