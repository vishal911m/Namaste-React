import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

export default Header;