import React, { Component } from 'react';
import drinkInModeration from "../images/drink-moderation.jpg";

class DrinkInModeration extends Component {
    render() {
        return (
            <div className="drink-in-moderation-container">
                <img src={drinkInModeration}
                     className="main-image"/>
                <p className="bold-text">Drink In Moderation</p>
                <p className="content-text">Stay within the recommended alcohol limits: heavy drinking affects
                    brain function and can cause disease</p>
                <button onClick={this.props.onDrinkInModerationNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default DrinkInModeration;