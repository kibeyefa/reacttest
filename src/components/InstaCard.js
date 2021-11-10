import React from 'react'
import { ReactComponent as Insta } from '../assets/icon-instagram.svg'
import { ReactComponent as IconUp } from '../assets/icon-up.svg'


const InstaCard = ({title, number, percentage}) => {
    return (
        <div className="card">
            <div>
                <h4>{title}</h4>
                <Insta />
            </div>

            <div>
                <h2>{number}</h2>
                <span className="positive">
                    <IconUp /> {percentage}%
                </span>
            </div>
        </div>
    )
}

export default InstaCard
