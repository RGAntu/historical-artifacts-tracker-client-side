import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-8">
      {/* main footer  */}
      <footer>
        <div className="footer sm:footer-horizontal p-4 max-w-7xl mx-auto">
          <aside>
            <div className="flex items-center gap-1">
              <div>
                <Link to="/">
                  <img
                    className="w-12 h-12 block  md:block lg:block object-cover"
                    src="https://i.ibb.co/XZdVQtrg/artifacts-logo.png"
                    alt="historical-artifacts-tracker"
                  />
                </Link>
              </div>
              <div>
                <a className="text-xl text-white font-bold  md:block lg:block">
                  Historical Artifacts
                </a>
              </div>
            </div>
            <p>
              Discover, explore, and preserve the <br /> treasures of human
              history. Join our <br /> community of history enthusiasts and{" "}
              <br />
              artifact collectors.
            </p>
            <aside className="my-3">
              <div className="flex gap-3">
                <Link
                  className="text-accent hover:text-primary"
                  to="https://www.facebook.com/"
                >
                  <FaFacebook size={20} />
                </Link>
                <Link
                  className="text-accent hover:text-primary"
                  to="https://www.instagram.com/"
                >
                  <FaInstagram size={20} />
                </Link>
                <Link
                  className="text-accent hover:text-primary"
                  to="https://github.com/RGAntu"
                >
                  <FaGithub size={20} />
                </Link>
              </div>
            </aside>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/" className="link link-hover">
              All Artifacts
            </Link>
            <Link to="/" className="link link-hover">
              Add Artifacts
            </Link>
            <Link to="/" className="link link-hover">
              About Us
            </Link>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Categories</h6>
            <Link to="/" className="link link-hover">
              Ancient Tools
            </Link>
            <Link to="/" className="link link-hover">
              Historical Weapons
            </Link>
            <Link to="/" className="link link-hover">
              Ancient Documents
            </Link>
            <Link to="/" className="link link-hover">
              Art & Sculptures
            </Link>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>

      {/* divider  */}
      <div className="w-full bg-transparent">
        <div className="h-px bg-accent max-w-7xl mx-auto"></div>
      </div>

      {/* secondary footer  */}
      <footer>
        <div className="footer sm:footer-horizontal  p-4 max-w-7xl mx-auto">
          <aside className="grid-flow-col items-center">
            <p>
              {" "}
              © Historical Artifacts {new Date().getFullYear()} - All right
              reserved
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link to="/" className="link link-hover">
              Privacy Policy
            </Link>
            <Link to="/" className="link link-hover">
              Terms of Service
            </Link>
            <Link to="/" className="link link-hover">
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
