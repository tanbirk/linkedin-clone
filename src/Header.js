import React from "react"
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from "./HeaderOption"
import HomeIcon from "@material-ui/icons/Home"
import  SupervisorAccountIcon  from "@material-ui/icons/SupervisorAccount"
import  ChatIcon  from "@material-ui/icons/Chat"
import  NotificationsIcon  from "@material-ui/icons/Notifications"
import  BusinessCenterIcon  from "@material-ui/icons/BusinessCenter"


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                    <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text"/>
                    </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar="https://i.pinimg.com/280x280_RS/8a/39/de/8a39de1e258ac6671892a3c1ad5afc05.jpg" title='me' /> 

            </div>


        </div>
    )
}

export default Header

