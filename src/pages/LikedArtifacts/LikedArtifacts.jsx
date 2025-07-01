import React from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Helmet } from 'react-helmet-async';

const LikedArtifacts = () => {
    return (
        <div>
            <Helmet>
        <title>Liked Artifacts | Historical Artifacts Tracker</title>
      </Helmet>
            <h2>Liked Artifacts</h2>
        </div>
    );
};

export default LikedArtifacts;