import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import login from '../../images/account.png';
import { Navbar, ListItem } from '../../styled-componets';
import { useSelector } from "react-redux";
import { selectActiveUser } from "../../features/adminSide/users/UsersSlice";

const Nav = () => {
    const user = useSelector(selectActiveUser)
    const isLoggedIn = user ? true : false;

    return (
        <div className="nav-wrapper">
            <Navbar>
                <ListItem>
                    <Link to="/home"><img alt="logo" className="logo" src={logo} /></Link>
                </ListItem>
                <ListItem>
                    <Link to="/recent-articles">Recent Articles</Link> {/* user side */}
                </ListItem>
                <ListItem>
                    <Link to="/inspiration">Inspiration for today</Link>
                </ListItem>

                {isLoggedIn &&
                    <>
                        <ListItem>
                            <Link to="/my-articles">My Articles</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/createarticle">Create Article</Link>
                        </ListItem>
                    </>
                }
                <ListItem>
                    <Link to="/login"><img style={{ height: "30px" }} alt="login" src={login} /><p>{user}</p></Link>
                </ListItem>

            </Navbar>
        </div>
    )
}

export default Nav;
