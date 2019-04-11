import React, { Component } from 'react';
import takeABreak from '../images/take-a-break.jpg'

class TakeABreak extends Component {
    render() {
        return (
            <div className="take-a-break-container">
                <img src={takeABreak}
                     className="main-image"/>
                <p className="bold-text">Take a Break</p>
                <p className="content-text">Use your lunchbreak to get away from your desk. Step outside for just a few
                    minutes, it can re-energise you</p>
            </div>
        )
    }
}

export default TakeABreak;