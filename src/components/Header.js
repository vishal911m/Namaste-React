import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    return(
        <div className="header">
            <a href="/">
            <img
                className="logo" 
                src={LOGO_URL}
                alt="logo"
            />
            </a>
            <ul className="nav-items">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li>Cart</li>
                <li><Link to={"/instamart"}>Instamart</Link></li>
            </ul>
            <h3>{isOnline ? "online" : "offline"}</h3>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>} 
        </div>
    );
};

export default Header;