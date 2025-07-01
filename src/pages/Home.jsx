import React from 'react';
import Banner from '../components/Banner';
import FeaturedArtifacts from '../components/FeaturedArtifacts/FeaturedArtifacts';
import JoinCommunity from '../components/JoinCommunity';
import StatsCards from '../components/StatsCards';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Home | Historical Artifacts Tracker</title>
      </Helmet>
            <Banner></Banner>
            <FeaturedArtifacts></FeaturedArtifacts>
            <StatsCards></StatsCards>
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;