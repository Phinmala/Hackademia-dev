import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import "./styles.css";

// import Banner from "./components/banner.component";
// import Navbar from "./components/navbar.component";
// import Pageframe from "./components/pageframe.component";
import Header from "./components/header.component";
import DashboardPage from "./pages/dashboard.page";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <DashboardPage/>

                {/* <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<Banner/>} />
                    </Routes>
                </div> */}
            </div>      
        )
    }
}

export default App; 