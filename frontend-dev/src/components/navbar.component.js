import React, { Component } from "react";
import "./navbar.css"

class Navbar extends Component {
    render() {
        return (
            // <div className="navbar">Dashboard</div>
            <ul className="navbar">
                <li><a href="dashboard">Dashboard</a></li>
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