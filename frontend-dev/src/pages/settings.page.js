import React, { Component } from "react";

// import Pageframe from "../components/pageframe.component";
import "../components/pageframe.css"
import "./page.css"

class SettingsPage extends Component {
    render() {
        return (
            <header className="pageframe">
                <div className="rectangle-page-foreground">
                    <div className="subtitle">
                        Settings
                    </div>
                    <div className="subtitle-bottom-line"></div>

                    <div className="module-tile-1">
                        Many options! Wow! Maybe a gear for good measure, too.
                    </div>
                </div>                
            </header>
        )
    }
}

export default SettingsPage;