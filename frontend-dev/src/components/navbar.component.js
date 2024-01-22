import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css"

import DashboardPage from "../pages/dashboard.page";

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                    <li className="filler"></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
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