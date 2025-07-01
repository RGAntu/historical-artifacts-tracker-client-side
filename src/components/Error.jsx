import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 text-center">
      <img
        src="https://i.ibb.co/LX4CL3yx/error.png"
        alt="404 Not Found"
        className="max-w-md sm:max-w-md "
      />
      <p className="mb-5 text-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary transition duration-300"
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
