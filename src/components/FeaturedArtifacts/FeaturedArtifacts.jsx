import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://historical-artifacts-tracker-server-six.vercel.app/artifacts/featured")
      .then((res) => setArtifacts(res.data))
      .catch((error) => {
        console.error("Error fetching featured artifacts:", error);
      });
  }, []);
  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-3">Featured Artifacts</h2>
      <p className="text-lg text-center mb-8">Discover the most beloved artifacts in our collection, chosen by our community of history enthusiasts.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="max-w-sm bg-white border rounded-lg shadow-sm dark:bg-accent dark:border-gray-200"
          >
            <Link to={`/artifact/${artifact._id}`}>
              <img
                className="rounded-t-lg h-48 w-full object-cover"
                src={artifact.imageUrl}
                alt={artifact.name}
              />
            </Link>
            <div className="p-5">
              <Link to={`/artifact/${artifact._id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-secondary">
                  {artifact.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {artifact.description.slice(0, 80)}...
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Likes: {artifact.likes}
              </p>
              <Link
                to={`/artifact/${artifact._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:primary"
              >
                View Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <Link to="/allArtifacts" className="btn text-primary border-primary">
          See All Artifacts
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
