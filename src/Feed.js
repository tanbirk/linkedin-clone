import CreateIcon from '@material-ui/icons/Create'
import React, { useState } from 'react'
import "./Feed.css"
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import  SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import  EventNoteIcon from '@material-ui/icons/EventNote'
import  CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'

function Feed() {
    const [posts, setPosts]=useState([])

    const sendPost = e => {
        e.preventDefault()
    }

    return (
        <div className="feed">
            <div className ="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#7085F9"/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
                </div>
            </div>
               {posts.map((post) => (
                   <Post />
               ))}
                <Post
                name="Tanvir kashyap" 
                description="this is hte shtsit"
                message="i love this hist"
                />


        </div>
    )
}

export default Feed
