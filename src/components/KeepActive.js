import React, { Component } from 'react';
import keepActive from '../images/keep-active.jpg'

class KeepActive extends Component {
    render() {
        return (
            <div className="keepactive-container">
                <img src={keepActive}
                     className="main-image"
                     alt="Keep Active"/>
                <p className="bold-text">Look After Yourself</p>
                <p className="content-text">Find a physical activity you enjoy and make it part of your life, you
                    will feel better and boost your self-esteem</p>
                <button className="previous-button"
                        onClick={this.props.onKeepActivePrev}>&#8249;</button>
                <button onClick={this.props.onKeepActiveNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default KeepActive;