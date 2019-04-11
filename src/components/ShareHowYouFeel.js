import React, { Component } from 'react';
import shareHowYouFeel from "../images/share-how-you-feel.jpg";

class ShareHowYouFeel extends Component {
    render() {
        return (
            <div className="sleep-is-important-container">
                <img src={shareHowYouFeel}
                     className="main-image"/>
                <p className="bold-text">Share How You Feel</p>
                <p className="content-text">Talk about your feelings, it can help you cope with problems and feel
                    listened to</p>
            </div>
        )
    }
}

export default ShareHowYouFeel;