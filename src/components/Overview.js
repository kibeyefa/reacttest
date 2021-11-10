import React from 'react';
import FacebookCard from './FacebookCard';
import TwiterCard from './TwiterCard';
import InstaCard from './InstaCard';
import YoutubeCard from './YoutubeCard';

const Overview = () => {
    return (
        <div className="overview">
            <h2>Overview - Today</h2>
            <div className="overview-cards">
                <FacebookCard title="Likes" number={87} percentage={3} />
                <FacebookCard title="Page Views" number={52} percentage={-2} />
                <InstaCard title="Likes" number="5462" percentage="2257" />
                <InstaCard title="Profile Views" number="52k" percentage="1375" />
                <TwiterCard title="Retweets" number="117" percentage='303' />
                <TwiterCard title='Likes' number='507' percentage='553' />
                <YoutubeCard title="Likes" number="107" percentage="19" />
                <YoutubeCard title="Total views" number="1407" percentage="192" />
            </div>
        </div>
    );
};

export default Overview;
