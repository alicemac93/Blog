import React from 'react'
import { Outlet } from "react-router-dom";
import Nav from '../components/AdminSide/Nav';


function Layout({ isLoggedIn }) {


    return (
        <>
            <Nav
                isLoggedIn={isLoggedIn} />
            {/* Outlet represents placeholder for the Router childern */}
            <div className="main-wrapper">
                <Outlet />
            </div>
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
        </>
    )
}

export default Layout
