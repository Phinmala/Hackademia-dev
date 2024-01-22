import React, { Component } from "react";

// import Pageframe from "../components/pageframe.component";
import "../components/pageframe.css"
import "./page.css"

class ProfilePage extends Component {
    render() {
        return (
            <header className="pageframe">
                <div className="rectangle-page-foreground">
                    <div className="subtitle">
                        My Profile
                    </div>
                    <div className="subtitle-bottom-line"></div>

                    <div className="module-tile-1">
                        Here it isn't. Use your imagination
                    </div>
                </div>                
            </header>
        )
    }
}

export default ProfilePage;