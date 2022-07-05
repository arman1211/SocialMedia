import React from 'react'
import './ProfileCard.css'
import cover from '../../img/cover.jpg'
import profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
    const profilePage = true;
    return (
        <div className="profileCard">
            <div className="profileImages">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="profileName">
                <span>Arman</span>
                <span>MERN Stack Developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className='follow'>
                        <span>1200</span>
                        <span>Followers</span>

                    </div>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>1</span>
                        <span>Following</span>
                    </div>
                    {
                        profilePage && (
                            <>
                                <div className="vl">

                                </div>
                                <div className="follow">
                                    <span>3</span>
                                    <span>post</span>
                                </div>
                            </>
                        )
                    }
                </div>
                <hr />
            </div>
            <span>My Profile</span>
        </div>
    )
}

export default ProfileCard