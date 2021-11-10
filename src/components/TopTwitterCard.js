import React from 'react'
import {  ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import { ReactComponent as IconUp } from '../assets/icon-up.svg';

const TopTwitterCard = () => {
    return (
        <div className="card main-card twitter">
            <div className="social">
                <Twitter />
                @nathanf
            </div>

            <h1>1044</h1>
            <p>FOLLOWERS</p>

            <div className="today positive">
                <IconUp /> 99 Today
            </div>
        </div>
    )
}

export default TopTwitterCard
