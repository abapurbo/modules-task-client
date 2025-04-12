import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
            <h1 className='text-center  py-5 text-2xl font-semibold bg-green-400'>User Management System</h1>

            </div>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;