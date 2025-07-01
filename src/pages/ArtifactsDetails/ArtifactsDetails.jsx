import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

const ArtifactsDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeDisabled, setLikeDisabled] = useState(false);

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

const handleLike = async () => {
  setLikeDisabled(true);
  try {
    const res = await axios.patch(
      `http://localhost:3000/artifacts/${artifact._id}/like`,
      { email: user.email }
    );
    if (res.data.success) {
      setArtifact((prev) => ({
        ...prev,
        likes: prev.likes + 1,
      }));
      toast.success("You liked this artifact!");
    } else {
      toast.warning(res.data.message);
    }
  } catch (err) {
    toast.error("Failed to like the artifact.");
  } finally {
    setLikeDisabled(false);
  }
};

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
      <h2 className="text-3xl font-bold mb-2">{artifact.name}</h2>
      <p className="text-gray-700 mb-2">{artifact.description}</p>
      <p>
        <strong>Historical Context:</strong> {artifact.historicalContext}
      </p>
      <p>
        <strong>Created At:</strong> {artifact.createdAt}
      </p>
      <p>
        <strong>Discovered At:</strong> {artifact.discoveredAt}
      </p>
      <p>
        <strong>Discovered By:</strong> {artifact.discoveredBy}
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
      <div className="mt-4 flex items-center gap-3">
        <p>
          <strong>Likes:</strong> {artifact.likes}
        </p>
        <button
          onClick={handleLike}
          className="btn btn-accent flex items-center gap-2"
          disabled={likeDisabled}
        >
          <FcLike className="text-xl" />
          Like
        </button>
      </div>
    </div>
  );
};

export default ArtifactsDetails;
