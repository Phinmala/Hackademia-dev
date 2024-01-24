import React from 'react';
import { Link } from "react-router-dom";
import './modulelist.css';

const ModuleList = () => {
  return (
    <div className="module-list-container">
        <Link to="/module-one" className="module-item">
            <div className="title">Module 1</div>
            <div className="description">Module 1 Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.</div>
        </Link>
        <Link to="/module-one" className="module-item">
            <div className="title">Module 2</div>
            <div className="description">Module 2 Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.</div>
        </Link>
    </div>
  );
};

export default ModuleList;
