import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FeaturedArtifacts = () => {
    const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/artifacts/featured")
      .then((res) => setArtifacts(res.data))
      .catch((error) => {
        console.error("Error fetching featured artifacts:", error);
      });
  }, []);
    return (
         <div className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Featured Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div key={artifact._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>{artifact.description.slice(0, 80)}...</p>
              <p className="text-sm text-gray-500">Likes: {artifact.likes}</p>
              <div className="card-actions justify-end">
                <Link to={`/artifact/${artifact._id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center my-5'>
        <Link to="/allArtifacts" className="btn text-primary border-primary ">
                  See All Artifacts
                </Link>
      </div>
    </div>
    );
};

export default FeaturedArtifacts;