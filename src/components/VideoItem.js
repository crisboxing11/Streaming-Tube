import React from 'react'
import './VideoItems.css'

const VideoItem = ({video}) => {
    console.log(video)
    return (
        <div className="video-item item">
           <img className="ui image" src={video.snippet.thumbnails.high.url}/>
           <div className="content">
            <div className="header">
            {video.snippet.title}
            </div>
            </div>
        </div>
    )
}

export default VideoItem
