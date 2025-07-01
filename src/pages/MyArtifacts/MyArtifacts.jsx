import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/my-artifacts?email=${user.email}`)
        .then((res) => setArtifacts(res.data))
        .catch(() => toast.error("Failed to fetch artifacts"));
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this artifact?")) return;
    try {
      await axios.delete(`http://localhost:3000/artifacts/${id}`);
      setArtifacts((prev) => prev.filter((a) => a._id !== id));
      toast.success("Artifact deleted successfully");
      navigate("/allArtifacts");
    } catch {
      toast.error("Delete failed");
    }
  };

  if (!artifacts.length) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">No Artifacts Found</h2>
        <p className="text-gray-600">You haven’t added any artifacts yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 p-4">
      <h2 className="text-3xl font-bold mb-6">My Artifacts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="text-sm">{artifact.description?.slice(0, 70)}...</p>
              <div className="card-actions justify-between mt-4">
                <Link
                  to={`/update-artifact/${artifact._id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(artifact._id)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
