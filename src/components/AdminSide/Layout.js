import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from './Nav';


function Layout() {


    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <Nav />
            {/* Outlet represents placeholder for the Router childern */}
            <div className="main-wrapper">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
