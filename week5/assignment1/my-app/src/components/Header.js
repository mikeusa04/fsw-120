import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Header