import React, { Component } from 'react';
import keepInTouch from "../images/keep-in-touch.jpg";

class KeepInTouch extends Component {
    render() {
        return (
            <div className="keep-in-touch-container">
                <img src={keepInTouch}
                     className="main-image"/>
                <p className="bold-text">Keep in Touch</p>
                <p className="content-text">Maintain good relationships with friends, family and your wider
                    community: strong connections can help you to feel happier</p>
                <button className="previous-button"
                        onClick={this.props.onKeepInTouchPrev}>&#8249;</button>
                <button onClick={this.props.onKeepInTouchNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default KeepInTouch;