import React from 'react';
import Banner from '../components/Banner';
import FeaturedArtifacts from '../components/FeaturedArtifacts/FeaturedArtifacts';
import JoinCommunity from '../components/JoinCommunity';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedArtifacts></FeaturedArtifacts>
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;