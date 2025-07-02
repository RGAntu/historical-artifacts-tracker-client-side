import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const url = searchTerm
        ? `https://historical-artifacts-tracker-server-six.vercel.app/artifacts/search?name=${encodeURIComponent(
            searchTerm
          )}`
        : `https://historical-artifacts-tracker-server-six.vercel.app/artifacts`;

      axios
        .get(url)
        .then((res) => setArtifacts(res.data))
        .catch((err) => console.error("Error fetching artifacts:", err));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);
  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <Helmet>
        <title>All Artifacts | Historical Artifacts Tracker</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center">All Artifacts</h2>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search artifacts by name..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="card bg-base-100 border-1 shadow-md"
          >
            <figure>
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold">{artifact.name}</h3>
              <p className="text-sm text-gray-600">
                CreatedAt: {artifact.createdAt} · DiscoveredAt:{" "}
                {artifact.discoveredAt}
              </p>
              <p className="text-sm text-gray-600">Likes: {artifact.likes}</p>
              <div className="card-actions justify-start mt-4">
                <Link
                  to={`/artifact/${artifact._id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
