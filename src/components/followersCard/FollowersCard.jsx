import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../data/FollowerData'

const FollowersCard = () => {
    return (
        <div className="followersCard">
            <h3>Who is following you</h3>
            {
                Followers.map((follower, id) => {
                    return (
                        <div className='follower'>
                            <div>
                                <img src={follower.img} className='followerImg' alt="" />
                            </div>
                            <div className="name">
                                <span>{follower.name}</span>
                                <span>@{follower.userName}</span>
                            </div>
                            <button className='button fc-button'>
                                Follow
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FollowersCard