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
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
        </>
    )
}

export default Layout
