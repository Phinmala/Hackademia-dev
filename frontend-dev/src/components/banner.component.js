import React, { Component } from "react";
import "./banner.css"; 
import { Link } from "react-router-dom";


class Banner extends Component {
    render() {
        return (
            <header className="banner">

                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zen+Dots|Source+Code+Pro"/>

                <div className="banner-edges-yellow-rectangle">
                    
                </div>
                <div className="banner-grey-rectangle">

                </div>
                <div className="banner-middle-line">

                </div>
                {/* <Link to={"/"}> 
                    <button className="hackademia-title">
                        Hackademia
                    </button>
                </Link> */}
                <div className="hackademia-title">
                    Hackademia
                </div>
                <div className="memory-icon">

                </div>
                <div className="banner-deco-line">

                </div>
                <div className="discover-learn-defend">
                    &lt;Discover&gt;<br/>&lt;Learn&gt;<br/>&lt;Defend&gt;
                </div>
                <div className="banner-deco-circle">

                </div>
                <div className="banner-deco-3-dots">
                    &#9679; &#9679; &#9679;
                </div>
            </header>
        )
    }
}

export default Banner;