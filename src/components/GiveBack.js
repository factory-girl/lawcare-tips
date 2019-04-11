import React, { Component } from 'react';
import giveBack from "../images/give-back.jpg";

class GiveBack extends Component {
    render() {
        return (
            <div className="give-back-container">
                <img src={giveBack}
                     className="main-image"/>
                <p className="bold-text">Give Back</p>
                <p className="content-text">It has been proven that giving - time or money - can make you feel valued
                    and give you a sense of purpose</p>
                <button onClick={this.props.onGiveBackNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default GiveBack;