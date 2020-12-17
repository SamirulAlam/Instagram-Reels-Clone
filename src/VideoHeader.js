import React from 'react';
import "./VideoHeader.css";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader
