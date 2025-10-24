import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";

const ArtifactsDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeDisabled, setLikeDisabled] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // added new
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${id}`
      )
      .then((res) => {
        setArtifact(res.data);
        setHasLiked(res.data.likedBy?.includes(user?.email));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch artifact:", error);
        setLoading(false);
      });
  }, [id, user?.email]);

  // Toggle Like/Dislike
  const handleLike = async () => {
    setLikeDisabled(true);
    try {
      const res = await axios.patch(
        `https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${artifact._id}/like`,
        { email: user.email }
      );

      if (res.data.success) {
        const newLikedBy = res.data.liked
          ? [...(artifact.likedBy || []), user.email]
          : artifact.likedBy.filter((email) => email !== user.email);

        setArtifact((prev) => ({
          ...prev,
          likes: res.data.liked ? prev.likes + 1 : prev.likes - 1,
          likedBy: newLikedBy,
        }));

        setHasLiked(res.data.liked);
        toast.success(res.data.message);
      } else {
        toast.warning(res.data.message);
      }
    } catch (err) {
      toast.error("Failed to update like.");
      console.error(err);
    } finally {
      setLikeDisabled(false);
    }
  };

  if (loading) return <Loading></Loading>;
  if (!artifact)
    return (
      <p className="text-center my-10 text-red-500">Artifact not found.</p>
    );

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="max-w-7xl mx-auto px-5 md:px-0 pt-35 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Helmet>
            <title>Artifacts Details | Historical Artifacts Tracker</title>
          </Helmet>
          <img
            src={artifact.imageUrl}
            alt={artifact.name}
            className="rounded-2xl w-full h-full object-cover"
          />

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {artifact.name}
              </h2>
              <button
                onClick={handleLike}
                disabled={likeDisabled}
                className={`btn btn-sm px-4 flex items-center gap-2 border-2 rounded-md shadow-sm transition-all duration-300 ${
                  hasLiked
                    ? "bg-[#DB7307] text-white border-[#DB7307]"
                    : "bg-white text-[#DB7307] border-[#DB7307]"
                }`}
              >
                <FcLike
                  className={`text-xl ${hasLiked ? "scale-125" : "opacity-50"}`}
                />
                {artifact.likes} likes
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-xs font-medium">
                Added on {artifact.dateAdded}
              </span>
            </p>

            <div className="mb-4 p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-1">Description</h3>
              <p className="text-gray-600">{artifact.description}</p>
            </div>

            <div className="mb-4 p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-1">
                Historical Significance
              </h3>
              <p className="text-gray-600">{artifact.historicalContext}</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>
                  <span className="font-bold">CreatedAt:</span>{" "}
                  {artifact.createdAt || "N/A"}
                </li>
                <li>
                  <span className="font-bold">DiscoveredAt:</span>{" "}
                  {artifact.discoveredAt || "N/A"}
                </li>
                <li>
                  <span className="font-bold">Current Location:</span>{" "}
                  {artifact.location || "N/A"}
                </li>
                <li>
                  <span className="font-bold">Discovered:</span>{" "}
                  {artifact.discoveredAt || "N/A"}
                </li>
                <li>
                  <span className="font-bold">Contributed by:</span>{" "}
                  {artifact.contributedBy || "N/A"}
                </li>
              </ul>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-8 border-t pt-4">
            <h3 className="text-xl font-semibold mb-3">Comments</h3>

            {/* Comment Input */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!commentText.trim()) return;

                try {
                  const res = await axios.post(
                    `https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${artifact._id}/comments`,
                    {
                      text: commentText,
                      userEmail: user.email,
                      userName: user.displayName || "Anonymous",
                    }
                  );

                  // Add new comment to UI instantly
                  setArtifact((prev) => ({
                    ...prev,
                    comments: [...(prev.comments || []), res.data],
                  }));
                  setCommentText("");
                } catch (err) {
                  toast.error("Failed to post comment");
                  console.error(err);
                }
              }}
              className="flex gap-2 mb-4"
            >
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="input input-bordered flex-1"
              />
              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </form>

            {/* Comment List */}
            <ul className="space-y-3">
              {Array.isArray(artifact.comments) &&
              artifact.comments.length > 0 ? (
                artifact.comments.map((comment) => (
                  <li
                    key={comment._id}
                    className="p-3 border rounded-lg flex justify-between items-start bg-gray-50"
                  >
                    <div>
                      <p className="text-gray-800">
                        <span className="font-semibold">
                          {comment.userName}
                        </span>{" "}
                        <span className="text-gray-500 text-xs">
                          • {new Date(comment.date).toLocaleString()}
                        </span>
                      </p>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>

                    {/* Delete Button (only if user is owner) */}
                    {user?.email === comment.userEmail && (
                      <button
                        onClick={async () => {
                          try {
                            await axios.delete(
                              `https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${artifact._id}/comments/${comment._id}`,
                              { data: { userEmail: user.email } }
                            );
                            setArtifact((prev) => ({
                              ...prev,
                              comments: prev.comments.filter(
                                (c) => c._id !== comment._id
                              ),
                            }));
                            toast.success("Comment deleted");
                          } catch (err) {
                            toast.error("Failed to delete comment");
                            console.error(err);
                          }
                        }}
                        className="text-red-500 hover:text-red-700 ml-3"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No comments yet. Be the first!</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ArtifactsDetails;
