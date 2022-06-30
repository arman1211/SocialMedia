import React from 'react'
import './Post.css'
import heart from '../../img/like.png'
import comment from '../../img/comment.png'
import share from '../../img/share.png'
import notLiked from '../../img/notlike.png'

const Post = ({ data, id }) => {
    return (
        <div className="post">

            <img src={data.img} alt="" />
            <div className="reaction">
                <img src={data.liked ? heart : notLiked} alt="" />
                <img src={comment} alt="" />
                <img src={share} alt="" />

            </div>
            <span>{data.likes} likes</span>
            <div className="details">
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </div>

        </div>
    )
}

export default Post