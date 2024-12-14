import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
            </ul>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>} 
        </div>
    );
};

export default Header;