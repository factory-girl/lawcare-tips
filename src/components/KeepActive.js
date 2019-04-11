import React, { Component } from 'react';
import keepActive from '../images/keep-active.jpg'

class KeepActive extends Component {
    render() {
        return (
            <div className="keepactive-container">
                <img src={keepActive}
                     className="main-image"/>
                <p className="bold-text">Look After Yourself</p>
                <p className="content-text">Find a physical activity you enjoy and make it part of your life, you
                    will feel better and boost your self-esteem</p>
                <button onClick={this.props.onKeepActiveNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default KeepActive;