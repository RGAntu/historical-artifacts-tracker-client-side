import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
            <Link to="/" className='flex items-center'>
            <img className="w-12 h-12 hidden md:block object-cover" src="https://i.ibb.co/XZdVQtrg/artifacts-logo.png" alt="Logo" />
            <span className="text-2xl text-primary font-bold hidden md:block">Historical Artifacts Tracker</span>
          </Link>
        </div>
    );
};

export default Logo;