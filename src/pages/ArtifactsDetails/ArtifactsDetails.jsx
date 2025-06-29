import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router";

const ArtifactsDetails = () => {
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/artifacts/${id}`)
      .then((res) => {
        setArtifact(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch artifact:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (!artifact)
    return (
      <p className="text-center my-10 text-red-500">Artifact not found.</p>
    );
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow rounded my-10">
      <img
        src={artifact.imageUrl}
        alt={artifact.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-3xl font-bold">{artifact.name}</h2>
      <p className="mt-2 text-gray-600">{artifact.description}</p>
      <p>
        <strong>Origin:</strong> {artifact.origin}
      </p>
      <p>
        <strong>Period:</strong> {artifact.period}
      </p>
      <p>
        <strong>Discovered Date:</strong> {artifact.discoveredDate}
      </p>
      <p>
        <strong>Location:</strong> {artifact.location}
      </p>
      <p>
        <strong>Contributed By:</strong> {artifact.contributedBy}
      </p>
      <p>
        <strong>Date Added:</strong> {artifact.dateAdded}
      </p>
      <div className="mt-4">
        <p>
          <strong>Likes:</strong> {artifact.likes}
        </p>
        <button className="btn btn-accent mt-2">
          <FcLike /> Like
        </button>
      </div>
    </div>
  );
};

export default ArtifactsDetails;
