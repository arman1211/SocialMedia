import React from 'react'
import './Trending.css'

const Trending = () => {
    return (
        <div className="trending">
            <span>Trending topics</span>
            <div className="topics">
                <div className="topic">
                    <span>#world_war</span>
                    <span>12k+ post</span>
                </div>
                <div className="topic">
                    <span>#sunny_leon</span>
                    <span>10k+ post</span>
                </div>
                <div className="topic">
                    <span>#elon_musk</span>
                    <span>8k+ post</span>
                </div>
                <div className="topic">
                    <span>#boycott_india</span>
                    <span>7k+ post</span>
                </div>
            </div>
        </div>
    )
}

export default Trending