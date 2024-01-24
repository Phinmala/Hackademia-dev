import React, { Component } from "react";

// import Pageframe from "../components/pageframe.component";
import "../components/pageframe.css"
import "./page.css"
import BufferOverflow from "../components/buffer.overflow.component";

class ModuleOne extends Component {
    render() {
        return (
            <header className="pageframe">
                <div className="rectangle-page-foreground">
                    <div className="subtitle">
                        Buffer Overflow
                    </div>
                    <div className="subtitle-bottom-line"></div>
                    <BufferOverflow/> 
                    
                </div>                
            </header>
        )
    }
}

export default ModuleOne; 