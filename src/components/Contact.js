import React, { Component } from 'react';
import lawcarePhone from "../images/lawcare-phone.jpg";

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <img src={lawcarePhone}
                     className="main-image"/>
                <p className="content-text">Call our free, independent, confidential Helpline on
                    <span className="red-text"> 0800 279 6888</span></p>
                <button className="previous-button">&#8249;</button>
                <button onClick={this.props.onContactNext}
                        className="next-button">&#8250;</button>
                </div>
        )
    }
}

export default Contact;