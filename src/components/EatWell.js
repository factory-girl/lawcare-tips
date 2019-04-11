import React, { Component } from 'react';
import eatWell from "../images/eat-well.jpg";

class EatWell extends Component {
    render() {
        return (
            <div className="eat-well-container">
                <img src={eatWell}
                     className="main-image"/>
                <p className="bold-text">Eat Well</p>
                <p className="content-text">A balanced diet rich in nutrients is good for both your mental and
                    physical health</p>
                <button onClick={this.props.onEatWellNext}>Next</button>
            </div>
        )
    }
}

export default EatWell;