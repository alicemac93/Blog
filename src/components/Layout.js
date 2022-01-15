import React from 'react'
import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components';


function Layout() {

    const Nav = styled.ul`
        display: flex;
        flex-orientation: row;
        justify-content: space-between;
        list-style: none
    `
    return (
        <div style={{width: '80%', margin: '0 auto'}}>
        <nav style={{padding: '10px 0'}}>
            <Nav>
                <li>
                    <Link to="/">logo</Link>
                </li>
                <li>
                    <Link to="/articles-recent">Recent Articles</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/my-articles">My Articles</Link>
                </li>
                <li>
                    <Link to="/createarticle">Create Article</Link>
                </li>
            </Nav>
        </nav>
        <Outlet />
        </div>
    )
}

export default Layout
