import React from "react"
import "./navbar.css"

function Navbar() {
    return (
        <navbar className="navbar">
            <a href="/home" className="navbar-item">Home</a>
            <a href="/about" className="navbar-item">About</a>
            <a href="/contact" className="navbar-item">Contact</a>
        </navbar>
    )
}

export default Navbar