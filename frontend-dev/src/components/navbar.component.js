import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css"

import DashboardPage from "../pages/dashboard.page";

class Navbar extends Component {
    render() {
        return (
            // <div className="navbar">Dashboard</div>
            <div>
                <ul className="navbar">
                    {/* <li><a href="dashboard">Dashboard</a></li> */}
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li className="filler"></li>
                    <li><a href="settings">Settings</a></li>
                    <li className="rightbar"><a href="profile">Profile</a></li>
                </ul>
            
                <div className="container-Router">
                    <Routes>
                        <Route path="/dashboard" element={<DashboardPage/>} />
                        {/* <Route path="/settings" element={<SettingsPage/>} />
                        <Route path="/profile" element={<ProfilePage/>} /> */}
                    </Routes> 
                </div>
            </div>
        )
    }
}

export default Navbar; 