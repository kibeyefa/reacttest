import React from 'react';
import { ReactComponent as Youtube } from '../assets/icon-youtube.svg'
import { ReactComponent as IconDown } from '../assets/icon-down.svg'

const YoutubeCard = ({ title, number, percentage }) => {
    return (
        <div className="card">
            <div>
                <h4>{title}</h4>
                <Youtube />
            </div>

            <div>
                <h2>{number}</h2>
                <span className='negative'>
                    <IconDown />{percentage}%
                </span>
            </div>
        </div>
    );
};

export default YoutubeCard;
