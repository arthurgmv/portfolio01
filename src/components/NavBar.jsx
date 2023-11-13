import "./NavBarStyles.css";
import {Link} from "react-router-dom";
export default function NavBar () {

    return(
        <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )}