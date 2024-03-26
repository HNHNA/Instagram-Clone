import React from 'react'
import './Posts.css'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { Avatar } from '@mui/material'


function Posts( user) {
  // console.log(user);
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerAuthor'>
        <Avatar style={{ marginRight: "10px" }}>
            {user.user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user.user} • <span>{user.timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
        <div className='post_image'>
        <img src={user.postImage} alt="Mô tả hình ảnh" />
        </div>
        <div className='post_footer'>
        <div className="post_footerIcons">
          <div className="post_iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post_iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {user.likes} people.
        </div>
    </div>
  )
}

export default Posts