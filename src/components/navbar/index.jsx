import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;