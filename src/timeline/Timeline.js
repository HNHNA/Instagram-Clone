import React from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Posts'


function Timeline() {
  return (
    <div className='timeline'>

      <div className='timeline_left'>
        <div className='timeline_post'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />

        </div>
      </div>

      <div className='timeline_right'>
        <Suggestions />
      </div>

    </div>
  )
}

export default Timeline