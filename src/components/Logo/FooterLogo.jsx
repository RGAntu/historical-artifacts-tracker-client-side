import React from 'react';
import { Link } from 'react-router';

const FooterLogo = () => {
    return (
        <div>
            <Link to="/" className='flex items-center'>
            <img className="w-12 h-12 object-cover" src="https://i.ibb.co/XZdVQtrg/artifacts-logo.png" alt="Logo" />
            <span className="text-xl text-primary font-bold ">Historical Artifacts Tracker</span>
          </Link>
        </div>
    );
};

export default FooterLogo;