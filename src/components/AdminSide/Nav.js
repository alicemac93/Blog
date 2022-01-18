import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const ListItem = styled.li`
    > * {
        text-decoration: none;
        color: #000;
    }

`

const Navbar = styled.ul`
display: flex;
flex-orientation: row;
justify-content: space-between;
align-items: center;
list-style: none;
font-family: Montserrat;
margin-top: 10px;
`

const Nav = () => {

    return (
        <Navbar>
            <ListItem>
                <Link to="/"><img alt="logo" src={logo} /></Link>
            </ListItem>
            <ListItem>
                <Link to="/inspiration">Inspiration for today</Link>
            </ListItem>
            <ListItem>
                <Link to="/my-articles">My Articles</Link>
            </ListItem>
            <ListItem>
                <Link to="/createarticle">Create Article</Link>
            </ListItem>
        </Navbar>
    )
}

export default Nav;
