import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../../components/Loading";

const LikedArtifacts = () => {
  const { user, loading } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loadingLiked, setLoadingLiked] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://historical-artifacts-tracker-server-six.vercel.app/likedArtifacts?email=${user.email.toLowerCase()}`)
        .then((res) => {
          setLikedArtifacts(res.data);
          setLoadingLiked(false);
        })
        .catch(() => setLoadingLiked(false));
    }
  }, [user]);
  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <Helmet>
        <title>Liked Artifacts | Historical Artifacts Tracker</title>
      </Helmet>

      <h2 className="text-2xl font-semibold text-center mb-4">
        Liked Artifacts
      </h2>

      {loading || loadingLiked ? (
        <Loading></Loading>
      ) : likedArtifacts.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-gray-600 mb-4">
            You haven’t liked any artifacts yet.
          </p>
          <Link
            to="/allArtifacts"
            className="inline-block bg-primary text-white px-4 py-2 rounded"
          >
            All Artifacts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white shadow rounded p-4 border border-gray-200"
            >
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-bold">{artifact.name}</h3>
              <p className="text-gray-600">{artifact.origin}</p>
              <p className="text-sm text-gray-500 mb-2">{artifact.period}</p>
              <Link
                to={`/artifact/${artifact._id}`}
                className="btn bg-primary text-white font-medium hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
