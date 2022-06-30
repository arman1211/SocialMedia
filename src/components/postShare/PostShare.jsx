import React, { useState } from 'react'
import './PostShare.css'
import profileImg from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons'
import { useRef } from 'react'

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className="postShare">
            <img src={profileImg} alt="" />
            <div>
                <input type="text" placeholder="What's on your mind?" />

                <div className="postOption">
                    <div style={{ color: 'var(--photo)' }} className="option"
                        onClick={() => imageRef.current.click()}
                    >
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
                    <div style={{ display: 'none' }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {
                    image &&
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default PostShare