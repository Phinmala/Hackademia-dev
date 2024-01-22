import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css"

class Navbar extends Component {
    render() {
        return (
            // <div className="navbar">Dashboard</div>
            <ul className="navbar">
                <li><a href="dashboard">Dashboard</a></li>
                {/* <li><Link to={"/"}>Dashboard</Link></li> */}
                <li className="filler"></li>
                <li><a href="settings">Settings</a></li>
                <li className="rightbar"><a href="profile">Profile</a></li>
            </ul>
            // <div className="navbar">
            //     <li></li>
            // </div>
        )
    }
}

export default Navbar; 