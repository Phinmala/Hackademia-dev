import React, { Component } from "react";

// import Pageframe from "../components/pageframe.component";
import "../components/pageframe.css"
import "./dashboard.css"

class DashboardPage extends Component {
    render() {
        return (
            <header className="pageframe">
                <div className="rectangle-page-foreground">
                    <div className="subtitle">
                        My Modules
                    </div>
                    <div className="subtitle-bottom-line"></div>

                    <div className="module-tile-1">
                        Module 1
                    </div>
                </div>                
            </header>
        )
    }
}

export default DashboardPage; 