import React from 'react';
import { ReactComponent as Twiter } from '../assets/icon-twitter.svg';
import { ReactComponent as IconUp } from '../assets/icon-up.svg';

const TwiterCard = ({ title, number, percentage }) => {
    return (
        <div className="card">
            <div>
                <h4>{title}</h4>
                <Twiter />
            </div>

            <div>
                <h2>{number}</h2>
                <span className="positive">
                    <IconUp /> {percentage}%
                </span>
            </div>
        </div>
    );
};

export default TwiterCard;
