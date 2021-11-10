import React from 'react'
import TopFacebookCard from './TopCard'
import TopYoutubeCard from './TopYoutubeCard'
import TopTwitterCard from './TopTwitterCard'
import TopInstaCard from './TopInstaCard'

const Main = () => {
    return (
        <div className="main">
            <TopFacebookCard />
            <TopTwitterCard />
            <TopInstaCard />
            <TopYoutubeCard />
        </div>
    )
}

export default Main
