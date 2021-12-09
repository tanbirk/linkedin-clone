import { Avatar } from '@material-ui/core'
import React, { forwardRef} from 'react'
import "./Post.css"
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined"
import SendOutlinedIcon from "@material-ui/icons/SendOutlined"
import InputOption from './InputOption'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    
    const error = () => {
        if (name != null) {
            return name[0]
        }
        else {
            return null;
        }
    }
    console.log(error())
    
    return (
        <div ref={ref} className='post'>
            <div className="post__header" >
            <Avatar src={photoUrl}>{name != null ? name[0] : null}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
            <div className="post__body" >
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
        
    )
})

export default Post
