import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import "./styles.css";

import Banner from "./components/banner.component";
// import "./components/banner.css"

class App extends Component {
    render() {
        return (
            <div>
                <Banner/>

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