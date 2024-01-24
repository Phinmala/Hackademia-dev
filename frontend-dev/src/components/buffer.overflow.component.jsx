import React, { Component } from 'react';
import './bufferoverflow.css';

class BufferOverflow extends Component {
    render() {
        return (
            <div className="buffer-overflow">
                <h3 className='buffer-overflow-heading'>Heading</h3>
                <p className='buffer-overflow-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.</p>
                <div className="buffer-overflow-item-container">
                    <div className="buffer-overflow-item">Item 1</div>
                    <div className="buffer-overflow-item">Item 2</div>
                    <div className="buffer-overflow-item">Item 3</div>
                    <div className="buffer-overflow-item">Item 4</div>
                </div>
            </div>
        )
    }
}

export default BufferOverflow;