import React, { Component } from 'react';
import eatWell from "../images/eat-well.jpg";

class EatWell extends Component {
    render() {
        return (
            <div className="eat-well-container">
                <img src={eatWell}
                     className="main-image"
                     alt="Eat Well"/>
                <p className="bold-text">Eat Well</p>
                <p className="content-text">A balanced diet rich in nutrients is good for both your mental and
                    physical health</p>
                <button className="previous-button"
                        onClick={this.props.onEatWellPrev}>&#8249;</button>
                <button onClick={this.props.onEatWellNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default EatWell;