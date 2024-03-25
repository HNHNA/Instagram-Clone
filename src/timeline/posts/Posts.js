import React from 'react'
import './Posts.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


function Posts() {
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerAuthor'>
          <Avatar>R</Avatar>
          huynhngocanh
        </div>
        <MoreHorizIcon />

      </div>
      <div className='post_image'>

      </div>
      <div className='post_footer'>

      </div>
    </div>
  )
}

export default Posts