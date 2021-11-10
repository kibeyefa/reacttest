import React from 'react'
import { ReactComponent as Youtube } from '../assets/icon-youtube.svg';
import { ReactComponent as IconDown  } from '../assets/icon-down.svg';

const TopYoutubeCard = () => {
    return (
        <div className="card main-card youtube">
            <div className="social">
                <Youtube /> Nathan F
            </div>
            <h1>8239</h1>
            <p>FOLLOWERS</p>

            <div className="today negative">
                <IconDown /> 144 Today
            </div>
        </div>
    )
}

export default TopYoutubeCard
