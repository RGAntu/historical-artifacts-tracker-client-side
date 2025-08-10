import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "./Logo/Logo";
import FooterLogo from "./Logo/FooterLogo";

const Footer = () => {
  return (
    <div className="bg-secondary text-white py-8">
      {/* main footer  */}
      <footer>
        <div className="footer sm:footer-horizontal p-4 max-w-7xl mx-auto">
          <aside>
            <div className="flex items-center gap-1">
              <FooterLogo></FooterLogo>
            </div>
            <p>
              Discover, explore, and preserve the <br /> treasures of human
              history. Join our <br /> community of history enthusiasts and{" "}
              <br />
              artifact collectors.
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Quick Links</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/allArtifacts" className="link link-hover">
              All Artifacts
            </Link>
            <Link to="/addArtifacts" className="link link-hover">
              Add Artifacts
            </Link>
            <Link to="/myArtifacts" className="link link-hover">
              My Artifacts
            </Link>
            <Link to="/likedArtifacts" className="link link-hover">
              Liked Artifacts
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

      <footer className="footer sm:footer-horizontal text-white max-w-7xl mx-auto items-center p-4 -space-y-5">
        <aside className="grid-flow-col items-center">
          <p className="text-base">
            {" "}
            © Historical Artifacts Tracker {new Date().getFullYear()} - All
            right reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link
            className="text-accent hover:text-primary"
            to="https://www.facebook.com/"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            className="text-accent hover:text-primary"
            to="https://www.instagram.com/"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            className="text-accent hover:text-primary"
            to="https://github.com/RGAntu"
          >
            <FaGithub size={24} />
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
