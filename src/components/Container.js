import React from 'react';
import Intro from './Intro';
import KeepActive from './KeepActive'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0
        };

        this.onIntroNext = this.onIntroNext.bind(this);
    }

    onIntroNext() {
        this.setState({
            currentSlide: 1
        })
    }

    render() {
        return (
            <div className="main-container">
                {
                    this.state.currentSlide === 0 &&
                    <Intro onIntroNext={this.onIntroNext}/>
                }
                {
                    this.state.currentSlide === 1 &&
                    <KeepActive />
                }
            </div>
        )
    }
}

export default Container;