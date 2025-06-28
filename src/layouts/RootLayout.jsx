import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;