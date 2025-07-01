import React from 'react';
import Banner from '../components/Banner';
import FeaturedArtifacts from '../components/FeaturedArtifacts/FeaturedArtifacts';
import JoinCommunity from '../components/JoinCommunity';
import StatsCards from '../components/StatsCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedArtifacts></FeaturedArtifacts>
            <StatsCards></StatsCards>
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;