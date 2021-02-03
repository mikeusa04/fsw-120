import React from "react"
import Navbar from "./Navbar"
import "./header.css"

function Header() {
    return (
        <div>
           <navbar>
               <Navbar />
           </navbar>
           <h1 className="header" style={{fontSize: 50}}>Blog List</h1>
        </div>
    )
}

export default Header 