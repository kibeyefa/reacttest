import React from 'react'
import { ReactComponent as FaceBook } from '../assets/icon-facebook.svg'
import { ReactComponent as IconDown } from '../assets/icon-up.svg'


const TopFacebookCard = () => {
    return (
        <div className="card main-card facebook">
            <div className="social">
                <FaceBook />
                @nathanf
            </div>

            <h1>1987</h1>
            <p>FOLLOWERS</p>

            <div className="today positive">
                <IconDown /> 12 Today
            </div>
        </div>
    );
}

export default TopFacebookCard
