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
        <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-blue-100 md:bg-pink-50">
            <a href="/">
            <img
                className="h-28 py-2" 
                src={LOGO_URL}
                alt="logo"
            />
            </a>
            <ul className="flex py-10">
                <li className="px-2"><Link to={"/"}>Home</Link></li>
                <li className="px-2"><Link to={"/about"}>About</Link></li>
                <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
                <li className="px-2">Cart</li>
                <li className="px-2"><Link to={"/instamart"}>Instamart</Link></li>
            </ul>
            <h3 className="py-10">{isOnline ? "online" : "offline"}</h3>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>} 
        </div>
    );
};

export default Header;