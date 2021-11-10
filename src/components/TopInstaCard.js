import React from 'react';
import { ReactComponent as Insta } from '../assets/icon-instagram.svg';
import { ReactComponent as IconUp } from '../assets/icon-up.svg';

const TopInstaCard = () => {
    return (
        <div className="card main-card instagram">
            <div className="social">
                <Insta />
                @realnathanf
            </div>
            <h1>11k</h1>
            <p>FOLLOWERS</p>

            <div className="today positive">
                <IconUp /> 1099 Today
            </div>
        </div>
    );
};

export default TopInstaCard;
