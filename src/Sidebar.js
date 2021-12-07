import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                    <img src="https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
                    <Avatar className="sidebar__avatar" />
                    <h2>Tanbir Kashyap</h2>
                        <h4>tanbir.kashyap879@gmail.com</h4>
            </div>
                <div className="sidebar__stats">
                        <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="sidebar_statNumber">2,543</p>
                        </div>
                        <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="sidebar_statNumber">2,543</p>
                        </div>

                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('reactjs')}
                    {recentItem('programming')}
                    {recentItem('computerengineering')}
                    {recentItem('design')}
                    {recentItem('developer')}
                </div>
        </div>
    )
}

export default Sidebar
