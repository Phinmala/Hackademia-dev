import React, { Component } from "react";
import "./pageframe.css"

class Pageframe extends Component {
    render() {
        return (
            <header className="pageframe">
                <div className="rectangle-page-foreground">
                    <div className="subtitle">
                        My Modules
                    </div>
                    <div className="subtitle-bottom-line"></div>
                </div>                
            </header>
        )
    }
}

export default Pageframe; 