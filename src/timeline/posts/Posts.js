import React from 'react'
import './Posts.css'
// import { Avatar } from '@mui/material'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import { Avatar } from '@mui/material'


function Posts( user, postImage, likes, timestamp ) {
  // console.log(user);
  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_headerAuthor'>
        {/* <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span> */}
          <Avatar>R</Avatar>
        </div>
        <MoreHorizIcon />
      </div>
        <div className='post_image'>
          <img src={postImage} alt="Post Image" />
        </div>
        <div className='post_footer'>
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likes} people.
        </div>
    </div>
  )
}

export default Posts