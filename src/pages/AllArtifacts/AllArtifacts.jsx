import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //added new for filterType & SortBy
  const [filterType, setFilterType] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredArtifacts = artifacts
    .filter((a) => (filterType ? a.type === filterType : true))
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "date")
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      return 0;
    });

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
    <div className="py-20 max-w-7xl mx-auto px-4">
      <Helmet>
        <title>All Artifacts | Historical Artifacts Tracker</title>
      </Helmet>
      <h2 className="text-3xl font-bold mt-6 mb-6 text-center">
        All Artifacts
      </h2>

      {/* <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search artifacts by name..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div> */}

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search artifacts by name..."
          className="input input-bordered w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered"
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="">All Types</option>
          <option value="Tools">Tools</option>
          <option value="Weapons">Weapons</option>
          <option value="Documents">Documents</option>
          <option value="Writings">Writings</option>
        </select>
        <select
          className="select select-bordered"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="">Sort By</option>
          <option value="likes">Most Liked</option>
          <option value="date">Newest</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((artifact) => (
          <div key={artifact._id} className="card bg-base-100 shadow-md">
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
                Created: {artifact.createdAt} · Likes: {artifact.likes}
              </p>
              <Link
                to={`/artifact/${artifact._id}`}
                className="btn btn-primary btn-sm text-white"
              >
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="card bg-base-100 border-1 border-gray-200 shadow-md"
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
                  className="btn btn-primary text-white btn-sm"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default AllArtifacts;
