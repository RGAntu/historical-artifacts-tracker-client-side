import React from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card  w-full max-w-md shrink-0 shadow-2xl py-5 border-1 border-accent">
          <h1 className="font-semibold text-2xl text-center">
            Sign Up to your Account
          </h1>
          <p className="text-sm text-center text mt-2">
            Join Historical Artifacts to explore and share ancient treasures
          </p>
          <form className="card-body">
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label text-sm font-medium text-secondary">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input w-full"
                required
                placeholder="Your Name"
              />
              {/* email  */}
              <label className="label text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input w-full"
                required
                placeholder="Your Email"
              />
              {/* photo url  */}
              <label className="label text-sm font-medium text-secondary">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                required
                placeholder="Your Photo"
              />
              {/* password */}
              <label className="label text-sm font-medium text-secondary">
                Password
              </label>
              <input
                type="password"
                className="input w-full"
                required
                name="password"
                placeholder="Your Password"
              />
              {/* signUp btn  */}
              <button
                type="submit"
                className="btn w-full btn-secondary hover:bg-primary border-none mt-4"
              >
                {" "}
                Sign Up
              </button>
              <div className="divider">OR</div>
              {/* Google btn  */}
              <button type="button" className="btn">
                {" "}
                <FcGoogle size={24} /> Continue with Google
              </button>

              <p className="font-semibold text-sm pt-5">
                Already have an account ?{" "}
                <Link className=" font-extrabold hover:underline" to="/login">
                  Login
                </Link>{" "}
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default SignUp;
