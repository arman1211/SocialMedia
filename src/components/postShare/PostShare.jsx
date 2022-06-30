import React from 'react'
import './PostShare.css'
import profileImg from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule } from '@iconscout/react-unicons'

const PostShare = () => {
    return (
        <div className="postShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" placeholder="What's on your mind?" />

                <div className="postOption">
                    <div style={{ color: 'var(--photo)' }} className="option">
                        <UilScenery />
                        Photo
                    </div>
                    <div style={{ color: 'var(--video)' }} className="option">
                        <UilPlayCircle />
                        Video
                    </div>
                    <div style={{ color: 'var(--location)' }} className="option">
                        <UilLocationPoint />
                        Location
                    </div>
                    <div style={{ color: 'var(--shedule)' }} className="option">
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default PostShare