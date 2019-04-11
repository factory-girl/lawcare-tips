import React, { Component } from 'react';
import beMindful from "../images/be-mindful.jpg";

class BeMindful extends Component {
    render() {
        return (
            <div className="be-mindful-container">
                <img src={beMindful}
                     className="main-image"/>
                <p className="bold-text">Be Mindful</p>
                <p className="content-text">Mindfulness - positive emotions and paying attention to the present -
                    can help you enjoy life more</p>
                <button onClick={this.props.onBeMindfulNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default BeMindful;