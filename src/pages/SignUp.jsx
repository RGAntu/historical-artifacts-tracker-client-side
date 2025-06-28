import React, { use, useState } from "react";
import Navbar from "../components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(createUser);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toast.success("Login Successfull!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed: " + error.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (/[A-Z]/.test(password)) {
      setPasswordError("Password must include an uppercase letter");
    }
    if (/[a-z]/.test(password)) {
      setPasswordError("Password must include an lowercase letter");
    }
    if (password.length >= 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
    console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, email: email, photoURL: photo })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              email: email,
              photoURL: photo,
            });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        toast.success("Sign Up Successfull!");
      })

      .catch((error) => {
        // console.error(error);
        toast.error("Sign Up failed: " + error.message);
      });
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <ToastContainer></ToastContainer>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card  w-full max-w-md shrink-0 shadow-2xl py-5 border-1 border-accent">
          <h1 className="font-semibold text-2xl text-center">
            Sign Up to your Account
          </h1>
          <p className="text-sm text-center text mt-2">
            Join Historical Artifacts to explore and share ancient treasures
          </p>
          <form onSubmit={handleSignUp} className="card-body">
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
              {passwordError && (
                <p className="text-red-400 text-xs">{passwordError}</p>
              )}
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
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn"
              >
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
