import React from "react";
import {
  FaCalendarAlt,
  FaChartLine,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 w-full max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <FaCalendarAlt className="text-yellow-500 text-3xl mb-3" />
        <h2 className="text-2xl font-bold text-gray-800">6</h2>
        <p className="text-gray-500">Total Artifacts</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-white border border-gray-200  rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <FaMapMarkerAlt className="text-blue-500 text-3xl mb-3" />
        <h2 className="text-2xl font-bold text-gray-800">50+</h2>
        <p className="text-gray-500">Countries</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-white border border-gray-200  rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <FaUsers className="text-green-500 text-3xl mb-3" />
        <h2 className="text-2xl font-bold text-gray-800">1000+</h2>
        <p className="text-gray-500">Contributors</p>
      </div>

      <div className="flex flex-col items-center justify-center bg-white border border-gray-200  rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <FaChartLine className="text-purple-500 text-3xl mb-3" />
        <h2 className="text-2xl font-bold text-gray-800">5000+</h2>
        <p className="text-gray-500">Total Likes</p>
      </div>
    </div>
  );
};

export default StatsCards;
