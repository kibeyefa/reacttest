import React from 'react';
import { ReactComponent as IconDown } from '../assets/icon-down.svg';
import { ReactComponent as IconUp } from '../assets/icon-up.svg';
import { ReactComponent as Facebook } from '../assets/icon-facebook.svg';

const FacebookCard = ({ title, number, percentage }) => {
    return (
        <div className="card">
            <div>
                <h4>{title}</h4>
                <Facebook />
            </div>

            <div>
                <h2>{number}</h2>
                <span className={percentage >= 0 ? 'positive' : 'negative'}>
                    {percentage >= 0 ? <IconUp /> : <IconDown />}
                    {Math.abs(percentage)}%
                </span>
            </div>
        </div>
    );
};

export default FacebookCard;
