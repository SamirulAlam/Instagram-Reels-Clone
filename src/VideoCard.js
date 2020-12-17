import React, { useRef, useState } from 'react';
import "./VideoCard.css"
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';

function VideoCard({channel,avatarSrc,likes,shares,url,song}) {

    const [isVideoPlaying,setIsVideoPlaying]=useState(false);
    const videoRef=useRef(null);

    const onVideoPress=()=>{
        if(isVideoPlaying){
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }else{
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video ref={videoRef} onClick={onVideoPress} className="video__player" src={url} loop />
            <VideoFooter 
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song} />
        </div>
    )
}

export default VideoCard
