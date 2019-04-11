import React, { Component } from 'react';
import lawcareLogo from '../images/lawcare-logo.png'

class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <img src={lawcareLogo}
                    className="logo"/>
                <p className="bold-text">Look After Yourself</p>
                <p className="content-text">Top 10 Tips for Good Mental Health and Wellbeing</p>
                <button onClick={this.props.onIntroNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default Intro;