import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/addArtifacts">Add Artifacts</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Link to="/">
              <img
                className="w-12 h-12 hidden md:block lg:block object-cover"
                src="https://i.ibb.co/XZdVQtrg/artifacts-logo.png"
                alt="historical-artifacts-tracker"
              />
            </Link>
          </div>
          <div>
            <a className="text-3xl text-secondary font-bold hidden md:block lg:block">
              Historical Artifacts
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn bg-primary text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
