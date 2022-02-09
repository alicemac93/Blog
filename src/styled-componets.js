import styled from 'styled-components';

export const Article = styled.div`
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
height: 310px;
margin: 10px;
padding: 10px;
width: 30%
    `

export const PublishButton = styled.button`
position: relative;
display: inline-block;
padding: 10px 40px;
background-color: #75c4db;
text-decoration: none;
color: #fff;
font-size: 20px;
font-weight: 100;
border-radius: 5px;
box-shadow: 0px 1px 4px -2px #333;
border: none;
margin: 10px;

&:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50%;
  border-radius: 5px;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2));
}
`

export const ListItem = styled.li`
    > * {
        text-decoration: none;
        color: #000;
    }

`

export const Navbar = styled.ul`
display: flex;
flex-orientation: row;
justify-content: space-between;
align-items: center;
list-style: none;
font-family: Montserrat;
padding-top: 10px;
max-width: 1400px;
margin: 0 auto;
`
