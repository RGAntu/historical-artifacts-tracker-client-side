import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { IoBookOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful!");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
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
    <div className="bg-secondary text-white  fixed top-0 left-0 w-full z-50">
      <div className="navbar  shadow-sm max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-secondary menu-sm dropdown-content bg-base-100  rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Logo></Logo>
          </div>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {!user ? (
            <Link to="/login" className="btn bg-primary border-0 text-white">
              Login
            </Link>
          ) : (
            <div className="relative">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
                src={
                  user.photoURL || "https://i.ibb.co/r4z1nBr/default-avatar.png"
                }
                alt="User"
                title={user.displayName || user.email}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-md z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm font-semibold">
                      {user.displayName || "User"}
                    </p>
                  </div>
                  <ul className="menu">
                    <li>
                      <Link to="/myArtifacts">
                        <IoBookOutline /> My Artifacts
                      </Link>
                    </li>
                    <li>
                      <Link to="/likedArtifacts">
                        <SlLike /> Liked Artifacts
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>
                        {" "}
                        <IoIosLogOut />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
