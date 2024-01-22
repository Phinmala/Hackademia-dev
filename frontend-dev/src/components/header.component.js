import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Banner from "./banner.component";
import Navbar from "./navbar.component";

import "./banner.css";
import "./navbar.css";

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Banner/>
                    <Navbar/>
                </div>
                <Outlet/>
            </div>
        )
    }
}

export default Header;