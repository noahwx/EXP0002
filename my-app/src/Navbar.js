import { NavLink } from "react-router-dom";
import Logo from "./Logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/"><img src={Logo} className="navlogo" alt=""/></NavLink>
            <div className="navlinks">
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="/" className="navlink">Latest News</NavLink>
                <NavLink to="/" className="navlink">Trending News</NavLink>
                <NavLink to="/" className="navlink">Search</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;