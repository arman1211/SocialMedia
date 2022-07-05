import React from 'react'
import './RightSide.css'
import home from '../../img/home.png'
import notification from '../../img/noti.png'
import message from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import Trending from '../trending/Trending'

const RightSide = () => {
    return (
        <div className="rightSide">
            <div className="navIcons">
                <img src={home} alt="" />
                <img src={message} alt="" />
                <img src={notification} alt="" />
                <UilSetting />
            </div>
            <Trending />
            <div className="button r-button">
                Share
            </div>
        </div>
    )
}

export default RightSide