import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
    //API call to check authentication
    return true;
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items); // subscribe to the store
    console.log(cartItems);

    return(
        <div className="flex justify-between bg-yellow-100 shadow-lg sm:bg-blue-100 md:bg-pink-50">
            <a href="/">
            <img
                className="h-28 py-2"
                data-testid="logo" 
                src={Logo}
                alt="logo"
            />
            </a>
            {/* <ul className="flex py-10">
                <li className="px-2"><Link to={"/"}>Home</Link></li>
                <li className="px-2"><Link to={"/about"}>About</Link></li>
                <li className="px-2"><Link to={"/contact"}>Contact</Link></li>
                <li className="px-2"><Link to={"/instamart"}>Instamart</Link></li>
                <li className="px-2" data-testid="cart"><Link to={"/cart"}>Cart- {cartItems.length} items</Link></li>
            </ul> */}
            <ul className="flex py-10">
                <Link to={"/"}>
                  <li className="px-2">Home</li>
                </Link>
                <Link to={"/about"}>
                  <li className="px-2">About</li>
                </Link>
                <Link to={"/contact"}>
                  <li className="px-2">Contact</li>
                </Link>
                <Link to={"/instamart"}>
                  <li className="px-2">Instamart</li>
                </Link>
                <Link to={"/cart"}>
                  <li data-testid="cart" className="px-2">Cart- {cartItems.length} items</li>
                </Link>
            </ul>

            <h3 data-testid="online-status" className="py-10">{isOnline ? "online" : "offline"}</h3>
            <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : 
            <button onClick={() => setIsLoggedIn(true)}>Login</button>} 
        </div>
    );
};

export default Header;