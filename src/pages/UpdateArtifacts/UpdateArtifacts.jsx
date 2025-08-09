import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';

const UpdateArtifacts = () => {
      const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    axios.get(`https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${id}`)
      .then(res => setArtifact(res.data))
      .catch(() => toast.error("Failed to load artifact"));
  }, [id]);

  const handleChange = (e) => {
    setArtifact({ ...artifact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      name: artifact.name,
      imageUrl: artifact.imageUrl,
      type: artifact.type,
      historicalContext: artifact.historicalContext,
      createdAt: artifact.createdAt,
      discoveredAt: artifact.discoveredAt,
      discoveredBy: artifact.discoveredBy,
      location: artifact.location
    };

    try {
      await axios.put(`https://historical-artifacts-tracker-server-six.vercel.app/artifacts/${id}`, updatedData);
      toast.success("Artifact updated successfully!");
      navigate("/myArtifacts");
    } catch {
      toast.error("Failed to update artifact");
    }
  };

  if (!artifact) return <Loading></Loading>;
    return (
         <div>
          <Navbar></Navbar>
          <div>
            <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded">
              <Helmet>
        <title>Update Artifacts | Historical Artifacts Tracker</title>
      </Helmet>
      <h2 className="text-3xl font-bold py-8 text-center">Update Artifact</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium">Artifact Name</label>
          <input type="text" name="name" value={artifact.name} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Artifact Image URL</label>
          <input type="url" name="imageUrl" value={artifact.imageUrl} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Artifact Type</label>
          <select name="type" value={artifact.type} onChange={handleChange} className="select select-bordered w-full" required>
            <option value="">Select type</option>
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Historical Context</label>
          <input type="text" name="historicalContext" value={artifact.historicalContext} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Created At</label>
          <input type="text" name="createdAt" value={artifact.createdAt} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Discovered At</label>
          <input type="text" name="discoveredAt" value={artifact.discoveredAt} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Discovered By</label>
          <input type="text" name="discoveredBy" value={artifact.discoveredBy} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Present Location</label>
          <input type="text" name="location" value={artifact.location} onChange={handleChange} className="input input-bordered w-full" required />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary text-white w-full mt-4">Update Artifact</button>
        </div>
      </form>
    </div>
          </div>
          <Footer></Footer>
         </div>
    );
};

export default UpdateArtifacts;