import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet-async";

const AddArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    type: "",
    historicalContext: "",
    description: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArtifact = {
      ...formData,
      contributedBy: user?.displayName || "Anonymous",
      contributorEmail: user?.email || "anonymous@example.com",
      likes: 0,
      isLiked: false,
      dateAdded: new Date().toISOString().split("T")[0],
    };

    try {
      const res = await axios.post(
        "https://historical-artifacts-tracker-server-six.vercel.app/artifacts",
        newArtifact
      );
      if (res.data.insertedId) {
        toast.success("Artifact added successfully!");
        setFormData({
          name: "",
          imageUrl: "",
          type: "",
          historicalContext: "",
          description: "",
          createdAt: "",
          discoveredAt: "",
          discoveredBy: "",
          location: "",
        });
      }
    } catch (error) {
      toast.error("Failed to add artifact.", error);
    }
  };
  return (
    <div className="max-w-4xl mx-auto py-20 px-5 bg-white shadow rounded">
      <Helmet>
        <title>Add Artifacts | Historical Artifacts Tracker</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-6">Add New Artifact</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium">
            Artifact Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Artifact Name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Artifact Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Paste image URL here"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Artifact Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Historical Context
          </label>
          <input
            type="text"
            name="historicalContext"
            value={formData.historicalContext}
            onChange={handleChange}
            placeholder="Historical Context"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Short Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Brief description of the artifact"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Created At</label>
          <input
            type="text"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            placeholder="e.g., 196 BC"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Discovered At
          </label>
          <input
            type="text"
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            placeholder="e.g., 1799"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Discovered By
          </label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            placeholder="e.g., Pierre-François Bouchard"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">
            Present Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., British Museum, London"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Adder Name</label>
          <input
            type="text"
            value={user?.displayName || "Anonymous"}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Adder Email</label>
          <input
            type="email"
            value={user?.email || "anonymous@example.com"}
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary w-full mt-4">
            Add Artifact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifacts;
