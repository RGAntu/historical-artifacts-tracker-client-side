import React from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center bg-white items-center min-h-screen ">
        <div className="card w-full bg-[#F9FAFB] max-w-md shrink-0 shadow-2xl py-5 px-5 border-1 border-accent">
          <h1 className="font-semibold text-2xl text-center">
            Login to your account
          </h1>
          <p className="text-sm text-center text mt-2">
            Enter your email & password to access Historical Artifacts
          </p>
          <form className="card-body">
            <fieldset className="fieldset">
              {/* email  */}
              <label className="label text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="input w-full"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label text-sm font-medium text-secondary">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {/* login btn  */}
              <button
                type="submit"
                className="btn bg-secondary hover:bg-primary text-white mt-2"
              >
                Login
              </button>
              <div className="divider">OR</div>
              {/* google btn  */}
              <button type="button" className="btn text-secondary ">
                {" "}
                <FcGoogle size={24} />
                Continue with Google
              </button>
              <p className="font-semibold text-sm pt-5">
                Don't have an account ?{" "}
                <Link
                  className=" font-extrabold text-secondary hover:underline"
                  to="/signUp"
                >
                  SignUp
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

export default Login;
